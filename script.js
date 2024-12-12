document.getElementById('mythology-link').addEventListener('click', function() {
    document.getElementById('mythology').classList.remove('hidden');
    document.getElementById('reselling').classList.add('hidden');
    document.getElementById('culture').classList.add('hidden');
    document.querySelector('.sub-menu').classList.remove('hidden'); // Показать подменю
});

document.querySelector('.sidebar a[href="#reselling"]').addEventListener('click', function() {
    document.getElementById('reselling').classList.remove('hidden');
    document.getElementById('mythology').classList.add('hidden');
    document.getElementById('culture').classList.add('hidden');
    document.querySelector('.sub-menu').classList.add('hidden'); // Скрыть подменю
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