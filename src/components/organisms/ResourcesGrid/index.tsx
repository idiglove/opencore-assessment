import ImageCard from "@/components/molecules/ImageCard";

const ResourcesGrid = () => {
  // this should come from a db or cms
  const imageCards = [
    {
      ImageProps: {
        src: "/assets/resources/CaseStudy.png",
        alt: "Case Study Template: FlipX, an Investment Attraction Startup",
      },
      headingText:
        "Case Study Template: FlipX, an Investment Attraction Startup",
      badges: <div>badges</div>,
      className: "w-full md:w-[33.3%]",
    },
    {
      ImageProps: {
        src: "/assets/resources/DefaultImage.png",
        alt: "Designing Impression: The Power of First Impressions",
      },
      headingText: "Designing Impression: The Power of First Impressions",
      badges: <div>badges</div>,
      className: "w-full md:w-[33.3%]",
    },
    {
      ImageProps: {
        src: "/assets/resources/FluidCard.png",
        alt: "Fluid Card Animation in After Effects",
      },
      headingText: "Fluid Card Animation in After Effects",
      badges: <div>badges</div>,
      className: "w-full md:w-[33.3%]",
    },
    {
      ImageProps: {
        src: "/assets/resources/DefaultImage.png",
        alt: "Designing Impression: The Power of First Impressions",
      },
      headingText: "Designing Impression: The Power of First Impressions",
      badges: <div>badges</div>,
      className: "hidden md:block",
    },
    {
      ImageProps: {
        src: "/assets/resources/DesigningImpression.png",
        alt: "Designing Impression: The Power of First Impressions",
      },
      headingText: "Designing Impression: The Power of First Impressions",
      badges: <div>badges</div>,
      className: "hidden md:block",
    },
    {
      ImageProps: {
        src: "/assets/resources/OpenCoreStrategy.png",
        alt: "OpenCore Customer Acquisition Strategy",
      },
      headingText: "OpenCore Customer Acquisition Strategy",
      badges: <div>badges</div>,
      className: "hidden md:block",
    },
  ];
  return (
    <div className="flex md:flex-wrap flex-col md:flex-row mx-[-20px]">
      {imageCards.map((imageCard, index) => (
        <ImageCard key={index} {...imageCard} />
      ))}
    </div>
  );
};

export default ResourcesGrid;
