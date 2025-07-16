// Tema değiştirme
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.innerHTML = document.body.classList.contains('dark-theme') ? '<i class="fas fa-sun"></i> Açık Mod' : '<i class="fas fa-moon"></i> Koyu Mod';
});

// Hoş geldin bildirimi
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        alert('Hoş geldiniz! Kişisel web siteme göz attığınız için teşekkürler.');
    }, 500);
});

// Proje arama
const projectSearch = document.getElementById('project-search');
if (projectSearch) {
    projectSearch.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        document.querySelectorAll('.project-card').forEach(card => {
            const title = card.querySelector('.project-title').textContent.toLowerCase();
            card.style.display = title.includes(filter) ? '' : 'none';
        });
    });
}

// Hobi arama
const hobbySearch = document.getElementById('hobby-search');
if (hobbySearch) {
    hobbySearch.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        document.querySelectorAll('.hobby-item').forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(filter) ? '' : 'none';
        });
    });
}
