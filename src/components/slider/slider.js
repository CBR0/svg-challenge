import "./slider.scss";
import template from "./slider.html?raw";

// Tamanhos em pixel
// const config = {
//     width: 150,
//     height: 150,
//     gap: 10
// };
var xAxis = 0;
const yAxis = 100;

export function sliderComponent() {
    return `${template}`;
};

export function setupSliderComponent() {
    init();

    window.addEventListener("resize", updateSizeSlider);
}

function init() {
    let slider = document.getElementById('slider');
    updateSizeSlider();
    // moveSlider();
    moveSliderMobile();
    slider.style.left = xAxis + 50 + 'px';
}

function updateSizeSlider() {
    let sizePage = window.innerWidth;
    let path = document.getElementById('gradient-path');

    // let d = path.getAttribute('d');
    let dString = `
        M0 10 L${sizePage} 10
        M0 100 L${xAxis + 20} 100


        M100 80 A 50 50 0 0 1 200 80

        M80 100
        C80, 100
        100 100
        100 80

        M200 80
        C200, 80,
        200 100
        220 100

        M${(xAxis + 160) < sizePage ? (xAxis + 160) : sizePage } 100
        ${sizePage} 100
        z
    `;
    path.setAttribute('d', dString);
}

function moveSliderMobile() {
    let slider = document.getElementById('slider');
    let dragArea = document.getElementById('drag-area');
    let debuggerElement = document.getElementById('debugger');

    dragArea.ontouchmove = (event) => {
        var touch = event.targetTouches[0];
        let axis = touch.pageX - 20;

        if (axis >= 0 && axis <= (window.innerWidth - 50)) {
            xAxis = axis;
            slider.style.left = axis + 'px';
            debuggerElement.innerText = touch.pageX - 20
        }
        event.preventDefault();
        updateDebuggers();
        updateSizeSlider();
    }
}

function updateDebuggers() {
    console.log(xAxis);
}