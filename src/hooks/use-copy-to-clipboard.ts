import { useState } from "react";
import { toast } from "sonner";

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Copiado para a área de transferência");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Falha ao copiar para a área de transferência");
    }
  };

  return { copy, isCopied };
}
