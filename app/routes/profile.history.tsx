// app/routes/profile.history.tsx
import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function ProfileHistory() {
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
                  { href: '/profile/history', label: 'История заказов' },
                  { href: '/profile/favorites', label: 'Избранные сборки' },
                  { href: '/profile/settings', label: 'Настройки профиля' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-4 py-3 rounded transition ${
                      item.href === '/profile/history'
                        ? 'bg-brand-plum text-brand-white'
                        : 'text-brand-mauve hover:bg-brand-plum hover:text-brand-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* История */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl text-brand-mauve mb-8 font-serif">
                История заказов
              </h1>

              <div className="space-y-6">
                {[
                  {
                    id: 'Заказ № 1024',
                    date: '15.10.2023',
                    sum: '4 500 ₽',
                    status: 'В обработке',
                  },
                  {
                    id: 'Заказ № 1023',
                    date: '10.10.2023',
                    sum: '2 100 ₽',
                    status: 'Доставлен',
                  },
                ].map((order) => (
                  <div
                    key={order.id}
                    className="bg-brand-purple border border-brand-plum rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                  >
                    <div>
                      <h3 className="text-2xl text-brand-white mb-2 font-serif">
                        {order.id}
                      </h3>
                      <p className="text-brand-mauve">Дата: {order.date}</p>
                      <p className="text-brand-mauve">Сумма: {order.sum}</p>
                    </div>

                    <div className="md:text-right">
                      <span className="inline-block px-4 py-1 bg-brand-plum rounded-full text-sm text-brand-white mb-4">
                        {order.status}
                      </span>
                      <div>
                        <button className="border border-brand-mauve text-brand-mauve px-5 py-2 rounded hover:bg-brand-plum transition">
                          Детали заказа
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* если заказов нет */}
                {/* <p className="text-brand-mauve">У вас пока нет заказов.</p> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}