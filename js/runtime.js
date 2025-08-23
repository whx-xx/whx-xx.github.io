var now = new Date();

function createtime() {
  now.setTime(now.getTime() + 1000);
  
  var startDate = new Date("08/17/2025 13:00:00");
  
  // Calculate Voyager 1 distance
  var voyagerDistance = Math.trunc(23400000000 + (now - startDate) / 1000 * 17);
  var astronomicalUnits = (voyagerDistance / 149600000).toFixed(6);
  
  // Calculate site uptime
  var uptimeDays = (now - startDate) / 1000 / 60 / 60 / 24;
  var days = Math.floor(uptimeDays);
  
  var uptimeHours = (now - startDate) / 1000 / 60 / 60 - 24 * days;
  var hours = Math.floor(uptimeHours);
  hours = String(hours).length === 1 ? "0" + hours : hours;
  
  var uptimeMinutes = (now - startDate) / 1000 / 60 - 1440 * days - 60 * hours;
  var minutes = Math.floor(uptimeMinutes);
  minutes = String(minutes).length === 1 ? "0" + minutes : minutes;
  
  var uptimeSeconds = (now - startDate) / 1000 - 86400 * days - 3600 * hours - 60 * minutes;
  var seconds = Math.round(uptimeSeconds);
  seconds = String(seconds).length === 1 ? "0" + seconds : seconds;
  
  // Generate HTML
  let htmlContent = `
    <div style="font-size:13px;font-weight:bold">
      本站已经运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 
      <i id="heartbeat" class='fas fa-heartbeat' style="color: red;"></i>
    </div>
  `;
  
  // Update DOM
  var workboard = document.getElementById("workboard");
  if (workboard) {
    workboard.innerHTML = htmlContent;
  }
}

// Update every second
setInterval(createtime, 1000);