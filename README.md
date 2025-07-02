# Portfolio Website

A personal portfolio website built with **Vue 3**, **TypeScript**, and **Vite**. This site showcases projects and exhibits, and is designed as a modern, responsive Single Page Application (SPA).

## Features

- ⚡️ Fast development with Vite
- 🖼️ Project and exhibit showcase pages
- 📦 Vue 3 with `<script setup>` SFCs
- 🛠️ TypeScript for type safety
- 📁 Organized file structure for scalability

## Project Structure

```
portfolio/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # Reusable Vue components
│   ├── views/             # Page-level Vue components
│   ├── router/            # Vue Router setup
│   ├── types/             # TypeScript type definitions
│   ├── App.vue            # Root component
│   └── main.ts            # App entry point
├── package.json
├── vite.config.ts
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Adding Projects/Exhibits

- Add your project or exhibit data in the appropriate files under `src/types/` and `src/data/`.
- Update or create new components in `src/components/` and views in `src/views/` as needed.

## License

[MIT](LICENSE)

---

Made with ❤️ using Vue 3 + Vite + TypeScript.
