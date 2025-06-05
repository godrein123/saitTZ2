export function changeWidth (){
 const mainCards = document.querySelectorAll('.main_card');

// Перебор всех элементов
mainCards.forEach(card => {
    // Получение ширины элемента
    const width = card.clientWidth;
    
    // Проверка ширины и добавление класса
    if (width > 300) {
        card.classList.add('main_card_row');
    } else {
        card.classList.remove('main_card_row');
    }
});

}


function observeDOMChanges() {
    const targetNode = document.querySelector('#block_main_cards'); // Укажите контейнер, в который добавляются карточки
    const config = { childList: true, subtree: true };

    const callback = function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                changeWidth(); // Запускаем проверку при добавлении новой карточки
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

document.addEventListener('DOMContentLoaded', () => {
    changeWidth();
    observeDOMChanges(); // Начинаем наблюдение за изменениями
});
