// 獲取HTML元素
const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');
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
                // 渲染圖片到Canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };

            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}
