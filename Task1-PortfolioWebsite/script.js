// Portfolio: theme toggle, contact form validation, small extras.

// ---------- Theme toggle ----------
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}

themeToggle.addEventListener("click", function () {
  const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("portfolio-theme", next);
  } catch (error) {
    // storage unavailable: theme still changes for this visit
  }
});

applyTheme(root.getAttribute("data-bs-theme") || "light");

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Contact form validation ----------
const form = document.getElementById("contactForm");
const successBox = document.getElementById("formSuccess");
const messageField = document.getElementById("message");
const messageCount = document.getElementById("messageCount");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Each rule returns an error message, or "" when the value is fine
const rules = {
  name: function (value) {
    return value.length >= 2 ? "" : "Please enter your name (at least 2 characters).";
  },
  email: function (value) {
    if (value === "") return "Please enter your email address.";
    return EMAIL_PATTERN.test(value) ? "" : "Please enter a valid email address, like name@example.com.";
  },
  subject: function (value) {
    return value.length >= 3 ? "" : "Please add a short subject (at least 3 characters).";
  },
  message: function (value) {
    return value.length >= 10 ? "" : "Your message should be at least 10 characters long.";
  }
};

function validateField(field) {
  const error = rules[field.name](field.value.trim());
  const feedback = field.parentElement.querySelector(".invalid-feedback");

  field.classList.toggle("is-invalid", error !== "");
  field.classList.toggle("is-valid", error === "");
  field.setAttribute("aria-invalid", error !== "" ? "true" : "false");
  feedback.textContent = error;

  return error === "";
}

const fields = Array.from(form.querySelectorAll("input, textarea"));

fields.forEach(function (field) {
  // Check a field when the user leaves it
  field.addEventListener("blur", function () {
    if (field.value !== "" || field.classList.contains("is-invalid")) {
      validateField(field);
    }
  });

  // Once a field has been checked, re-check it as the user types
  field.addEventListener("input", function () {
    if (field.classList.contains("is-invalid") || field.classList.contains("is-valid")) {
      validateField(field);
    }
  });
});

messageField.addEventListener("input", function () {
  messageCount.textContent = messageField.value.length;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  successBox.hidden = true;

  // Validate every field (do not stop at the first error)
  const results = fields.map(validateField);
  const firstInvalid = fields[results.indexOf(false)];

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  const firstName = form.elements.name.value.trim().split(" ")[0];

  successBox.textContent =
    "Thanks, " + firstName + "! Your message passed validation. This static site has no server to send it yet, " +
    "so please also email me at mwanza.rahab@cs.unza.zm.";
  successBox.hidden = false;

  form.reset();
  fields.forEach(function (field) {
    field.classList.remove("is-valid", "is-invalid");
    field.removeAttribute("aria-invalid");
  });
  messageCount.textContent = "0";
  successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
