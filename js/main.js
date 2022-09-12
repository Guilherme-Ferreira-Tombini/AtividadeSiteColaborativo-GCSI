let icone = document.getElementById("icon");

icone.onclick= function () {
    let menu = document.getElementById("menu");

    if(menu.style.display == 'none') menu.style.display = 'block';
   else menu.style.display = 'none';
}