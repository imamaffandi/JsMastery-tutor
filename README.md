# First Step

1.  Make a folder
2.  open terminal and install vite  
    `npm create vite@latest ./ -- --template react`
    `npm install`
3.  Install tailwind  
    ` npm install -D tailwindcss postcss autoprefixer`
    `npx tailwindcss init -p`

4.  Install Dependencies

```
    npm install --legacy-peer-deps @react-three/fiber
    @react-three/drei
    react-tilt
    framer-motion
    react-router-dom
    three
    react-scroll
```

5. Init tailwind

```
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx}"],
 mode: "jit",
 theme: {
   extend: {
     colors: {
       primary: "#101728",
       secondary: "#9340FF",
       tertiary: "#FF3C5F",
       "black-100": "#100d25",
       "black-200": "#090325",
       "white-100": "#f3f3f3",
     },
     boxShadow: {
       card: "0px 35px 120px -15px #211e35",
     },
     screens: {
       xs: "450px",
     },
   },
 },
 plugins: [],
};
```

6.  init tailwind on css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
