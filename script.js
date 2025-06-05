
import { timer } from "./modules/TimerAllTime.js";
import { changeWidth } from "./modules/checkWidthCard.js";
const buttonCase = document.getElementById('create_main_card');

export function addDiv() {
         const container = document.getElementById('block_main_cards');
         const cardsCntainer = document.getElementById('main_card');
         const blocks = container.children.length;
    
         
         const newDiv = document.createElement('div');
         newDiv.className = 'main_card';
         newDiv.setAttribute = ('id', 'main_card_id')
         newDiv.innerHTML = ' <div class= "praci_card">  <p class= "praci">1000</p> <p class="praci_title">CR</p> </div> <div class= "button_card_buy"> <p>Buy now</p> </div>'
    
         container.appendChild(newDiv);
         console.log('добавлен новый блок') 
        
                                            }
buttonCase.addEventListener('click', addDiv);






// Запуск проверки при загрузке страницы

document.addEventListener('DOMContentLoaded', changeWidth);
// Запуск проверки при изменении размера окна
window.addEventListener('resize', changeWidth); 
    

window.onload = timer;

