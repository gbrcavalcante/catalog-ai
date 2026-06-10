import { useState } from "react";
import { toast } from "sonner";
import { CheckIcon } from "lucide-react";

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Copiado para a área de transferência", {
        icon: <CheckIcon />,
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Falha ao copiar para a área de transferência", {
        icon: <CheckIcon />,
      });
    }
  };

  return { copy, isCopied };
}
