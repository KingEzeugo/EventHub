EventHub

EventHub is a community event planning and RSVP platform designed to simplify discovering, organizing, and attending events. This web application connects event organizers with attendees, making it easy to showcase events while allowing attendees to browse and explore events of interest.

Features
    - A curated dashboard displaying upcoming events.
    - Search and filter functionality by type, location, and date.
    - Interactive map integration with Google Maps API to display event locations.
    - Responsive, minimalist-inspired dark mode layout.
    - Dynamic rendering of event data fetched from a MongoDB database.


***** Installation and Setup *****

Prerequisites
    - Before running EventHub, ensure you have the following installed:

        - Node.js (LTS version recommended) 
        - MongoDB (local or MongoDB Atlas for cloud-hosted database) 
        - Git (optional, for version control) 
        - A Package Manager (npm or yarn, npm comes with Node.js)



***** Step-by-Step Instructions *****
1. Clone the Repository
Clone the repository from GitHub:
    - git clone https://github.com/KingEzeugo/EventHub.git
Navigate to the project directory:
    - "cd EventHub"

2. Backend Setup
Navigate to the backend folder:
    - "cd backend"
Install the backend dependencies:
    - "npm install"
Create a .env file ((already added in this)) in the backend folder with the following content:
    - PORT=5000
    - MONGO_URI=mongodb://localhost:27017/eventhub
(If you're using MongoDB Atlas, replace MONGO_URI with your connection string. Make sure to include your username and password in the URI.)

Start the backend server:
    - "npm run dev"
The backend will run at http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder:
    - "cd ../frontend"
Install the frontend dependencies:
    - "npm install"
Start the React application:
    - "npm start"
The frontend will run at http://localhost:3000.



How to Run the Application

Start the Backend:
Open a terminal and navigate to the backend folder.
- Run npm run dev.

Start the Frontend:
Open another terminal and navigate to the frontend folder.
- Run npm start.
- Open a browser and go to http://localhost:3000.

Folder Structure

EventHub/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── logo192.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── Events.js
│   │   │   ├── EventCard.js
│   │   │   ├── Map.js
│   │   │   ├── About.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   └── package.json
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── events.js
│   ├── models/
│   │   └── Event.js
│   ├── .env
│   └── package.json
└── README.md



Built With
Frontend: React.js, Axios, Google Maps API
Backend: Node.js, Express.js, MongoDB
Styling: CSS (Dark Mode Inspired by ChatGPT)
Package Managers: npm


This project is licensed under the MIT License.

For inquiries or feedback, feel free to contact the developer:

GitHub: KingEzeugo
