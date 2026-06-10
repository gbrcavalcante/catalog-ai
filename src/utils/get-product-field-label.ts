import type { Product } from "@/types/product.type";

const fieldLabels: Record<keyof Product, string> = {
  id: "ID",
  images: "Imagens",
  title: "Título",
  description: "Descrição",
  brand: "Marca",
  category: "Categoria",
  gender: "Gênero",
  original_price: "Preço original",
  price: "Preço",
  material: "Material",
  color_name: "Cor",
  active: "Status",
  meta_title: "Meta título",
  meta_description: "Meta descrição",
  tags: "Tags",
  created_at: "Criado em",
};

export function getProductFieldLabel(field: string): string {
  return fieldLabels[field as keyof Product] ?? field;
}
