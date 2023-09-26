// 獲取HTML元素
const canvas = document.getElementById('drawing-board');
const downloadButton = document.getElementById('downloadButton');
const ctx = canvas.getContext('2d');

// 在Canvas上繪製一些內容以供示例
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 300, 300);
ctx.font = '30px Arial';
ctx.fillStyle = 'white';
ctx.fillText('Canvas示例', 100, 200);

// 監聽下載按鈕的點擊事件
downloadButton.addEventListener('click', downloadCanvasAsImage);

// 下載Canvas畫面為PNG圖像
function downloadCanvasAsImage() {
    // 創建一個隨機生成的文件名
    const fileName = `canvas_image_${Date.now()}.png`;

    // 將Canvas轉換為圖像數據URL
    const dataURL = canvas.toDataURL('image/png');

    // 創建一個虛擬的下載鏈接
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = fileName;

    // 模擬點擊下載鏈接
    downloadLink.click();
}
