import { useState } from 'react';
import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Button from '~/components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Вы вошли в аккаунт!');
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-8">
        <div className="bg-brand-purple border border-brand-plum rounded-lg p-12 max-w-md w-full">
          <h1 className="text-4xl text-brand-mauve mb-8 font-serif text-center">Вход</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <Button>Войти</Button>
          </form>

          <p className="text-center text-brand-white mt-6">
            Нет аккаунта?{' '}
            <Link to="/register" className="text-brand-mauve hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}