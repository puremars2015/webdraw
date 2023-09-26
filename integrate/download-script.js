// 獲取HTML元素
const downloadCanvas = document.getElementById('drawing-board');
const downloadButton = document.getElementById('downloadButton');
// const ctx = downloadCanvas.getContext('2d');

// // 在downloadCanvas上繪製一些內容以供示例
// ctx.fillStyle = 'blue';
// ctx.fillRect(50, 50, 300, 300);
// ctx.font = '30px Arial';
// ctx.fillStyle = 'white';
// ctx.fillText('downloadCanvas示例', 100, 200);

// 監聽下載按鈕的點擊事件
downloadButton.addEventListener('click', downloaddownloadCanvasAsImage);

// 下載downloadCanvas畫面為PNG圖像
function downloaddownloadCanvasAsImage() {
    // 創建一個隨機生成的文件名
    const fileName = `downloadCanvas_image_${Date.now()}.png`;

    // 將downloadCanvas轉換為圖像數據URL
    const dataURL = downloadCanvas.toDataURL('image/png');

    // 創建一個虛擬的下載鏈接
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = fileName;

    // 模擬點擊下載鏈接
    downloadLink.click();
}
