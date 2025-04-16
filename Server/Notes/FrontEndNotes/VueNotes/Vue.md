## Vue Basics
<br>

### Creating a Vue Application
---
<br>

#### Why Use Vite or Vue CLI to Create a Vue App?
<br>

Both Vite and Vue CLI are powerful tools for scaffolding and managing Vue applications. Here are some reasons why you might choose one over the other:

<br>

### Vite
---

- Fast development server with modern tooling.
- Minimal configuration needed.
- Excellent for small to medium projects that require speed and simplicity.

<br>

### Vue CLI
---

- Plugin-based architecture for adding features like Vue Router and Vuex.
- Advanced configuration for large-scale projects.
- Better for applications that need legacy browser support or additional tooling.
- Both tools provide a solid foundation for Vue projects, with Vite focusing on speed and simplicity, and Vue CLI offering comprehensive options for more complex setups.

---
## How to Create a Vue App
---
<br>

#### Using Vite
---
<br>

1. Install Vite and set up your project using the Vue template.
2. Install all the necessary dependencies for your project.
3. Start the development server to view your app in the browser.
<br>

### Using Vue CLI  
---

1. Install Vue CLI globally on your system.
2. Create a new Vue project and configure it according to your needs.
3. Install dependencies (if required) and start the development server.
<br><br>

### Example Project Structure
---

- The src/ folder contains the main application source code, including components and the root App.vue file.
- The public/ folder is for static assets like images or external files.
- Configuration files like vite.config.js or package.json manage the project's setup and dependencies.

<br>

### Path Imports in Vue
---

Path imports in Vue projects allow developers to manage file imports efficiently. Relative paths, such as <span class="emphasis">./</span> or <span class="emphasis">../</span>, are commonly used but can become cumbersome in larger projects with deeply nested directories.

- <span class="emphasis">Relative Paths:</span> Easy to use but may lead to lengthy and less readable imports in complex structures.
- <span class="emphasis">Path Aliases (e.g., @/):</span> Provide a cleaner way to reference files. Aliases are typically defined in <span class="emphasis">vite.config.js</span> or <span class="emphasis">vue.config.js</span> and point to the <span class="emphasis">src/</span> folder.

Using path aliases like <span class="emphasis">@/</span> enhances readability and simplifies refactoring in Vue projects.

---
