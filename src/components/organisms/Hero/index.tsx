import HeroContent from "@/components/molecules/HeroContent";
import { cn } from "@/lib/utils";

const Hero = ({ className }: Props) => {
  return (
    <div className={cn("mt-[91px]", className)}>
      <HeroContent />
    </div>
  );
};

type Props = {
  className?: string;
};

export default Hero;
