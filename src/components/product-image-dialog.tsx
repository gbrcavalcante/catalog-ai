import imagePlaceholder from "@/assets/image_placeholder.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductImageProps {
  src?: string;
  alt?: string;
}

export function ProductImageDialog({
  src,
  alt = "Imagem do produto",
}: ProductImageProps) {
  if (!src) {
    return (
      <img
        src={imagePlaceholder}
        alt={alt}
        className="h-10 w-10 rounded-md object-cover"
      />
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto w-auto cursor-zoom-in rounded-md p-0"
        >
          <img
            src={src}
            alt={alt}
            className="h-10 w-10 rounded-md object-cover"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl!">
        <div className="mt-6">
          <img
            src={src}
            alt={alt}
            className="max-h-[80vh] max-w-full rounded-md object-contain"
          />
        </div>
        <DialogFooter className="flex justify-center!">{alt}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
