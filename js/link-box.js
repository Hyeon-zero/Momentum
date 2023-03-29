document.querySelector('.class-links').addEventListener('click', () => {
    const dropdown = document.getElementById('dropdown-id');

    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});