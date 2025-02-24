# PRVN Template

A template for a PRVN stack project (Pocketbase, React, Vite,Node).

## Setup
1. Clone the repository
2. Run `npm install`
3. Copy `pocketbase` executable to the root directory
4. Create a `.env` file in the root directory with the following variable:
   - `VITE_POCKETBASE_URL=http://localhost:8090`
5. Run `./pocketbase serve`
6. Open `http://localhost:8090/_/` in your browser and create an admin user
7. Run `npm run dev`
8. Open `http://localhost:5173/` in your browser
9. Profit