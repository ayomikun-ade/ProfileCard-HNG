function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4]; // Get time in HH:MM:SS

  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `${utcTime}`;
}

updateTime();
setInterval(updateTime, 60000);
