import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-brand-purple border-b border-brand-plum">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="text-3xl text-brand-white tracking-widest flex items-center gap-3">
          <span className="text-5xl text-brand-mauve">𝒩</span>
          Noir Bijoux
        </Link>

        <div className="flex gap-8 text-xl">
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? "text-brand-white" : "text-brand-mauve hover:text-brand-white"
            }
          >
            Каталог
          </NavLink>

          <NavLink
            to="/constructor"
            className={({ isActive }) =>
              isActive ? "text-brand-white" : "text-brand-mauve hover:text-brand-white"
            }
          >
            Конструктор
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-brand-white" : "text-brand-mauve hover:text-brand-white"
            }
          >
            О мастере
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-brand-white" : "text-brand-mauve hover:text-brand-white"
            }
          >
            Корзина
          </NavLink>
        </div>
      </nav>
    </header>
  );
}