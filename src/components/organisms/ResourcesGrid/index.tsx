"use client";

import { useState } from "react";
import ImageGrid from "../ImageGrid";
import SearchBarWithFilters from "../SearchBarWithFilters";
import { cn } from "@/lib/utils";

export const FilterKeys = {
  allResources: "allResources",
  design: "design",
  development: "development",
  marketing: "marketing",
  branding: "branding",
};

export const FilterEnums = {
  [FilterKeys.allResources]: "All Resources",
  [FilterKeys.design]: "Design",
  [FilterKeys.development]: "Development",
  [FilterKeys.marketing]: "Marketing",
  [FilterKeys.branding]: "Branding",
};

const ResourcesGrid = ({ className }: Props) => {
  const [filter, setFilter] = useState(FilterKeys.allResources);

  const onChangeFilter = (filterKey: string) => {
    setFilter(filterKey);
  };

  return (
    <div
      className={cn(
        "bg-gradient-to-b from-white to-gray mx-[-16px] md:bg-transparent md:from-transparent md:to-transparent",
        className
      )}
    >
      <div className="mx-4 md:mx-0">
        <SearchBarWithFilters
          filter={filter}
          onChangeFilter={onChangeFilter}
          className="mb-9 md:mb-16"
        />
        <ImageGrid />
      </div>
    </div>
  );
};

type Props = {
  className?: string;
};

export default ResourcesGrid;
