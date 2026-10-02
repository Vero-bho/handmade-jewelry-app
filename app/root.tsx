import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./hooks/useCart";

export default function Root() {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <CartProvider>
          <div className="min-h-screen bg-brand-bg text-brand-white font-serif flex flex-col">
            <Header />

            <main className="flex-1">
              <Outlet />
            </main>

            <Footer />
          </div>
        </CartProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}