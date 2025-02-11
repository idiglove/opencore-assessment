const CodeIcon = (props?: Props) => {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 3.36108L15 6.86108L11.5 10.3611M4.5 10.3611L1 6.86108L4.5 3.36108M9.5 1.36108L6.5 12.3611"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

type Props = {
  className?: string;
};

export default CodeIcon;
