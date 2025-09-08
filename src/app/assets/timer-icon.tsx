export default function TimerIcon(props: any) {
  const { width, fill } = props;
  return (
    <svg
      width={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, 1, 0, 0)">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 13V9"
          stroke={fill ? fill : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>{" "}
        <path
          d="M10 2H14"
          stroke={fill ? fill : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"></path>{" "}
        <path
          d="M7.5 5.20404C8.82378 4.43827 10.3607 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.3607 3.43827 9.82378 4.20404 8.5"
          stroke={fill ? fill : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"></path>{" "}
      </g>
    </svg>
  );
}
