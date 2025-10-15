
// Update Earth Time dynamically
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("earth-time");
  if (timeElement) {
    timeElement.innerText = now.toLocaleString();
  }
}
setInterval(updateTime, 1000);
updateTime();

// Mission Day counter
let missionDay = 1;
setInterval(() => {
  const missionDayEl = document.getElementById("mission-day");
  if (missionDayEl) {
    missionDay++;
    missionDayEl.innerText = missionDay;
  }
}, 60000);

// Orbit Simulation
let orbit = 0.0;
setInterval(() => {
  const orbitEl = document.getElementById("orbits");
  if (orbitEl) {
    orbit += 0.1;
    orbitEl.innerText = orbit.toFixed(1);
  }
}, 5000);

// Buttons
function openDashboard() {
  window.location.href = "dashboard.html";
}
function talkToMaitri() {
  alert("Hello, I am MAITRI. How can I assist you?");
}

// AI Scheduler
function addTask() {
  const task = prompt("Enter your new task:");
  if (task) {
    document.getElementById("scheduler-text").innerText = "Next Task: " + task;
  }
}
 