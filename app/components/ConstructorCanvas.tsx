import type { JewelryComponent } from "~/types";

interface ConstructorCanvasProps {
  selectedComponents: JewelryComponent[];
  size?: { width: number; height: number };
  shape?: "vertical" | "horizontal" | "circle";
}

export default function ConstructorCanvas({
  selectedComponents,
  size = { width: 500, height: 500 },
  shape = "vertical",
}: ConstructorCanvasProps) {
  const getContainerClasses = () => {
    switch (shape) {
      case "horizontal":
        return "w-[600px] h-[300px] rounded-[150px]";
      case "circle":
        return "w-[450px] h-[450px] rounded-full";
      default:
        return "w-[450px] h-[550px] rounded-[20px]";
    }
  };

  return (
    <div className={`
      relative bg-brand-bg border-2 border-dashed border-brand-mauve 
      flex items-center justify-center ${getContainerClasses()}
    `}>
      {selectedComponents.length === 0 ? (
        <p className="text-brand-mauve text-center">
          Выберите компоненты для визуализации
        </p>
      ) : (
        selectedComponents.map((component, index) => (
          component.image && (
            <img
              key={component.id}
              src={component.image}
              alt={component.name}
              className="absolute w-full h-full object-contain"
              style={{ zIndex: index }}
            />
          )
        ))
      )}
    </div>
  );
}