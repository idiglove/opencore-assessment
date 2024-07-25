"use client";

import { useState } from "react";
import ImageGrid from "../ImageGrid";
import SearchBarWithFilters from "../SearchBarWithFilters";

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
    <div className={className}>
      <SearchBarWithFilters
        filter={filter}
        onChangeFilter={onChangeFilter}
        className="mb-16"
      />
      <ImageGrid />
    </div>
  );
};

type Props = {
  className?: string;
};

export default ResourcesGrid;
