import type { JewelryComponent } from "~/types";

import chain1 from "~/assets/components/necklace/chain-1.png";
import chain2 from "~/assets/components/necklace/chain-2.png";
import pendantRose from "~/assets/components/necklace/pendant-rose.png";
import pendantCross from "~/assets/components/necklace/pendant-cross.png";
import clasp1 from "~/assets/components/necklace/clasp-1.png";

import beads1 from "~/assets/components/bracelet/beads-1.png";
import charmStar from "~/assets/components/bracelet/charm-star.png";
import charmCross from "~/assets/components/bracelet/charm-cross.png";
import braceletClasp from "~/assets/components/bracelet/clasp-bracelet.png";

import earringLock from "~/assets/components/earrings/lock-english.png";
import earringHook from "~/assets/components/earrings/lock-hook.png";
import stoneOnyx from "~/assets/components/earrings/stone-onyx.png";
import stonePearl from "~/assets/components/earrings/stone-pearl.png";

import ringSilver from "~/assets/components/ring/ring-base-silver.png";
import ringGold from "~/assets/components/ring/ring-base-gold.png";
import ringOnyx from "~/assets/components/ring/stone-onyx.png";
import ringPearl from "~/assets/components/ring/stone-pearl.png";

export const necklaceComponents: JewelryComponent[] = [
  {
    id: 1,
    name: "Панцирная цепочка",
    category: "chain",
    price: 1500,
    image: chain1,
  },
  {
    id: 2,
    name: "Бархатный чокер",
    category: "chain",
    price: 900,
    image: chain2,
  },
  {
    id: 3,
    name: "Подвеска «Роза»",
    category: "pendant",
    price: 1200,
    image: pendantRose,
  },
  {
    id: 4,
    name: "Подвеска «Крест»",
    category: "pendant",
    price: 1500,
    image: pendantCross,
  },
  {
    id: 5,
    name: "Карабин",
    category: "clasp",
    price: 300,
    image: clasp1,
  },
];

export const braceletComponents: JewelryComponent[] = [
  {
    id: 10,
    name: "Бусины из оникса",
    category: "beads",
    price: 1200,
    image: beads1,
  },
  {
    id: 11,
    name: "Шарм «Звезда»",
    category: "charm",
    price: 700,
    image: charmStar,
  },
  {
    id: 12,
    name: "Висюлька «Крест»",
    category: "charm",
    price: 800,
    image: charmCross,
  },
  {
    id: 13,
    name: "Застёжка для браслета",
    category: "clasp",
    price: 400,
    image: braceletClasp,
  },
];

export const earringsComponents: JewelryComponent[] = [
  {
    id: 20,
    name: "Английский замок",
    category: "clasp",
    price: 900,
    image: earringLock,
  },
  {
    id: 21,
    name: "Швензы-крючки",
    category: "clasp",
    price: 500,
    image: earringHook,
  },
  {
    id: 22,
    name: "Камень оникс",
    category: "stone",
    price: 1000,
    image: stoneOnyx,
  },
  {
    id: 23,
    name: "Жемчужина",
    category: "stone",
    price: 1100,
    image: stonePearl,
  },
];

export const ringComponents: JewelryComponent[] = [
  {
    id: 30,
    name: "Основа серебро",
    category: "material",
    price: 2000,
    image: ringSilver,
  },
  {
    id: 31,
    name: "Основа золото",
    category: "material",
    price: 2500,
    image: ringGold,
  },
  {
    id: 32,
    name: "Оникс",
    category: "stone",
    price: 1200,
    image: ringOnyx,
  },
  {
    id: 33,
    name: "Жемчуг",
    category: "stone",
    price: 1500,
    image: ringPearl,
  },
];