import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProductStatusBadge({ active }: { active: boolean }) {
  return (
    <Badge variant="outline">
      {active ? (
        <>
          <CheckCircle2Icon className="text-emerald-600 dark:text-emerald-400" />
          Ativo
        </>
      ) : (
        <>
          <XCircleIcon className="text-destructive" />
          Inativo
        </>
      )}
    </Badge>
  );
}
