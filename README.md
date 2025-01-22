# **Jarurat Care - Frontend Application**

## **Project Overview**
This is the frontend application for the **Jarurat Care NGO**, built using **React**, **Vite**, and other modern tools. The application allows users to interact with data fetched from APIs, view maps with geolocation, and filter information through a user-friendly interface.

---

## **Features**
- **State Management:** Managed with `useState` and `useEffect` hooks.
- **API Integration:** Data fetching, caching, and updates using **React Query**.
- **Map Integration:** Interactive maps implemented using **React-Leaflet**.
- **Routing:** Navigation powered by **React Router**.
- **Responsive Design:** Ensures usability on all screen sizes using CSS and media queries.

---

## **Technologies Used**
- **Frontend:** React, Vite
- **State Management:** React Query
- **Maps:** React-Leaflet, Leaflet.js
- **Styling:** CSS, Media Queries
- **Deployment:** Hosted on **Vercel**

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- Node.js (v16+ recommended)
- npm or yarn
- Git (optional)

---

### **Setup Instructions**
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/jarurat-care-app.git
   cd jarurat-care-app

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Development Server**  
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## **Usage**

### **Features to Test:**
1. **API Data Fetching:**  
   View live data integrated from the backend.
2. **Interactive Map:**  
   View location markers on the map and interact with geolocation data.
3. **Filtering and Search:**  
   Use filters to refine API data displayed on the UI.

---

## **Deployment**
The project is deployed on **Vercel**. To deploy your own instance:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel
   ```

---

## **File Structure**
Here’s an overview of the project structure:

```
jarurat-care-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── DetailsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── MapComponent.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchFilter.jsx
│   ├── hooks/              # Custom hooks
│   │   ├── useDebounce.js
│   │   └── useFetchData.js
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   ├── App.css             # Global styles
├── package.json            # Dependency list
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation              # Project 
```

---

## **Dependencies**
Below are the main dependencies used in this project:

- **React**: `^18.x`
- **React Query**: `^4.x`
- **React Router DOM**: `^6.x`
- **React-Leaflet**: `^4.2.0`
- **Leaflet**: `^1.9.4`
- **Axios**: `^1.x`

---

## **Contributing**
We welcome contributions to improve this project! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes and push the branch:
   ```bash
   git push origin feature-branch
   ```
4. Open a pull request.

---

## **License**
This project is licensed under the MIT License.

---

## **Contact**
For any queries or issues, contact **[altafpathan1k1@gmail.com]**.