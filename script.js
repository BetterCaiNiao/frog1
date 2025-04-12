// 获取图片元素
const crazyImage = document.getElementById('crazyImage');
// 获取音频元素
const crazyAudio = document.getElementById('crazyAudio');
// 获取浏览器窗口的宽度和高度
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// 随机移动图片的函数
function randomMove() {
    // 生成随机的坐标
    const randomX = Math.floor(Math.random() * (windowWidth - crazyImage.width));
    const randomY = Math.floor(Math.random() * (windowHeight - crazyImage.height));

    // 设置图片的位置
    crazyImage.style.left = `${randomX}px`;
    crazyImage.style.top = `${randomY}px`;

    // 缩短时间间隔，加快移动速度，这里设置为 50 毫秒，可按需调整
    setTimeout(randomMove, 50); 
}

// 监听用户点击事件，在用户点击页面后播放音频并开始移动图片
document.addEventListener('click', function() {
    crazyAudio.play();
    randomMove();
});