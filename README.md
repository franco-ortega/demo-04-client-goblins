# Goblin Den

A full stack app where users create goblins with names, hit points, armor class, and a customized list of items. The hit points and armor class can be increased by spending points from a shared pool. The goblins are stored in a database.

Visit the live site here: [Goblin Den](https://goblins.netlify.app/)

---

## Author

[Franco Ortega](https://github.com/franco-ortega)

---

## Tech Stack

Frontend: [React](https://reactjs.org/docs/getting-started.html)

Backend: Node, Express, PostgreSQL

---

## Getting Started

If you would like to try out this project locally, the first steps will be to clone the repos for the frontend (client) and backend (server). Here are the steps to set up both of them:

### Backend (server)

[GitHub repo - server](https://github.com/franco-ortega/demo-04-server-goblins) (this documentation coming soon)

1. Clone the server repo <code>git clone https://github.com/franco-ortega/demo-04-server-goblins.git
   </code>

1. Install dependencies <code>npm i</code>

1. Set up a server-side .env file with the variable <code>LOCALHOST_URL</code> pointing to your localhost database. This line of code might look something like this in your .env file: <code>LOCALHOST_URL=postgres://postgres:password@localhost:5432/postgres</code>

1. Start the server. I use [Nodemon](https://www.npmjs.com/package/nodemon), and if you do too, type the command <code>nodemon</code> to start the server. It will run on [PORT 4200](http://localhost:4200/api/v1/goblins). If you don't use Nodemon, then the command <code>node server.js</code> will start your server.

1. You may run the command <code>npm test</code> to run the tests, which will also populate the database with two goblins. However, if you run this command again, it will reset the database, so any other goblins that you created will be lost.

### Frontend (client)

[GitHub repo - client](https://github.com/franco-ortega/demo-04-client-goblins)

1. Clone this client repo <code>git clone https://github.com/franco-ortega/demo-04-client-goblins.git
   </code>

1. Set up a client-side .env file with this pointing to your localhost server that is now running: <code>http://localhost:4200/api/v1/goblins</code>

1. Install dependencies <code>npm i</code>

1. Run the command <code>npm start</code>

1. If any goblins exist in your database (such as if you ran the test script above), they should be displayed. Otherwise, start making your own goblins!

1. Please get in touch if you have any issues or questions.

---

## Setup

There are the commands that were used to install dependencies for the frontend of this project.

1. npx create-react-app .
1. npm install eslint --save-dev
1. npx eslint --init
