import TypographyP from "@/components/atoms/TypographyP";
import FooterContact from "@/components/molecules/FooterContact";
import FooterLinks from "@/components/molecules/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-primary w-full px-4 py-8 md:px-[62px] md:py-[86px]">
      <div
        className={`relative bg-white rounded-[16px] md:rounded-[36px] p-6 md:py-[76px] md:px-20 pb-[89px] md:pb-[285px]
        before:content-[''] before:absolute before:w-full before:h-[57px] md:before:h-[146px] 
        before:bottom-[-17px] md:before:bottom-[-31px] before:left-0 before:bg-no-repeat before:bg-center
        before:bg-oc-footer-mob md:before:bg-oc-footer`}
      >
        <div
          className={`flex flex-col md:flex-row justify-between mb-6 md:mb-16
            `}
        >
          <FooterContact />
          <FooterLinks />
        </div>
        <div className={`flex flex-col md:flex-row justify-between text-center md:text-left`}>
          <TypographyP
            variant="p2"
            className={`text-light font-normal leading-[30px] tracking-[-0.01em]
            text-xl text-[14px] md:text-[20px]`}
          >
            Toronto, ON Canada
          </TypographyP>
          <TypographyP
            variant="p2"
            className={`text-light font-normal leading-[30px] tracking-[-0.01em]
            text-xl text-[14px] md:text-[20px]`}
          >
            OpenCore. All Rights Reserved
          </TypographyP>
        </div>
      </div>
    </div>
  );
};

export default Footer;
