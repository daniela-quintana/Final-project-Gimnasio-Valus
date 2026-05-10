<<<<<<< HEAD
# Gimnasio Valus - Backend

## Requisitos previos

Antes de comenzar asegúrate de tener instalado:
- [Node.js](https://nodejs.org) versión 20 o superior
- [PostgreSQL](https://www.postgresql.org/download/) versión 14 o superior

## Instalación paso a paso

### 1. Clonar el repositorio
```bash
git clone https://github.com/barbarasagredo/Final-project-Gimnasio-Valus
cd Final-project-Gimnasio-Valus
```

### 2. Instalar dependencias del servidor
```bash
cd server
npm install
```

### 3. Crear la base de datos
Abre una terminal y corre:
```bash
psql postgres -f script.sql
```
Esto creará automáticamente la base de datos y las tablas necesarias.

### 4. Configurar variables de entorno
Crea un archivo llamado `.env` dentro de la carpeta `server` con este contenido:

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gimnasio_valus
DB_USER=postgres
DB_PASSWORD=
JWT_SECRET=gimnasio_valus_secret_key

> Si tu PostgreSQL tiene contraseña, agrégala en `DB_PASSWORD`.
> Si tu usuario de PostgreSQL no es `postgres`, cámbialo en `DB_USER`. Para saber tu usuario corre `psql postgres -c "SELECT current_user;"` en la terminal.

### 5. Iniciar el servidor
```bash
npm run dev
```

Si todo está bien verás:

## Instalación del cliente

Abre otra terminal y corre:
```bash
cd client
npm install
npm run dev
```

El cliente estará disponible en http://localhost:5173

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor en modo desarrollo |
| `npm start` | Inicia el servidor en modo producción |
| `npm test` | Corre los tests |

## Estructura del proyecto

server/
├── config/          # Configuración de la base de datos
├── controllers/     # Lógica de cada ruta
├── middlewares/     # Validación de tokens
├── routes/          # Definición de rutas
├── script.sql       # Script para crear la base de datos
├── index.js         # Entrada principal del servidor
└── .env.example     # Ejemplo de variables de entorno

## Rutas disponibles

| Método | Ruta | Descripción | Requiere token |
|--------|------|-------------|----------------|
| POST | /api/auth/register | Registrar usuario | No |
| POST | /api/auth/login | Iniciar sesión | No |
| GET | /api/reviews | Ver reseñas | No |
| POST | /api/reviews | Crear reseña | Si |
| DELETE | /api/reviews/:id | Eliminar reseña | Si |
=======
# Final Project - Gimnasio 🏋️‍♂️

Este es el proyecto final de gestión de gimnasio, desarrollado como una aplicación web full-stack que permite administrar socios, rutinas y servicios de manera eficiente.

## 🚀 Estructura del Proyecto

El repositorio está dividido en dos partes principales:

* **Backend:** API construida con Node.js y Express, conectada a una base de datos PostgreSQL/MySQL.
* **Frontend:** Interfaz de usuario interactiva desarrollada en JavaScript.

## 🛠️ Tecnologías Utilizadas

* **Backend:** Node.js, Express, JavaScript.
* **Frontend:** HTML5, CSS3, JavaScript.
* **Base de Datos:** SQL (script incluido en la carpeta Backend).
* **Seguridad:** Uso de variables de entorno (`.env`) y Middlewares.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
* [Node.js](https://nodejs.org/)
* Un gestor de base de datos SQL.

## 🔧 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone: https://github.com/barbarasagredo/Final-project-Gimnasio-Valus
👥 Colaboradores
Este proyecto fue desarrollado con dedicación por:

Gonzalo González

Daniela Quintana

Barbara Sagredo
>>>>>>> 164c3c582e162a14b5536700b6f95181be1cd4f8
