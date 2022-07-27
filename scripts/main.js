import {config} from '../config.js'

// title insert
document.getElementsByTagName('title')[0].innerText = config.title

// site title insert
document.getElementsByClassName('site-title')[0].innerText = config.title

// bottom info insert
document.getElementById('copyright-name').innerText = config.copyright.name
document.getElementById('copyright-link').href = config.copyright.link




