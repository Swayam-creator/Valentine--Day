function nextpage(){
    window.location.href="yess.html";
}

function buttonmove(){
    var x =
    Math.random()*
    (window.innerWidth-document.getElementById('movable-btn').offsetWidth);
 var y=
 Math.random()*
 (window.innerHeight-document.getElementById('movable-btn').offsetHeight);
 document.getElementById('movable-btn').style.left=`${x}px`;
//  document.getElementById(`movable-btn`).style.right=`${x}px`;
 document.getElementById(`movable-btn`).style.top=`${y}px`;
}