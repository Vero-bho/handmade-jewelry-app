import { useState } from 'react';
import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import ConstructorCanvas from '~/components/ConstructorCanvas';
import ConstructorPanel from '~/components/ConstructorPanel';
import Button from '~/components/ui/Button';
import { useConstructor } from '~/hooks/useConstructor';
import { useCart } from '~/hooks/useCart';
import { earringsComponents } from '~/data/constructorComponents';

const tabs = ['Застежка', 'Длина', 'Камень'];

export default function ConstructorEarrings() {
  const { selectedComponents, selectComponent, activeTab, setActiveTab, totalPrice } =
    useConstructor();
  const { addItem } = useCart();

  const filteredItems = earringsComponents.filter((item) => {
    if (!activeTab) return item.category === 'clasp';
    const tabMap: Record<string, string> = {
      'Застежка': 'clasp',
      'Длина': 'length',
      'Камень': 'stone',
    };
    return item.category === tabMap[activeTab];
  });

  const handleAddToCart = () => {
    addItem({
      id: Date.now(),
      name: 'Авторские серьги',
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
            <h1 className="text-4xl text-brand-mauve font-serif">Сборка Серёг</h1>
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
              <ConstructorPanel
                items={filteredItems}
                onSelect={selectComponent}
                selectedId={selectedComponents.find((c) => c.category === 'stone')?.id}
                tabs={tabs}
                activeTab={activeTab || 'Застежка'}
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