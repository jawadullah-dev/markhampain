"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const JAGGED =
  "M 40 8 C 40 40, 18 70, 40 110 C 62 150, 22 190, 40 230 C 58 270, 20 310, 40 350 C 60 390, 24 430, 40 472";
const ALIGNED =
  "M 40 8 C 40 40, 40 70, 40 110 C 40 150, 40 190, 40 230 C 40 270, 40 310, 40 350 C 40 390, 40 430, 40 472";

const MARKERS = [
  { y: 60, xJ: 28 },
  { y: 140, xJ: 52 },
  { y: 220, xJ: 28 },
  { y: 300, xJ: 52 },
  { y: 380, xJ: 28 },
];

type SpinePathsProps = {
  stroke?: string;
  progress: MotionValue<number> | number;
};

function SpinePaths({ stroke = "#FF6B4A", progress }: SpinePathsProps) {
  const isMotion = typeof progress !== "number";

  if (!isMotion) {
    const t = Math.min(1, Math.max(0, progress));
    return (
      <>
        <path
          d={JAGGED}
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={1 - t}
        />
        <path
          d={ALIGNED}
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={t}
        />
        {MARKERS.map(({ y, xJ }) => {
          const x = xJ + (40 - xJ) * t;
          return (
            <circle key={y} cx={x} cy={y} r="3.5" fill={stroke} opacity={0.9} />
          );
        })}
      </>
    );
  }

  return <AnimatedSpinePaths stroke={stroke} progress={progress} />;
}

function AnimatedSpinePaths({
  stroke,
  progress,
}: {
  stroke: string;
  progress: MotionValue<number>;
}) {
  const jaggedOpacity = useTransform(progress, [0, 1], [1, 0]);
  const alignedOpacity = useTransform(progress, [0, 1], [0, 1]);

  return (
    <>
      <motion.path
        d={JAGGED}
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ opacity: jaggedOpacity }}
      />
      <motion.path
        d={ALIGNED}
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ opacity: alignedOpacity }}
      />
      {MARKERS.map(({ y, xJ }) => (
        <AnimatedMarker
          key={y}
          y={y}
          xJ={xJ}
          stroke={stroke}
          progress={progress}
        />
      ))}
    </>
  );
}

function AnimatedMarker({
  y,
  xJ,
  stroke,
  progress,
}: {
  y: number;
  xJ: number;
  stroke: string;
  progress: MotionValue<number>;
}) {
  const cx = useTransform(progress, [0, 1], [xJ, 40]);
  return <motion.circle cy={y} r="3.5" fill={stroke} style={{ cx, opacity: 0.9 }} />;
}

type SpineLineProps = {
  progress?: number;
  className?: string;
  stroke?: string;
};

/** Static / progress-controlled spine (hero). */
export function SpineLine({
  progress = 0,
  className = "",
  stroke = "#FF6B4A",
}: SpineLineProps) {
  return (
    <svg
      viewBox="0 0 80 480"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <SpinePaths stroke={stroke} progress={progress} />
    </svg>
  );
}

/** Fixed right-edge scroll progress spine for homepage. */
export function SpineScrollIndicator() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const tipScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.35]);

  return (
    <div
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden h-[55vh] w-10 -translate-y-1/2 lg:block xl:right-6"
      aria-hidden="true"
    >
      <svg viewBox="0 0 80 480" fill="none" className="h-full w-full">
        <SpinePaths
          stroke="#FF6B4A"
          progress={reduceMotion ? 1 : scrollYProgress}
        />
      </svg>
      {!reduceMotion && (
        <motion.div
          className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-coral"
          style={{ scale: tipScale }}
        />
      )}
    </div>
  );
}
