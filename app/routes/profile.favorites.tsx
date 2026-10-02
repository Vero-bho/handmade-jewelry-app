import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function ProfileFavorites() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Сайдбар */}
            <aside className="bg-brand-purple border border-brand-plum rounded-lg p-6 h-fit">
              <nav className="space-y-2">
                {[
                  { href: '/profile', label: 'История заказов' },
                  { href: '/profile/favorites', label: 'Избранные сборки' },
                  { href: '/profile/settings', label: 'Настройки профиля' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-4 py-3 rounded transition ${
                      item.href === '/profile/favorites'
                        ? 'bg-brand-plum text-brand-white'
                        : 'text-brand-mauve hover:bg-brand-plum hover:text-brand-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Сборки */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl text-brand-mauve mb-8 font-serif">
                Избранные сборки
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Мой чокер',
                    material: 'Основа: Бархат\nВставка: Крест',
                    price: '2 100 ₽',
                  },
                  {
                    name: 'Вечерний набор',
                    material: 'Основа: Серебро 925\nВставка: Оникс',
                    price: '5 400 ₽',
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="bg-brand-purple border border-brand-plum rounded-lg p-6"
                  >
                    <div className="w-full h-48 bg-brand-plum mb-4 rounded flex items-center justify-center text-brand-mauve">
                      Эскиз
                    </div>
                    <h3 className="text-2xl text-brand-white mb-2 font-serif">
                      {item.name}
                    </h3>
                    <p className="text-brand-mauve mb-4">{item.material}</p>
                    <p className="text-2xl text-brand-mauve mb-4">{item.price}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-brand-mauve text-brand-bg py-2 rounded hover:bg-brand-white transition">
                        В корзину
                      </button>
                      <button className="flex-1 border border-brand-mauve text-brand-mauve py-2 rounded hover:bg-brand-plum transition">
                        Изменить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}