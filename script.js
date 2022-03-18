let tool = document.querySelector(".tool").childNodes;
let test = document.querySelector(".test");
let tost = document.querySelector(".tost");
let paste = document.querySelector(".test .ppa");
let copy_b = false;
let t = 0;
    
tool.forEach((a) => {

    a.onclick = (a) => {
        t++;
        tost.style.display = 'none'
        clearTimeout(t)
        tost.style.display = "flex"
        copy_b = true;
        let e = setTimeout(() => { tost.style.display = 'none' }, 1100)
        console.log(t)
        console.log(e)
}
})


    test.onmousemove = (a) => {
        if (copy_b) {
            
            paste.style.cssText += `left:${a.x}px; top:${a.y}px;`
           paste.style.removeProperty("display")
           paste.style.display='flex'
           
        } else {
            
        }
        
    }
    paste.onclick = () => {
        paste.style.removeProperty("display")
        paste.style.display='none'
        copy_b = false;
    }
