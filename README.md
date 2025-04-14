# Proyecto Vue 3 + TypeScript + Tailwind CSS

Este proyecto está desarrollado con **Vue 3**, utilizando la **Composition API** con **TypeScript** y estilos con **Tailwind CSS**. A continuación te explicamos brevemente cada tecnología:

- **Vue 3**: Framework progresivo de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables.
- **TypeScript**: Un superset de JavaScript que añade tipado estático, lo que ayuda a prevenir errores y facilita el desarrollo a gran escala.
- **Tailwind CSS**: Framework de CSS basado en utilidades, que permite un diseño rápido y altamente personalizable directamente desde las clases en HTML o templates Vue.

---

## Requisitos

Para ejecutar este proyecto, necesitas tener instalado **Node.js** en tu sistema. Puedes descargarlo desde el sitio oficial:

👉 [Descargar Node.js](https://nodejs.org/)

---

## Instalación y ejecución en desarrollo

Una vez clonado el repositorio, abre una terminal en la raíz del proyecto y ejecuta los siguientes comandos:

```bash
# Instalar las dependencias del proyecto
npm install

# Ejecutar el servidor de desarrollo
npm run dev


## Generar versión final del sitio (Build)
Cuando quieras finalizar el desarrollo y generar la versión final del sitio para subirlo a producción, ejecuta:


npm run build

## Subida al hosting (cPanel)

Para publicar tu sitio en producción a través de **cPanel**:

1. Accede a tu **Administrador de Archivos** en cPanel.
2. Dirígete a la carpeta `public_html` o `public` (dependiendo de tu servidor).
3. Sube el **contenido** de la carpeta `dist` (no la carpeta en sí, sino todo lo que está dentro de ella) a esa ubicación.
4. ¡Listo! Tu sitio debería estar disponible en tu dominio.
