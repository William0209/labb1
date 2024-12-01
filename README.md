## Teoretiska resonemang

### Hur applikationen fungerar

Applikationen är en receptsökare där användare kan söka efter recept via ett sökfält. Receptdata hämtas från ett externt API och visas i en lista. Varje recept innehåller en titel och en beskrivning. Användare kan även lägga till recept i sina favoriter, vilket hanteras via en global state-hanterare.

### Användning av AI i utvecklingen

AI har använts för att optimera kodstrukturen, lösa problem effektivt och förbättra användargränssnittet. Det har inkluderat att föreslå lösningar för att hantera och rendera data, till exempel genom att förkorta långa beskrivningar, samtidigt som den grundliga funktionalitet bevaras.

# recept-sida

```sh
cd recept-sida
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
