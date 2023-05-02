const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// Pokemon id divisible by 3
const theTripleToons = pokémon.filter((p) => p.id % 3 === 0);

// Pokemon type = fire
const fireFellas = pokémon.filter(
  (p) => p.types[0] == "fire" || p.types[1] == "fire"
);

// Pokemon with 2 types
const twoTypez = pokémon.filter((p) => p.types.length > 1);

// Pokemon, but only names
const justNames = pokémon.map((p) => p.name);

// Pokemon with IDs over 99, but only names
const over99 = pokémon.filter((p) => p.id > 99);
const namesAndOver99 = over99.map((p) => p.name);

// Pokemon with ONLY poison type, but only names
const toxicToons = pokémon.filter(
  (p) => p.types[0] == "poison" && p.types.length == 1
);
const toxicToonsNames = toxicToons.map((p) => p.name);

// Pokemon with flying as their second type, but only their first type
const infrequentFliers = pokémon.filter((p) => p.types[1] == "flying");
const infrequentFliersFirstType = infrequentFliers.map((p) => p.types[0]);

// Pokemon with normal type
const normalNerds = pokémon.filter(
  (p) => p.types[0] == "normal" || p.types[1] == "normal"
);

console.log(normalNerds.length);
