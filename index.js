var ele = document.getElementById("image1");
ele.addEventListener('click',function(){
var src = (ele.getAttribute('src') == "michael.png")?"michaelfilter.png":"michael.png";
ele.setAttribute('src',src);
})

var elems = document.getElementsByClassName('confirmation');
    var confirmIt = function (e) {
        if (!confirm('Are you sure you want to leave fewproblems.com?')) e.preventDefault();
    };
    for (var i = 0, l = elems.length; i < l; i++) {
        elems[i].addEventListener('click', confirmIt, false);
    }
    var elems = document.getElementsByClassName('confirmation');
