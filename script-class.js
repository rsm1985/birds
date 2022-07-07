const BIRD_RETURN_TIME = 5000;
const OUTER_MIN = -180;
const OUTER_MAX = 180;
const INNER_MIN = -80;
const INNER_MAX = 100;
const BIRD_YELLS = ['Karr', 'Ku-Ku', 'Chiv-Chiv'];
const MAX_COLORS_AMOUNT = 16777215;

const scene = document.querySelector(".scene");
const birds = document.querySelector(".birds");
const template = document.querySelector(".template").content;
const birdsClearButton = document.querySelector(".clear-birds");

const getRandomColor = () => `#${(getRandomNumber(0, MAX_COLORS_AMOUNT)).toString(16)}`;
const getRandomNumber = (min=0, max=100) =>  Math.floor(Math.random() * (max - min) + min);
const getRandomNumberInRanges = (outerMin, outerMax, innerMin, innerMax) => {
  const usableRange = innerMin - outerMin + outerMax - innerMax;
  const threshold = innerMin - outerMin;
  const num = getRandomNumber(0, usableRange + 1);
  return num < threshold ? num - threshold : num - threshold + innerMax;
}
const getRandomYell = () => BIRD_YELLS[Math.floor(Math.random()*BIRD_YELLS.length)];

class Bird {
  constructor(color, x, y, yell) {
    this.color = color;
    this.positionX = x;
    this.positionY = y;
    this.yell = yell;
  }

  addBird() {
    const clone = template.cloneNode(true);
    const birdClone = clone.querySelector(".bird")
    birdClone.style.left = `${this.positionX}px`;
    birdClone.style.top = `${this.positionY}px`;
    clone.querySelector(".bird__body").style.backgroundColor = this.color;
    clone.querySelector(".bird__wing--left").style.backgroundColor = this.color;
    clone.querySelector(".bird__wing--right").style.backgroundColor = this.color;
    clone.querySelector(".bird__yell").innerHTML = this.yell;
    birds.appendChild(clone);
  }
  onBirdClick() {}
  returnBird() {}
  removeBird() {}
}

const addBird = (e) => {
  const birdInstance = new Bird(getRandomColor(), e.clientX, e.clientY, getRandomYell())
  birdInstance.addBird()
}

const onBirdClick = (event) => {
  if (event.target.className === 'bird') {
    event.stopPropagation();
    console.log("event", event)
  }
}
scene.addEventListener("click", addBird);
birds.addEventListener("click", onBirdClick);