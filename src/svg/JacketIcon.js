import React from "react";

const JacketIcon = () => {
  return (
    <svg
      width="28"
      height="41"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Jacket outline */}
      <path
        d="M8 3l-3 3v13h4v-6l3-2 3 2v6h4V6l-3-3h-2l-2 3-2-3H8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Zipper line */}
      <path
        d="M12 7v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Collar hint */}
      <path
        d="M10 6l-1.2-2M14 6l1.2-2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default JacketIcon;
