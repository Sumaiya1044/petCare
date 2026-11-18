# PetCare – Pet Service Website

PetCare is a modern and responsive pet service website where users can explore pet-related services, view service information, and securely log in to their accounts.

The application is built with React.js and Firebase Authentication, providing a user-friendly interface, personalized profile information, dynamic service content, and responsive navigation.

The main purpose of this project is to practice React component-based development, Firebase Authentication, routing, and modern frontend technologies.

---

## Live Demo & Project Links

| Resource | Link |
|---|---|
| Live Website – Netlify | https://sunny-pothos-a3ccf1.netlify.app/ |
| GitHub Repository | https://github.com/Sumaiya1044/petCare |

---

## Features

### User Authentication

- User login using Firebase Authentication
- User logout functionality
- Secure authentication management
- Logout confirmation

### User Profile

- Display authenticated user's name
- Display user's profile photo
- Personalized user information

### Navigation & User Interface

- Responsive navigation bar
- User-friendly navigation system
- Modern and clean interface
- Responsive layout for different devices

### Services

- Dynamic services page
- Service information loaded from JSON data
- Organized presentation of pet-related services

### Image Slider

- Interactive image slider using Swiper.js
- Smooth image navigation
- Responsive slider layout

### Responsive Design

PetCare is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop computers

The interface is styled using Tailwind CSS and DaisyUI.

---

## Technologies Used

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- DaisyUI

### Authentication

- Firebase Authentication
- User Login
- User Logout

### Libraries & Packages

- Swiper.js – Image Slider
- Framer Motion – Animation
- React Router – Client-side Routing

### Development Tools

- npm – Package Management
- Git – Version Control
- GitHub – Source Code Management

### Deployment

- Netlify – Frontend Hosting

---

## Authentication System

PetCare uses Firebase Authentication to manage user login and logout functionality.

### Authentication Features

- User Login
- User Logout
- Authenticated user information
- User profile photo display
- User name display

### Authentication Flow

```text
        User Visits Website
                |
                v
          Login Page
                |
                v
       Firebase Authentication
                |
                v
       Authentication Success
                |
                v
        Access User Profile
                |
                v
          Explore Services
                |
                v
             Logout
```

---

## Dynamic Services

The services page displays pet-related service information using JSON data.

### Service Features

- Load service information from JSON data
- Display services dynamically
- Present service details in an organized layout
- Provide users with an easy browsing experience

---

## Image Slider

PetCare uses Swiper.js to implement an interactive image slider.

### Slider Features

- Interactive slide navigation
- Smooth sliding experience
- Responsive slider layout
- Pet-related visual content

---

## User Profile

The profile section displays information about the currently authenticated user.

### Profile Information

- User Name
- User Profile Photo

The profile information is displayed based on the authenticated user's Firebase account information.

---

## Project Structure

```text
petCare/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── firebase/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: This is an illustrative project structure. Adjust it to match your actual repository folders and filenames.*

---

## NPM Packages

The following packages are used in this project:

| Package | Purpose |
|---|---|
| firebase | Authentication |
| swiper | Image Slider |
| tailwindcss | Styling |
| framer-motion | Animations |

### Installation Commands

```bash
npm install firebase
npm install swiper
npm install tailwindcss
npm install framer-motion
```

---

## Local Installation

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Sumaiya1044/petCare.git
```

### 2. Navigate to the Project Directory

```bash
cd petCare
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Firebase

Create or configure a Firebase project and add the required Firebase configuration to the application.

Keep private configuration and credentials out of public source control.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

---

## UI & Responsive Design

PetCare provides a responsive user interface using Tailwind CSS and DaisyUI.

The design focuses on:

- Clean and modern layouts
- Easy navigation
- Responsive components
- Consistent styling
- User-friendly interactions

---

## Learning Outcomes

Through this project, I gained practical experience in:

- Building reusable React components
- Understanding component-based architecture
- Implementing Firebase Authentication
- Managing user login and logout
- Displaying authenticated user information
- Working with React Router
- Rendering dynamic data from JSON files
- Integrating Swiper.js
- Using Tailwind CSS and DaisyUI
- Working with npm packages
- Deploying frontend applications using Netlify

---

## Deployment

### Frontend – Netlify

The PetCare frontend application is deployed on Netlify.

**Live Website:**

https://sunny-pothos-a3ccf1.netlify.app/

**GitHub Repository:**

https://github.com/Sumaiya1044/petCare

---

## Developer Information

**Name:** Sumaiya Jahan

**Role:** Frontend Developer

**GitHub:** https://github.com/Sumaiya1044

**Project Repository:** https://github.com/Sumaiya1044/petCare

**Live Project:** https://sunny-pothos-a3ccf1.netlify.app/

---

## License

This project was developed for educational and learning purposes.

---

<p align="center">
  <b>PetCare – Making Pet Service Exploration Easier.</b>
</p>


