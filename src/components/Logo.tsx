export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Wrench/shield icon */}
      <rect x="2" y="8" width="24" height="24" rx="4" fill="white" />
      <path
        d="M14 14 L14 26 M10 18 L18 18"
        stroke="#0a0a0a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* АВТО text */}
      <text
        x="34"
        y="28"
        fontFamily="monospace"
        fontSize="18"
        fontWeight="700"
        fill="white"
        letterSpacing="1"
      >
        АВТО
      </text>
      {/* COLOR text */}
      <text
        x="34"
        y="40"
        fontFamily="monospace"
        fontSize="10"
        fontWeight="400"
        fill="white"
        opacity="0.5"
        letterSpacing="3"
      >
        COLOR
      </text>
    </svg>
  );
};