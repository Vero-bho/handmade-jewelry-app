import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function Profile() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Сайдбар */}
            <aside className="bg-brand-purple border border-brand-plum rounded-lg p-6 h-fit">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-brand-plum rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  О
                </div>
                <h2 className="text-2xl text-brand-white mb-1 font-serif">Ольга</h2>
                <p className="text-brand-mauve">olga@mail.com</p>
              </div>

              <nav className="space-y-2">
                {[
                  { href: '/profile/history', label: 'История заказов' },
                  { href: '/profile/favorites', label: 'Избранные сборки' },
                  { href: '/profile/settings', label: 'Настройки профиля' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-3 text-brand-mauve hover:bg-brand-plum hover:text-brand-white rounded transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <button className="w-full mt-6 border border-brand-mauve text-brand-mauve py-3 rounded hover:bg-brand-plum hover:text-brand-white transition">
                Выйти
              </button>
            </aside>

            {/* Основной контент */}
            <div className="lg:col-span-3">
              <div className="bg-brand-purple border border-brand-plum rounded-lg p-8">
                <h1 className="text-4xl text-brand-mauve mb-6 font-serif">
                  История заказов
                </h1>

                <div className="space-y-4">
                  {[
                    {
                      id: '#1024',
                      date: '15.10.2023',
                      sum: '4 500 ₽',
                      status: 'Доставлен',
                    },
                    {
                      id: '#1023',
                      date: '10.10.2023',
                      sum: '2 100 ₽',
                      status: 'В пути',
                    },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex justify-between items-center border-b border-dashed border-brand-plum pb-4"
                    >
                      <div>
                        <h3 className="text-xl text-brand-white mb-2">{order.id}</h3>
                        <p className="text-brand-mauve">Дата: {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl text-brand-mauve mb-2">{order.sum}</p>
                        <p
                          className={`text-lg ${
                            order.status === 'Доставлен'
                              ? 'text-green-400'
                              : 'text-brand-mauve'
                          }`}
                        >
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
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