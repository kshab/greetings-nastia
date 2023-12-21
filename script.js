const STATE = {
  currentScreenIndex: 0,
  screens: []
};

let interval = undefined;

function start() {
  runScreens();
}

function runScreens() {
  console.log('Starting app...');

  const audio = document.querySelector('audio');

  audio.play()
    .then(_ => {})
    .catch(err => {
      console.log(err);
    });

  STATE.screens = document.querySelectorAll('.screen');

  next();

  interval = setInterval(() => {
    next();
  }, 3650);
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