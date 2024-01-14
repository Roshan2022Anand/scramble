const prompt = require('prompt-sync')();
let manyWords = ['apple','mango','umbrella','rocket','table','water','poster','eight','power','rabbit'];
let newWord;
let mixWord =(str)=>{
    str=str.split("");
    str.sort();
    str.reverse();
    return str;
}
while(true){
    let choice = true;
    let ranWord = manyWords[Math.floor(Math.random()*10)];
    let word = mixWord(ranWord);
    console.log(word);
    console.log('\n Try to rearrange and find the word ');
    while(choice){
       let sl = prompt('Enter the elemment to be taken :');
       let ele = word.slice((sl-1),sl);
       ele = ele.toString();
       word.splice(sl-1,1);
       let pos = prompt(`Enter the position were ${ele} should be inserted :`);
       word.splice(pos-1,0,ele);
       console.log(word);
       newWord=word.join('');
       if(newWord === ranWord){
            choice=false;
       }
    }
    console.log(newWord,' is the correct answer \n');
}