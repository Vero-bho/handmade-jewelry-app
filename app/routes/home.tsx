import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Button from '~/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-6xl w-full text-center">
          {/* Логотип и название */}
          <div className="mb-12">
            <div className="text-9xl text-brand-mauve mb-4 font-serif">𝒩</div>
            <h1 className="text-6xl text-brand-white font-serif mb-4">
              Noir Bijoux
            </h1>
            <p className="text-3xl text-brand-mauve font-serif">
              Авторская бижутерия ручной работы
            </p>
          </div>

          {/* Описание */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-brand-purple border border-brand-plum rounded-2xl p-8">
              <h2 className="text-3xl text-brand-mauve mb-4 font-serif">
                Каталог
              </h2>
              <p className="text-brand-white mb-8 leading-relaxed text-xl">
                Изучите нашу коллекцию уникальных украшений ручной работы.
                Каждое изделие создано с любовью и вниманием к деталям.
              </p>
              <Link to="/catalog" className="block">
                <Button>Перейти в каталог</Button>
              </Link>
            </div>

            <div className="bg-brand-purple border border-brand-plum rounded-2xl p-8">
              <h2 className="text-3xl text-brand-mauve mb-4 font-serif">
                Конструктор
              </h2>
              <p className="text-brand-white mb-8 leading-relaxed text-xl">
                Создайте свое уникальное украшение, выбирая компоненты
                и комбинируя их по собственному вкусу.
              </p>
              <Link to="/constructor" className="block">
                <Button>Начать создание</Button>
              </Link>
            </div>
          </div>

          {/* Преимущества */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl text-brand-mauve mb-2 font-serif">
                Ручная работа
              </h3>
              <p className="text-brand-white">
                Каждое украшение создано вручную мастером
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl text-brand-mauve mb-2 font-serif">
                Индивидуальность
              </h3>
              <p className="text-brand-white">
                Дизайнируйте украшение согласно вашему стилю
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl text-brand-mauve mb-2 font-serif">
                Качество
              </h3>
              <p className="text-brand-white">
                Только лучшие материалы и фурнитура
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-plum border border-brand-mauve rounded-2xl p-12">
            <h2 className="text-4xl text-brand-white mb-4 font-serif">
              Готовы творить?
            </h2>
            <p className="text-xl text-brand-mauve mb-8">
              Выберите готовое изделие или создайте свое в конструкторе
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/catalog" className="flex-1 max-w-xs">
                <Button>Каталог</Button>
              </Link>
              <Link to="/constructor" className="flex-1 max-w-xs">
                <Button variant="outline">Конструктор</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}