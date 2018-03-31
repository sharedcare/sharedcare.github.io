$(document).ready(function(){
    background();
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function background() {
    var bg = 'bg' + randomInt(1, 20);
    $('.masthead').addClass(bg).removeClass('zoomed');
}
