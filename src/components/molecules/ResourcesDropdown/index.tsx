import { Button } from "@/components/atoms/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/Dropdown";
import { FilterEnums, FilterKeys } from "@/components/organisms/ResourcesGrid";
import { ChevronDown } from "lucide-react";

const ResourcesDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-border focus-visible:ring-transparent p-[16px] py-[10px] text-secondary bg-primary-foreground"
        >
          All Resources
          <ChevronDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-4">
        <DropdownMenuLabel>Filters</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {FilterEnums[FilterKeys.allResources]}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>{FilterEnums[FilterKeys.design]}</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {FilterEnums[FilterKeys.development]}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {FilterEnums[FilterKeys.marketing]}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {FilterEnums[FilterKeys.branding]}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResourcesDropdown;
