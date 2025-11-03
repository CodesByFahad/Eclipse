import React from "react";

const ShoeIcon = () => {
  return (
    <svg
      width="28"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* heel + sole */}
      <path
        d="M2 16.5c2.7-.1 5.3-1.3 7.7-3.2l2.2 1.9 7.6 2.3V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.5Z"
        fill="currentColor"
        opacity=".2"
      />
      {/* shoe upper */}
      <path
        d="M2 16.5c2.9 0 5.8-1.5 8.3-3.7.4-.3.9-.3 1.3 0l2.4 2 7 2v2.2A2.5 2.5 0 0 1 18.5 21H4A2 2 0 0 1 2 19v-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* lace hints */}
      <path
        d="M10 10.5l-1.3-1.3M12 10l-1.2-1.2M14 10l-1.2-1.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ShoeIcon;
