# 🛒 Tienda ReactJS + Firebase

Este es un proyecto de e-commerce hecho con **ReactJS 19**, usando **Vite** como entorno de desarrollo, **Firebase** como backend (Firestore) y otras herramientas modernas como React Router, Bootstrap, y SweetAlert2.

Permite:
- Mostrar productos
- Agregar productos al carrito
- Ver el resumen de la compra
- Finalizar la compra enviando la orden a Firebase Firestore

---

## 🚀 Tecnologías principales

- **ReactJS 19** – Biblioteca para construir interfaces de usuario.
- **Vite** – Herramienta de desarrollo rápida para React.
- **Firebase (v11)** – Utilizado para almacenar las órdenes en Firestore.
- **React Router v7** – Manejo de rutas SPA.
- **Bootstrap 5 / React Bootstrap** – Estilos rápidos y responsivos.
- **SweetAlert2** – Alertas personalizadas y formularios modales.
- **React Icons** – Iconografía moderna.
- **ESLint** – Linter para mantener el código limpio.

---

## 📦 Dependencias

### Producción (`dependencies`)
| Paquete | Descripción |
|--------|-------------|
| `react` / `react-dom` | Core de ReactJS |
| `firebase` | SDK de Firebase (Firestore, Auth, etc) |
| `react-router` / `react-router-dom` | Navegación en SPA |
| `bootstrap` / `react-bootstrap` | Estilos CSS y componentes listos para usar |
| `react-icons` | Iconos vectoriales |
| `sweetalert2` | Alertas modales |
| `sweetalert2-react-content` | Soporte React para SweetAlert2 |

### Desarrollo (`devDependencies`)
| Paquete | Descripción |
|--------|-------------|
| `vite` | Bundler ultrarrápido para React |
| `@vitejs/plugin-react` | Plugin oficial de React para Vite |
| `eslint` / `@eslint/js` | Linter de JavaScript |
| `eslint-plugin-react-hooks` | Reglas específicas para hooks de React |
| `eslint-plugin-react-refresh` | Soporte para React Fast Refresh |
| `globals` | Lista de variables globales para el linter |
| `@types/react` / `@types/react-dom` | Tipado para TypeScript si se desea expandir |

---

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tienda-reactjs.git
   cd tienda-reactjs
