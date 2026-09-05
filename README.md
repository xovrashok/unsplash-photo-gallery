# 📷 Image Search Gallery

A dynamic image search web application built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and the **Unsplash API**. The app allows users to search for high-quality photos, browse responsive galleries, paginate through search results, and view images in full resolution via a modal window.

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

---

## ✨ Features

- **Real-time Image Search:** Search millions of photos powered by the Unsplash REST API.
- **Strict Type Safety:** Fully refactored with TypeScript, featuring custom interfaces for Unsplash API responses, Formik helpers, and component props.
- **Pagination (Load More):** Seamlessly append the next pages of results without resetting the gallery state.
- **Modal View:** Interactive modal window using `react-modal` for viewing high-resolution images with lifted state architecture.
- **Form Validation & Notifications:** Built-in input checks with `Formik` and user feedback via `react-hot-toast`.
- **State & Error Handling:** Graceful UI transitions for loading states (`react-spinners`), network errors, and empty query results.
- **Responsive Layout:** Clean CSS Grid/Flexbox design optimized for all screen sizes with Tailwind CSS.

---

## 🛠️ Tech Stack

- **Core:** React 18, TypeScript
- **Build Tool:** Vite
- **HTTP Client:** Axios (with generic response typing)
- **Styling:** Tailwind CSS, React Icons
- **Forms & Validation:** Formik
- **UI Components:** React Modal, React Hot Toast, React Spinners
