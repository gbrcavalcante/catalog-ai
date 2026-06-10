import { BotIcon } from "lucide-react";

export function Logo() {
  return (
    <>
      <BotIcon className="size-5!" />
      <span className="text-base font-semibold bg-linear-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
        Catalog AI
      </span>
    </>
  );
}
