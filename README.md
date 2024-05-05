# React + Vite
This is a simple Todo List application built using React.js. It allows users to create, delete, and prioritize tasks.

Features
User Authentication: Users can sign in to access their Todo list. Only authenticated users can create and manage tasks.
Task Management: Users can add new tasks with titles and descriptions. They can also delete tasks they no longer need.
Task Priority: Tasks are displayed with high-priority tasks listed first.
Technologies Used
React.js: Frontend framework for building user interfaces
Redux: State management library for managing application state
Axios: HTTP client for making API requests
React Bootstrap: UI library for styling components
Usage
Clone the repository to your local machine.
Install dependencies using npm install.
Run the development server using npm run dev.
Access the application in your web browser at http://localhost:5173.
API Integration
The application integrates with a mock API for managing user authentication and task data. The API endpoints used are:

User Authentication:
POST /login: Authenticates users and generates a JWT token for accessing protected routes.
POST /register: Registers new users.
Task Management:
GET /todoitem: Retrieves tasks for the authenticated user.
POST /todoitem: Adds a new task for the authenticated user.
DELETE /todoitem/:id: Deletes a task with the specified ID.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
