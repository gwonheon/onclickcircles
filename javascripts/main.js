var svg;
var ns = 'http://www.w3.org/2000/svg';

var createCircle = function(cx, cy, r) {
    var c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', r);
    c.setAttribute('fill', 'none');
    c.setAttribute('stroke', makeRGB());
    c.setAttribute('stroke-width',5);
    svg.appendChild(c);
};



var rand = function(min, max){
    return min + Math.random() *(max - min);};

var makeRGB = function() {
    return 'rgb('+ Math.floor(rand(55,155)) + ',' + Math.floor(rand(200,255)) + ','+ Math.floor(rand(0,55)) + ')';};

window.onmousedown = function(e) {
     svg = document.querySelector('#svg');
    for(var i = 0; i < 10; i+=2){
        var cx = e.pageY ;
        var cy = e.pageX ;
        createCircle(cy,cx,8+i*5)
    };
   
};
