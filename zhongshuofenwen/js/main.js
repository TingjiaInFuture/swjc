// JavaScript 代码切换按钮状态
function toggleLike() {
    var likeButton = document.getElementById("likeButton");
    var likeImage = document.getElementById("likeImage");
        

    // 检查按钮是否已经被点赞
    if (likeButton.classList.contains("liked")) {
        // 如果已经点赞，取消点赞状态
        likeButton.classList.remove("liked");
        likeImage.src = "../image/content/left/like.png"; // 切换回初始图片
            
    } else {
        // 如果未点赞，添加点赞状态
        likeButton.classList.add("liked");
        likeImage.src = "../image/content/left/like_2.png"; // 切换到另一张图片
            
    }
}

// JavaScript 代码切换按钮状态
function togglefavourite() {
    var favouriteButton = document.getElementById("favouriteButton");
    var favouriteImage = document.getElementById("favouriteImage");
        

    // 检查按钮是否已经被点赞
    if (favouriteButton.classList.contains("favourited")) {
        // 如果已经点赞，取消点赞状态
        favouriteButton.classList.remove("favourited");
        favouriteImage.src = "../image/content/left/favourite.png"; // 切换回初始图片
            
    } else {
        // 如果未点赞，添加点赞状态
        favouriteButton.classList.add("favourited");
        favouriteImage.src = "../image/content/left/favourite_2.png"; // 切换到另一张图片
            
    }
}