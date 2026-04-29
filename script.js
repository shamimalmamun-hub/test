/* LOGIN SYSTEM */
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Demo credentials
  if (user === "admin" && pass === "1234") {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid login!";
  }
}

/* PROTECT DASHBOARD */
if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "login.html";
  }
}

/* LOGOUT */
function logout() {
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
}

/* SIDEBAR */
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("hide");
}

/* DATA */
const data = {
  total: 3000,
  newReg: 200,
  payment: 1700
};

/* LOAD DASHBOARD */
function loadDashboard() {
  if (!document.getElementById("total")) return;

  document.getElementById("total").innerText = data.total;
  document.getElementById("new").innerText = data.newReg;
  document.getElementById("payment").innerText = data.payment;
}

window.onload = loadDashboard;
