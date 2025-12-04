# 🔴 Pokédex

Una aplicación web de Pokédex construida con React y Vite que consume la [PokéAPI](https://pokeapi.co/) para mostrar información detallada de los Pokémon.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![SCSS](https://img.shields.io/badge/SCSS-1.94.2-CC6699?logo=sass)

## ✨ Características

- 📋 **Lista de Pokémon**: Visualiza los primeros 100 Pokémon con sus imágenes y tipos
- 🔍 **Búsqueda**: Filtra Pokémon por nombre en tiempo real
- 📱 **Modal de detalles**: Muestra información completa del Pokémon seleccionado:
  - Imagen oficial
  - Número en la Pokédex
  - Tipos
  - Peso y altura
  - Habilidades
  - Estadísticas base con barras visuales
- 🎨 **Colores por tipo**: Cada tipo de Pokémon tiene su color distintivo
- 📲 **Diseño responsive**: Adaptado para dispositivos móviles y desktop

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y servidor de desarrollo
- **SCSS** - Preprocesador CSS para estilos
- **PokéAPI** - API REST de datos de Pokémon

## 📁 Estructura del proyecto

```
Front/
├── src/
│   ├── components/
│   │   ├── Header/          # Barra de navegación con búsqueda
│   │   ├── PokemonCard/     # Tarjeta individual de Pokémon
│   │   ├── PokemonGrid/     # Grid de tarjetas de Pokémon
│   │   └── PokemonModal/    # Modal con detalles del Pokémon
│   ├── constants/
│   │   └── pokemonConstants # Constantes (colores por tipo, etc.)
│   ├── hooks/
│   │   └── usePokemon.js    # Hook personalizado para fetch de datos
│   ├── services/
│   │   └── pokemonService.js # Servicios de API
│   ├── App.jsx
│   ├── App.scss
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/iliestefa/PokeApi.git
cd PokeApi/Front
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173/PokeApi/`

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run deploy` | Genera build y despliega a GitHub Pages |

## 🌐 Demo

La aplicación está desplegada en GitHub Pages:

👉 [https://iliestefa.github.io/PokeApi](https://iliestefa.github.io/PokeApi)

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Hecho con ❤️ usando React y PokéAPI
