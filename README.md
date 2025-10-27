# 📚 Book Finder App

### 👩‍💻 Candidate ID: Naukri1025  
### 💼 Aganitha Full Stack Developer Take-Home Challenge

---

## 🧩 About

**Book Finder** is a simple and elegant web application that allows users to search for books by title using the **Open Library API**.  
It helps users like *Alex (a college student)* to easily find information about books, including cover images, authors, and publication years.

---

## 🚀 Features

✅ Search books by title  
✅ Displays cover image, author, and first publish year  
✅ Handles loading, errors, and empty inputs gracefully  
✅ Clean and user-friendly interface  
✅ Responsive layout for desktop and mobile  

---

## 🧰 Tech Stack

- **Frontend Framework:** React (Create React App — *no Vite*)  
- **Styling:** Plain CSS (`App.css`)  
- **API:** Open Library API  
- **State Management:** React Hooks (`useState`)  

---

## 🌐 API Used

**Open Library Search API:**  
`https://openlibrary.org/search.json?title={bookTitle}`  

Example:  https://openlibrary.org/search.json?title=harry%20potter



This API provides book details like title, author, publication year, and cover image.

---

## 🖥️ How It Works

1. User enters a book title (e.g., *Pride and Prejudice*)  
2. App fetches data from the Open Library API  
3. Displays results with book cover, title, and author  
4. If no results found or network error occurs, shows a friendly message  

---

## 🏃‍♀️ How to Run Locally

1. Clone or download this repository  
2. Open the folder in VS Code or any code editor  
3. Run these commands in your terminal:

```bash
npm install
npm start

Open your browser and go to 👉 http://localhost:3000








🖼️ UI Preview

Simple, clean layout

Search box with live results

Grid-based card design

Error and loading messages displayed clearly







🧑‍💻 Folder Structure


book-finder/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
│
├── package.json
├── README.md
└── public/
    └── index.html


---

## 🔗 GitHub Repository

You can view the complete source code here:  
👉 [Book Finder on GitHub](https://github.com/Tulasi-Ganta/book-finder)
