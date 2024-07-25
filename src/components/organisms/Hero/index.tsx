import HeroContent from "@/components/molecules/HeroContent";

const Hero = ({ className }: Props) => {
  return (
    <div className={className}>
      {/* add grid absolute top */}
      {/* add topnavbar */}
      <HeroContent />
    </div>
  );
};

type Props = {
  className?: string;
};

export default Hero;
