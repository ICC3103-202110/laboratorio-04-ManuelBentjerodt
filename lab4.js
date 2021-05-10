function view(counter){
    return(`\n      Counter: ${counter} \n      (+)(-)\n`);
}

function update(msg,counter){
    if(msg==="+") return counter+1;
    else if(msg==="-") return counter-1;
    else return counter;

}

function app(counter){
    while(true){
        const currentview=view(counter);
        console.clear();
        console.log(view);
        const msg=prompt("What would you do? ");
    }
}

app(0);

const prompt=require("prompt-sync")()
