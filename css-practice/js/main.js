(function() {
    var menuButton = document.getElementById('menu-button');
    var menuClose = document.getElementById('menu-close');
    var menuButtons = document.querySelectorAll('nav a');
    var nav = document.getElementsByTagName('nav')[0];

    menuButton.addEventListener('click', function() {
        if(nav.classList.contains('hide-menu')) {
            nav.classList.remove('hide-menu');
        }
        else {
            nav.classList.add('hide-menu');
        }
    });

    menuClose.addEventListener('click', function() {
        nav.classList.add('hide-menu');
    });

    for(var i = 0, x = menuButtons.length; i < x; i++) {
        menuButtons[i].addEventListener('click', function() {
            nav.classList.add('hide-menu');
        });
    }

})();
