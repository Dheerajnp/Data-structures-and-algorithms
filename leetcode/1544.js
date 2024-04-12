var makeGood = function(s) {
    let str = []
    for(const char of s){
        if(str.length>0 && Math.abs(char.charCodeAt()-str[str.length-1].charCodeAt())===32){
            str.pop();
        }else{
            str.push(char);
        }

        
    }
    return str.join('')
};

let s="abBAcC";
console.log(makeGood(s))