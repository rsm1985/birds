const BIRD_RETURN_TIME = 5000;
const OUTER_MIN = -180;
const OUTER_MAX = 180;
const INNER_MIN = -80;
const INNER_MAX = 100;
const BIRD_YELLS = ['Karr', 'Ku-Ku', 'Chiv-Chiv'];
const MAX_COLORS_AMOUNT = 16777215;

const birds = document.querySelector(".birds");
const template = document.querySelector(".template");
const bird = template.content.querySelector(".bird");
const birdHead = template.content.querySelector(".bird__head");
const birdBody = template.content.querySelector(".bird__body");
const birdLeftWing = template.content.querySelector(".bird__wing--left");
const birdRightWing = template.content.querySelector(".bird__wing--right");
const birdYell = template.content.querySelector(".bird__yell");
const scene = document.querySelector(".scene");
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

const addBird = (e) => {
  const birdColor = getRandomColor();
  const birdBodyClone = document.importNode(birdBody, true);
  birdBodyClone.style.backgroundColor = birdColor;
  const birdLeftWingClone = document.importNode(birdLeftWing, true);
  birdLeftWingClone.style.backgroundColor = birdColor;
  const birdRightWingClone = document.importNode(birdRightWing, true);
  birdRightWingClone.style.backgroundColor = birdColor;
  const birdHeadClone = document.importNode(birdHead, true);
  const birdYellClone = document.importNode(birdYell, true);
  birdYellClone.innerHTML = getRandomYell();
  const birdTemplate = document.importNode(bird, true);
  birdTemplate.style.left = `${e.clientX}px`;
  birdTemplate.style.top = `${e.clientY}px`;
  birdTemplate.appendChild(birdBodyClone);
  birdTemplate.appendChild(birdLeftWingClone);
  birdTemplate.appendChild(birdRightWingClone);
  birdTemplate.appendChild(birdHeadClone);
  birdTemplate.appendChild(birdYellClone);
  birds.appendChild(birdTemplate);
}

const returnBird = function(x, y) {
  setTimeout(() =>{
    this.target.style.left = `${this.clientX}px`;
    this.target.style.top = `${this.clientY}px`;
  }, BIRD_RETURN_TIME)
}

const onBirdClick = function(event) {
  if (event.target.className === 'bird') {
    event.stopPropagation();
    event.target.style.left = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
    event.target.style.top = `${getRandomNumberInRanges(OUTER_MIN, OUTER_MAX, INNER_MIN, INNER_MAX)}%`
    returnBird.call(event);
  }
}

const clearBirds = (event) => {
  event.stopPropagation();
  birds.innerHTML = "";
}

scene.addEventListener("click", addBird);
birds.addEventListener("click", onBirdClick);
birdsClearButton.addEventListener("click", clearBirds)
