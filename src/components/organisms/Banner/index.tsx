import TypographyH1 from "@/components/atoms/TypographyH1";
import TypographyH2 from "@/components/atoms/TypographyH2";
import TypographyP from "@/components/atoms/TypographyP";
import RoundedText from "@/components/molecules/RoundedText";
import { cn } from "@/lib/utils";

const Banner = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `relative flex justify-between w-full rounded-[24px] bg-gradient-to-b from-bannerFrom to-bannerTo
        py-31 px-22 
        before:content-[''] before:bg-grid-top before:absolute before:w-full 
        before:h-[100px] before:top-0 before:left-0 before:rounded-[24px]        
        after:content-[''] after:bg-grid-btm after:absolute after:w-full 
        after:h-[100px] after:bottom-0 after:left-0 after:rounded-[24px]`,
        className
      )}
    >
      <div>
        <TypographyH1
          Component="p"
          className={`text-white text-4xl font-normal leading-xl mb-4
            tracking-[-0.02em]`}
        >
          Transforming your
          <br />
          <span className="font-bold">Ideas into reality</span>
        </TypographyH1>
        <TypographyP variant="p2" className="text-border">
          Let&apos;s build something extraordinary together to captivate <br />{" "}
          your audience.
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
