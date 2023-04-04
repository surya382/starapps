
function change_color(color){
    if (color == "blue"){
        document.getElementById("img").src="./Blue umbrella.png";
        document.getElementById("button").style.backgroundColor="rgb(60, 173, 218)"
        document.getElementById("body").style.backgroundColor="rgb(230, 242, 255)"

    }
    else if(color=="yellow"){
        document.getElementById("img").src="./Yello umbrella.png";
        document.getElementById("button").style.backgroundColor="rgb(245, 242, 56)" 
        document.getElementById("body").style.backgroundColor="rgb(255, 243, 230)"
    }
    else if(color=="pink"){
        document.getElementById("img").src="./Pink umbrella.png";
        document.getElementById("button").style.backgroundColor="rgb(240, 38, 173)"
        document.getElementById("body").style.backgroundColor="rgb(255, 230, 230)"
           
    }
}



function uploadfile(event){
    let img=document.getElementById("img_box")
    let icon=document.getElementById("icon_img")
    let icon_div=document.getElementById("icon_div")
    let loader_div=document.getElementById("loader_div")
    icon.src=URL.createObjectURL(event.target.files[0])

   img.style.display="none"
    icon_div.style.display="none"
    loader_div.style.display="block"
    setTimeout(()=>{
        loader_div.style.display="none"
        img.style.display="block"
        icon_div.style.display="block"
    },2000) 
}