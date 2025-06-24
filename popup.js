
document.getElementById("convertBtn").addEventListener("click", () => {
  const datetime = document.getElementById("datetime").value;
  const fromTz = document.getElementById("fromTz").value;
  const zones = [
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
    "UTC"
  ];

  const fromDate = new Date(datetime);
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  zones.forEach(zone => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: zone,
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour12: false
    });
    const time = formatter.format(fromDate);
    outputDiv.innerHTML += `<b>${zone}</b>: ${time}<br>`;
  });
});
