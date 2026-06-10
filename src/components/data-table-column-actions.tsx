import type { Product } from "@/types/product.type";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

import {
  ClipboardCopyIcon,
  EyeIcon,
  MoreHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DataTableColumnActions({ product }: { product: Product }) {
  const { copy } = useCopyToClipboard();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <span className="sr-only">Abrir menu</span>
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => copy(product.id)}>
          <ClipboardCopyIcon />
          Copiar ID
        </DropdownMenuItem>
        <DropdownMenuItem>
          <EyeIcon />
          Ver detalhes
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilIcon />
          Editar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
