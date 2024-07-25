const SearchIcon = (props?: Props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 4.1111C9.61358 4.1111 8.73583 4.28569 7.91689 4.62491C7.09794 4.96413 6.35382 5.46133 5.72703 6.08812C5.10023 6.71492 4.60303 7.45903 4.26381 8.27798C3.92459 9.09693 3.75 9.97467 3.75 10.8611C3.75 11.7475 3.92459 12.6253 4.26381 13.4442C4.60303 14.2632 5.10023 15.0073 5.72703 15.6341C6.35382 16.2609 7.09794 16.7581 7.91689 17.0973C8.73583 17.4365 9.61358 17.6111 10.5 17.6111C12.2902 17.6111 14.0071 16.8999 15.273 15.6341C16.5388 14.3682 17.25 12.6513 17.25 10.8611C17.25 9.07088 16.5388 7.35399 15.273 6.08812C14.0071 4.82225 12.2902 4.1111 10.5 4.1111ZM2.25 10.8611C2.25017 9.53619 2.56944 8.23082 3.18079 7.05539C3.79214 5.87997 4.67759 4.86907 5.76224 4.10822C6.84689 3.34736 8.09883 2.85892 9.41216 2.68422C10.7255 2.50952 12.0616 2.65369 13.3074 3.10455C14.5533 3.55541 15.6722 4.29968 16.5695 5.27442C17.4669 6.24915 18.1163 7.42567 18.4628 8.70446C18.8094 9.98324 18.8428 11.3267 18.5603 12.6211C18.2778 13.9156 17.6878 15.1229 16.84 16.1411L21.53 20.8311C21.6037 20.8998 21.6628 20.9826 21.7038 21.0746C21.7448 21.1666 21.7668 21.2659 21.7686 21.3666C21.7704 21.4673 21.7518 21.5673 21.7141 21.6607C21.6764 21.7541 21.6203 21.8389 21.549 21.9101C21.4778 21.9814 21.393 22.0375 21.2996 22.0752C21.2062 22.1129 21.1062 22.1315 21.0055 22.1297C20.9048 22.1279 20.8055 22.1059 20.7135 22.0649C20.6215 22.0239 20.5387 21.9648 20.47 21.8911L15.78 17.2011C14.5752 18.2046 13.1094 18.844 11.5543 19.0444C9.99922 19.2447 8.41922 18.9978 6.99941 18.3325C5.5796 17.6672 4.37878 16.6111 3.53763 15.2878C2.69648 13.9646 2.24983 12.4291 2.25 10.8611Z"
        fill="#344054"
      />
    </svg>
  );
};

type Props = {
  className?: string;
};

export default SearchIcon;
