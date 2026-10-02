import { useState, useMemo } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import ProductCard from '~/components/ProductCard';
import Button from '~/components/ui/Button';
import { catalogProducts } from '~/data/catalog';

export default function Catalog() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Колье']);
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
    return catalogProducts.filter((product) => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
      const materialMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
      return typeMatch && materialMatch;
    });
  }, [selectedTypes, selectedMaterials]);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl text-brand-mauve mb-12 font-serif">Каталог изделий</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Фильтры */}
            <aside className="bg-brand-purple border border-brand-plum rounded-lg p-8 h-fit">
              <h2 className="text-2xl text-brand-mauve mb-6 font-serif">Фильтры</h2>

              {/* Тип изделия */}
              <div className="mb-8 pb-8 border-b border-dashed border-brand-plum">
                <h4 className="text-xl text-brand-mauve mb-4 font-serif">Тип изделия</h4>
                {['Колье', 'Серьги', 'Браслеты', 'Кольца'].map((type) => (
                  <label key={type} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                      className="w-5 h-5 accent-brand-plum"
                    />
                    <span className="text-brand-white">{type}</span>
                  </label>
                ))}
              </div>

              {/* Материал */}
              <div className="mb-8">
                <h4 className="text-xl text-brand-mauve mb-4 font-serif">Материал</h4>
                {['Серебро 925', 'Ювелирный сплав', 'Медь'].map((material) => (
                  <label key={material} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material)}
                      onChange={() => toggleMaterial(material)}
                      className="w-5 h-5 accent-brand-plum"
                    />
                    <span className="text-brand-white">{material}</span>
                  </label>
                ))}
              </div>

              <Button>Применить</Button>
            </aside>

            {/* Товары */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-2xl text-brand-mauve">
                    По выбранным фильтрам товаров не найдено
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}