function generateRGBColor() {
    const r=Math.round(Math.random()*255)
    const g=Math.round(Math.random()*255)
    const b=Math.round(Math.random()*255)
    const color=`rgb(${r},${g},${b})`
   document.getElementById("root").style.backgroundColor=color
}

const changeBtn=document.getElementById("change-color-btn")
changeBtn.addEventListener("click",()=>{
    generateRGBColor()
})