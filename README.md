# Automation Anywhere – Playwright Automation Framework

This project automates Automation Anywhere Community Edition using Playwright for both UI and API testing, following the Page Object Model (POM) design pattern.

The framework validates:
- UI flows
- Functional behavior
- Backend API responses

as required in the assignment.

---

## 🚀 Tech Stack

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Playwright APIRequestContext (API Automation)

---

## 📁 Project Structure

Automation-Anywhere-Automations/
│
├── api/                     → API client classes  
│   └── LearningInstanceApi.js  
│
├── pages/                   → UI Page Object Model  
│   ├── LoginPage.js  
│   ├── AutomationPage.js  
│   ├── TaskBotPage.js  
│   └── FormPage.js  
│
├── tests/  
│   ├── ui/                  → UI test cases  
│   │   ├── login.spec.js  
│   │   ├── messageBox.spec.js  
│   │   └── Upload.spec.js  
│   │  
│   └── api/                 → API test cases  
│       └── learningInstance.spec.js  
│
├── .env                     → Credentials (not committed)  
├── .gitignore  
├── playwright.config.js  
└── README.md  

---

## 🔐 Environment Setup

Create a .env file in the project root:

AA_USERNAME=your_email  
AA_PASSWORD=your_password  

⚠️ Never commit .env to GitHub

---

## 📦 Install Dependencies

npm install  
npx playwright install  

---

## ▶ Run Tests

### Run all UI tests
npx playwright test tests/ui --headed  

### Run API tests
npx playwright test tests/api  

---

## 🧪 Automated Use Cases

### Use Case 1 – Message Box Task Bot (UI)
- Login to Automation Anywhere  
- Navigate to Automation  
- Create Task Bot  
- Add Message Box action  
- Save and validate success  

Assertions:
- UI visibility  
- Correct data entry  
- Successful creation  

---

### Use Case 2 – Form with File Upload (UI)
- Create a Form  
- Drag Textbox  
- Drag File Upload  
- Enter text  
- Upload a file  
- Save and validate  

Assertions:
- UI interactions  
- File upload success  
- Form saved confirmation  

---

### Use Case 3 – Learning Instance (API)

Automated via backend APIs:

Flow:
1. Login using API  
2. Fetch available domains  
3. Fetch languages for domain  
4. Create Learning Instance  
5. Validate response and instance existence  

Validations:
- HTTP status codes  
- Response body schema  
- Correct instance name and IDs  
- Functional creation  

---

## 🧠 Key Highlights

✔ Real Automation Anywhere backend APIs  
✔ Dynamic tenant-based domain and language resolution  
✔ No hardcoded IDs  
✔ UI automation with POM  
✔ Enterprise-grade API automation  
✔ Suitable for SDET / QA Automation interviews  

---

## 📌 Notes

- Credentials are loaded securely via .env  
- Playwright handles authentication and browser context  
- API tests do not rely on UI  
