const OUTER_MIN = -180;
const OUTER_MAX = 180;
const INNER_MIN = -80;
const INNER_MAX = 100;
const BIRD_SCREAMERS = ['Karr', 'Ku-Ku', 'Chiv-Chiv'];
const MAX_COLORS_AMOUNT = 16777215;
const BIRD_RETURN_TIME = 5000;


const getRandomColor = () => `#${(getRandomNumber(0, MAX_COLORS_AMOUNT)).toString(16)}`;
const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);
const getRandomNumberInRanges = (outerMin, outerMax, innerMin, innerMax) => {
  const usableRange = innerMin - outerMin + outerMax - innerMax;
  const threshold = innerMin - outerMin;
  const num = getRandomNumber(0, usableRange + 1);
  return num < threshold ? num - threshold : num - threshold + innerMax;
}
const scene = document.querySelector(".scene")

class Controller {
  constructor() {
    this.counter = document.querySelector(".birds-counter__amount")
    this.removeBirdsButton = document.querySelector(".clear-birds")
    this.birds = []
    this.addEvents()
  }

  addEvents() {
    scene.addEventListener("click", this.onClickScene.bind(this));
    this.removeBirdsButton.addEventListener("click", this.onRemoveBirds.bind(this))
  }

  onClickScene(event) {
    if (event.target.className === 'birds') {
      event.stopPropagation();
      this.counter.innerHTML = String(this.birds.push(new Bird(event.clientX, event.clientY)))
    }
  }

  onRemoveBirds() {
    this.birds.forEach((bird) => bird.removeBird())
  }
}

class Bird {
  constructor(x, y) {
    this.template = document.querySelector(".template").content
    this.birds = document.querySelector(".birds")
    this.positionX = x
    this.positionY = y
    this.mountBird()
    this.addEvents()
  }

  addEvents() {
    scene.addEventListener("click", this.onBirdClick);
  }

  mountBird() {
    const birdColor = getRandomColor();
    const clone = this.template.cloneNode(true);
    const birdClone = clone.querySelector(".bird");
    birdClone.style.left = `${this.positionX}px`;
    birdClone.style.top = `${this.positionY}px`;
    clone.querySelector(".bird__yell").innerHTML = BIRD_SCREAMERS[getRandomNumber(0, BIRD_SCREAMERS.length)];
    clone.querySelector(".bird__body").style.backgroundColor = birdColor;
    clone.querySelector(".bird__wing--left").style.backgroundColor = birdColor;
    clone.querySelector(".bird__wing--right").style.backgroundColor = birdColor;
    this.birds.appendChild(clone)
  }

  onBirdClick = (event) => {
    if (event.target.className === 'bird') {
      event.stopPropagation();
      event.target.style.left = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
      event.target.style.top = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
      this.returnBird(event);
    }
  }

  returnBird(event) {
    setTimeout(() => {
      event.target.style.left = `${event.clientX}px`;
      event.target.style.top = `${event.clientY}px`;
    }, BIRD_RETURN_TIME)
  }

  removeBird() {
    console.log("remove")
    //1. myNode.textContent = '';

    //2. const myNode = document.getElementById("foo");
    //   while (myNode.lastElementChild) {
    //     myNode.removeChild(myNode.lastElementChild);
    //   }
  }
}

new Controller()