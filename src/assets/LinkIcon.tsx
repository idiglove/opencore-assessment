const LinkIcon = (props?: Props) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.75 5H4.875C4.37772 5 3.90081 5.19754 3.54917 5.54917C3.19754 5.90081 3 6.37772 3 6.875V15.625C3 16.1223 3.19754 16.5992 3.54917 16.9508C3.90081 17.3025 4.37772 17.5 4.875 17.5H13.625C14.1223 17.5 14.5992 17.3025 14.9508 16.9508C15.3025 16.5992 15.5 16.1223 15.5 15.625V8.75M6.75 13.75L18 2.5M18 2.5H13.625M18 2.5V6.875"
        stroke="#D0D5DD"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

type Props = {
  className?: string;
};

export default LinkIcon;
