import CodeIcon from "@/assets/CodeIcon";
import FileIcon from "@/assets/FileIcon";
import PdfIcon from "@/assets/PdfIcon";
import GridBadge from "@/components/molecules/GridBadge";
import ImageCard from "@/components/molecules/ImageCard";

const ImageGrid = ({ className }: Props) => {
  // this should come from a db or cms
  const imageCards = [
    {
      ImageProps: {
        src: "/assets/resources/CaseStudy.png",
        alt: "Case Study Template: FlipX, an Investment Attraction Startup",
      },
      headingText:
        "Case Study Template: FlipX, an Investment Attraction Startup",
      badges: (
        <GridBadge>
          <FileIcon className="mr-1 w-4 h-4" /> Design file
        </GridBadge>
      ),
      className: "w-full md:w-[33.3%]",
    },
    {
      ImageProps: {
        src: "/assets/resources/DefaultImage.png",
        alt: "Designing Impression: The Power of First Impressions",
      },
      headingText: "Designing Impression: The Power of First Impressions",
      badges: (
        <GridBadge>
          <CodeIcon className="mr-1 w-4 h-4" /> Github Resource
        </GridBadge>
      ),
      className: "w-full md:w-[33.3%]",
    },
    {
      ImageProps: {
        src: "/assets/resources/FluidCard.png",
        alt: "Fluid Card Animation in After Effects",
      },
      headingText: "Fluid Card Animation in After Effects",
      badges: (
        <div className="flex gap-2">
          <GridBadge variant="pill">Design</GridBadge>
          <GridBadge variant="pill">UI UX</GridBadge>
          <GridBadge variant="pill">Branding</GridBadge>
        </div>
      ),
      className: "w-full md:w-[33.3%]",
    },
    {
      ImageProps: {
        src: "/assets/resources/DefaultImage.png",
        alt: "Designing Impression: The Power of First Impressions",
      },
      headingText: "Designing Impression: The Power of First Impressions",
      badges: (
        <div className="flex gap-2">
          <GridBadge variant="pill">Design</GridBadge>
          <GridBadge variant="pill">UI UX</GridBadge>
          <GridBadge variant="pill">Branding</GridBadge>
        </div>
      ),
      className: "hidden md:block",
    },
    {
      ImageProps: {
        src: "/assets/resources/DesigningImpression.png",
        alt: "Designing Impression: The Power of First Impressions",
      },
      headingText: "Designing Impression: The Power of First Impressions",
      badges: <GridBadge variant="pill">Design</GridBadge>,
      className: "hidden md:block",
    },
    {
      ImageProps: {
        src: "/assets/resources/OpenCoreStrategy.png",
        alt: "OpenCore Customer Acquisition Strategy",
      },
      headingText: "OpenCore Customer Acquisition Strategy",
      badges: (
        <GridBadge>
          <PdfIcon className="mr-1 w-4 h-4" /> Marketing PDF
        </GridBadge>
      ),
      className: "hidden md:block",
    },
  ];
  return (
    <div className="flex md:flex-wrap flex-col md:flex-row mx-[-10px]">
      {imageCards.map((imageCard, index) => (
        <ImageCard key={index} {...imageCard} />
      ))}
    </div>
  );
};

type Props = {
  className?: string;
};

export default ImageGrid;
