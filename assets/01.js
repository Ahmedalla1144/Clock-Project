const time = function () {
  const now = new Date();
  const scnds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  scnds_box.innerText = scnds;
  mins_box.innerText = mins;
  hours_box.innerText = hours;
};
setInterval(time, 1000);
