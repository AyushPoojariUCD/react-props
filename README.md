# React Props Playground

A small **React + TypeScript + Vite** project demonstrating important **React component patterns and props usage**.

This project showcases core React concepts including:

- Basic Props
- Children Props
- Complex Props
- Ref Props
- Context API (Theme Toggler)

Built with **React, TypeScript, TailwindCSS, and Vite**.

---

# Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- React Context API

---

# Project Features

| Feature        | Description                                             |
| -------------- | ------------------------------------------------------- |
| Basic Props    | Passing primitive props like strings, numbers, booleans |
| Children Props | Passing nested JSX inside components                    |
| Complex Props  | Passing objects and arrays as props                     |
| Ref Props      | DOM interaction using `useRef` and `forwardRef`         |
| Theme Context  | Global theme using React Context API                    |

---

# Screenshots

## Basic Props

Demonstrates how simple values and event handlers can be passed to reusable components.

<p align="center">
<img src="https://raw.githubusercontent.com/AyushPoojariUCD/react-props/main/src/assets/basic-props.JPG" width="800"/>
</p>

---

## Children Props

Shows how React components can accept nested JSX using the `children` prop.

<p align="center">
<img src="https://raw.githubusercontent.com/AyushPoojariUCD/react-props/main/src/assets/children-props.JPG" width="800"/>
</p>

---

## Complex Props

Demonstrates passing structured data such as objects and arrays to components.

<p align="center">
<img src="https://raw.githubusercontent.com/AyushPoojariUCD/react-props/main/src/assets/complex-props.JPG" width="800"/>
</p>

---

## Ref Props

Shows how to interact with DOM elements using `useRef` and `forwardRef`.

<p align="center">
<img src="https://raw.githubusercontent.com/AyushPoojariUCD/react-props/main/src/assets/ref-props.JPG" width="800"/>
</p>

---

## Theme Context

Demonstrates global theme management using the React Context API.

<p align="center">
<img src="https://raw.githubusercontent.com/AyushPoojariUCD/react-props/main/src/assets/theme-context.JPG" width="800"/>
</p>

---

# Installation

## Clone the repository

```bash
git clone https://github.com/AyushPoojariUCD/react-props.git
```

## Navigate into the project

```bash
cd react-props
```

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

## Production Build

`Create production build`

```bash
npm run build
```

## Preview production build locally

```bash
npm run preview
```

## Project Structure

```
src
 ├── assets
 │    ├── basic-props.JPG
 │    ├── children-props.JPG
 │    ├── complex-props.JPG
 │    ├── ref-props.JPG
 │    └── theme-context.JPG
 │
 ├── components
 │    ├── BasicProps.tsx
 │    ├── ChildrenProps.tsx
 │    ├── ComplexProps.tsx
 │    ├── RefProps.tsx
 │    └── ThemeToggler.tsx
 │
 ├── store
 │    └── ThemeContext.tsx
 │
 └── App.tsx
```

Concepts Demonstrated
Concept Description
Props Passing data between components
Children Rendering nested JSX
Complex Props Passing objects and arrays
Refs Direct DOM access
Context API Global state management

---
