import type {
  BlogPost,
  Doctor,
  FaqItem,
  NavLink,
  ServicePage,
  ServiceSummary,
  Testimonial,
} from "@/types";

export const clinic = {
  name: "Markham Pain and Chiropractic Clinic",
  shortName: "Markham Pain Clinic",
  address: "8312 McCowan Rd Suite #206, Markham, ON L3P 8E1",
  addressLines: ["8312 McCowan Rd Suite #206", "Markham, ON L3P 8E1"],
  phone: "905 470-2626",
  phoneHref: "tel:+19054702626",
  email: "reception@markhampain.com",
  emailHref: "mailto:reception@markhampain.com",
  map: {
    lat: 43.8648615,
    lng: -79.2847974,
    embedUrl:
      "https://maps.google.com/maps?q=8312+McCowan+Rd+%23206,+Unionville,+ON+L3P+8E1&z=15&output=embed",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  foundedYear: 1999,
  massageHours: "By appointment only",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/doctors" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Motor Vehicle Accidents", href: "/motor-vehicle-accidents" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const servicesOverview: ServiceSummary[] = [
  {
    slug: "chiropractic",
    title: "Chiropractic Care",
    shortDescription:
      "Drug-free, hands-on treatment for back pain, headaches, neck pain and joint dysfunction.",
    href: "/services/chiropractic",
    icon: "chiropractic",
  },
  {
    slug: "massage-therapy",
    title: "Massage Therapy",
    shortDescription:
      "Swedish massage techniques to relieve tension, improve circulation and support recovery.",
    href: "/services/massage-therapy",
    icon: "massage",
  },
  {
    slug: "acupuncture",
    title: "Acupuncture",
    shortDescription:
      "Traditional Chinese medicine to reduce pain, inflammation and restore nerve function.",
    href: "/services/acupuncture",
    icon: "acupuncture",
  },
  {
    slug: "orthotics",
    title: "Custom Orthotics",
    shortDescription:
      "Biomechanical support custom-fitted with GaitScan technology to correct foot imbalance.",
    href: "/services/orthotics",
    icon: "orthotics",
  },
];

export const trustBadges = [
  "Direct Billing Available",
  "No Referral Needed",
  "25+ Years Combined Experience",
] as const;

export const whyChooseUs = [
  {
    title: "Personalized Treatment Plans",
    description:
      "Every care plan is tailored to your goals, lifestyle, and the root cause of your pain.",
  },
  {
    title: "No Referral Needed",
    description:
      "Book directly with our doctors or massage therapists — no gatekeeping, no wait for paperwork.",
  },
  {
    title: "Direct Insurance Billing",
    description:
      "We help streamline insurance paperwork so you can focus on getting better.",
  },
  {
    title: "Motor Vehicle Accident Care",
    description:
      "Comprehensive assessment and treatment after an accident, with insurance coordination handled in-clinic.",
  },
] as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Am really pleased with the staff and especially Dr. Fujimagari's plan on treatments. A very welcoming office, and tranquil treatment rooms.",
    author: "P. Archer",
    initials: "PA",
  },
  {
    quote:
      "I've been a patient at the Markham Pain Clinic, and can honestly say I've never been treated better. I've been given a plan of action to help treat my ailing back, and things are improving nicely.",
    author: "B. Warner",
    initials: "BW",
  },
  {
    quote:
      "I've been a patient of Dr. Pascual for many years now. Whenever I need a treatment, Dr. James looks after my ailments.",
    author: "N. Perron",
    initials: "NP",
  },
];

