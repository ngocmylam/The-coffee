
function openMenu(evt, menuItem) {
    var i, tabMenu, tabLink;
    tabMenu = document.getElementsByClassName("section2-menu-tab");
    for (i = 0; i < tabMenu.length; i++) {
        tabMenu[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace("active", "");
    }
    document.getElementById(menuItem).style.display = "flex";
    evt.currentTarget.className += "active";
}