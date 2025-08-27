# 📊 Task Dashboard

A modern, minimalist task analytics dashboard built with **React + TypeScript** and powered by a **PostgreSQL + Prisma** backend. It visualizes task progress using animated charts like bar, line, and pie charts.

---

## ✨ Features

- 📦 Total, Completed, and Incomplete task counters  
- 📊 Bar chart showing distribution of task priorities (`high`, `medium`, `low`)  
- 📉 Line chart of completed tasks over time  
- 🥧 Pie chart comparing completed vs incomplete tasks  
- 🎨 Modern UI with responsive layout  
- 🌙 Full dark mode support  
- ⚡️ Optimized with Vite + modular components  

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Recharts  
- **Backend:** Node-style modular API  
- **ORM:** Prisma  
- **Database:** PostgreSQL (NeonDB)  
- **Tooling:** Vite, NPM  

---

## 🚀 Getting Started

### 1. Clone and install

```
git clone https://github.com/your-username/task-dashboard
cd task-dashboard
npm install
```

### 2. Setup environment variables

Create a `.env` file:

```
DATABASE_URL=your_neon_postgres_url
JWT_TOKEN=your_jwt_token
BACKEND_PORT=your_backend_port
```

### 3. Generate Prisma client & apply schema

```
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Start dev server

```
npm run dev
npm run server
```

The app runs at [http://localhost:5173](http://localhost:5173)


---

---

## 📦 Dependencies

```
"react": "^19.x",
"recharts": "^2.8.x",
"prisma": "^5.x",
"tailwindcss": "^3.x",
"typescript": "^5.x",
"vite": "^5.x"
```

---

## 🧑‍💻 Author

Made by [@tade-art](https://github.com/tade-art)

---

## 📝 License

MIT — free to use and modify for personal or commercial projects.