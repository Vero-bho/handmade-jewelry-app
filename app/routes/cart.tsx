import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Button from '~/components/ui/Button';
import { useCart } from '~/hooks/useCart';

export default function Cart() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-bg flex flex-col">
        <Header />
        <main className="flex-1 px-8 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-brand-mauve mb-6 font-serif">Корзина пуста</h1>
            <p className="text-xl text-brand-white mb-12">
              Выберите украшения из каталога или создайте в конструкторе
            </p>
            <Link to="/catalog" className="inline-block">
              <Button>Перейти в каталог</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-brand-mauve mb-12 font-serif">Ваша корзина</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-brand-purple border border-brand-plum rounded-lg overflow-hidden">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-6 border-b border-dashed border-brand-plum"
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl text-brand-white mb-2 font-serif">
                        {item.name}
                      </h3>
                      <p className="text-brand-mauve text-xl">{item.price} ₽</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 px-3 py-2 bg-brand-bg border border-brand-plum text-brand-white rounded text-center"
                      />
                      <span className="text-brand-mauve text-xl w-24 text-right">
                        {item.price * item.quantity} ₽
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-brand-mauve hover:text-brand-white text-2xl"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-brand-purple border border-brand-plum rounded-lg p-8">
                <h2 className="text-3xl text-brand-mauve mb-8 font-serif">Итого</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-xl">
                    <span className="text-brand-white">Товары:</span>
                    <span className="text-brand-mauve">{total} ₽</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="text-brand-white">Доставка:</span>
                    <span className="text-brand-mauve">0 ₽</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-brand-plum pt-6 mb-8">
                  <div className="flex justify-between text-2xl">
                    <span className="text-brand-white">К оплате:</span>
                    <span className="text-brand-mauve">{total} ₽</span>
                  </div>
                </div>

                <Link to="/checkout" className="block mb-4">
                  <Button>Оформить заказ</Button>
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full border border-brand-mauve text-brand-mauve py-3 rounded text-xl hover:bg-brand-plum transition"
                >
                  Очистить корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}