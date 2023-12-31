window.onload = function () {
  function updateTimer(deadline) {
    let time = deadline - new Date();

    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / (1000 * 60)) % 60),
      seconds: Math.floor((time / 1000) % 60),
      total: time,
    };
  }

  function animateClock(span) {
    span.className = "turn";
    setTimeout(() => {
      span.className = "";
    }, 700);
  }

  function startTimer(id, deadline) {
    let timeInterval = setInterval(function () {
      let clock = document.getElementById(id);
      let timer = updateTimer(deadline);

      clock.innerHTML = `
      
        <span>${timer.days}</span>
        <span>${timer.hours}</span>
        <span>${timer.minutes}</span>
        <span>${timer.seconds}</span>
        `;

      const spans = clock.getElementsByTagName("span");
      animateClock(spans[3]);
      if (timer.seconds === 59) animateClock(spans[2]);
      if (timer.minutes === 59 && timer.seconds === 59) animateClock(spans[1]);
      if (timer.hours === 23 && timer.minutes === 59 && timer.seconds === 59)
        animateClock(spans[0]);
      if (timer.total < 1) {
        clearInterval(timeInterval);
        clock.innerHTML = `
      
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        `;
      }
    }, 1000);
  }

  const deadline = new Date("Oct 15 2023 14:32:00");
  startTimer("clock", deadline);
};
