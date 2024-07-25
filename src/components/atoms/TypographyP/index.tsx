import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const TypographyP = ({ children, className, variant = "p1" }: Props) => {
  const p1Styles = `text-2xl text-textColor
        leading-9 font-medium tracking-[-0.01em]`;
  const p2Styles = `text-xl text-textColor
        leading-[30px] font-medium tracking-[-0.01em]`;
  return (
    <p
      className={cn(
        `text-textColor`,
        { [p1Styles]: variant === "p1" },
        { [p2Styles]: variant === "p2" },
        className
      )}
    >
      {children}
    </p>
  );
};

type Props = {
  children: ReactNode;
  className?: string;
  variant?: string;
};

export default TypographyP;
