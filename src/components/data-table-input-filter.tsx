import type { Table } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface DataTableInputFilterProps<TData> {
  table: Table<TData>;
}

export function DataTableInputFilter<TData>({
  table,
}: DataTableInputFilterProps<TData>) {
  return (
    <InputGroup>
      <InputGroupInput
        placeholder="Filtre pelo título do produto..."
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
