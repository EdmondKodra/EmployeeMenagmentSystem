# 🧑‍💼 Employee Management System – Development & QA Testing

This project is a web-based **Employee Management System** built as part of my academic and personal development in software engineering and quality assurance.

The system supports **admin** and **user** roles, allowing employee registration, category management, and salary tracking. It also includes a comprehensive **Cypress test suite** to ensure the reliability of critical form functionalities.

---

## 🚀 Features

### 👩‍💼 Admin Role
- Add and register new employees
- Assign job categories
- View system summaries (total salaries, total employees, active admins)

### 🙋 User Role
- View personal details (name, position, monthly salary)

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Node.js / Express.js
- **Database:** MySQL
- **Authentication:** JWT-based localStorage validation
- **Testing:** Cypress (E2E & form validation)

---

## ✅ Testing with Cypress

A dedicated Cypress test suite is created to cover **both positive and negative scenarios** for the Add Employee form.

This is a short demonstration of the automated tests in action.
https://drive.google.com/file/d/15eZETzHZ28KA6uZZ3AkqwaBV33AVn7NM/view?usp=drive_link

### 🔍 Test Scenarios Covered

- 🚫 Name is missing
- 🔒 Password too short or too long
- ✉️ Invalid email format (missing @)
- 💵 Salary is not a number
- 📭 All fields left blank
- ✅ Valid submission (happy path)
- & MORE
