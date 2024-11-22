# EventHub
EventHub - A Community Event Planning &amp; RSVP Platform

Project Proposal: EventHub - A Community Event Planning & RSVP Platform

Our idea is for a web application called EventHub, designed to simplify the process of discovering, organizing, and attending
community events. This platform will connect event organizers with attendees, making it easy to showcase events while attendees
can browse and explore events of interest. EventHub is ideal for hosting workshops, social gatherings, and networking
opportunities, offering users a meaningful way to engage with their communities. The application will feature a sleek, responsive
design that ensures accessibility and an intuitive user experience across all devices.
EventHub will include several core features to deliver its purpose effectively: a dashboard to display a curated list of events, a
search bar with filters to help attendees find events based on type, location, or date, and a map integration to display event
locations. Event organizers will be able to showcase event details, including titles, descriptions, dates, and addresses, which will
be displayed dynamically from the database. Although interactions like adding or deleting events from the database will not be
implemented, the application will demonstrate a working connection to the backend and database, ensuring proper data retrieval.
Implementation Overview

Node.js (75 points)
● A Node.js server will be set up using Express.js to handle API endpoints for retrieving event data.
● The server will connect to the MongoDB database to fetch event details and send them to the frontend.
● The server will serve the React.js frontend, ensuring smooth integration.

Database (50 points)
● MongoDB will be used to store event details, including titles, descriptions, dates, and addresses.
● The database will be preloaded with sample data to demonstrate the functionality.
● APIs will be designed to fetch event data from the database and send it to the frontend.

React (75 points)
● The frontend will utilize React.js, with components like Dashboard to display events, EventCard for individual
event details, and EventForm to demonstrate how events could be added.
● Props will facilitate data flow between components, while hooks like useState and useEffect will manage state
effectively.
● Real-time updates will not be implemented, but the application will showcase dynamic data rendering from the
backend.

Google Maps Integration
● Event organizers’ addresses will be displayed as pins on an interactive map using the Google Maps API.
● The application will fetch geocoded data from the backend and render event locations on the map.

Simplified Authentication
● User authentication and session management (via JWT) will not be implemented. Instead, the focus will be on the static
display of preloaded user and event data.

