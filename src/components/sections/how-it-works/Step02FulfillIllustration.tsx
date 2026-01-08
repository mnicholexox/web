/**
 * Hand-drawn style illustration for Step 02 "Fulfill"
 * Features a clipboard with wishlist and child-friendly elements
 * (teddy bear, pencil, gift) in muted rose tones
 */
export const Step02FulfillIllustration = () => {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[140px]"
      aria-hidden="true"
    >
      {/* Soft background blob */}
      <ellipse
        cx="60"
        cy="52"
        rx="48"
        ry="38"
        fill="hsl(344 35% 42% / 0.06)"
      />

      {/* Clipboard body - hand-drawn style */}
      <path
        d="M42 24C42 22 44 20 46 20H74C76 20 78 22 78 24V82C78 84 76 86 74 86H46C44 86 42 84 42 82V24Z"
        fill="hsl(38 52% 95%)"
        stroke="hsl(344 35% 42% / 0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Clipboard clip */}
      <path
        d="M52 20V18C52 16 54 14 56 14H64C66 14 68 16 68 18V20"
        fill="none"
        stroke="hsl(344 35% 42% / 0.6)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="50"
        y="17"
        width="20"
        height="6"
        rx="2"
        fill="hsl(344 35% 55% / 0.3)"
        stroke="hsl(344 35% 42% / 0.5)"
        strokeWidth="1"
      />

      {/* Wishlist items - checkboxes with wavy lines */}
      {/* Item 1 - checked */}
      <rect
        x="48"
        y="30"
        width="6"
        height="6"
        rx="1"
        fill="hsl(344 35% 42% / 0.15)"
        stroke="hsl(344 35% 42% / 0.4)"
        strokeWidth="1"
      />
      <path
        d="M49.5 33L51 34.5L54 31"
        stroke="hsl(344 35% 42% / 0.7)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 33C60 32.8 62 33.2 64 33C66 32.8 68 33.1 70 33"
        stroke="hsl(344 35% 42% / 0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Item 2 - checked */}
      <rect
        x="48"
        y="42"
        width="6"
        height="6"
        rx="1"
        fill="hsl(344 35% 42% / 0.15)"
        stroke="hsl(344 35% 42% / 0.4)"
        strokeWidth="1"
      />
      <path
        d="M49.5 45L51 46.5L54 43"
        stroke="hsl(344 35% 42% / 0.7)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 45C61 44.7 63 45.3 66 45C68 44.8 70 45 72 45"
        stroke="hsl(344 35% 42% / 0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Item 3 - unchecked */}
      <rect
        x="48"
        y="54"
        width="6"
        height="6"
        rx="1"
        fill="hsl(38 52% 97%)"
        stroke="hsl(344 35% 42% / 0.35)"
        strokeWidth="1"
      />
      <path
        d="M58 57C60 56.9 63 57.2 65 57C67 56.8 69 57 71 57"
        stroke="hsl(344 35% 42% / 0.2)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Item 4 - unchecked */}
      <rect
        x="48"
        y="66"
        width="6"
        height="6"
        rx="1"
        fill="hsl(38 52% 97%)"
        stroke="hsl(344 35% 42% / 0.35)"
        strokeWidth="1"
      />
      <path
        d="M58 69C61 68.8 64 69.2 67 69C69 68.9 71 69 73 69"
        stroke="hsl(344 35% 42% / 0.2)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Teddy bear - top left, hand-drawn style */}
      <g transform="translate(18, 12)">
        {/* Ears */}
        <circle cx="4" cy="6" r="3.5" fill="hsl(344 25% 72%)" stroke="hsl(344 35% 55% / 0.5)" strokeWidth="0.8" />
        <circle cx="16" cy="6" r="3.5" fill="hsl(344 25% 72%)" stroke="hsl(344 35% 55% / 0.5)" strokeWidth="0.8" />
        {/* Head */}
        <circle cx="10" cy="12" r="8" fill="hsl(344 25% 75%)" stroke="hsl(344 35% 55% / 0.5)" strokeWidth="1" />
        {/* Inner ears */}
        <circle cx="4" cy="6" r="1.8" fill="hsl(344 30% 65%)" />
        <circle cx="16" cy="6" r="1.8" fill="hsl(344 30% 65%)" />
        {/* Eyes */}
        <circle cx="7" cy="11" r="1.2" fill="hsl(344 35% 35%)" />
        <circle cx="13" cy="11" r="1.2" fill="hsl(344 35% 35%)" />
        {/* Nose */}
        <ellipse cx="10" cy="14" rx="2" ry="1.5" fill="hsl(344 35% 50%)" />
        {/* Mouth */}
        <path d="M8 16C9 17 11 17 12 16" stroke="hsl(344 35% 40%)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      </g>

      {/* Pencil - top right, at an angle */}
      <g transform="translate(88, 20) rotate(25)">
        {/* Pencil body */}
        <rect x="0" y="0" width="22" height="6" rx="0.5" fill="hsl(38 65% 65%)" stroke="hsl(38 50% 45% / 0.5)" strokeWidth="0.8" />
        {/* Pencil tip */}
        <path d="M22 0L28 3L22 6Z" fill="hsl(38 40% 85%)" stroke="hsl(38 50% 45% / 0.5)" strokeWidth="0.8" />
        {/* Pencil lead */}
        <path d="M26 2L28 3L26 4Z" fill="hsl(24 15% 30%)" />
        {/* Eraser */}
        <rect x="-4" y="0.5" width="4.5" height="5" rx="0.5" fill="hsl(344 40% 70%)" stroke="hsl(344 35% 55% / 0.5)" strokeWidth="0.8" />
        {/* Metal band */}
        <rect x="0" y="0" width="1.5" height="6" fill="hsl(38 20% 70%)" stroke="hsl(38 20% 55% / 0.5)" strokeWidth="0.5" />
      </g>

      {/* Small gift box - bottom right */}
      <g transform="translate(85, 62)">
        {/* Box */}
        <rect x="0" y="6" width="16" height="14" rx="1.5" fill="hsl(344 35% 65%)" stroke="hsl(344 35% 50% / 0.6)" strokeWidth="1" />
        {/* Lid */}
        <rect x="-1" y="3" width="18" height="4" rx="1" fill="hsl(344 35% 60%)" stroke="hsl(344 35% 50% / 0.6)" strokeWidth="1" />
        {/* Vertical ribbon */}
        <rect x="6.5" y="3" width="3" height="17" fill="hsl(38 60% 75%)" />
        {/* Horizontal ribbon */}
        <rect x="-1" y="11" width="18" height="3" fill="hsl(38 60% 75%)" />
        {/* Bow loops */}
        <ellipse cx="5" cy="2" rx="3.5" ry="2.5" fill="hsl(38 60% 75%)" stroke="hsl(38 50% 55% / 0.5)" strokeWidth="0.8" />
        <ellipse cx="11" cy="2" rx="3.5" ry="2.5" fill="hsl(38 60% 75%)" stroke="hsl(38 50% 55% / 0.5)" strokeWidth="0.8" />
        {/* Bow center */}
        <circle cx="8" cy="3" r="1.8" fill="hsl(38 65% 70%)" />
      </g>

      {/* Decorative sparkles/dots */}
      <circle cx="32" cy="45" r="1.5" fill="hsl(344 35% 55% / 0.3)" />
      <circle cx="28" cy="65" r="1" fill="hsl(344 35% 55% / 0.25)" />
      <circle cx="92" cy="48" r="1.2" fill="hsl(344 35% 55% / 0.3)" />
    </svg>
  );
};
