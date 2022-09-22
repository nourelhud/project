let activemenu=document.querySelector('.navbar-collapse')
let openbtn=document.querySelector('.btn-open')
let exitbtn=document.querySelector('.btn-exit')
openbtn.addEventListener('click',(e) =>
{
    activemenu.classList.toggle('active')
    document.getElementById('overlay').style.display="block"
    openbtn.classList.add('none')
    exitbtn.classList.add('show')   
    console.log(1)
})
exitbtn.addEventListener('click',(e) =>
{
    document.getElementById('overlay').style.display="none"
    activemenu.classList.toggle('active')
    openbtn.classList.remove('none')
    exitbtn.classList.remove('show')
})
function myFunction(x) {

    if (x.innerHTML == "fa-solid fa-plus") {
        x.innerHTML = "fa-solid fa-minus";
    } else {
        x.innerHTML = "fa-solid fa-plus";
    }
    x.classList.toggle("fa-minus");
}