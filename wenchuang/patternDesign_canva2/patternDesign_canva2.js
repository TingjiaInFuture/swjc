function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.src);
}

function drop(event) {
    event.preventDefault();
    var imageSrc = event.dataTransfer.getData("text");
    var canvas = document.getElementById('canvas');
    var img = document.createElement('img');
    img.src = imageSrc;
    img.className = 'draggable';
    img.style.position = 'absolute';
    img.style.left = event.clientX - canvas.getBoundingClientRect().left + 'px';
    img.style.top = event.clientY - canvas.getBoundingClientRect().top + 'px';
    canvas.appendChild(img);
    makeDraggable(img);
}

function makeDraggable(element) {
    element.onmousedown = function(event) {
        var shiftX = event.clientX - element.getBoundingClientRect().left;
        var shiftY = event.clientY - element.getBoundingClientRect().top;

        element.style.position = 'absolute';
        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        element.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };

    };

    element.ondragstart = function() {
        return false;
    };
}
function showModal() {
    document.getElementById("myModal").style.display = "block";
}

function hideModal() {
    document.getElementById("myModal").style.display = "none";
}
// 前面的函数保持不变

// 新增换色功能
var currentColor = 'none';

function changeColor(color) {
    currentColor = color;
}

function drop(event) {
    event.preventDefault();
    var imageSrc = event.dataTransfer.getData("text");
    var canvas = document.getElementById('canvas');
    var img = new Image();
    img.src = imageSrc;
    img.className = 'draggable';
    img.style.left = event.clientX - canvas.getBoundingClientRect().left + 'px';
    img.style.top = event.clientY - canvas.getBoundingClientRect().top + 'px';

    // 应用当前选择的颜色
    if (currentColor !== 'none') {
        img.style.filter = `drop-shadow(${currentColor} 0px 0px 10px)`;
    }

    canvas.appendChild(img);
    makeDraggable(img);
}

// 其余函数保持不变
function changeColor(color) {
    // 更新当前颜色
    currentColor = color;
    var images = document.querySelectorAll('#canvas .draggable');
    images.forEach(function(img) {
        // 应用颜色滤镜
        if (currentColor !== 'none') {
            img.style.filter = `drop-shadow(${currentColor} 0px 0px 10px)`;
            // 或者使用 CSS 类
            // img.classList.add('colored');
        } else {
            img.style.filter = '';
            // img.classList.remove('colored');
        }
    });
}

function changeExtractionStatus(status) {
    var buttons = document.querySelectorAll('.extraction-buttons button');
    buttons.forEach(function(button) {
        button.classList.remove('extracted', 'to-be-extracted');
    });

    if (status === 'extracted') {
        // 设置为已提取的样式
        buttons[0].classList.add('extracted');
    } else {
        // 设置为待提取的样式
        buttons[1].classList.add('to-be-extracted');
    }

    // 根据选择的状态改变素材图片的显示样式
    var patterns = document.querySelectorAll('#patterns .pattern');
    patterns.forEach(function(pattern) {
        if (status === 'extracted') {
            // 应用已提取的样式
            pattern.classList.add('extracted');
        } else {
            // 应用待提取的样式
            pattern.classList.add('to-be-extracted');
        }
    });
}

var modal = document.getElementById("patternPop");
    var modalImage = document.getElementById("modalImage");

    function openModal(imageSrc, button1Url, button2Url) {
      modalImage.src = imageSrc;
      modal.style.display = "block";
      document.getElementById("button1").onclick = function() {
        window.location.href = button1Url;
      };
      document.getElementById("button2").onclick = function() {
        window.location.href = button2Url;
      };
    }

    function redirect(button) {
      if (button === 'button1') {
        window.location.href = "button1.html";
      } else if (button === 'button2') {
        window.location.href = "button2.html";
      }
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
