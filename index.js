let ticket = document.getElementById("howmany");
let button = document.querySelector("button");
let results = document.querySelector(".results");

function randomNum() {
    return Math.floor(Math.random() * 90 + 1);
}
//random h elemanlı dizi oluşturup, küçükten büyüğe sıralayan fonksiyon
function randomArr(h) {
    let myRandomArray = [];
    
    for (let k = 0; k < h; k++) {
        let z = Math.floor(Math.random() * 90 + 1);
        if(myRandomArray.includes(z)){
            let d=Math.floor(Math.random() * 90 + 1);
            myRandomArray.push(d);
        }else{
            myRandomArray.push(z);
        }  
    }
    return myRandomArray.sort(function(a, b){return a-b;});
};
// console.log(randomArr(6));


button.addEventListener("click", () => {
    // let b = ticket.value;
    // console.log(b);
    if(ticket.value > 8 || ticket.value <= 0){
        alert("Your entry is bigger than eight number or smaller than zero!");
    }else{
        for (let f = 0; f < ticket.value; f++) {
            let arr = randomArr(6).toString().split(",").join("-");
            for (let i = 0; i < 8; i++) {
                let a = randomNum(1);
                if (arr.includes(a)==false) {
                    arr=arr.concat(" ");
                    arr=arr.concat("| ")
                    arr=arr.concat(a);
                    break;
                }
            }
            let c = randomNum(1);
            
            arr=arr.concat(" | ").concat(c);
            // arr = arr.toString().split(",").join("-");
            // let o = arr.lastIndexOf("-");
            // let r = arr.indexOf(12,"-");
            // arr = arr.replace()
            results.innerHTML += `<p>${arr}</p>`
        };
    };
    
});
