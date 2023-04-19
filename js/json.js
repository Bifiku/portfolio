const container = document.querySelector('.animation-button-bg');
let animation = bodymovin.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/animation-button-bg.json'
});