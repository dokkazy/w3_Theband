var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Dong mo mobile menu
mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}


// Tu dong dong mobile menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }else{
            header.style.height = null;
        }
    }
}