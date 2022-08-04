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

class Scene {
  getSceneNode = () => document.querySelector(".scene")
  getBirdsNode = () => document.querySelector(".birds")
  getTemplateNode = () => document.querySelector(".template").content
  getCounterNode = () => document.querySelector(".birds-counter__amount")
}

class Controller {
  constructor() {
    this.birds = []
    this.addEvents()
  }

  addEvents() {
    scene.getSceneNode().addEventListener("click", this.onClickScene.bind(this));
  }

  onClickScene(event) {
    scene.getCounterNode().innerHTML = String(this.birds.push(new Bird(event.clientX, event.clientY)))
  }
}

class Bird {
  constructor(x, y) {
    this.positionX = x
    this.positionY = y
    this.mountBird()
    this.addEvents()
  }

  addEvents() {
    scene.getBirdsNode().addEventListener("click", this.onBirdClick);
  }

  mountBird() {
    const birdColor = getRandomColor();
    const clone = scene.getTemplateNode().cloneNode(true);
    const birdClone = clone.querySelector(".bird");
    birdClone.style.left = `${this.positionX}px`;
    birdClone.style.top = `${this.positionY}px`;
    clone.querySelector(".bird__yell").innerHTML = BIRD_SCREAMERS[getRandomNumber(0, BIRD_SCREAMERS.length)];
    clone.querySelector(".bird__body").style.backgroundColor = birdColor;
    clone.querySelector(".bird__wing--left").style.backgroundColor = birdColor;
    clone.querySelector(".bird__wing--right").style.backgroundColor = birdColor;
    scene.getBirdsNode().appendChild(clone)
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


}

const scene = new Scene()
new Controller()