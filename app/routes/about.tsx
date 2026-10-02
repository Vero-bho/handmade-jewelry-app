import { Link } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Button from '~/components/ui/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Фото */}
            <div className="relative">
              <div className="bg-brand-purple border-2 border-brand-mauve rounded-2xl w-96 h-96 flex items-center justify-center">
                <div className="text-brand-mauve text-2xl text-center">
                  Фото мастера<br/>
                  (800x800px)
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 border border-brand-plum w-96 h-96 rounded-2xl"></div>
            </div>

            {/* Текст */}
            <div>
              <h1 className="text-5xl text-brand-mauve mb-8 font-serif">
                Искусство в каждой детали
              </h1>

              <p className="text-xl text-brand-white mb-6 leading-relaxed">
                Приветствую! Я создаю авторскую бижутерию ручной работы, вдохновляясь
                готической эстетикой, винтажным стилем и природными мотивами. Noir
                Bijoux — это не просто украшения, это способ выразить свою
                индивидуальность.
              </p>

              <div className="bg-brand-plum border-l-4 border-brand-mauve p-6 my-8">
                <p className="text-2xl text-brand-white italic">
                  "Украшение должно отражать душу своего владельца, быть его талисманом
                  и продолжением характера."
                </p>
              </div>

              <p className="text-3xl text-brand-white mb-12 tracking-wider">
                С любовью,<br/>
                <span className="text-brand-mauve">Валерия</span>
              </p>

              <Link to="/constructor" className="inline-block">
                <Button>Перейти в конструктор</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}