// 2211102352|Brian Farrel Arkana
const paragraphs = document.querySelectorAll('.cerpen-container p');
const header = document.querySelector('.fixed-header');
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

paragraphs.forEach(p => {
    p.classList.add('fade-out');
    observer.observe(p);
});

window.addEventListener('scroll', () => {
    const scale = 1 + window.scrollY / 2000;
    document.getElementById('bgZoom').style.transform = `scale(${scale})`;

    const headerRect = header.getBoundingClientRect();
    const headerBottom = headerRect.bottom;

    paragraphs.forEach(p => {
        const rect = p.getBoundingClientRect();
        const pTop = rect.top;

        if (pTop < headerBottom) {
            p.style.opacity = 0;
            p.style.filter = `blur(${(1 - 0) * 3}px)`;
        } else {
            p.style.opacity = 1;
            p.style.filter = 'blur(0px)';
        }
    });
});

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = 'Musik: Off';
    } else {
        bgMusic.play();
        musicBtn.innerHTML = 'Musik: On';
    }
    isPlaying = !isPlaying;
});