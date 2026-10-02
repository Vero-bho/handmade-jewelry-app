// app/routes/profile.settings.tsx
import { useState } from 'react';
import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function ProfileSettings() {
  const [name, setName] = useState('Ольга');
  const [phone, setPhone] = useState('+7 999 000-00-00');
  const [email, setEmail] = useState('olga@mail.com');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сохранено!');
  };

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
                      item.href === '/profile/settings'
                        ? 'bg-brand-plum text-brand-white'
                        : 'text-brand-mauve hover:bg-brand-plum hover:text-brand-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Настройки */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl text-brand-mauve mb-8 font-serif">
                Настройки профиля
              </h1>

              <form
                onSubmit={handleSubmit}
                className="bg-brand-purple border border-brand-plum rounded-lg p-8 max-w-3xl"
              >
                <div className="flex items-center gap-6 pb-8 mb-8 border-b border-dashed border-brand-plum">
                  <div className="w-24 h-24 bg-brand-plum rounded-full flex items-center justify-center text-4xl text-brand-mauve border-2 border-brand-mauve">
                    О
                  </div>

                  <button
                    type="button"
                    className="border border-brand-mauve text-brand-mauve px-5 py-2 rounded hover:bg-brand-plum transition"
                  >
                    Сменить фото
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-brand-mauve mb-2">Имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded text-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-mauve mb-2">Телефон</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded text-lg outline-none"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-brand-mauve mb-2">E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded text-lg outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-brand-mauve text-brand-bg px-8 py-3 rounded text-xl hover:bg-brand-white transition"
                >
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}