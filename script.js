function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

function openPhoto(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
}

function closePhoto(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox || event.target.classList.contains('close')) {
        lightbox.classList.add('hidden');
    }
}

function filterCategory(category) {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        if (category === 'all' || photo.dataset.category === category) {
            photo.classList.remove('hidden');
        } else {
            photo.classList.add('hidden');
        }
    });
}

function changeTheme(theme) {
    document.body.className = `theme-${theme} h-screen overflow-hidden flex relative`;
}

function searchPhotos() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        const name = photo.dataset.name.toLowerCase();
        if (name.includes(searchValue)) {
            photo.classList.remove('hidden');
        } else {
            photo.classList.add('hidden');
        }
    });
}
