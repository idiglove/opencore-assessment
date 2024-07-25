import { Button, ButtonProps } from "@/components/atoms/Button";

const FilterButton = ({ text, ButtonProps }: Props) => {
  return (
    <>
      <Button {...ButtonProps}>{text}</Button>
    </>
  );
};

type Props = {
  text: string;
  ButtonProps?: ButtonProps;
};

export default FilterButton;
