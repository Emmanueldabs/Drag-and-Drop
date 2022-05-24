var manu;
function allowdrop(ev){
    ev.preventDefault();
}
function dragstart(ev){
    manu=ev.target.id;
    // alert(manu);
}
function drop(ev){
    ev.target.append(document.getElementById(manu));
}