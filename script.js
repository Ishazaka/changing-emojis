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

mouthFace.addEventListener('click', function(){
 if(heartFace.classList.contains('heartface')) {
  heartFace.classList.add('active'); 
  mouthFace.classList.remove('active');
 }
})


heartFace.addEventListener('click', function(){
 if(heartEyes.classList.contains('hearteyes')) {
  heartEyes.classList.add('active'); 
  heartFace.classList.remove('active');
 }
})



heartEyes.addEventListener('click', function(){
if(starEyes.classList.contains('stareyes')) {
  starEyes.classList.add('active');
  heartEyes.classList.remove('active');
}

})


starEyes.addEventListener('click', function(){
if(kissed.classList.contains('kiss')) {
  kissed.classList.add('active');
  starEyes.classList.remove('active');
}
})


kissed.addEventListener('click', function(){
if(laughed.classList.contains('laugh')) {
  laughed.classList.add('active');
  kissed.classList.remove('active');
}
})


laughed.addEventListener('click', function(){
  if(tasted.classList.contains('tasty')){
    tasted.classList.add('active')
   laughed.classList.remove('active');
}  
})


tasted.addEventListener('click', function(){
  if(tongued.classList.contains('tongue')){
    tongued.classList.add('active')
tasted.classList.remove('active')

}  
})


tongued.addEventListener('click', function(){
  if(zipped.classList.contains('zip')){
    zipped.classList.add('active')
tongued.classList.remove('active')

}  
})



