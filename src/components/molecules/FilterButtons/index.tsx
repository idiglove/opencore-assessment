"use client";

import { FilterEnums, FilterKeys } from "@/components/organisms/ResourcesGrid";
import FilterButton from "../FilterButton";
import { Button, ButtonProps } from "@/components/atoms/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/atoms/Dropdown";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import FilterIcon from "@/assets/FilterIcon";
import ResourcesDropdown from "../ResourcesDropdown";

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
    <div className="flex justify-between">
      <div className="hidden md:flex gap-4 flex-wrap">
        {buttons.map(({ text, ButtonProps }) => (
          <FilterButton
            key={text}
            text={text}
            ButtonProps={ButtonProps as ButtonProps}
          />
        ))}
      </div>

      <div className="block md:hidden">
        <ResourcesDropdown />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border focus-visible:ring-transparent p-4 py-[10px] text-secondary"
          >
            <FilterIcon className="mr-[10px]" />
            Filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-4">
          <DropdownMenuLabel>Filters</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Filter 1</DropdownMenuItem>
            <DropdownMenuItem>Filter 2</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

type Props = {
  onChangeFilter: (filter: string) => void;
  filter: string;
};
export default FilterButtons;
