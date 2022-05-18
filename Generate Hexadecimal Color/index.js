function generateHexColor() {
    const r=Math.round(Math.random()*255).toString(16)
    const g=Math.round(Math.random()*255).toString(16)
    const b=Math.round(Math.random()*255).toString(16)
    const color=`#${r}${g}${b}`
   document.getElementById("root").style.backgroundColor=color
   document.getElementById("hexcode").value=color
}
generateHexColor()

const changeBtn=document.getElementById("change-color-btn")
changeBtn.addEventListener("click",()=>{
    generateHexColor()
})