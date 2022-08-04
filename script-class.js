const BIRD_RETURN_TIME = 5000;
const OUTER_MIN = -180;
const OUTER_MAX = 180;
const INNER_MIN = -80;
const INNER_MAX = 100;
const BIRD_YELLS = ['Karr', 'Ku-Ku', 'Chiv-Chiv'];
const MAX_COLORS_AMOUNT = 16777215;

class Controller {
  constructor(){
    this.birds = []
    this.getNodes()
    this.addEvents()
  }
  getNodes(){
    this.scene = document.querySelector(".scene");
  }
  addEvents() {
    this.scene.addEventListener("click", this.onClickScene.bind(this));
  }
  onClickScene(event) {
    console.log(event)
    this.birds.push(new Bird(event.clientX, event.clientY))

  }
  createBird(){}
  incrementCounter() {}
  onClickDestroy(){}
  destroyBirds(){

  }
}

class Bird {
  constructor(x, y) {
    // this.color = this.getRandomColor()
    // this.screamer = this.getRandomScreamer()
    // this.bird = this.generateBirdHTML()
    this.positionX = x
    this.positionY = y
    // this.generateBirdHTML()
    // this.addEvents()
  }
  // getRandomNumber = (min= 0, max= 100) =>  Math.floor(Math.random() * (max - min) + min);
  // getRandomNumberInRanges = (outerMin, outerMax, innerMin, innerMax) => {
  //   const usableRange = innerMin - outerMin + outerMax - innerMax;
  //   const threshold = innerMin - outerMin;
  //   const num = getRandomNumber(0, usableRange + 1);
  //   return num < threshold ? num - threshold : num - threshold + innerMax;
  // }
  // getRandomColor = () => `#${(this.getRandomNumber(0, MAX_COLORS_AMOUNT)).toString(16)}`
  // getRandomScreamer(){}
  // generateBirdHTML(){
  //   //
  //   const birdColor = getRandomColor();
  //   const clone = this.template.cloneNode(true);
  //   const birdClone = clone.querySelector(".bird");
  //   birdClone.style.left = `${event.clientX}px`;
  //   birdClone.style.top = `${event.clientY}px`;
  //   clone.querySelector(".bird__body").style.backgroundColor = birdColor;
  //   clone.querySelector(".bird__wing--left").style.backgroundColor = birdColor;
  //   clone.querySelector(".bird__wing--right").style.backgroundColor = birdColor;
  //   return document.querySelector(".template").content;
  // }
  // addEvents() {
  //
  //   this.birds.addEventListener("click", this.onClickBird);
  // }
  mountBird = (event) => {
    const birds = document.querySelector(".birds");
    // clone.querySelector(".bird__yell").innerHTML = getRandomYell();
    // birds.appendChild(this.bird);
  }
  onClickBird = (event) => {
    if (event.target.className === 'bird') {
      event.stopPropagation();
      // event.target.style.left = `${this.getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
      // event.target.style.top = `${this.getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
      // this.returnBird.call(event);
    }
  }
  incrementCounter(){}
  flyAway(){}
  flyBack(){}
  destroy(){}
}


// const getRandomColor = () => `#${(getRandomNumber(0, MAX_COLORS_AMOUNT)).toString(16)}`;
// const getRandomNumber = (min=0, max=100) =>  Math.floor(Math.random() * (max - min) + min);
// const getRandomNumberInRanges = (outerMin, outerMax, innerMin, innerMax) => {
//   const usableRange = innerMin - outerMin + outerMax - innerMax;
//   const threshold = innerMin - outerMin;
//   const num = getRandomNumber(0, usableRange + 1);
//   return num < threshold ? num - threshold : num - threshold + innerMax;
// }
// const getRandomYell = () => BIRD_YELLS[Math.floor(Math.random()*BIRD_YELLS.length)];
//
// class Birds {
//   constructor() {
//     this.getNodes();
//     this.addEvents();
//   }
//
//   getNodes() {
//     this.scene = document.querySelector(".scene");
//     this.birds = document.querySelector(".birds");
//     this.template = document.querySelector(".template").content;
//   }
//
//   addEvents() {
//     this.scene.addEventListener("click", this.#mountBird);
//     this.birds.addEventListener("click", this.#onBirdClick);
//   }
//
//   #mountBird = (event) => {
//     const birdColor = getRandomColor();
//     const clone = this.template.cloneNode(true);
//     const birdClone = clone.querySelector(".bird");
//     birdClone.style.left = `${event.clientX}px`;
//     birdClone.style.top = `${event.clientY}px`;
//     clone.querySelector(".bird__body").style.backgroundColor = birdColor;
//     clone.querySelector(".bird__wing--left").style.backgroundColor = birdColor;
//     clone.querySelector(".bird__wing--right").style.backgroundColor = birdColor;
//     clone.querySelector(".bird__yell").innerHTML = getRandomYell();
//     this.birds.appendChild(clone);
//   }
//   returnBird() {
//     setTimeout(() => {
//       this.target.style.left = `${this.clientX}px`;
//       this.target.style.top = `${this.clientY}px`;
//     }, BIRD_RETURN_TIME)
//   }
//   #onBirdClick = (event) => {
//     if (event.target.className === 'bird') {
//       event.stopPropagation();
//       event.target.style.left = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
//       event.target.style.top = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
//       this.returnBird.call(event);
//     }
//   }
//
//   destroyBird() {
//     console.log('Destroy me');
//   }
// }
//
// const birds = new Birds();
new Controller()