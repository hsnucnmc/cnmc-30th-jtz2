// 確保在頁面加載後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取返回首頁按鈕
    const homeBtn = document.getElementById('homeBtn');
    
    // 當用戶點擊「返回首頁」按鈕時
    homeBtn.addEventListener('click', function() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';  // 設置為你的網站首頁路徑
    });
});
