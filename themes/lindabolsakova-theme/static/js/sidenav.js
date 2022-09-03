 const sidenav = document.querySelector('.sidenav');
 sidenav.querySelector('.blocker').onclick = hide;
 function show() { // swipe right
     sidenav.classList.add('visible');
     document.body.style.overflow = 'hidden';
 }
 function hide() { // by blocker click, swipe left, or url change
     sidenav.classList.remove('visible');
     document.body.style.overflow = '';
 }
 function toggle() {
     sidenav.classList.contains('visible') ? hide() : show();
 }
