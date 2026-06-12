function openModal(element) {
    const img = element.querySelector('img');
    const name = element.querySelector('p').textContent;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    caption.textContent = name;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
});
