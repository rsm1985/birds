const BIRD_RETURN_TIME = 5000;
const OUTER_MIN = -180;
const OUTER_MAX = 180;
const INNER_MIN = -80;
const INNER_MAX = 100;
const BIRD_YELLS = ['Karr', 'Ku-Ku', 'Chiv-Chiv'];
const MAX_COLORS_AMOUNT = 16777215;

// const scene = document.querySelector(".scene");
// const birds = document.querySelector(".birds");
// const template = document.querySelector(".template").content;
// const birdsClearButton = document.querySelector(".clear-birds");

const getRandomColor = () => `#${(getRandomNumber(0, MAX_COLORS_AMOUNT)).toString(16)}`;
const getRandomNumber = (min=0, max=100) =>  Math.floor(Math.random() * (max - min) + min);
const getRandomNumberInRanges = (outerMin, outerMax, innerMin, innerMax) => {
  const usableRange = innerMin - outerMin + outerMax - innerMax;
  const threshold = innerMin - outerMin;
  const num = getRandomNumber(0, usableRange + 1);
  return num < threshold ? num - threshold : num - threshold + innerMax;
}
const getRandomYell = () => BIRD_YELLS[Math.floor(Math.random()*BIRD_YELLS.length)];

class Birds {
  constructor() {
    this.getNodes();
    this.addEvents();

    // this.color = color;
    // this.positionX = x;
    // this.positionY = y;
    // this.yell = yell;
  }

  getNodes() {
    this.scene = document.querySelector(".scene");
    this.birds = document.querySelector(".birds");
    this.template = document.querySelector(".template").content;
    console.log(this.template)
  }

  addEvents() {
    this.scene.addEventListener("click", this.#mountBird);
    this.birds.addEventListener("click", this.#onBirdClick);
  }

  #mountBird() {
    console.log(this)
    // const clone = this.template.cloneNode(true);
    // const birdClone = clone.querySelector(".bird")
    // birdClone.style.left = `${this.positionX}px`;
    // birdClone.style.top = `${this.positionY}px`;
    // clone.querySelector(".bird__body").style.backgroundColor = this.color;
    // clone.querySelector(".bird__wing--left").style.backgroundColor = this.color;
    // clone.querySelector(".bird__wing--right").style.backgroundColor = this.color;
    // clone.querySelector(".bird__yell").innerHTML = this.yell;
    // this.birds.appendChild(clone);
  }
  #onBirdClick(event) {
    if (event.target.className === 'bird') {
      event.stopPropagation();
      event.target.style.left = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
      event.target.style.top = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
      returnBird.call(event);
    }
  }

  destroyBird() {
    console.log('Destroy me');
  }
}

const birds = new Birds();
// birds.destroy();






// class Bird {
//   constructor(color, x, y, yell) {
//     this.color = color;
//     this.positionX = x;
//     this.positionY = y;
//     this.yell = yell;
//   }
//
//   #mount() {
//     const clone = template.cloneNode(true);
//     const birdClone = clone.querySelector(".bird")
//     birdClone.style.left = `${this.positionX}px`;
//     birdClone.style.top = `${this.positionY}px`;
//     clone.querySelector(".bird__body").style.backgroundColor = this.color;
//     clone.querySelector(".bird__wing--left").style.backgroundColor = this.color;
//     clone.querySelector(".bird__wing--right").style.backgroundColor = this.color;
//     clone.querySelector(".bird__yell").innerHTML = this.yell;
//     birds.appendChild(clone);
//   }
//   onBirdClick() {}
//   returnBird() {}
//   destroy() {}
// }

// const addBird = (e) => {
//   const birdInstance = new Bird(getRandomColor(), e.clientX, e.clientY, getRandomYell())
//   // birdInstance.addBird()
// }
//
// const onBirdClick = (event) => {
//   if (event.target.className === 'bird') {
//     event.stopPropagation();
//     console.log("event", event)
//   }
// }
// scene.addEventListener("click", addBird);
// birds.addEventListener("click", onBirdClick);