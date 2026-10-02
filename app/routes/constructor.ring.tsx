import { useState } from 'react';
import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import ConstructorCanvas from '~/components/ConstructorCanvas';
import ConstructorPanel from '~/components/ConstructorPanel';
import Button from '~/components/ui/Button';
import { useConstructor } from '~/hooks/useConstructor';
import { useCart } from '~/hooks/useCart';
import { ringComponents } from '~/data/constructorComponents';

const tabs = ['Материал', 'Камень', 'Размер', 'Габариты'];
const sizes = ['15.0', '15.5', '16.0', '16.5', '17.0', '17.5', '18.0', '18.5'];

export default function ConstructorRing() {
  const { selectedComponents, selectComponent, activeTab, setActiveTab, totalPrice } =
    useConstructor();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('16.5');

  const filteredItems = ringComponents.filter((item) => {
    if (!activeTab) return item.category === 'material';
    const tabMap: Record<string, string> = {
      'Материал': 'material',
      'Камень': 'stone',
      'Размер': 'size',
      'Габариты': 'shape',
    };
    return item.category === tabMap[activeTab];
  });

  const handleAddToCart = () => {
    addItem({
      id: Date.now(),
      name: `Авторское кольцо (размер ${selectedSize})`,
      price: totalPrice,
      quantity: 1,
    });
    alert('Добавлено в корзину!');
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl text-brand-mauve font-serif">Сборка Кольца</h1>
            <Link
              to="/constructor"
              className="text-brand-mauve border border-brand-plum px-6 py-2 rounded hover:bg-brand-plum transition"
            >
              ← Назад
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ConstructorCanvas 
                selectedComponents={selectedComponents} 
                shape="circle" 
              />
            </div>

            <div className="lg:col-span-2">
              {activeTab === 'Размер' && (
                <div className="bg-brand-purple border border-brand-plum rounded-lg p-6 mb-6">
                  <h3 className="text-xl text-brand-mauve mb-4">Выберите размер</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 rounded border ${
                          selectedSize === size
                            ? 'border-brand-mauve bg-brand-plum text-brand-white'
                            : 'border-brand-plum text-brand-mauve hover:border-brand-mauve'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <ConstructorPanel
                items={filteredItems}
                onSelect={selectComponent}
                selectedId={selectedComponents.find((c) => c.category === 'stone')?.id}
                tabs={tabs}
                activeTab={activeTab || 'Материал'}
                onTabChange={setActiveTab}
              />

              <div className="mt-8 bg-brand-purple border border-brand-plum rounded-lg p-6">
                <div className="flex justify-between items-center mb-6 text-2xl">
                  <span className="text-brand-white">Итого:</span>
                  <span className="text-brand-mauve">{totalPrice} ₽</span>
                </div>
                <Button onClick={handleAddToCart}>В корзину</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}