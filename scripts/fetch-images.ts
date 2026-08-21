/**
 * Fetch + optimize clinic images from Unsplash / Pexels.
 *
 * Usage:
 *   1. Copy .env.local.example → .env.local and add API keys
 *   2. npm run fetch-images
 *
 * Without keys, the script uses curated Pexels CDN URLs that match each
 * IMAGE_MAP query (editorial / clinical — Direction A mood).
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

type ImageEntry = {
  query: string;
  filename: string;
  usedOn: string;
  maxWidth: number;
  /** Curated Pexels photo id fallback when APIs are unavailable */
  pexelsId?: number;
  /** Prefer keeping an existing client file if present */
  preferExisting?: string[];
};

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images");
const CREDITS = path.join(OUT_DIR, "CREDITS.md");

const IMAGE_MAP: ImageEntry[] = [
  {
    query: "chiropractor adjusting patient back pain",
    filename: "hero-adjustment.webp",
    usedOn: "Home hero",
    maxWidth: 1920,
    pexelsId: 5473182,
  },
  {
    query: "doctor patient consultation warm light",
    filename: "about-preview.webp",
    usedOn: "Home about-preview",
    maxWidth: 1200,
    pexelsId: 7579831,
  },
  {
    query: "physical therapy clinic interior modern",
    filename: "about-hero.webp",
    usedOn: "About page hero",
    maxWidth: 1920,
    pexelsId: 7578806,
  },
  {
    query: "chiropractic spinal adjustment treatment",
    filename: "chiropractic.webp",
    usedOn: "Chiropractic service page",
    maxWidth: 1200,
    pexelsId: 5473182,
  },
  {
    query: "swedish massage therapy back treatment",
    filename: "massage-therapy.webp",
    usedOn: "Massage service page",
    maxWidth: 1200,
    pexelsId: 3757942,
    preferExisting: ["massage-therapy.jpg"],
  },
  {
    query: "acupuncture needles back treatment closeup",
    filename: "acupuncture.webp",
    usedOn: "Acupuncture service page",
    maxWidth: 1200,
    pexelsId: 5473184,
  },
  {
    query: "person running sunset beach fitness",
    filename: "orthotics-lifestyle.webp",
    usedOn: "Orthotics service page",
    maxWidth: 1200,
    pexelsId: 863988,
  },
  {
    query: "foot orthotic insole medical",
    filename: "orthotics-product.webp",
    usedOn: "Orthotics service page (2nd image)",
    maxWidth: 1200,
    pexelsId: 4498606,
  },
  {
    query: "minor car collision street editorial",
    filename: "motor-vehicle-accident.webp",
    usedOn: "MVA page hero",
    maxWidth: 1920,
    pexelsId: 2244746,
  },
  {
    query: "professional male headshot business attire studio",
    filename: "dr-pascual-placeholder.webp",
    usedOn: "Doctors page (Dr. Pascual placeholder)",
    maxWidth: 600,
    pexelsId: 2379004,
  },
  {
    query: "wellness clinic waiting room calm",
    filename: "contact-visual.webp",
    usedOn: "Contact page",
    maxWidth: 1200,
    pexelsId: 4386466,
  },
  {
    query: "physiotherapy stretching exercise wellness",
    filename: "blog-1.webp",
    usedOn: "Blog index",
    maxWidth: 1200,
    pexelsId: 3822621,
  },
  {
    query: "physiotherapy stretching exercise mobility",
    filename: "blog-2.webp",
    usedOn: "Blog index",
    maxWidth: 1200,
    pexelsId: 4056535,
  },
  {
    query: "physiotherapy recovery exercise clinic",
    filename: "blog-3.webp",
    usedOn: "Blog index",
    maxWidth: 1200,
    pexelsId: 3768916,
  },
];

function loadEnvLocal() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (!m) continue;
    const key = m[1].trim();
    const val = m[2].trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

async function searchUnsplash(query: string, key: string) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape`;
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${key}` },
  });
  if (!res.ok) throw new Error(`Unsplash ${res.status}`);
  const data = (await res.json()) as {
    results: Array<{
      urls: { raw: string; full: string };
      user: { name: string; links: { html: string } };
      links: { html: string };
    }>;
  };
  const top = data.results[0];
  if (!top) throw new Error("No Unsplash results");
  return {
    downloadUrl: `${top.urls.raw}&w=2400&q=85&fm=jpg`,
    photographer: top.user.name,
    sourceUrl: top.links.html,
    source: "Unsplash" as const,
  };
}

