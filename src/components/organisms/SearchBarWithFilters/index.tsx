import FilterButtons from "@/components/molecules/FilterButtons";
import SearchInput from "@/components/molecules/SearchInput";

const SearchBarWithFilters = ({ className, onChangeFilter, filter }: Props) => {
  return (
    <div className={className}>
      <SearchInput className="mb-8" />
      <FilterButtons filter={filter} onChangeFilter={onChangeFilter} />
    </div>
  );
};

type Props = {
  className?: string;
  onChangeFilter: (filter: string) => void;
  filter: string;
};

export default SearchBarWithFilters;
