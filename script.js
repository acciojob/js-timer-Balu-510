// write js code here if required
function updateTimer() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1; // Month is 0-indexed
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

  document.getElementById("timer").textContent = formattedTime;
}

// Initial call to display immediately
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);