const PdfIcon = (props?: Props) => {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 9.36108V7.61108C11 7.01435 10.7629 6.44205 10.341 6.02009C9.91903 5.59814 9.34674 5.36108 8.75 5.36108H7.75C7.55109 5.36108 7.36032 5.28207 7.21967 5.14141C7.07902 5.00076 7 4.81 7 4.61108V3.61108C7 3.01435 6.76295 2.44205 6.34099 2.02009C5.91903 1.59814 5.34674 1.36108 4.75 1.36108H3.5M5 1.36108H1.75C1.336 1.36108 1 1.69708 1 2.11108V13.6111C1 14.0251 1.336 14.3611 1.75 14.3611H10.25C10.664 14.3611 11 14.0251 11 13.6111V7.36108C11 5.76979 10.3679 4.24366 9.24264 3.11844C8.11742 1.99322 6.5913 1.36108 5 1.36108Z"
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

export default PdfIcon;
