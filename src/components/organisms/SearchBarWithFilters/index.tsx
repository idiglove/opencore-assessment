import FilterButton from "@/components/molecules/FilterButton";
import FilterButtons from "@/components/molecules/FilterButtons";
import SearchInput from "@/components/molecules/SearchInput";

const SearchBarWithFilters = ({ className }: Props) => {
  return (
    <div className={className}>
      <SearchInput className="mb-8" />
      <FilterButtons />
    </div>
  );
};

type Props = {
  className?: string;
};

export default SearchBarWithFilters;
