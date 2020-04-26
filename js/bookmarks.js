function f(n) {
    var the_id = 'id-' + n;
    var current_img = document.getElementById(the_id);
    if (current_img.src == 'https://reizorzero.github.io/ONE_ART/img/bookmark-icon.svg') {
        current_img.setAttribute('src', 'https://reizorzero.github.io/ONE_ART/img/bookmark-icon-blue.svg');
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000);
    }
    else if (current_img.src == 'https://reizorzero.github.io/ONE_ART/img/bookmark-icon-blue.svg') {
        current_img.setAttribute('src', 'https://reizorzero.github.io/ONE_ART/img/bookmark-icon.svg');
        var x = document.getElementById("snackbar-2");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000);
    }
}
