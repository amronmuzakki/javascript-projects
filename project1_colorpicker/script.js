    document.getElementById("color-input").addEventListener("input",function(event){
        //get color from color input box
        let ambilwarna = event.target.value 

        //update the color code after a color is choosen
        document.getElementById("colorcode").textContent=ambilwarna

        // update background color of display box
        document.getElementById("colorDisplay").style.backgroundColor=ambilwarna    
    })