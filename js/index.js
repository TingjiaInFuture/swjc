var index = 0;
//效果
function ChangeImg() {
    index++;
    var a = document.getElementsByClassName("img-slide");
    if (index >= a.length) index = 0;
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
    }
    a[index].style.display = 'block';
}
//设置定时器，每隔两秒切换一张图片
setInterval(ChangeImg, 3000);

function share() {
    navigator.clipboard.writeText('https://tingjiainfuture.github.io/swjc/')
        .then(() => {
            // 显示提示框
            var tooltip = document.getElementById('tooltip');
            tooltip.style.visibility = 'visible';

            // 2秒后隐藏提示框
            setTimeout(() => {
                tooltip.style.visibility = 'hidden';
            }, 1500);
        })
        .catch((error) => console.log('复制失败', error));
}