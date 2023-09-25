import "./slider.scss";
import template from "./slider.html?raw";

var xAxis = 0;
const yAxis = 100;
const widthArc = 140;

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
    slider.style.left = xAxis + 'px';
}

function updateSizeSlider() {
    let sizePage = window.innerWidth;
    let path = document.getElementById('gradient-path');
    // let d = path.getAttribute('d');
    let dString = `
        M0 100 L${xAxis + 20} 100

        M${xAxis + 40} 90 A 20 20 0 0 1 ${xAxis + 90} 90

        M${xAxis + 20} 100
        C${xAxis + 20}, 100
        ${xAxis + 40} 100
        ${xAxis + 40} 90

        M${xAxis + 90} 90
        C${xAxis + 90}, 90,
        ${xAxis + 90} 100
        ${xAxis + 90 + 20} 100

        M${(xAxis + 110) < sizePage ? (xAxis + 110) : sizePage } 100
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
        event.preventDefault();
        var touch = event.targetTouches[0];
        let axis = touch.pageX - 65;

        if (axis >= 0 && axis <= (window.innerWidth - widthArc - 40)) {
            xAxis = axis;
            slider.style.left = axis + 'px';
        }

        updateDebuggers();
        updateSizeSlider();
    }
}

function updateDebuggers() {
    // console.log(xAxis);
}