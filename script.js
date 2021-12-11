const closedFace = document.querySelector('.closed') ;
const openFace = document.querySelector('.open');
const mouthFace = document.querySelector('.mouth');

const heartFace = document.querySelector('.heartface');
const heartEyes = document.querySelector('.hearteyes');
const starEyes = document.querySelector('.stareyes');

const kissed = document.querySelector('.kiss');
const laughed = document.querySelector('.laugh');
const tasted = document.querySelector('.tasty');
const tongued = document.querySelector('.tongue');
 const zipped = document.querySelector('.zip');
const moneid = document.querySelector('.money');
const stranged = document.querySelector('.strange');
const circled = document.querySelector('.circle');


closedFace.addEventListener('click', function(){
if(openFace.classList.contains('open')) {
  openFace.classList.add('active');
  closedFace.classList.remove('active');
}
})

openFace.addEventListener('click', function(){
if(mouthFace.classList.contains('mouth')) {
  mouthFace.classList.add('active');
   openFace.classList.remove('active');
   
}
})