export const doctors: Doctor[] = [
  {
    id: "pascual",
    name: "Dr. James Pascual",
    credentials: "B.Sc., D.C.",
    image: "/images/dr-pascual.jpg",
    imageAlt: "Placeholder portrait for Dr. James Pascual — awaiting client photo",
    // TODO: replace with real Dr. Pascual headshot from client
    useInitialsPlaceholder: true,
    bio: "With over 25 years of experience, Dr. Pascual offers a comprehensive approach to care that combines chiropractic and acupuncture to effectively treat a wide range of neuromusculoskeletal conditions, including low back pain, sciatica, neck and mid-back pain, headaches and joint issues affecting the shoulders and knees. Dr. Pascual also has extensive experience in sports injury management.",
    hours: [
      { day: "Monday", hours: "8:30am–12pm, 2:00pm–5pm" },
      { day: "Tuesday", hours: "2:00pm–5pm" },
      { day: "Wednesday", hours: "Off" },
      { day: "Thursday", hours: "8:30am–12pm, 2:00pm–5pm" },
      { day: "Friday", hours: "Off" },
      { day: "Saturday", hours: "8:30am–12pm" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  {
    id: "fujimagari",
    name: "Dr. John Fujimagari",
    credentials: "B.Sc., D.C.",
    image: "/images/dr-fujimagari.jpg",
    imageAlt: "Dr. John Fujimagari, chiropractor at Markham Pain Clinic",
    // TODO: client will refine Dr. Fujimagari's bio copy
    bio: "Dr. Fujimagari brings a calm, patient-first approach to chiropractic care, taking time to listen and craft treatment plans that fit each person's needs. He focuses on restoring comfortable movement and helping patients return to the activities that matter most — with clear guidance every step of the way.",
    bioTodo: true,
    hours: [
      { day: "Monday", hours: "8:30am–12pm, 2:00pm–5pm" },
      { day: "Tuesday", hours: "Off" },
      { day: "Wednesday", hours: "8:30am–12pm" },
      { day: "Thursday", hours: "2:00pm–5pm" },
      { day: "Friday", hours: "8:00am–12pm" },
      { day: "Saturday", hours: "Off" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "chiropractic",
    title: "Chiropractic Care",
    metaDescription:
      "Drug-free chiropractic care in Markham for back pain, headaches, neck pain, sciatica and joint dysfunction.",
    image: "/images/chiropractic.webp",
    imageAlt:
      "Chiropractor performing a spinal adjustment on a patient lying face down",
    intro:
      "Chiropractic is a health care profession that focuses on disorders of the musculoskeletal and nervous system and the effects of these disorders on general health. Doctors of chiropractic practice a drug-free, hands-on approach to health care that includes patient examination, diagnosis and treatment.",
    body: "The most common therapeutic procedure performed by chiropractors is spinal manipulation, which restores joint mobility by manually applying a controlled force into joints that have become restricted in their movement. Besides adjustments, chiropractors use other modalities such as acupuncture, ultrasound, TENS, or soft tissue work. For spinal disc problems with radiating leg pain (sciatica), spinal decompression therapy may also be used.",
    helpsWith: [
      "Low back pain",
      "Headaches and migraines / mid-back pain",
      "Neck pain",
      "Whiplash and other motor vehicle accident injuries",
      "Jaw problems",
      "Any other joint dysfunction",
    ],
    imageLeft: true,
  },
  {
    slug: "massage-therapy",
    title: "Massage Therapy",
    metaDescription:
      "Swedish massage therapy in Markham to relieve tension, improve circulation and support recovery from pain and injury.",
    image: "/images/massage-therapy.webp",
    imageAlt:
      "Patient receiving a professional Swedish massage on the upper back",
    intro:
      "Massage Therapy is a healing art involving a range of techniques to manipulate the soft tissues — used to prevent, develop, maintain, rehabilitate or augment physical function and relieve pain from stress, muscular overuse and chronic pain syndromes.",
    body: "Our therapists use Swedish massage — long, smooth strokes, kneading and other movements focused on the superficial layers of muscle. Massage improves circulation, relieves tension and pain, increases flexibility and mobility, and helps clear lactic acid and other waste from the muscles and joints.",
    helpsWith: [
      "Back pain",
      "Inflammatory conditions (arthritis, tendinitis)",
      "Stress relief",
      "Headaches and migraines",
      "Muscle spasms, strains and sprains",
      "Repetitive strain injury (carpal tunnel)",
      "Circulatory and respiratory issues",
      "Post-injury / post-surgical rehabilitation",
    ],
    imageLeft: false,
  },
  {
    slug: "acupuncture",
    title: "Acupuncture",
    metaDescription:
      "Acupuncture in Markham to reduce pain and inflammation, restore nerve function, and support natural healing.",
    image: "/images/acupuncture.webp",
    imageAlt: "Close-up of an acupuncture needle being placed on a patient's lower back",
    intro:
      "Acupuncture is an ancient form of Chinese medicine involving the insertion of fine needles into the skin at specific points on the body to produce a therapeutic effect. There are no drugs involved — the needles alone create the beneficial effects.",
    body: "Acupuncture encourages natural healing, reduces or relieves pain and improves function of affected areas by decreasing inflammation and muscle spasm, releasing endorphins, and restoring proper nerve function. For those nervous about needles, laser acupuncture — using light and electrical stimulation — can achieve similar effects.",
    helpsWith: [
      "Allergic rhinitis (sinusitis)",
      "Depression and anxiety",
      "Facial pain",
      "Malposition of fetus (breech)",
      "Nausea",
      "Neck pain",
      "Low back pain and sciatica",
      "Tennis elbow and joint pain",
    ],
    imageLeft: true,
  },
  {
    slug: "orthotics",
    title: "Custom Orthotics",
    metaDescription:
      "Custom orthotics in Markham fitted with GaitScan technology to correct foot imbalance and reduce strain.",
    image: "/images/orthotics-lifestyle.webp",
    imageAlt: "Active person running along the beach at sunset",
    secondaryImage: "/images/orthotics-product.webp",
    secondaryImageAlt:
      "Custom foot orthotic insole designed for biomechanical support",
    intro:
      "A custom orthotic is a device designed to align the foot and ankle into the most anatomically efficient position. They look like insoles but are biomechanical medical appliances custom-made to correct your specific foot imbalance.",
    body: "Custom orthotics work on your feet much like glasses work on your eyes — reducing stress and strain on your body by bringing your feet back into proper alignment. After a thorough history and examination, patients are cast using the GaitScan™ — an innovative diagnostic tool with 4096 sensors and a 300 frames/second scan rate that analyzes patient biomechanics.",
    helpsWith: [
      "Low back and hip pain",
      "Knee pain",
      "Ankle pain",
      "Arch pain (plantar fasciitis)",
      "Heel pain (heel spurs)",
      "Foot pain",
      "Postural problems",
    ],
    imageLeft: false,
  },
];

export const faqs: FaqItem[] = [
  {
    question:
      "Do I need a referral to come see one of the doctors or a massage therapist?",
    answer:
      "A referral is not needed to see one of the doctors or a massage therapist, however some extended health insurance plans require a medical doctor referral in order to be reimbursed.",
  },
  {
    question: "Where can I get my corporate kit or corporate seal?",
    answer:
      "Unfortunately, insurance companies have not allowed us to direct bill for their clients. After each treatment and after the fee has been paid, an itemized statement will be provided to you which you can submit to your insurance company.",
  },
  {
    question: "What type of payment do you accept?",
    answer: "We accept cash, cheques, debit and all credit cards.",
  },
  {
    question: "Do acupuncture needles hurt?",
    answer:
      "Acupuncture needles are much thinner than normal hypodermic needles that you would receive from your medical doctor. Most patients who have had acupuncture note that most times they don't feel anything, or feel only a little pinch.",
  },
  {
    question: "Is there danger of infection with acupuncture needles?",
    answer:
      "We use single-use sterilized acupuncture needles. There are no worries about infection.",
  },
  // TODO client-confirm
  {
    question: "How do I book an appointment?",
    answer:
      "You can call us at 905 470-2626, email reception@markhampain.com, or use the contact form on our website. Our team will help you find a time that works with your schedule.",
    clientConfirm: true,
  },
  // TODO client-confirm
  {
    question: "What is your cancellation policy?",
    answer:
      "We kindly ask for at least 24 hours' notice if you need to cancel or reschedule. This helps us offer your appointment time to another patient who may be waiting.",
    clientConfirm: true,
  },
];

// TODO: replace with real CMS-driven content once client provides posts.
export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-you-might-need-a-chiropractor",
    title: "5 Signs You Might Need a Chiropractor",
    excerpt:
      "From lingering back stiffness to recurring headaches, learn the everyday clues that it may be time to book a chiropractic assessment.",
    date: "2025-03-12",
    image: "/images/blog-1.webp",
    imageAlt: "Physiotherapy stretching exercise for wellness and mobility",
  },
  {
    slug: "how-acupuncture-complements-chiropractic-care",
    title: "How Acupuncture Complements Chiropractic Care",
    excerpt:
      "Discover how pairing acupuncture with chiropractic adjustments can support pain relief, reduce inflammation, and speed recovery.",
    date: "2025-04-02",
    image: "/images/blog-2.webp",
    imageAlt: "Guided stretching and recovery exercise in a wellness setting",
  },
  {
    slug: "recovering-from-a-motor-vehicle-accident",
    title: "Recovering From a Motor Vehicle Accident: What to Expect",
    excerpt:
      "A practical overview of common post-accident injuries and how timely chiropractic and massage care can support a healthier recovery.",
    date: "2025-05-18",
    image: "/images/blog-3.webp",
    imageAlt: "Therapeutic exercise supporting recovery after injury",
  },
];

export const aboutApproach = [
  {
    title: "Personalized Care",
    description:
      "We take time to understand your history, goals, and daily demands so your treatment plan fits you — not a one-size-fits-all protocol.",
  },
  {
    title: "Evidence-Informed Treatment",
    description:
      "Our chiropractic, acupuncture, and massage approaches draw on proven techniques that restore mobility and address the source of discomfort.",
  },
  {
    title: "Long-Term Relief",
    description:
      "Beyond easing today's symptoms, we help you build lasting habits and function so you can stay active with confidence.",
  },
] as const;

export const mvaContent = {
  intro:
    "In the instance of a motor vehicle accident, the priority often becomes repairing the damaged vehicle — while minor injuries to the body get ignored. Left untreated, these minor injuries can become chronic and lead to serious pain syndromes in the future.",
  body: "Although whiplash is the most common injury sustained in a motor vehicle accident, it's not uncommon for other injuries to occur.",
  symptoms: [
    "Low back pain",
    "Shoulder pain",
    "Jaw pain and clicking",
    "Headaches",
    "Numbness or tingling in the arms or legs",
    "Ringing in the ears",
    "Loss of range of motion",
    "Painful joints",
    "Tension",
  ],
  closing:
    "Proper management and treatment of these problems immediately and effectively ensures a healthy, pain-free recovery. Markham Pain Clinic combines chiropractic, acupuncture, physiologic modalities, massage therapy and rehabilitation to help motor vehicle accident victims return to their pre-accident status. Billing to your extended health plan and motor vehicle insurance is handled directly through the clinic — a complete case history, accident analysis and physical examination are performed, and a personalized treatment plan is tailored to your injuries.",
} as const;

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
