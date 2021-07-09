import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import pageHeader from './header.js';

const content = document.getElementById('content');
content.appendChild(pageHeader());
