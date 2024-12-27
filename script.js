document.getElementById('mythology-link').addEventListener('click', function() {
    document.getElementById('mythology').classList.remove('hidden');
    document.getElementById('reselling').classList.add('hidden');
    document.getElementById('culture').classList.add('hidden');
    document.getElementById('mythology-submenu').classList.toggle('hidden'); // Показать/скрыть подменю мифологии
});

document.getElementById('reselling-link').addEventListener('click', function() {
    document.getElementById('reselling').classList.remove('hidden');
    document.getElementById('mythology').classList.add('hidden');
    document.getElementById('culture').classList.add('hidden');
    document.getElementById('reselling-submenu').classList.toggle('hidden'); // Показать/скрыть подменю расселения
});

document.querySelector('.sidebar a[href="#culture"]').addEventListener('click', function() {
    document.getElementById('culture').classList.remove('hidden');
    document.getElementById('mythology').classList.add('hidden');
    document.getElementById('reselling').classList.add('hidden');
    document.querySelector('.sub-menu').classList.add('hidden'); // Скрыть подменю
});

// Функция для переключения видимости секций
function togglePopup(section) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('hidden'));

    const selectedContent = document.getElementById(section);
    selectedContent.classList.toggle('hidden');

    // Скрыть текст "Расселение" при открытии подкаталогов
    if (section === 'eastern' || section === 'western' || section === 'southern') {
        document.getElementById('reselling').classList.add('hidden');
    }
}

// Добавьте обработчики событий для кнопок в подменю расселения
const popupButtons = document.querySelectorAll('#reselling-submenu .popup-btn');
popupButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionToShow = button.getAttribute('data-section');
        togglePopup(sectionToShow);
    });
});

// Добавьте обработчики событий для кнопок в подменю мифологии
const mythologyButtons = document.querySelectorAll('#mythology-submenu .popup-btn');
mythologyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionToShow = button.getAttribute('data-section');
        togglePopup(sectionToShow);
    });
});
