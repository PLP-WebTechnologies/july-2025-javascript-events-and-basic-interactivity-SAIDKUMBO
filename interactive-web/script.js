// ========================================
// PART 1: EVENT HANDLING
// ========================================

// 1. FAQ toggle event
document.getElementById("toggleFAQ").addEventListener("click", function (e) {
  e.preventDefault(); // prevent jumping to top
  let answer = document.getElementById("faqAnswer");
  answer.style.display = (answer.style.display === "none") ? "block" : "none";
});

// ========================================
// PART 2: INTERACTIVE ELEMENTS
// ========================================

// 2a. Light/Dark Mode Toggle
document.getElementById("toggleModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// 2b. Click Counter Game
let count = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// ========================================
// PART 3: FORM VALIDATION (CUSTOM)
// ========================================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form reload
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Validate Name
  if (name.length < 3) {
    message = "Name must be at least 3 characters.";
  }
  // Validate Email (basic regex check)
  else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    message = "Please enter a valid email address.";
  }
  // Validate Password
  else if (password.length < 6) {
    message = "Password must be at least 6 characters.";
  }
  else {
    message = "✅ Registration successful!";
  }

  document.getElementById("formMessage").textContent = message;
});
// ========================================
// PART 4: EXTRA INTERACTIVE FEATURE (TABS)
// ========================================

let tabButtons = document.querySelectorAll(".tabBtn");
let tabContents = document.querySelectorAll(".tabContent");

tabButtons.forEach(button => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove("active"));
    // Hide all content
    tabContents.forEach(content => content.style.display = "none");

    // Add active class to clicked button
    this.classList.add("active");
    // Show corresponding content
    let target = this.getAttribute("data-tab");
    document.getElementById(target).style.display = "block";
  });
});

// Default: activate first tab
tabButtons[0].classList.add("active");
