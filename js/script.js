document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("current-time").textContent = utcTime;
    document.getElementById("current-day").textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
