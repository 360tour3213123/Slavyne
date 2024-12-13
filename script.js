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

function togglePopup(section) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('hidden'));

    const selectedContent = document.getElementById(section);
    selectedContent.classList.toggle('hidden');
}

// Добавьте обработчики событий для новых разделов
document.querySelector('.popup-btn[onclick="togglePopup(\'eastern\')"]').addEventListener('click', function() {
    togglePopup('eastern');
});
document.querySelector('.popup-btn[onclick="togglePopup(\'western\')"]').addEventListener('click', function() {
    togglePopup('western');
});
document.querySelector('.popup-btn[onclick="togglePopup(\'southern\')"]').addEventListener('click', function() {
    togglePopup('southern');
});