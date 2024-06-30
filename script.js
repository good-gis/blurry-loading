const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const initialBlur = 100;

for (let i = 0; i <= 100; i++) {
    setTimeout(() => {
        loadingText.textContent = `${i}%`;
        bg.style.filter = `blur(${initialBlur - i}px)`;
        if (i === 100) {
            loadingText.style.display = 'none';
        }
    }, 15 * i);
}