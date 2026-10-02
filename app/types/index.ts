export type JewelryType =
  | "Колье"
  | "Браслет"
  | "Серьги"
  | "Кольцо";

export type ComponentCategory =
  | "chain"
  | "pendant"
  | "clasp"
  | "length"
  | "beads"
  | "charm"
  | "stone"
  | "material"
  | "size"
  | "shape";

export interface CatalogProduct {
  id: number;
  name: string;
  type: JewelryType;
  material: string;
  price: number;
  image: string;
}

export interface JewelryComponent {
  id: number;
  name: string;
  category: ComponentCategory;
  price: number;
  image?: string;
}

export interface ConstructorBuild {
  jewelryType: JewelryType;
  selectedComponents: JewelryComponent[];
  totalPrice: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface OrderData {
  customerName: string;
  phone: string;
  deliveryType: "Самовывоз" | "Курьер" | "Пункт выдачи";
  address?: string;
  total: number;
}