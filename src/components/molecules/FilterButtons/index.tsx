import FilterButton from "../FilterButton";

const FilterButtons = () => {
  return (
    // TODO: Add functionality
    <div className="flex gap-4">
      <FilterButton text="All Resources" />
      <FilterButton
        text="Design"
        ButtonProps={{
          variant: "secondary",
        }}
      />
      <FilterButton
        text="Development"
        ButtonProps={{
          variant: "secondary",
        }}
      />
    </div>
  );
};
export default FilterButtons;
