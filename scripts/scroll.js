// 上滑隐藏导航栏, 下滑显示导航栏

// 屏幕滑动事件
function beginSliding(e) {
    slider.setPointerCapture(e.pointerId);
    begin_Y = e.clientY
}
  
function stopSliding(e) {
    event.preventDefault();
    if (e.clientY - begin_Y > 0) {
        // console.log('下滑')
        document.getElementById('nav').classList.remove('is-hide')
    }
    else {
        if (e.clientY - begin_Y < 0) {
            // console.log('上滑')
            document.getElementById('nav').classList.add('is-hide')
        }
    }
    slider.releasePointerCapture(e.pointerId);
}

const slider = document.getElementsByTagName('body')[0];
var begin_Y = null;
var end_Y = null;

slider.onpointerdown = beginSliding;
slider.onpointermove = stopSliding;

// 滚轮事件
addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // console.log('下滑中')
        document.getElementById('nav').classList.add('is-hide')
    }
    else {
        if (event.deltaY < 0) {
            // console.log('上滑中')
            document.getElementById('nav').classList.remove('is-hide')
        }
    }
});
document.getElementsByTagName('html').onwheel = (event) => {}
