# Dance Course Booking App

A robust, data-driven Node.js web application for a local organisation offering dance courses and workshops.  
Built with **Express**, **Mustache**, **NeDB**, and **MVC** architecture.

---

## Features
**Users** can book classes and courses without registration, they just need to indicate their name and email address. 

**Organisers**:
1. Username = admin, password = password123;
2. they can: 
  * add, edit, delete courses;
  * add, edit, delete classes relative to a certain course;
  * view classes relative to a certain course;
  * view the list of participants who have booked a class or course, delete participants;
  * add new administrators to the system;
  * management is carried out through tabs on the administrator dashboard.

---

## Tech Stack

- Node.js
- Express
- Mustache templates (via `mustache-express`)
- NeDB (`@seald-io/nedb`) for data storage
- Session-based authentication
- MVC architecture

---

## Deployment
https://dance-course-app-production.up.railway.app/
https://dance-course-app-5gff.onrender.com/
