import TypographyH1 from "@/components/atoms/TypographyH1";
import TypographyH2 from "@/components/atoms/TypographyH2";

const HeroContent = () => {
  return (
    <>
      <TypographyH1 className="text-center leading-xl mb-4">
        Your Ultimate Resource <br /> Hub for Digital Success
      </TypographyH1>
      <TypographyH2 className="text-center">
        Explore our comprehensive library of tools and templates for <br/> developers,
        designers, marketers, and branding experts.
      </TypographyH2>
    </>
  );
};

export default HeroContent;
