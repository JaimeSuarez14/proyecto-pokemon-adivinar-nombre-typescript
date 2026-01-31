# Poke-Proyecto en React con TypeScript

¡Bienvenido al Poke-Proyecto! Esta es una aplicación web simple creada con React y TypeScript que consume datos de la [PokéAPI](https://pokeapi.co/) para mostrar información sobre diferentes Pokémon. El objetivo de este proyecto es servir como material de estudio para estudiantes que están aprendiendo a desarrollar con React y TypeScript.

## Características

*   Busca un Pokémon por su nombre o número.
*   Muestra una imagen del Pokémon, su nombre, número y tipos.
*   Interfaz de usuario limpia y sencilla utilizando Bootstrap.
*   ¡Lanza confeti cuando encuentras un Pokémon!

## Cómo Empezar

Sigue estas instrucciones para clonar el repositorio y ejecutar el proyecto en tu máquina local.

### Pre-requisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema (se recomienda la versión LTS).

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd poke-proyecto-typescript
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

¡Y listo! Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en funcionamiento.

## Conceptos y Tecnologías Clave

Este proyecto utiliza varias tecnologías y conceptos importantes en el desarrollo web moderno.

### React

[React](https://react.dev/) es una biblioteca de JavaScript para construir interfaces de usuario. La idea principal de React es permitir a los desarrolladores construir UIs complejas a partir de piezas pequeñas y aisladas de código llamadas "componentes".

*   **Componentes:** Son como funciones de JavaScript que aceptan entradas (llamadas "props") y devuelven elementos de React que describen lo que debe aparecer en la pantalla. En este proyecto, encontrarás componentes en la carpeta `src/components`.
*   **Hooks:** Son funciones que te permiten "enganchar" el estado de React y las características del ciclo de vida desde los componentes de función. Los más comunes son `useState` (para manejar el estado local) y `useEffect` (para manejar efectos secundarios como peticiones a APIs).

### TypeScript

[TypeScript](https://www.typescriptlang.org/) es un superconjunto de JavaScript que añade tipado estático opcional. Usar TypeScript puede ayudar a prevenir errores comunes y mejorar la legibilidad y mantenibilidad del código, especialmente en proyectos grandes.

### Vite

[Vite](https://vitejs.dev/) es una herramienta de construcción de frontend moderna que ofrece un entorno de desarrollo extremadamente rápido gracias a su servidor de desarrollo nativo de ES Modules.

### Bootstrap

[Bootstrap](https://getbootstrap.com/) es un popular framework de CSS para desarrollar sitios web responsivos y mobile-first. En este proyecto, lo usamos para estilizar rápidamente los componentes de la interfaz de usuario.

### Librerías Adicionales

*   **`react-confetti`**: Una librería divertida para crear un efecto de confeti en la pantalla.
*   **`react-use`**: Una colección de Hooks de React útiles.

## Estructura del Proyecto

```
poke-proyecto-typescript/
├─── public/          # Archivos estáticos
├─── src/
│    ├─── assets/      # Imágenes y otros recursos
│    ├─── components/  # Componentes de React reutilizables
│    ├─── hooks/       # Custom Hooks (lógica reutilizable)
│    ├─── service/     # Lógica para interactuar con APIs externas
│    ├─── App.tsx      # Componente principal de la aplicación
│    ├─── main.tsx     # Punto de entrada de la aplicación
│    └─── index.css    # Estilos globales
├─── .gitignore
├─── package.json     # Dependencias y scripts del proyecto
└─── README.md        # ¡Este archivo!
```

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

*   `npm run dev`: Inicia el servidor de desarrollo de Vite.
*   `npm run build`: Compila el proyecto para producción.
*   `npm run lint`: Ejecuta el linter (ESLint) para encontrar y corregir problemas en el código.
*   `npm run preview`: Inicia un servidor local para previsualizar el build de producción.