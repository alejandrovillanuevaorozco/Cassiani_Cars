#  Cassiani - Web Platform

A modern, modular web application designed for viewing, managing, and purchasing vehicles or products from the **Cassiani** brand. The project features a dynamic Single Page Application (SPA) routing system and a sleek, fully responsive user interface.

---

##  Built With

The project leverages modern web development tools to ensure performance, modularity, and pixel-perfect design:

* **HTML5**: Semantics-driven backbone for the application structure.
* **Tailwind CSS**: A utility-first CSS framework for fast, modern, and responsive UI design without writing traditional CSS.
* **JavaScript (ES6+)**: Client-side logic, DOM manipulation, and native ES modules (`type="module"`).
* **FontAwesome**: Scalable vector icon library to complement the interface's visual elements.
* **Node.js**: Runtime environment utilized for managing development tools and project dependencies.

---

##  Project Structure

The project architecture is organized cleanly under the `src` directory to support a modular workflow:

```text
├── dist/                   # Production-ready optimized assets (if applicable)
├── src/                    # Source code of the application
│   ├── assets/             # Static assets
│   │   └── logos_img/      # Brand logos and corporate graphics (e.g., LogoCassiani.png)
│   ├── data/               # Local data models, mocks, or JSON files
│   ├── img/                # Global website imagery and icons
│   ├── pages/              # View components (Home, Models, Services, Login views)
│   ├── router/             # Dynamic routing engine for frictionless navigation
│   ├── utils/              # Utility helper functions (e.g., btn_save_users.js for user management)
│   ├── main.js             # Main JavaScript application entry point
│   └── style.css           # Global custom CSS rules and overrides
├── index.html              # Main HTML configuration file
├── package.json            # Node.js dependency and build script definitions
└── README.md               # Project documentation (this file)
```

---

##  Key Features

* **SPA Architecture (Single Page Application)**: Fluid, instantaneous transitions between navigation nodes (Home, Models, Services, Buy) by dynamically rendering content into the `#app` container without triggering browser reloads.
* **Premium Dark Theme UI**: An elegant visual identity using a deep black and neutral gray palette, paired with sophisticated Serif typography to communicate exclusivity.
* **Session & User Management**: In-line interactive hooks for *Login* and *User Management* panels, ready to wire up with backend APIs or browser LocalStorage via dedicated utilities (`btn_save_users.js`).
* **Utility-Driven Styling**: High-fidelity interactive behaviors including custom text underlines (`hover-underline`), transitions, and hover state modifications implemented directly with Tailwind utilities.

---

##  Getting Started

Follow these steps to set up and run the project locally on your machine:

### 1. Clone the repository
```bash
git clone <YOUR_REPOSITORY_URL>
cd Cassiani
```

### 2. Install dependencies
Ensure you have [Node.js](https://nodejs.org) installed, then run:
```bash
npm install
```

### 3. Run the development environment
If you are compiling Tailwind CSS using its CLI engine, spin up the watcher:
```bash
npm run dev
```
*(Alternatively, if you are not using a bundler yet, you can serve `index.html` directly using VS Code's **Live Server** extension or by opening the file in your browser).*

---

##  Available Scripts

The following commands can be configured and run inside your `package.json`:

* `npm run dev`: Starts the development workflow and watches your HTML/JS files to compile Tailwind CSS changes automatically.