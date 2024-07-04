function counter(){
    let txtInput=document.getElementById("text-field").value;
    txtInput= txtInput.trim().split("\n").join(" ").split(" ");
    let count=0;
    let charCount=0;
    for(let i of txtInput){
        if (i!=""){
            charCount+=i.length;
            count++;
        }
    }
    document.querySelector("#word-length").innerHTML=count;
    document.querySelector("#char-length").innerHTML=charCount;
}

function reset(){
    document.getElementById("text-field").value="";
    document.querySelector("#word-length").innerHTML=0;
    document.querySelector("#char-length").innerHTML=0;
}