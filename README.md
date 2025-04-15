# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Clone the repository:
git clone https://github.com/golbargfatemi/react-calculator.git


Install dependencies:
npm install 

Start the development server:
npm run dev

Build and start the Docker container:
docker-compose up --build

Open your browser and navigate to http://localhost:5173

This project uses GitHub Actions for continuous integration and deployment:

On every push to the Master branch, the CI/CD pipeline is triggered
The application is built and deployed to GitHub Pages
The deployment status can be tracked via the GitHub Actions tab