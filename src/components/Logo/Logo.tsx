import React from "react";

export function LogoSymbol({ size = 40, dark = true }) {
  const bg = dark ? "#1a0a00" : "#fdf6ef";
  const stroke = dark ? "" : "#e8d4c0";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TerritorIA ícone"
    >
      <rect
        width="72"
        height="72"
        rx="12"
        fill={bg}
        stroke={dark ? "none" : stroke}
        strokeWidth="1"
      />
      <g transform="translate(16,10)">
        <polygon
          points="20,0 40,36 0,36"
          fill="none"
          stroke="#C17B4E"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="9"
          x2="20"
          y2="27"
          stroke="#C17B4E"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="18" r="3" fill="#C17B4E" />
      </g>
      <text
        x="36"
        y="62"
        fontFamily="Georgia,serif"
        fontSize="11"
        fontWeight="700"
        fill="#C17B4E"
        textAnchor="middle"
        fontStyle="italic"
        letterSpacing=".04em"
      >
        IA
      </text>
    </svg>
  );
}

export function LogoFull({ dark = true, width = 220 }) {
  const textMain = dark ? "#ffffff" : "#1a0a00";
  const textSub = dark ? "#c9a882" : "#7a5530";
  const bg = dark ? "#1a0a00" : "#fdf6ef";
  return (
    <svg
      width={width}
      viewBox="0 0 220 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TerritorIA logo"
    >
      <rect width="220" height="64" fill={bg} />
      <g transform="translate(16,12)">
        <polygon
          points="20,0 40,34 0,34"
          fill="none"
          stroke="#C17B4E"
          strokeWidth="1.5"
        />
        <line x1="20" y1="8" x2="20" y2="26" stroke="#C17B4E" strokeWidth="1" />
        <circle cx="20" cy="17" r="2.5" fill="#C17B4E" />
      </g>
      <text
        x="64"
        y="30"
        fontFamily="'Playfair Display',Georgia,serif"
        fontSize="22"
        fontWeight="900"
        fill={textMain}
        letterSpacing="0.01em"
      >
        Territo
      </text>
      <text
        x="130"
        y="30"
        fontFamily="'Playfair Display',Georgia,serif"
        fontSize="22"
        fontWeight="900"
        fill="#C17B4E"
        letterSpacing="0.01em"
        fontStyle="italic"
      >
        IA
      </text>
      <text
        x="64"
        y="46"
        fontFamily="'DM Sans',sans-serif"
        fontSize="9"
        fontWeight="400"
        fill={textSub}
        letterSpacing="0.1em"
      >
        CONSULTORIA EM IA GENERATIVA
      </text>
    </svg>
  );
}
