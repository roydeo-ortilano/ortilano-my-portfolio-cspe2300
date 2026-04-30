# Component Architecture Documentation

## Overview

The portfolio uses a component-based architecture with Next.js App Router.
All components are written in TypeScript and styled with Tailwind CSS.
The separation into layout, UI, and section components ensures reusability, maintainability, and scalability.

---

## Folder Structure Rationale

| Folder / File | Purpose |
|---|---|
| `layout/` | Structural components present on all pages (`Header`, `Footer`). No business logic; purely presentational. |
| `ui/` | Primitive reusable components (`Button`, `Card`, `Skeleton`). Accept props for different variants or data. |
| `sections/` | Full-page sections (`Hero`, `About`, `Projects`, `Contact`). Each encapsulates its own state and markup. |
| `ThemeProvider.tsx` | Wraps the app to provide dark/light theme via React Context, avoiding prop drilling. |
| `lib/types.ts` | Centralised TypeScript interfaces (`Project`, `NavigationItem`) for type safety across components. |

---

## State Management & Data Flow

- **Theme** – State is in `ThemeProvider`, accessed via `useTheme()` hook. Preference stored in `localStorage`.
- **Contact form** – Local `useState` inside `Contact` component. Validation logic is self-contained.
- **Projects** – A static array inside `Projects.tsx` serves as mock data. Could be replaced with an API fetch.
- **Fade-in animation** – Implemented in the `FadeIn` wrapper using `IntersectionObserver` so that animation logic is separated from content.

---

## Client vs. Server Components

| Type | Components | Reason |
|---|---|---|
| **Server** (default) | `page.tsx`, `layout.tsx`, and any component without `'use client'` | Rendered on the server for performance and SEO. |
| **Client** | `Header`, `Contact`, `ThemeProvider`, `FadeIn` | Require interactivity — state, event handlers, or browser APIs. |

This hybrid approach follows Next.js best practices — only client-side where necessary.

---

## Styling Approach

- Tailwind CSS utility classes enable rapid, consistent styling.
- Dark mode is implemented using Tailwind's `dark:` variant, toggled via the `.dark` class on `<html>`.
- Global font (Roboto with Helvetica/Arial fallback) is loaded with `next/font` in `layout.tsx` and applied via CSS variables.

---

## Reusability & Scalability

- **`Button`** accepts a `variant` prop (`primary`, `secondary`, `outline`) to serve different roles.
- **`Card`** expects a `Project` object, making it easy to map over project lists.
- **`Skeleton` / `ProjectCardSkeleton`** provide loading states for better UX.
- Adding a new section is straightforward: create a component in `sections/`, import it into `page.tsx`, and wrap with `<FadeIn>` if needed.

---

## Accessibility Considerations

- Semantic HTML elements — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Interactive elements have `aria-label` attributes where text is not visible (dark mode toggle, social links).
- Focus styles preserved; contrast ratios meet WCAG AA in both colour schemes.
- Mobile menu uses a standard accessible hamburger pattern.

---

## Conclusion

The architecture separates concerns, uses TypeScript for safety, and keeps the codebase maintainable.
No external animation or theme libraries were used, resulting in a small bundle and full control over behaviour.
