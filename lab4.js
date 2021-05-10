function view(counter){
    return(`\n      Counter: ${counter} \n\n      (+)(-)\n\n      (q) for quit\n`);
}

function update(msg,counter){
    if(msg==="+") return counter+1;
    else if(msg==="-") return counter-1;
    else return counter;

}

function app(counter){
    while(true){
        console.clear();
        const currentview=view(counter);
        console.log(currentview)
        const msg=prompt("What would you do? ");
        if(msg==="q") break;
        else  counter = update(msg,counter);
    }
}

const prompt=require("prompt-sync")();
app(0);