function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "flex";
    } else {
        sidebar.style.display = "none";
    }
}