import {config} from '../config.js'

// title insert
document.getElementsByTagName('title')[0].innerText = config.title

// site title insert
document.getElementsByClassName('site-title')[0].innerText = config.title

// bottom info insert
document.getElementById('copyright').innerText = config.copyright



