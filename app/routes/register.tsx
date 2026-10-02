import { useState } from 'react';
import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Button from '~/components/ui/Button';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    alert('Аккаунт создан! Добро пожаловать в Noir Bijoux!');
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-8">
        <div className="bg-brand-purple border border-brand-plum rounded-lg p-12 max-w-md w-full">
          <h1 className="text-4xl text-brand-mauve mb-8 font-serif text-center">
            Регистрация
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-brand-white text-lg mb-2">Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded text-lg placeholder-brand-mauve"
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <label className="block text-brand-white text-lg mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded text-lg placeholder-brand-mauve"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="block text-brand-white text-lg mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded text-lg placeholder-brand-mauve"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-brand-white text-lg mb-2">
                Подтвердить пароль
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-brand-bg border border-brand-plum text-brand-white rounded text-lg placeholder-brand-mauve"
                placeholder="••••••••"
              />
            </div>

            <Button>Зарегистрироваться</Button>
          </form>

          <p className="text-center text-brand-white mt-6">
            Уже есть аккаунт?{' '}
            <Link to="/login" className="text-brand-mauve hover:underline">
              Войти
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}