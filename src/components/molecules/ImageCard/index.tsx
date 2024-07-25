import TypographyP1 from "@/components/atoms/TypographyP";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

const ImageCard = ({ ImageProps, headingText, badges, className }: Props) => {
  return (
    <div className={cn("w-[33.3%] px-[10px] mb-20", className)}>
      <div className="relative w-full h-[247px] mb-4">
        <Image
          className="rounded-lg"
          objectFit="cover"
          fill
          alt={ImageProps.alt}
          src={ImageProps.src}
        />
      </div>
      <TypographyP1>{headingText}</TypographyP1>
      {badges}
    </div>
  );
};

type Props = {
  className?: string;
  ImageProps: {
    src: string;
    alt: string;
  };
  headingText: string;
  badges?: ReactNode;
};

export default ImageCard;
