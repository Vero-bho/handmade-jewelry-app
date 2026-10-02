import type { CatalogProduct } from "~/types";
import Button from "./ui/Button";

interface ProductCardProps {
  product: CatalogProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-brand-purple/40 border border-brand-plum rounded-2xl overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between gap-4 mb-3">
          <h3 className="text-2xl text-brand-white">
            {product.name}
          </h3>

          <span className="text-xl text-brand-mauve whitespace-nowrap">
            {product.price} ₽
          </span>
        </div>

        <p className="text-brand-mauve mb-5">
          {product.type} · {product.material}
        </p>

        <Button className="w-full">В корзину</Button>
      </div>
    </div>
  );
}