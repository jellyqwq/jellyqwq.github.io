// 上滑隐藏导航栏, 下滑显示导航栏
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