
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if(menu && links){
  menu.addEventListener('click',()=>links.classList.toggle('open'));
}
document.querySelectorAll('.consultation-form').forEach(form=>{
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const alert = form.querySelector('.alert');
    if(alert){ alert.style.display='block'; }
    form.reset();
  });
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
