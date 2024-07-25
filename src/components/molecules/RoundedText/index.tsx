import TypographyP from "@/components/atoms/TypographyP";

const RoundedText = ({ children }: Props) => {
  return (
    <div
      className={`rounded-full border-white border-[2px] w-[250px] h-[250px]
        text-center flex items-center justify-center`}
    >
      <TypographyP className="text-white">{children}</TypographyP>
    </div>
  );
};

type Props = {
  children?: React.ReactNode;
};

export default RoundedText;
