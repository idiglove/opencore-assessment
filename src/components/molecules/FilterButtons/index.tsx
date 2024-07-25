"use client";

import { FilterEnums, FilterKeys } from "@/components/organisms/ResourcesGrid";
import FilterButton from "../FilterButton";
import { ButtonProps } from "@/components/atoms/Button";

const FilterButtons = ({ onChangeFilter, filter }: Props) => {
  const buttons = [
    {
      text: FilterEnums[FilterKeys.allResources],
      ButtonProps: {
        variant: filter === FilterKeys.allResources ? "default" : "secondary",
        onClick: () => onChangeFilter?.(FilterKeys.allResources),
      },
    },
    {
      text: FilterEnums[FilterKeys.design],
      ButtonProps: {
        variant: filter === FilterKeys.design ? "default" : "secondary",
        onClick: () => onChangeFilter?.(FilterKeys.design),
      },
    },
    {
      text: FilterEnums[FilterKeys.development],
      ButtonProps: {
        variant: filter === FilterKeys.development ? "default" : "secondary",
        onClick: () => onChangeFilter?.(FilterKeys.development),
      },
    },
    {
      text: FilterEnums[FilterKeys.marketing],
      ButtonProps: {
        variant: filter === FilterKeys.marketing ? "default" : "secondary",
        onClick: () => onChangeFilter?.(FilterKeys.marketing),
      },
    },
    {
      text: FilterEnums[FilterKeys.branding],
      ButtonProps: {
        variant: filter === FilterKeys.branding ? "default" : "secondary",
        onClick: () => onChangeFilter?.(FilterKeys.branding),
      },
    },
  ];
  return (
    <div className="flex gap-4">
      {buttons.map(({ text, ButtonProps }) => (
        <FilterButton
          key={text}
          text={text}
          ButtonProps={ButtonProps as ButtonProps}
        />
      ))}
    </div>
  );
};

type Props = {
  onChangeFilter: (filter: string) => void;
  filter: string;
};
export default FilterButtons;
