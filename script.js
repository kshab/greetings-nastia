const STATE = {
  currentScreenIndex: 0,
  screens: []
};

let interval = undefined;

function run() {
  console.log('Starting app...');
  STATE.screens = document.querySelectorAll('.screen');

  interval = setInterval(() => {
    next();
  }, 3000);
}

function next(isToDetails = false) {
  const currentIndex = STATE.currentScreenIndex;
  const nextIndex = currentIndex + 1;

  if ((nextIndex + 1) >= STATE.screens.length && !isToDetails) {
    clearInterval(interval);
    return;
  }

  STATE.screens[currentIndex].classList.add('hidden');
  STATE.screens[nextIndex].classList.remove('hidden');
  STATE.currentScreenIndex++;
}

function toDetails() {
  next(true);
}

function restart() {
  location.reload();
}