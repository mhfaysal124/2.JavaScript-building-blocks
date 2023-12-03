var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
         panel.style.display = "none";
      } else {
         panel.style.display = "block";
      }
   });
}

const moon = document.querySelector('.js-moonTheme');
const sun = document.querySelector('.js-sunTheme');
const containerTheme = document.querySelector('body');


moon.classList.remove('moon');

moon.addEventListener('click', () => {
   containerTheme.style.backgroundColor = 'black';
   containerTheme.style.color = 'white';
   moon.classList.add('moon');
   sun.classList.remove('sun');
   
});


sun.addEventListener('click', () => {
   containerTheme.style.backgroundColor = 'white';
   containerTheme.style.color = 'black';
   sun.classList.add('sun');
   moon.classList.remove('moon');
})
