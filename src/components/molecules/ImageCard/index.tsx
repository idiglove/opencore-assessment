import Image from "next/image";

const ImageCard = () => {
  return (
    <div className="w-[33.3%] px-[10px] mb-20">
      <div className="relative w-full h-[247px]">
        <Image
          className="rounded-lg"
          objectFit="cover"
          fill
          src="/assets/resources/CaseStudy.png"
          alt="Case Study Template: FlipX, an Investment Attraction Startup"
        />
      </div>
    </div>
  );
};

export default ImageCard;
