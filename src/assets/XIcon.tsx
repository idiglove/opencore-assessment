const XIcon = (props?: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1322_272)">
        <path
          d="M14.175 0.864746H16.9365L10.905 7.7565L18 17.136H12.4462L8.09325 11.4487L3.11775 17.136H0.35175L6.80175 9.76275L0 0.864746H5.69475L9.6255 6.063L14.175 0.864746ZM13.2052 15.4852H14.7345L4.8615 2.42925H3.219L13.2052 15.4852Z"
          fill="#294F74"
        />
      </g>
      <defs>
        <clipPath id="clip0_1322_272">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

type Props = {
  className?: string;
};

export default XIcon;
