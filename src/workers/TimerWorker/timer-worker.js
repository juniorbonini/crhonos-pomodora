let isRunning = false;

self.onmessage = function (event) {
  const state = event.data;
  const { activeCycle, secondsRemaining } = state;
  const endDate = activeCycle + secondsRemaining * 1000;

  function tick() {
    const now = Date.now();
    const countDownSeconds = Math.floor((endDate - now) / 1000);

    self.postMessage(countDownSeconds);

    setTimeout(tick, 1000);
  }

  tick();
};
