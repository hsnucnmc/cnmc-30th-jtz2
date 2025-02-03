function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    // 判断侧边栏当前位置，如果在屏幕外则移入，反之移出
    if (sidebar.style.left != '0px') {
        sidebar.style.left = '0px'; //顯示
    } else {
        sidebar.style.left = '-16vw';//隱藏
    }
}
