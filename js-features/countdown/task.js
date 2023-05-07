const timer = function () {
    const result = document.getElementById("timer");
    if (result.textContent > 0) {
        result.textContent -= 1;
    } else {
      clearInterval(interval);
      alert("Вы победили в конкурсе!");
    }
  };
  
  let interval = setInterval(
    timer,
    1000
  );