// Smooth scroll + basic skill animation
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
  const about = document.getElementById('about');
  const bars = about.querySelectorAll('.skill-bar span');
  function animateBars(){
    bars.forEach(b=>{
      const w = b.style.width;
      b.style.width = w;
    });
    window.removeEventListener('scroll', animateBars);
  }
  window.addEventListener('scroll', function onScroll(){
    const rect = about.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      animateBars();
      window.removeEventListener('scroll', onScroll);
    }
  });
});