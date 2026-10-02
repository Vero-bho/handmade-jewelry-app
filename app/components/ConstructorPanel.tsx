import { useState } from "react";
import type { JewelryComponent } from "~/types";
import ComponentCard from "./ComponentCard";

interface ConstructorPanelProps {
  items: JewelryComponent[];
  onSelect: (item: JewelryComponent) => void;
  selectedId?: number;
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ConstructorPanel({
  items,
  onSelect,
  selectedId,
  tabs,
  activeTab,
  onTabChange,
}: ConstructorPanelProps) {
  return (
    <div className="bg-brand-purple border border-brand-plum rounded-2xl p-6">
      {/* Вкладки */}
      <div className="flex gap-3 overflow-x-auto pb-4 border-b border-brand-plum mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              px-4 py-2 whitespace-nowrap transition
              ${activeTab === tab
                ? "text-brand-white border-b-2 border-brand-mauve"
                : "text-brand-mauve hover:text-brand-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Сетка компонентов */}
      <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[500px] pr-2">
        {items.map((item) => (
          <ComponentCard
            key={item.id}
            item={item}
            selected={selectedId === item.id}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}