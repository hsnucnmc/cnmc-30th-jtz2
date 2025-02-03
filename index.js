function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left != '0px') {
        sidebar.style.left = '0px'; //顯示
    } else {
        sidebar.style.left = '-16.5vw';//隱藏
    }
}
