import type { JewelryComponent } from "~/types";

interface ComponentCardProps {
  item: JewelryComponent;
  selected?: boolean;
  onClick?: () => void;
}

export default function ComponentCard({ item, selected = false, onClick }: ComponentCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        p-4 rounded-lg border cursor-pointer transition
        ${selected 
          ? "border-brand-mauve bg-brand-plum" 
          : "border-brand-plum bg-brand-bg hover:border-brand-mauve"
        }
      `}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-24 object-contain mb-3"
        />
      )}
      
      <h4 className="text-lg text-brand-white text-center">{item.name}</h4>
      <p className="text-brand-mauve text-center text-sm">{item.price} ₽</p>
    </div>
  );
}