const select = document.querySelector('select');
const html = document.querySelector('.container');

function updateTheme(bgColor, textColor) {
   html.style.backgroundColor = bgColor;
   html.style.color = textColor;
}

select.addEventListener('change', () => {
   const choice = select.value;

   switch (choice) {
      case 'white':
         updateTheme('white', 'black')
         break;

      case 'black':
         updateTheme('black', 'white')
         break;

      case 'purple':
         updateTheme('purple', 'white')
         break;

      case 'yellow':
         updateTheme('yellow', 'purple');
         break;

      case 'psychedelic':
         updateTheme('lime', 'purple')
         break;
   }
})