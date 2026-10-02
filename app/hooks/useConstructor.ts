import { useState, useMemo } from 'react';
import type { JewelryComponent } from '~/types';

export function useConstructor(initialComponents: JewelryComponent[] = []) {
  const [selectedComponents, setSelectedComponents] = useState<JewelryComponent[]>(initialComponents);
  const [activeTab, setActiveTab] = useState<string>('');

  const selectComponent = (component: JewelryComponent) => {
    setSelectedComponents((prev) => {
      const exists = prev.find((c) => c.category === component.category);
      if (exists) {
        return prev.map((c) =>
          c.category === component.category ? component : c
        );
      }
      return [...prev, component];
    });
  };

  const removeComponent = (category: string) => {
    setSelectedComponents((prev) =>
      prev.filter((c) => c.category !== category)
    );
  };

  const totalPrice = useMemo(() => {
    return selectedComponents.reduce((sum, comp) => sum + comp.price, 0);
  }, [selectedComponents]);

  return {
    selectedComponents,
    selectComponent,
    removeComponent,
    activeTab,
    setActiveTab,
    totalPrice,
  };
}