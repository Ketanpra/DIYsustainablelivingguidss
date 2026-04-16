function scrollToGuides(){
  document.getElementById('guides').scrollIntoView({behavior:'smooth'});
}

function animate(id,target){
  let n=0;
  const el=document.getElementById(id);
  const t=setInterval(()=>{
    n += Math.ceil(target/40);
    if(n>=target){
      n=target;
      clearInterval(t);
    }
    el.textContent=n;
  },50);
}

window.onload=()=>{
  animate('c1',250);
  animate('c2',5000);
  animate('c3',120);
}
function showAlert() {
    alert("Thank you! Your message has been sent successfully 🌱");
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
window.addEventListener('load', () => {
  if (document.getElementById('tipsRead')) animate('tipsRead', 12);
  if (document.getElementById('waterSaved')) animate('waterSaved', 300);
  if (document.getElementById('plasticReduced')) animate('plasticReduced', 20);
});