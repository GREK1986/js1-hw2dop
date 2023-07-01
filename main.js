

let pront = prompt("введите число");
for (let i = 0; i < pront; i++) {
    let color = ""
    if (i % 3 === 0){
        color = "red"

    } else if(i % 3 === 1){
        color = "yellow"
    } else{color = "green"}

    document.write(`<div style =' background-color: ${color} ;' class="block"></div>`)
    if(i > 10) break   
}