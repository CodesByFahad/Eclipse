import React from "react";

const WatchIcon = () => {
  return (
    <svg
      width="30"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9"
        y="1.5"
        width="6"
        height="3"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="9"
        y="19.5"
        width="6"
        height="3"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 12L14 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WatchIcon;
