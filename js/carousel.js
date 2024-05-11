let imageIndex = 0;
const images = [
    "images/image1.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    "images/image6.png",
];
const carouselImg = document.getElementById('carouselImg');

// 更新图片的函数
function updateImage() {
    carouselImg.src = images[imageIndex];
    imageIndex++;
    if (imageIndex === images.length) {
        imageIndex = 0; // 如果到达数组末尾，则回到开头
    }
}
// 每3秒更新一次图片
setInterval(updateImage, 3000);
