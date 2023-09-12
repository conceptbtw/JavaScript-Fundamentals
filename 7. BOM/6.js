
function displayWindowSize() {
    const widthSpan = document.querySelector('#width');
    const heightSpan = document.querySelector('#height');
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    widthSpan.textContent = windowWidth;
    heightSpan.textContent = windowHeight;
}
window.addEventListener('load', displayWindowSize);
window.addEventListener('resize', displayWindowSize);