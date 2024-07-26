import TypographyH1 from "@/components/atoms/TypographyH1";
import TypographyH2 from "@/components/atoms/TypographyH2";
import TypographyP from "@/components/atoms/TypographyP";
import RoundedText from "@/components/molecules/RoundedText";
import { cn } from "@/lib/utils";

const Banner = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `relative flex flex-wrap justify-between w-full rounded-[24px] bg-gradient-to-b from-bannerFrom to-bannerTo
        px-8 py-16 md:py-31 md:px-22         
        before:content-[''] before:bg-grid-top before:absolute before:w-full 
        before:h-[100px] before:top-0 before:left-0 before:rounded-[24px] before:bg-center        
        after:content-[''] after:bg-grid-btm after:absolute after:w-full 
        after:h-[100px] after:bottom-0 after:left-0 after:rounded-[24px] after:bg-center`,
        className
      )}
    >
      <div className="mb-16 xl:mb-0">
        <TypographyH1
          Component="p"
          className={`text-white text-4xl font-normal leading-xl mb-4
            tracking-[-0.02em] hidden md:block`}
        >
          Transforming your
          <br />
          <span className="font-semibold">Ideas into reality</span>
        </TypographyH1>
        <TypographyH1
          Component="h4"
          className={`text-white text-[40px] font-normal leading-[48px] mb-4
            tracking-[-0.02em] md:hidden`}
        >
          Transforming
          <br />
          your&nbsp;
          <span className="font-semibold">Ideas into reality</span>
        </TypographyH1>
        <TypographyP variant="p2" className="text-border text-base md:text-xl">
          Let&apos;s build something extraordinary together to captivate{" "}
          <br className="hidden md:block" /> your audience.
        </TypographyP>
      </div>

      <RoundedText>
        Let&apos;s Work <br />
        Together!
      </RoundedText>
    </div>
  );
};

type Props = {
  className?: string;
};

export default Banner;
