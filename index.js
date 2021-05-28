import {html, render} from './node_modules/lit-html/lit-html.js';
import './node_modules/zinggrid/es6.js';


// Define a template
const myTemplate = (name) => html`<zing-grid
caption="Hello Futurama"
pager
page-size="3"
editor-controls
data=${data}>
</zing-grid>`;

const data = '[{"name": "Philip J. Fry","origin": "Earth"},{ "name": "Turanga Leela", "origin": "Earth"},{  "name": "Bender Bending Rodriguez",  "origin": "Earth"},{ "name": "Amy Wong",  "origin": "Mars"},{  "name": "Doctor John Zoidberg",  "origin": "Decapod 10"},{  "name": "Lord Nibbler",  "origin": "Earth"}]';

// Render the template to the document
render(myTemplate(data), document.body);