async function searchPexels(query: string, key: string) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape`;
  const res = await fetch(url, { headers: { Authorization: key } });
  if (!res.ok) throw new Error(`Pexels ${res.status}`);
  const data = (await res.json()) as {
    photos: Array<{
      src: { large2x: string; original: string };
      photographer: string;
      url: string;
    }>;
  };
  const top = data.photos[0];
  if (!top) throw new Error("No Pexels results");
  return {
    downloadUrl: top.src.large2x || top.src.original,
    photographer: top.photographer,
    sourceUrl: top.url,
    source: "Pexels" as const,
  };
}

function curatedPexels(id: number) {
  return {
    downloadUrl: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2400`,
    photographer: `Pexels photo ${id}`,
    sourceUrl: `https://www.pexels.com/photo/${id}/`,
    source: "Pexels (curated)" as const,
  };
}

async function downloadBuffer(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function saveWebp(buf: Buffer, outPath: string, maxWidth: number) {
  await sharp(buf)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);
}

async function main() {
  loadEnvLocal();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  const pexelsKey = process.env.PEXELS_API_KEY;

  const credits: string[] = [
    "# Image Credits",
    "",
    "License-free stock from Unsplash / Pexels. Attribution is optional under their licenses but recorded here for the client.",
    "",
    "| Filename | Used on | Photographer | Source |",
    "|---|---|---|---|",
  ];

  const summary: Array<{
    filename: string;
    usedOn: string;
    credit: string;
  }> = [];

  console.log(
    unsplashKey || pexelsKey
      ? "Using API keys from .env.local"
      : "No API keys found — using curated Pexels CDN fallbacks (add keys for live search)."
  );

  for (const entry of IMAGE_MAP) {
    const outPath = path.join(OUT_DIR, entry.filename);

    if (entry.preferExisting) {
      let usedLocal = false;
      for (const existing of entry.preferExisting) {
        const existingPath = path.join(OUT_DIR, existing);
        if (fs.existsSync(existingPath)) {
          const buf = fs.readFileSync(existingPath);
          await saveWebp(buf, outPath, entry.maxWidth);
          const credit = `Client upload (${existing})`;
          credits.push(
            `| ${entry.filename} | ${entry.usedOn} | ${credit} | Local |`
          );
          summary.push({
            filename: entry.filename,
            usedOn: entry.usedOn,
            credit,
          });
          console.log(`✓ ${entry.filename} ← local ${existing}`);
          usedLocal = true;
          break;
        }
      }
      if (usedLocal) continue;
    }

    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 20000) {
      // still refresh via network for redesign pass
    }

    let meta:
      | {
          downloadUrl: string;
          photographer: string;
          sourceUrl: string;
          source: string;
        }
      | undefined;

    try {
      if (unsplashKey) meta = await searchUnsplash(entry.query, unsplashKey);
      else if (pexelsKey) meta = await searchPexels(entry.query, pexelsKey);
    } catch (err) {
      console.warn(`API search failed for "${entry.query}":`, err);
    }

    if (!meta && entry.pexelsId) {
      meta = curatedPexels(entry.pexelsId);
    }

    if (!meta) {
      console.error(`✗ No source for ${entry.filename}`);
      continue;
    }

    try {
      const buf = await downloadBuffer(meta.downloadUrl);
      await saveWebp(buf, outPath, entry.maxWidth);
      credits.push(
        `| ${entry.filename} | ${entry.usedOn} | ${meta.photographer} | [${meta.source}](${meta.sourceUrl}) |`
      );
      summary.push({
        filename: entry.filename,
        usedOn: entry.usedOn,
        credit: `${meta.photographer} · ${meta.source}`,
      });
      console.log(`✓ ${entry.filename} ← ${meta.source}`);
    } catch (err) {
      console.error(`✗ Failed ${entry.filename}:`, err);
    }
  }

  fs.writeFileSync(CREDITS, credits.join("\n") + "\n", "utf8");

  console.log("\n=== Summary ===");
  console.log(
    "filename".padEnd(36) + "used on".padEnd(36) + "credit"
  );
  console.log("-".repeat(100));
  for (const row of summary) {
    console.log(
      row.filename.padEnd(36) + row.usedOn.padEnd(36) + row.credit
    );
  }
  console.log(`\nCredits written to ${CREDITS}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
