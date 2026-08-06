# Misión Conectar: Escape Room Tecnológico

Demo educativo estático para aprender fundamentos de infraestructura de redes mediante gamificación y aprendizaje basado en retos. Está construido sobre la arquitectura de Astro Kepler con Astro 7, TypeScript y Tailwind CSS 4.

## Experiencia

- Siete misiones de aprendizaje, desde diagnóstico básico hasta diseño de infraestructura.
- **Detective IP** completamente funcional: cinco preguntas, validación inmediata, pistas limitadas, puntuación, barra de progreso, temporizador e insignia.
- Persistencia local mediante `localStorage`, sin cuentas, backend ni recopilación de datos.
- Panel de progreso, ranking demostrativo, insignias, laboratorios, recursos y preguntas frecuentes.
- Interfaz responsive, navegación por teclado, modo claro/oscuro y animaciones respetuosas de `prefers-reduced-motion`.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm ci
npm run dev
```

Verificación de tipos y compilación:

```bash
npm run check
npm run build
```

La salida estática se genera en `dist/`.

## GitHub Pages

El proyecto está configurado para `https://walterjoelcode.github.io/EscapeRoom/`:

- `site: "https://walterjoelcode.github.io"`
- `base: "/EscapeRoom"`
- despliegue automático desde `main` mediante `.github/workflows/deploy.yml`
- instalación reproducible con `npm ci`

En GitHub, abre **Settings → Pages → Build and deployment** y selecciona **GitHub Actions** como fuente. Después, cada push a `main` compilará y publicará el sitio. El workflow también puede ejecutarse manualmente.

## Datos y privacidad

El avance de la misión usa la clave `mision-conectar-progress` de `localStorage`. Para borrar el avance, utiliza la opción de reinicio que aparece tras completar la misión o elimina los datos del sitio desde el navegador.

## Licencia y atribución

Este proyecto conserva la licencia MIT incluida en [LICENSE](./LICENSE). Basado en la plantilla Astro Kepler de kpab y adaptado para Misión Conectar.
