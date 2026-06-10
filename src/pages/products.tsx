import type { Product } from "@/types/product.type";
import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import productImage from "@/assets/imgi_15_02732251.jpg";

function getData(): Product[] {
  return [
    {
      id: "728ed52f",
      images: [productImage],
      title: "Tênis Running Pro",
      description:
        "Tênis de corrida com amortecimento avançado e solado de borracha de alta aderência.",
      brand: "Nike",
      category: "Calçados",
      gender: "Masculino",
      original_price: 699.9,
      price: 549.9,
      material: "Mesh respirável",
      color_name: "Preto",
      active: true,
      meta_title: "Tênis Running Pro - Nike",
      meta_description:
        "Tênis de corrida masculino Nike com amortecimento avançado.",
      tags: ["corrida", "esporte", "nike"],
      created_at: "2024-06-01T10:00:00Z",
    },
  ];
}

export function Products() {
  const data = getData();

  return (
    <section className="flex flex-col gap-6">
      <header>
        <TypographyH1>Produtos</TypographyH1>
        <TypographyLead>
          Gerencie o catálogo de produtos — envie uma foto e a IA preenche o
          cadastro automaticamente. Revise, edite ou exclua quando necessário.
        </TypographyLead>
      </header>

      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
