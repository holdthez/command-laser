var elems = document.getElementsByClassName('confirmation1');
    var confirmIt = function (e) {
        if (!confirm('Are you sure you want to go to LinkedIn?')) e.preventDefault();
    };
    for (var i = 0, l = elems.length; i < l; i++) {
        elems[i].addEventListener('click', confirmIt, false);
    }
    var elems = document.getElementsByClassName('confirmation2');
var confirmIt = function (e) {
        if (!confirm('Are you sure you want to go to Instagram?')) e.preventDefault();
    };
    for (var i = 0, l = elems.length; i < l; i++) {
        elems[i].addEventListener('click', confirmIt, false);
    }
var elems = document.getElementsByClassName('confirmation3');
    var confirmIt = function (e) {
        if (!confirm('Are you sure? you want to go to Soundcloud')) e.preventDefault();
    };
    for (var i = 0, l = elems.length; i < l; i++) {
        elems[i].addEventListener('click', confirmIt, false);
    }
