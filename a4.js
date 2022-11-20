function identidad(){
    var x = parseFloat(document.getElementById("a").value);
    var a1=((Math.sin(x))+(Math.cos(x)))**2
    var af=1+2*(Math.sin(x))*(Math.cos(x))
    document.getElementById("identidad").innerHTML=parseFloat(Math.round(a1*10000000)/10000000).toFixed(6)
    document.getElementById("pi2").innerHTML=parseFloat(Math.round(af*10000000)/10000000).toFixed(6)
}
function pi2(){
}
function identidad2(){
    var x = parseFloat(document.getElementById("b").value);
    var b1=(1-2*(Math.cos(x))-(3*(Math.cos(x)**2)))/(Math.sin(x)**2)
    var bf=(1-3*(Math.cos(x)))/(1-Math.cos(x))
    document.getElementById("identidad2").innerHTML=parseFloat(Math.round(b1*10000000)/10000000).toFixed(6)
    document.getElementById("pi3").innerHTML=parseFloat(Math.round(bf*10000000)/10000000).toFixed(6)
}
function pi3(){
}