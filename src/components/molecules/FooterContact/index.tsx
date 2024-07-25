import TypographyP from "@/components/atoms/TypographyP";

const FooterContact = () => {
  return (
    <div>
      <TypographyP
        className={`text-dark font-bold leading-[30px] tracking-[-0.01em]
            text-xl`}
      >
        Say Hello!
      </TypographyP>
      <TypographyP
        variant="p2"
        className={`text-light font-normal leading-[30px] tracking-[-0.01em]
            text-xl`}
      >
        opencoregroup@gmail.com
      </TypographyP>
    </div>
  );
};

export default FooterContact;
