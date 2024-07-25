import TypographyP from "@/components/atoms/TypographyP";
import FooterContact from "@/components/molecules/FooterContact";
import FooterLinks from "@/components/molecules/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-primary w-full px-[62px] py-[86px]">
      <div
        className={`relative bg-white rounded-[36px] py-[76px] px-20 pb-[285px]
        before:content-[''] before:bg-oc-footer before:absolute before:w-full before:h-[146px] 
        before:bottom-[-31px] before:left-0 before:bg-no-repeat before:bg-center`}
      >
        <div className="flex justify-between mb-16">
          <FooterContact />
          <FooterLinks />
        </div>
        <div className="flex justify-between ">
          <TypographyP
            variant="p2"
            className={`text-light font-normal leading-[30px] tracking-[-0.01em]
            text-xl`}
          >
            Toronto, ON Canada
          </TypographyP>
          <TypographyP
            variant="p2"
            className={`text-light font-normal leading-[30px] tracking-[-0.01em]
            text-xl`}
          >
            OpenCore. All Rights Reserved
          </TypographyP>
        </div>
      </div>
    </div>
  );
};

export default Footer;
