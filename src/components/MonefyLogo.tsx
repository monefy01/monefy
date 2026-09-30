import React from "react";

interface MonefyLogoProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  color?: string; // Text color #1a1a1a
  leafColor?: string; // Leaf green color #2e7d4f
}

export default function MonefyLogo({
  className = "monefy-logo-svg",
  height = 36,
  width = "auto",
  color = "#1a1a1a",
  leafColor = "#2e7d4f",
}: MonefyLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 90"
      height={height}
      width={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monefy logo"
      style={{ display: "block", overflow: "visible" }}
    >
      {/* Letter 'M' - Bold, modern, apex reaching baseline */}
      <path
        d="M 12 70 L 12 16 L 27.5 16 L 41 53 L 54.5 16 L 70 16 L 70 70 L 57 70 L 57 32.5 L 45.5 63.5 L 36.5 63.5 L 25 32.5 L 25 70 Z"
        fill={color}
      />

      {/* Letter 'o' with the signature Monefy Leaf nestled in the lower-right opening */}
      <g>
        {/* Main curved body of 'o' */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 104 29 C 91.3 29 81.5 38.3 81.5 50 C 81.5 61.7 91.3 71 104 71 C 108.6 71 112.8 69.7 116.4 67.4 L 111.8 58.2 C 109.5 59.6 106.8 60.4 104 60.4 C 97.4 60.4 92.8 55.4 92.8 50 C 92.8 44.6 97.4 39.6 104 39.6 C 110.3 39.6 114.6 44 115.4 49.5 L 125.8 46.8 C 123.6 37 115 29 104 29 Z"
          fill={color}
        />

        {/* Emerald Green Leaf with sharp tip pointing up-right */}
        <path
          d="M 98 67 C 104 69.8 112.5 67.5 118.8 61.8 C 124.5 56 127.2 48.5 127.8 42.5 C 122 43.5 114.2 47 108 52.8 C 101.5 58.8 98.6 65 98 67 Z"
          fill={leafColor}
        />

        {/* White curved vein through the leaf */}
        <path
          d="M 100.5 65.5 C 106.5 62.5 114 55 124 45"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>

      {/* Letter 'n' - Clean geometric shoulder and stems */}
      <path
        d="M 136 30 L 148.5 30 L 148.5 37.5 C 152 32.5 158 29.5 165 29.5 C 175 29.5 180.5 36.5 180.5 47.5 L 180.5 70 L 168 70 L 168 49 C 168 43.5 165 40.5 159.5 40.5 C 153.5 40.5 148.5 45 148.5 52 L 148.5 70 L 136 70 Z"
        fill={color}
      />

      {/* Letter 'e' - Smooth circular body with horizontal bar */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 207 29.5 C 194.5 29.5 185 39 185 50 C 185 61.8 194.5 70.5 207.5 70.5 C 215.8 70.5 222.8 66.8 227 60.5 L 217.5 55.2 C 215.2 58.4 211.5 60 207.5 60 C 201.2 60 196.8 56.5 195.8 51.5 L 230 51.5 C 230.3 50.2 230.5 48.8 230.5 47.5 C 230.5 38.2 222.2 29.5 207 29.5 Z M 196 43 C 197.5 38.2 201.5 35.5 207 35.5 C 212.5 35.5 216.5 38.2 217.8 43 Z"
        fill={color}
      />

      {/* Letter 'f' - Tall ascender with elegant hook and crossbar */}
      <path
        d="M 241 70 L 241 39.5 L 233 39.5 L 233 30 L 241 30 L 241 24.5 C 241 16.8 245.8 12.8 254 12.8 C 258 12.8 261.8 13.8 264.5 15.2 L 261.8 24.2 C 260 23.5 258 23 256 23 C 253 23 251.8 24.5 251.8 28.5 L 251.8 30 L 264.5 30 L 263 39.5 L 251.8 39.5 L 251.8 70 Z"
        fill={color}
      />

      {/* Letter 'y' - Distinctive hooked descender curving left */}
      <path
        d="M 268 30 L 281 30 L 292 57.5 L 303 30 L 315.5 30 L 299.5 68 C 295.2 78.5 289.2 84.5 279 84.5 C 275.5 84.5 272 83.8 269.8 82.8 L 272.5 73.5 C 274 74.2 276 74.8 277.8 74.8 C 282.8 74.8 285.5 71.5 287.8 65.5 L 268 30 Z"
        fill={color}
      />
    </svg>
  );
}
