//#region node_modules/.nitro/vite/services/ssr/assets/constants-CxX0vXmq.js
var APP_NAME = "RPG Fallen Gods";
var APP_TAGLINE = "O grimório da sua mesa de RPG";
var RACES = [
	"Humano",
	"Elfo",
	"Anão",
	"Orc",
	"Halfling",
	"Tiefling",
	"Draconato",
	"Meio-Elfo",
	"Meio-Orc",
	"Gnomo"
];
var CLASSES = [
	"Guerreiro",
	"Mago",
	"Ladino",
	"Clérigo",
	"Ranger",
	"Bárbaro",
	"Paladino",
	"Bardo",
	"Druida",
	"Feiticeiro",
	"Bruxo",
	"Monge"
];
var STATS = [
	{
		key: "strength",
		label: "Força",
		short: "FOR",
		hint: "Golpes, carga e poder bruto"
	},
	{
		key: "agility",
		label: "Agilidade",
		short: "AGI",
		hint: "Reflexo, furtividade e pontaria"
	},
	{
		key: "resistance",
		label: "Resistência",
		short: "RES",
		hint: "Fôlego, veneno e dor"
	},
	{
		key: "intelligence",
		label: "Inteligência",
		short: "INT",
		hint: "Magia, estudo e engenho"
	},
	{
		key: "presence",
		label: "Presença",
		short: "PRE",
		hint: "Carisma, intimidação e fé"
	}
];
var BODY_SLOTS = [
	{
		key: "cabeca",
		label: "Cabeça",
		icon: "helmet"
	},
	{
		key: "acessorio",
		label: "Acessório",
		icon: "ring"
	},
	{
		key: "torso",
		label: "Corpo",
		icon: "armor"
	},
	{
		key: "mao_direita",
		label: "Mão direita",
		icon: "sword"
	},
	{
		key: "mao_esquerda",
		label: "Mão esquerda",
		icon: "shield"
	},
	{
		key: "pernas",
		label: "Pernas",
		icon: "pants"
	},
	{
		key: "pe_direito",
		label: "Pé direito",
		icon: "boot"
	},
	{
		key: "pe_esquerdo",
		label: "Pé esquerdo",
		icon: "boot"
	}
];
var SLOT_LABEL = Object.fromEntries(BODY_SLOTS.map((s) => [s.key, s.label]));
var CATEGORIES = [
	{
		key: "elmo",
		label: "Elmo / Capacete",
		slots: ["cabeca"],
		where: "Cabeça"
	},
	{
		key: "armadura",
		label: "Armadura",
		slots: ["torso"],
		where: "Corpo"
	},
	{
		key: "calca",
		label: "Calça / Grevas",
		slots: ["pernas"],
		where: "Pernas"
	},
	{
		key: "arma",
		label: "Arma",
		slots: ["mao_direita", "mao_esquerda"],
		where: "Mãos"
	},
	{
		key: "escudo",
		label: "Escudo",
		slots: ["mao_direita", "mao_esquerda"],
		where: "Mãos"
	},
	{
		key: "bota",
		label: "Botas",
		slots: ["pe_direito", "pe_esquerdo"],
		where: "Pés"
	},
	{
		key: "acessorio",
		label: "Acessório",
		slots: ["acessorio"],
		where: "Acessório"
	}
];
var CATEGORY = Object.fromEntries(CATEGORIES.map((c) => [c.key, c]));
function slotAccepts(category, slot) {
	return CATEGORY[category]?.slots.includes(slot) ?? false;
}
var RARITIES = [
	{
		key: "comum",
		label: "Comum",
		text: "text-rarity-comum",
		ring: "ring-rarity-comum/40",
		glow: ""
	},
	{
		key: "incomum",
		label: "Incomum",
		text: "text-rarity-incomum",
		ring: "ring-rarity-incomum/60",
		glow: ""
	},
	{
		key: "raro",
		label: "Raro",
		text: "text-rarity-raro",
		ring: "ring-rarity-raro/70",
		glow: "shadow-[0_0_14px_-4px_var(--color-rarity-raro)]"
	},
	{
		key: "epico",
		label: "Épico",
		text: "text-rarity-epico",
		ring: "ring-rarity-epico/80",
		glow: "shadow-[0_0_16px_-3px_var(--color-rarity-epico)]"
	},
	{
		key: "lendario",
		label: "Lendário",
		text: "text-rarity-lendario",
		ring: "ring-rarity-lendario",
		glow: "rarity-legendary"
	}
];
var RARITY = Object.fromEntries(RARITIES.map((r) => [r.key, r]));
var ITEM_KINDS = [{
	key: "item",
	label: "Itens"
}, {
	key: "belonging",
	label: "Pertences"
}];
//#endregion
export { CATEGORY as a, RACES as c, SLOT_LABEL as d, STATS as f, CATEGORIES as i, RARITIES as l, APP_TAGLINE as n, CLASSES as o, slotAccepts as p, BODY_SLOTS as r, ITEM_KINDS as s, APP_NAME as t, RARITY as u };
