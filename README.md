# Formulario de Registro React

Este proyecto es un formulario de registro moderno y responsivo construido con React, que incluye validaciones en tiempo real y un diseño atractivo con gradientes e iconos SVG.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14.0.0 o superior)
- npm (viene incluido con Node.js)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ariannaf4/formulario-react.git
   cd formulario-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

   La aplicación se abrirá automáticamente en tu navegador predeterminado. Si no se abre automáticamente, visita [http://localhost:3000](http://localhost:3000).

## Características

- Formulario de registro con validaciones en tiempo real
- Diseño moderno con gradientes
- Iconos SVG personalizados
- Campos para:
  - Nombre completo
  - Correo electrónico
  - Contraseña (con opción de mostrar/ocultar)
- Validaciones de:
  - Nombre completo (mínimo 2 caracteres)
  - Formato de correo electrónico válido
  - Contraseña (mínimo 8 caracteres)
- Diseño responsivo
- Notificaciones toast para feedback del usuario

## Estructura del Proyecto

```
formulario-react/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   ├── RegistroForm.js
  │   │   ├── CorreoInput.js
  │   │   ├── ContrasenaInput.js
  │   │   └── Botones.js
  │   ├── App.js
  │   ├── App.css
  │   └── style-material.css
  └── package.json
```
