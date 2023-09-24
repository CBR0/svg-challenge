import './style.css';
import { setupGaugeComponent, gaugeComponent } from './src/components/gauge/gauge-chart';
import { sliderComponent, setupSliderComponent} from './src/components/slider/slider';

// console.log(templateHtml);
document.querySelector('#app').innerHTML = `${
    gaugeComponent()+
    sliderComponent()
}`

setupGaugeComponent();
setupSliderComponent();


