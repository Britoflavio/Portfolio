# Portfolio de Flavio Brito

Portfolio personal construido con React y Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Vercel

1. Sube el proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. En Vercel, selecciona **Add New Project** y conecta el repositorio.
3. Vercel detectará Vite. La configuración queda definida en `vercel.json`:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Haz clic en **Deploy**.

Para publicar el CV, agrega el archivo `CV-Flavio-Brito.pdf` dentro de `public/`. El botón existente lo servirá automáticamente en producción.
