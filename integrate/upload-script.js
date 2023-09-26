// 獲取HTML元素
const uploadCanvas = document.getElementById('drawing-board');
// const ctx = uploadCanvas.getContext('2d');
const imageInput = document.getElementById('imageInput');

// 監聽文件選擇事件
imageInput.addEventListener('change', handleImageUpload);

// 處理圖片上傳
function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();

            img.onload = function () {
                // 渲染圖片到uploadCanvas
                ctx.clearRect(0, 0, uploadCanvas.width, uploadCanvas.height);
                ctx.drawImage(img, 0, 0, uploadCanvas.width, uploadCanvas.height);
            };

            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}
