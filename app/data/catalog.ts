import type { CatalogProduct } from "~/types";

import choker from "~/assets/catalog/choker.webp";
import sergi_shvenzi_assim_gothic from "~/assets/catalog/sergi_shvenzi_assim_gothic.jpg";

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1,
    name: "Колье «Ночная роза»",
    type: "Колье",
    material: "Серебро 925",
    price: 4500,
    image: choker,
  },
  {
    id: 2,
    name: "Серьги с ониксом",
    type: "Серьги",
    material: "Ювелирный сплав",
    price: 2800,
    image: sergi_shvenzi_assim_gothic,
  },
];