import { useState } from 'react';
import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Button from '~/components/ui/Button';
import { useCart } from '~/hooks/useCart';

export default function Checkout() {
  const { total, items, clearCart } = useCart();
  const [delivery, setDelivery] = useState('pickup');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заказ! Мы свяжемся с вами в течение 24 часов.');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-brand-mauve mb-12 font-serif">Оформление заказа</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Способ получения */}
                <div className="bg-brand-purple border border-brand-plum rounded-lg p-6">
                  <h2 className="text-2xl text-brand-mauve mb-6 font-serif">
                    Способ получения
                  </h2>
                  <div className="space-y-4">
                    {[
                      { id: 'pickup', label: 'Самовывоз' },
                      { id: 'courier', label: 'Курьер' },
                      { id: 'pvz', label: 'Пункт выдачи' },
                    ].map((option) => (
                      <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={delivery === option.id}
                          onChange={(e) => setDelivery(e.target.value)}
                          className="w-5 h-5"
                        />
                        <span className="text-xl text-brand-white">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Контактные данные */}
                <div className="bg-brand-purple border border-brand-plum rounded-lg p-6">
                  <h2 className="text-2xl text-brand-mauve mb-6 font-serif">
                    Контактные данные
                  </h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded placeholder-brand-mauve text-lg"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded placeholder-brand-mauve text-lg"
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded placeholder-brand-mauve text-lg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-mauve text-brand-bg py-4 rounded text-2xl font-serif cursor-pointer hover:bg-brand-white transition"
                >
                  Подтвердить заказ
                </button>
              </form>
            </div>

            {/* Сумма заказа */}
            <div className="bg-brand-purple border border-brand-plum rounded-lg p-6 h-fit">
              <h2 className="text-2xl text-brand-mauve mb-6 font-serif">Ваш заказ</h2>

              <div className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-lg">
                    <span className="text-brand-white">{item.name}</span>
                    <span className="text-brand-mauve">{item.price * item.quantity} ₽</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-brand-plum pt-4">
                <div className="flex justify-between text-2xl">
                  <span className="text-brand-white">К оплате:</span>
                  <span className="text-brand-mauve">{total} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}