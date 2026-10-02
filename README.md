# Hythrix

**BUILD. AUTOMATE. GROW.**

HYTHRIX builds digital products, intelligent AI systems, and automation workflows for modern businesses.

## Tech Stack
- **Frontend**: Next.js 16 (Turbopack), React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **State & Utilities**: Lucide Icons, Concurrently

## Project Structure
```
Hythrix/
├── frontend/          # Next.js 16 Web Application
│   ├── src/app/       # App Router (/services, /products, /process, /contact)
│   └── src/frontend/  # UI Components, Modals & Design System
├── backend/           # Express & TypeScript API Server
│   ├── src/           # API Routes, Lead & Qualification Services
│   └── data/          # Persistent Storage
└── package.json       # Monorepo Scripts
```

## Getting Started

### Install Dependencies
```bash
npm install
npm run install:all # or cd frontend && npm i, cd backend && npm i
```

### Run Locally
```bash
# Run both Frontend & Backend concurrently
npm run dev

# Or run individually:
npm run dev:frontend # http://localhost:3000
npm run dev:backend  # http://localhost:5000
```

### Production Build
```bash
npm run build
```
