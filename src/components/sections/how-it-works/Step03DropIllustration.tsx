/**
 * Hand-drawn style illustration for Step 03 "Drop"
 * Features two open hands holding a wrapped gift with bow
 * Heart and sparkle accents in muted rose tones
 */
export const Step03DropIllustration = () => {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[140px]"
      aria-hidden="true"
    >
      {/* Soft background blob - blush watercolor style */}
      <ellipse
        cx="60"
        cy="52"
        rx="48"
        ry="38"
        fill="hsl(344 35% 42% / 0.06)"
      />

      {/* Left hand - open palm, hand-drawn style */}
      <g transform="translate(18, 38)">
        {/* Palm */}
        <path
          d="M22 28C22 28 24 20 22 14C20 8 18 4 14 4C10 4 8 8 10 14C8 10 4 6 2 8C0 10 2 16 6 20C4 18 0 16 -1 18C-2 20 2 26 8 30L22 28Z"
          fill="hsl(38 45% 88%)"
          stroke="hsl(344 35% 42% / 0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Thumb */}
        <path
          d="M22 28C24 26 28 24 28 20C28 16 26 16 24 18C22 20 22 24 22 28Z"
          fill="hsl(38 45% 88%)"
          stroke="hsl(344 35% 42% / 0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Palm lines - subtle */}
        <path
          d="M10 20C12 18 16 18 20 20"
          stroke="hsl(344 35% 42% / 0.15)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Right hand - open palm, mirrored */}
      <g transform="translate(102, 38) scale(-1, 1)">
        {/* Palm */}
        <path
          d="M22 28C22 28 24 20 22 14C20 8 18 4 14 4C10 4 8 8 10 14C8 10 4 6 2 8C0 10 2 16 6 20C4 18 0 16 -1 18C-2 20 2 26 8 30L22 28Z"
          fill="hsl(38 45% 88%)"
          stroke="hsl(344 35% 42% / 0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Thumb */}
        <path
          d="M22 28C24 26 28 24 28 20C28 16 26 16 24 18C22 20 22 24 22 28Z"
          fill="hsl(38 45% 88%)"
          stroke="hsl(344 35% 42% / 0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Palm lines - subtle */}
        <path
          d="M10 20C12 18 16 18 20 20"
          stroke="hsl(344 35% 42% / 0.15)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Gift box - centered between hands */}
      <g transform="translate(42, 32)">
        {/* Box body */}
        <rect
          x="0"
          y="14"
          width="36"
          height="28"
          rx="2.5"
          fill="hsl(344 35% 68%)"
          stroke="hsl(344 35% 50% / 0.6)"
          strokeWidth="1.2"
        />
        {/* Box lid */}
        <rect
          x="-2"
          y="8"
          width="40"
          height="8"
          rx="2"
          fill="hsl(344 35% 62%)"
          stroke="hsl(344 35% 50% / 0.6)"
          strokeWidth="1.2"
        />
        {/* Vertical ribbon */}
        <rect
          x="15"
          y="8"
          width="6"
          height="34"
          fill="hsl(38 60% 75%)"
        />
        {/* Horizontal ribbon */}
        <rect
          x="-2"
          y="24"
          width="40"
          height="6"
          fill="hsl(38 60% 75%)"
        />
        {/* Bow - left loop */}
        <ellipse
          cx="10"
          cy="6"
          rx="8"
          ry="5.5"
          fill="hsl(38 60% 75%)"
          stroke="hsl(38 50% 55% / 0.5)"
          strokeWidth="1"
        />
        {/* Bow - right loop */}
        <ellipse
          cx="26"
          cy="6"
          rx="8"
          ry="5.5"
          fill="hsl(38 60% 75%)"
          stroke="hsl(38 50% 55% / 0.5)"
          strokeWidth="1"
        />
        {/* Bow - center knot */}
        <circle
          cx="18"
          cy="8"
          r="4"
          fill="hsl(38 65% 70%)"
          stroke="hsl(38 50% 55% / 0.4)"
          strokeWidth="0.8"
        />
        {/* Bow - ribbon tails */}
        <path
          d="M14 10C12 14 10 16 8 20"
          stroke="hsl(38 60% 70%)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 10C24 14 26 16 28 20"
          stroke="hsl(38 60% 70%)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Decorative hearts */}
      {/* Heart - top left */}
      <g transform="translate(22, 18)">
        <path
          d="M5 2C3.5 0 1 0.5 0.5 2.5C0 4.5 2 6.5 5 9C8 6.5 10 4.5 9.5 2.5C9 0.5 6.5 0 5 2Z"
          fill="hsl(344 45% 65% / 0.5)"
          stroke="hsl(344 35% 50% / 0.3)"
          strokeWidth="0.6"
        />
      </g>

      {/* Heart - top right */}
      <g transform="translate(90, 22)">
        <path
          d="M4 1.5C2.8 0 0.8 0.4 0.4 2C0 3.6 1.6 5.2 4 7.2C6.4 5.2 8 3.6 7.6 2C7.2 0.4 5.2 0 4 1.5Z"
          fill="hsl(344 45% 65% / 0.45)"
          stroke="hsl(344 35% 50% / 0.25)"
          strokeWidth="0.5"
        />
      </g>

      {/* Sparkle accents */}
      {/* Sparkle - left side */}
      <g transform="translate(14, 50)">
        <path
          d="M3 0L3.5 2.5L6 3L3.5 3.5L3 6L2.5 3.5L0 3L2.5 2.5L3 0Z"
          fill="hsl(38 60% 70% / 0.7)"
        />
      </g>

      {/* Sparkle - right side */}
      <g transform="translate(100, 45)">
        <path
          d="M2.5 0L3 2L5 2.5L3 3L2.5 5L2 3L0 2.5L2 2L2.5 0Z"
          fill="hsl(38 60% 70% / 0.6)"
        />
      </g>

      {/* Small dots/sparkles for additional warmth */}
      <circle cx="30" cy="75" r="1.5" fill="hsl(344 35% 55% / 0.3)" />
      <circle cx="95" cy="70" r="1.2" fill="hsl(344 35% 55% / 0.25)" />
      <circle cx="18" cy="32" r="1" fill="hsl(38 60% 70% / 0.5)" />
      <circle cx="104" cy="35" r="1.2" fill="hsl(38 60% 70% / 0.5)" />

      {/* Additional tiny hearts for whimsy */}
      <g transform="translate(35, 12) scale(0.5)">
        <path
          d="M4 1.5C2.8 0 0.8 0.4 0.4 2C0 3.6 1.6 5.2 4 7.2C6.4 5.2 8 3.6 7.6 2C7.2 0.4 5.2 0 4 1.5Z"
          fill="hsl(344 45% 65% / 0.35)"
        />
      </g>

      <g transform="translate(82, 14) scale(0.6)">
        <path
          d="M4 1.5C2.8 0 0.8 0.4 0.4 2C0 3.6 1.6 5.2 4 7.2C6.4 5.2 8 3.6 7.6 2C7.2 0.4 5.2 0 4 1.5Z"
          fill="hsl(344 45% 65% / 0.3)"
        />
      </g>
    </svg>
  );
};
