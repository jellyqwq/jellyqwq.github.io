import {config} from '../config.js'

// title insert
document.getElementsByTagName('title')[0].innerText = config.title

// site title insert
document.getElementsByClassName('site-title')[0].innerText = config.title

// bottom info insert
document.getElementById('copyright-name').innerText = config.copyright.name
document.getElementById('copyright-link').href = config.copyright.link

console.log(config.navigation)
let outputList = config.navigation
let oneLock = false
let twoLock = false
let alstr = ''

// 对象检测,是否为数组 ? 是则返回返回数组, 否则返回空数组
function isList(obj) {
    if (obj) {
        if (obj instanceof Array) {
            return obj
        }
        else {
            return []
        }
    }
    else {
        return []
    }
}

// 递归生成结构
function rescircle(list) {
    list = isList(list)
    if (!oneLock) {
        if (list.length == 0) {
            alstr = ''
        }
        else {
            let containerList = []
            for (var i = 0; i < list.length; i++) {
                var listChild = isList(list[i].child)
                if (listChild.length != 0) {
                    oneLock = true
                    containerList.push(`<li class="nav-link"><a href="javascript:void(0);">${list[i].name}</a>${rescircle(list[i].child)}</li>`)
                }
                else {
                    containerList.push(`<li class="nav-link"><a href="${list[i].href}">${list[i].name}</a></li>`)
                }
            }
            var tempStr = ''
            for (var i = 0; i < containerList.length; i++) {
                tempStr += containerList[i]
            }
            alstr = `<div class="nav-links"><ul>${tempStr}</ul></div>`
        }
    }
    else {
        if (!twoLock) {
            let containerList = []
            for (var i = 0; i < list.length; i++) {
                var listChild = isList(list[i].child)
                if (listChild.length == 0) {
                    containerList.push(`<li class="dropdown-link"><a href="${list[i].href}">${list[i].name}</a></li>`)
                }
                else {
                    twoLock = true
                    containerList.push(`<li class="dropdown-link"><a href="javascript:void(0);">${list[i].name}</a>${rescircle(list[i].child)}</li>`)
                }
                var tempStr = ''
                for (var j = 0; j < containerList.length; j++) {
                    tempStr += containerList[j]
                }
            }
            oneLock = false
            return `<div class="dropdown"><ul>${tempStr}</ul></div>`
        }
        else {
            let containerList = []
            for (var i = 0; i < list.length; i++) {
                var listChild = isList(list[i].child)
                if (listChild.length == 0) {
                    containerList.push(`<li class="dropdown-link"><a href="${list[i].href}">${list[i].name}</a></li>`)
                }
                else {
                    containerList.push(`<li class="dropdown-link"><a href="javascript:void(0);">${list[i].name}</a>${rescircle(list[i].child)}</li>`)
                }
                var tempStr = ''
                for (var j = 0; j < containerList.length; j++) {
                    tempStr += containerList[j]
                }
            }
            oneLock = false
            twoLock = false
            return `<div class="dropdown second"><ul>${tempStr}</ul></div>`
        }
    } 
}
rescircle(outputList)
document.getElementById('nav-box-1').innerHTML = alstr