// function isBalanced(str) {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (char === '(' || char === '[' || char === '{') {
//         stack.push(char);
//       } else if (char === ')' && stack[stack.length - 1] === '(') {
//         stack.pop();
//       } else if (char === ']' && stack[stack.length - 1] === '[') {
//         stack.pop();
//       } else if (char === '}' && stack[stack.length - 1] === '{') {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//     return stack.length === 0;
//   }
  
//   let str1 = '{[()]}';
//   let str2 = '([)]';
//   console.log(isBalanced(str1));
//   console.log(isBalanced(str2)); 



  function isbalanced(str){
    let stack=[];
    for(i=0;i<str.length;i++){
      char = str[i];
      if(char==='('||char==='{'||char==='['){
        stack.push(char);
        console.log(stack)
      }else if(char ===')'&&stack[stack.length-1]==='('){
        stack.pop();
        console.log(stack)
      }else if(char ==='}'&&stack[stack.length-1]==='{'){
        stack.pop();
        console.log(stack)
      }else if(char ===']'&&stack[stack.length-1]==='['){
        stack.pop();
        console.log(stack)
      }else{
        return false;
      }

      
    }
    return stack.length === 0
  }
  
  let str1='{[()]}';
  let str2='{((]'
  
  console.log(isbalanced(str1))
  console.log(isbalanced(str2))