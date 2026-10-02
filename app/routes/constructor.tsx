import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const items = [
  { name: 'Колье', icon: '𝒩', path: '/constructor/necklace', desc: 'Создайте уникальное ожерелье' },
  { name: 'Браслет', icon: '𝒷', path: '/constructor/bracelet', desc: 'Соберите браслет из звеньев' },
  { name: 'Кольцо', icon: '𝒪', path: '/constructor/ring', desc: 'Сконструируйте кольцо' },
  { name: 'Серьги', icon: 'ℯ', path: '/constructor/earrings', desc: 'Создайте асимметричные серьги' },
];

export default function ConstructorStart() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-5xl text-brand-white mb-4 font-serif">
            С чего начнем творить?
          </h1>
          <p className="text-2xl text-brand-mauve mb-16">
            Выберите тип изделия, чтобы перейти к визуальной сборке
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="bg-brand-purple border border-brand-plum hover:border-brand-mauve hover:bg-brand-plum rounded-lg p-8 h-96 flex flex-col items-center justify-center transition transform hover:-translate-y-1"
              >
                <div className="text-7xl text-brand-mauve mb-6">{item.icon}</div>
                <h2 className="text-3xl text-brand-white mb-4 font-serif">{item.name}</h2>
                <p className="text-brand-mauve text-lg">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}