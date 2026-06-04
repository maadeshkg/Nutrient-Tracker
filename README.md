#  Nutrient Tracker

Nutrient Tracker is a full-stack MERN web application that allows users to search for food items and view their nutritional information
in real time using the USDA API. The application provides secure user authentication with JWT and OTP email verification, 
stores user-specific search history in MongoDB, and displays nutrient details through an interactive and responsive user interface
---

##  Features
-Developed using MongoDB, Express.js, React.js, and Node.js (MERN Stack).

-Implemented secure user authentication using JWT.

-Added OTP email verification during login.

-Created protected routes for authorized user access
.
-Integrated USDA API to fetch real-time food nutrition data.

-Displayed nutrients such as calories, protein, fat, carbohydrates, fiber, sodium, potassium, iron, zinc, and sugar.

-Visualized nutrient distribution using React Chart.js pie charts.

-Stored user-specific food search history in MongoDB.

-Added quantity-based nutrient calculation using food weight in grams.

-Developed RESTful APIs using Express.js and Node.js.

-Used Mongoose for MongoDB database operations.

-Implemented responsive UI using React.js and CSS.

-Added About and Contact pages with modern layouts.

-Integrated Google Maps location on the Contact page.

-Used Axios for frontend-backend API communication.

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Chart.js
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- Nodemailer

### Database
- MongoDB
- Mongoose

### API
- USDA FoodData Central API

---

##  Screenshots

### Login Page

<img width="1283" height="531" alt="login" src="https://github.com/user-attachments/assets/4e1aad96-3e1c-4188-8f6b-385a6b1fb5ec" />

### Home Page

<img width="1355" height="538" alt="home" src="https://github.com/user-attachments/assets/6ff7a9c1-8290-47c6-9177-ed5081afcad6" />


### Nutrient Result

<img width="1339" height="444" alt="nutrient 1" src="https://github.com/user-attachments/assets/b111d877-ae94-4ac2-8771-571bae2d4e9d" />


<img width="1140" height="498" alt="nutrient 2" src="https://github.com/user-attachments/assets/11468419-02a0-47b6-a429-b07114fddbf5" />



### About Page

<img width="1279" height="634" alt="about" src="https://github.com/user-attachments/assets/69b0b277-5c8b-43ae-bf35-24fa28633d16" />


### Contact Page

![Contact](images/contact.png)

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/nutrient-tracker.git
```

### Frontend

```bash
cd client
npm install react-router-dom axios chart.js react-chartjs-2
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm install express mongoose dotenv cors bcryptjs jsonwebtoken nodemailer axios
npm start
```

---

##  Project Highlights

- Secure authentication using JWT and OTP verification.
- Fetches real-time food nutrition data from USDA API.
- Displays calories, protein, fat, carbohydrates, fiber, sodium, potassium, iron, zinc, and sugar.
- Stores user-specific search history.
- Interactive nutrient charts using React Chart.js.
- Fully responsive MERN stack application.

---
