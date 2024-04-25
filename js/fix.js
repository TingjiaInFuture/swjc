document.body.style.margin = '0';
window.onload = function () {
    var desiredWidth = 1920;
    var windowWidth = window.innerWidth;

    if (windowWidth != desiredWidth) {
        var scale = windowWidth / desiredWidth;
        document.body.style.transform = 'scale(' + scale + ')';
        document.body.style.transformOrigin = '0 0';
    }
}
