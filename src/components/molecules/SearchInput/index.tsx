import SearchIcon from "@/assets/SearchIcon";
import { Input } from "@/components/atoms/Input";
import { cn } from "@/lib/utils";

const SearchInput = ({ className }: Props) => {
  return (
    <div className={cn(className, "relative")}>
      <SearchIcon className="absolute left-4 top-[10px] md:top-5" />
      <Input
        type="text"
        placeholder="Search for resources and tutorials"
        className="py-5 pl-12 h-11 md:h-16"
      />
    </div>
  );
};

type Props = {
  className?: string;
};

export default SearchInput;
