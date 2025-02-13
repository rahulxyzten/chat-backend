<a id="readme-top"></a>

<h1 align="center">Chat Backend 🗨️</h3>

<div align="center">
  <img src="https://img.shields.io/badge/Repository%20Status-Active-dark%20green.svg" alt="repository_status">
  <img src="https://img.shields.io/badge/Website%20Status-Online-green" alt="website_status">
  <img src="https://img.shields.io/badge/Author-Rahul%20Behera-blue.svg" alt="author">
  <img src="https://img.shields.io/badge/Last%20Updated-13%20February%202025-yellow.svg" alt="last_updated">
</div>

</div>
<br />

This repository contains the backend for the Chat Application. It comprises two main components:

1. **WebSocket Server:** A lightweight Node.js server (located in `server.js`) that listens on port **8080** and echoes back any received messages.
2. **Strapi Backend:** A headless CMS (built with Strapi) that manages content, user data, and can be extended to provide additional API endpoints for your application.

These components work together with the Chat Frontend (built with Next.js and Tailwind CSS) to provide real-time chat functionality.

<br>
<h3 align="center">🛠️ Built With</h3>
<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Strapi-1C1C1C?style=for-the-badge&logo=strapi&logoColor=white" alt="Strapi">
  <img src="https://img.shields.io/badge/WebSockets-2D9CDB?style=for-the-badge&logo=websocket&logoColor=white" alt="WebSockets">
</div>
<br>

## 🚀 Getting Started

Follow these steps to get a local copy of the project running.

**Prerequisites**

Make sure you have the following tools installed:

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

**Installation**

1. Clone the repository:
   ```sh
   git clone https://github.com/rahulxyzten/chat-backend.git
   cd chat-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the WebSocket server in one terminal:
     ```sh
     node server.js
     ```
   You should see a message in the console:
     ```sh
      WebSocket server started on port 8080
     ```
3. Start the Strapi server in another terminal:
     ```sh
     npm run develop
     ```

The Strapi admin panel should be available at [http://localhost:1337/admin](http://localhost:1337/admin). Adjust the port if necessary.

 <br />
 <br />
<p align="center">
  <a href="#">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love">
  </a>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
