import "./gauge-chart.scss";
import template from "./gauge-chart.html?raw";
import { f_svg_ellipse_arc } from "./arc-from";
import { GradientPath } from 'gradient-path';

// Tamanhos em pixel
const config = {
    width: 150,
    height: 150,
    gap: 10
};

export function gaugeComponent() {
    return `${template}`;
};

export function setupGaugeComponent() {
    let gauge = document.getElementById("gauge");
    let botao = document.getElementById("botao");
    gauge.setAttribute("width", config.width);
    gauge.setAttribute("height", config.height);
    generateGauge();
};

function gerarLinhas() {
    const sizeLoopHorizontal = config.width / config.gap;
    const sizeLoopVertical = config.height / config.gap;

    for(let i = 1; i < sizeLoopHorizontal; i++) {
        adicionarLinhaHorizontal(i);
        criarReguaHorizontal(i);
    }

    for(let i = 1; i < sizeLoopVertical; i++) {
        adicionarLinhaVertical(i);
        criarReguaVertical(i)
    }
};
function gerarGrid() {
    gerarLinhas();
}

function adicionarLinhaHorizontal(numeroLinha) {
    let linha = document.createElementNS("http://www.w3.org/2000/svg","path");
    let espaco = numeroLinha * config.gap;
    linha.setAttribute("d", `M${espaco} 0 L${espaco} ${config.height}`);
    linha.classList.add("linha");
    let chart = document.getElementById("gauge");
    chart.prepend(linha);
};
function adicionarLinhaVertical(numeroLinha) {
    let linha = document.createElementNS("http://www.w3.org/2000/svg","path");
    linha.setAttribute("d", `M0 ${numeroLinha * config.gap} L${config.width} ${numeroLinha * config.gap}`);
    linha.classList.add("linha");
    let chart = document.getElementById("gauge");
    chart.prepend(linha);
};
function criarReguaHorizontal(n) {
    let linha = document.createElementNS("http://www.w3.org/2000/svg","text");
    let valor = ((n * config.gap - 5 ) ).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}).toString()
    linha.setAttribute("x", `${valor}`);
    linha.setAttribute("y", `5`);
    linha.innerHTML = n * config.gap;
    linha.classList.add("label");
    let chart = document.getElementById("gauge");
    chart.appendChild(linha);
}
function criarReguaVertical(n) {
    let linha = document.createElementNS("http://www.w3.org/2000/svg","text");
    let valor = ((n * config.gap + 2 ) ).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}).toString()
    linha.setAttribute("x", `0`);
    linha.setAttribute("y", `${valor}`);
    linha.innerHTML = n * config.gap;
    linha.classList.add("label");
    let chart = document.getElementById("gauge");
    chart.appendChild(linha);
}
function generateGauge() {
    const maxPosition = 270;
    const percentage = 80;
    const position = (maxPosition * percentage) / 100;
    const center = config.width / 2;
    const size = config.width / 2 - 5;
    const stroke = 10;
    const pi = Math.PI;

    let gauge = document.createElementNS("http://www.w3.org/2000/svg","path");
    let spaceGauge = document.createElementNS("http://www.w3.org/2000/svg","path");
    const f_arc = f_svg_ellipse_arc([center, center], [size, size], [(0 / 180 * pi), (position / 180 * pi)], 135 / 180 * pi);
    const dValues = f_arc.dValues.join(" ");

    // let circuloCentral = document.createElementNS("http://www.w3.org/2000/svg","circle");
    // circuloCentral.setAttribute("cx", `${config.width / 2}`);
    // circuloCentral.setAttribute("cy", `${config.width / 2}`);
    // circuloCentral.setAttribute("r", `5`);
    // circuloCentral.setAttribute("fill", `red`);

    gauge.setAttribute("d", dValues );
    gauge.classList.add("arco");
    gauge.setAttribute("id", "arco")

    spaceGauge.setAttribute("d", f_svg_ellipse_arc([center, center], [size, size], [(0 / 180 * pi), (270 / 180 * pi)], 135 / 180 * pi).dValues.join(" "))
    spaceGauge.classList.add("space-gauge")
    let chart = document.getElementById("gauge");
    chart.appendChild(spaceGauge);
    createCircleRoundedStartEnd(f_arc.sX, f_arc.sY, f_arc.eX, f_arc.eY);
    chart.appendChild(gauge);
    // chart.appendChild(circuloCentral);
    setGradient();
}
function setGradient() {
     // <circle cx="55" cy="55" r="2" fill="red"></circle>
     const myColors = [
        { color: '#2031f3', pos: 0 },
        { color: '#18a4fc', pos: 1 }
      ];
     const gp = new GradientPath({
        path: document.querySelector('#arco'),
        segments: 30,
        samples: 3,
        precision: 2// Optional
      });

      gp.render({
        type: 'path',
        fill: myColors,
        width: 10,
        stroke: myColors,
        strokeWidth: 0.5
      });
}
function createCircleRoundedStartEnd(c1x, c1y, c2x, c2y) {
    // <circle cx="25" cy="95.35533905932738" r="5.1" fill="#2031f3"/>
    let circle1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle1.setAttribute("cx", `${c1x}`);
    circle1.setAttribute("cy", `${c1y}`);
    circle1.setAttribute("r", `5.3`);
    circle1.setAttribute("fill", `#2031f3`);

    let circle2 = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle2.setAttribute("cx", `${c2x}`);
    circle2.setAttribute("cy", `${c2y}`);
    circle2.setAttribute("r", `5.3`);
    circle2.setAttribute("fill", `#18a4fc`);

    let chart = document.getElementById("gauge");
    chart.appendChild(circle1);
    chart.appendChild(circle2);
}