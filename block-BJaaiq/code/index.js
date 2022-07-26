document.body.style.lineHeight = "1.5"
let div = document.querySelector("div");


document.addEventListener(`DOMContentLoaded`,()=>{
    for(let i = 0; i < 3; i++){
        let h2 = document.createElement("h2");
        h2.innerText = quotes[i].quoteAuthor;
        h2.style.fontSize = "4.5rem"
        let p = document.createElement("p");
        p.innerText = quotes[i].quoteText
        p.style.fontSize = "2.2rem"

        div.append(h2,p)
    }
})

window.addEventListener("scroll",()=>{
   const scrollable = document.documentElement.scrollHeight;
   console.log(scrollable);


   quotes.forEach((elm) =>{
    let h2 = document.createElement("h2");
    h2.innerText = elm.quoteText;
    h2.style.fontSize = "4rem"
    let p = document.createElement("p");
    p.innerText = elm.quoteAuthor;
    p.style.fontSize = "2rem"
    div.append(h2,p);
   })
})

