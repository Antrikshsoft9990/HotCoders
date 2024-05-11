let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imageItem = document.querySelectorAll(".image-item")

console.log(imageItem.length-1)
let startslider = 0
let endslider = (imageItem.length-1)*100

slideBtnLeft.addEventListener("click",handleLeftBtn)
    
function handleLeftBtn(){
    if(startslider < 0)
    {
        startslider = startslider + 100;

    }
   
    
    imageItem.forEach(element =>
        {
            element.style.transform = `translateX(${startslider}%)`;
        })
    }




slideBtnRight.addEventListener("click",handleRightBtn)
function handleRightBtn(){
    

    if(startslider >=  -endslider+100)
    {
        startslider = startslider - 100;

    }
   
    
    imageItem.forEach(element =>
        {
            element.style.transform = `translateX(${startslider}%)`;
        })
    
}

function renderSlideAuto(){
   
    if(startslider >=  -endslider+100)
    {
        handleRightBtn()
    }
}
setInterval(renderSlideAuto, 2000);







const sidebarNavigationE1 = document.getElementById("sidebar-container-navigation-id")
const sidebaropenNavigationE1 = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationE1 = document.getElementById("sidebar-navigation-close")

console.log(sidebarNavigationE1)

sidebaropenNavigationE1.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("sidebar-show")
})
sidebarCloseNavigationE1.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("sidebar-show")
})

