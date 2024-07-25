import TypographyH1 from "@/components/atoms/TypographyH1";
import TypographyH2 from "@/components/atoms/TypographyH2";

const HeroContent = () => {
  return (
    <>
      <TypographyH1
        className={`text-center md:leading-xl mb-4 text-dark2 md:text-primary
          text-[40px] md:text-[64px] leading-[48px]`}
      >
        Your Ultimate <br className="block md:hidden" /> Resource{" "}
        <br className="hidden md:block" /> Hub for{" "}
        <br className="block md:hidden" /> Digital Success
      </TypographyH1>
      <TypographyH2
        className={`text-center text-textColor2 md:text-secondary
        text-base md:text-[24px] leading-[24px] md:leading-[36px]`}
      >
        Explore our comprehensive library of tools{" "}
        <br className="block md:hidden" /> and templates for{" "}
        <br className="hidden md:block" /> developers, designers,{" "}
        <br className="block md:hidden" /> marketers, and branding experts.
      </TypographyH2>
    </>
  );
};

export default HeroContent;
