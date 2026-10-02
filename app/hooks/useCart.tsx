import {
  createContext,
  useContext,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | null>(null);

function readCartFromStorage(): CartItem[] {
  // важно для SSR (в create-react-router бывает выполнение на сервере)
  if (typeof window === "undefined") return [];

  try {
    const saved = window.localStorage.getItem("cart");
    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    // минимальная валидация
    return parsed.filter((x): x is CartItem => {
      return (
        typeof x === "object" &&
        x !== null &&
        typeof (x as any).id === "number" &&
        typeof (x as any).name === "string" &&
        typeof (x as any).price === "number" &&
        typeof (x as any).quantity === "number"
      );
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readCartFromStorage);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === newItem.id);
      if (existing) {
        return prev.map((it) =>
          it.id === newItem.id
            ? { ...it, quantity: it.quantity + newItem.quantity }
            : it
        );
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, quantity } : it)));
  };

  const clearCart = () => setItems([]);

  const total = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [items]
  );

  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}