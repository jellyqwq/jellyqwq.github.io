// 上滑隐藏导航栏, 下滑显示导航栏
// 第一种
// 检测touchmove的坐标
const slider = document.getElementById('main');
let moveDirection = null;
let moveCount = 0;

slider.addEventListener('touchmove', (event) => {
    // console.log(event.type)
    if (event.type == 'touchmove') {
        moveCount ++;
    }
    
    if (slider.getBoundingClientRect().top == 60) {
        document.getElementById('nav').classList.remove('is-hide')
    }

    if (moveDirection && moveCount > 10) {
        move_num = event.changedTouches[0].clientY - moveDirection
        if (move_num > 0) {
            console.log('下滑中')
            document.getElementById('nav').classList.remove('is-hide')
        }
        else if (move_num < 0) {
            console.log('上滑中')
            document.getElementById('nav').classList.add('is-hide')
        }
    }
    else {
        moveDirection = event.changedTouches[0].clientY
    }
})



// 滚轮事件
document.getElementById('main').addEventListener('wheel', (event) => {
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
