// app/hooks/useFilters.ts
import { useState, useMemo } from 'react';
import type { CatalogProduct } from '~/types';
import { catalogProducts } from '~/data/catalog';

export function useFilters() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const filteredProducts = useMemo(() => {
    if (selectedTypes.length === 0 && selectedMaterials.length === 0) {
      return catalogProducts;
    }
    return catalogProducts.filter((product) => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
      const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
      return typeMatch && materialMatch;
    });
  }, [selectedTypes, selectedMaterials]);
  
  const allTypes = useMemo(() => [...new Set(catalogProducts.map(p => p.type))], []);
  const allMaterials = useMemo(() => [...new Set(catalogProducts.map(p => p.material))], []);


  return {
    selectedTypes,
    toggleType,
    allTypes,
    selectedMaterials,
    toggleMaterial,
    allMaterials,
    filteredProducts,
  };
}