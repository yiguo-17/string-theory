/******************
 * YOUR CODE HERE *
 ******************/
const indexedChars = function(str){
  let result = '';
  for(i= 0; i<str.length; i++){
    result +=i +str[i];
  }
  return result
}

const exclaim = function(str){
  let result = '';
  for(i=0; i<str.length;i++){
    if(str[i]==='.'||str[i]==='?'){
      result+= '!';
    }else{result+= str[i];}
  }
  return result;
}
const repeatIt = function(str, num){
  let result = '';
  for(i=0; i<num; i++){
    result+= str;
  }
  return result;
}
const truncate = function(str){
  let result = '';
  if(str.length<18){return str;}
  for (i=0; i<15; i++){
    result+= str[i];
  }
  result+= '...'
  return result;
}
const ciEmailify = function(str){
  let result = '';
  const name = str.toLowerCase();
  for(i=0; i<name.length;i++){
    if(name[i]===' '){result+= '.';} //turn space between first name and last name to "." 
    else{result+= name[i];}
  }
  result+= '@codeimmersives.com'
  return result
}

const reverse = function(str){
  let result = '';
  for(i=0; i<str.length;i++){
    result+= str[str.length-1-i];
  }
  return result;
}

const onlyVowels = function(str){
  const ucs = str.toUpperCase();
  let result = '';
  for(i=0;i<str.length;i++){
    if(ucs[i]==='A'||ucs[i]==='E'||ucs[i]==='I'||ucs[i]==='O'||
    ucs[i]==='U'){
      result+= str[i];
    }
  }
  return result;
}
const numberedChars = function(str){
  let result = '';
  for(i= 0; i<str.length; i++){
    result +='('+(i+1)+')' +str[i];
  }
  return result
}

const crazyCase = function(str){
  let result = '';
  for (i=0; i<str.length;i++){
    if(i%2 ===0){result+= str[i].toLowerCase();}
    else{result+=str[i].toUpperCase();}
  }
  return result;
}
const titleCase = function(str){
  let result = '';
  result+=str[0].toUpperCase();
  for(i=1; i<str.length;i++){
    if(str[i-1]===' '){result+= str[i].toUpperCase()}//find character after space and convert to capital letter.
    else{result+= str[i].toLowerCase()}
  }
  return result;
}
const camelCase = function(str){
  let result = '';
  result+=str[0].toLowerCase();
  for(i=1; i<str.length;i++){
    if(str[i-1]===' '){result+= str[i].toUpperCase()}//find character after space and convert to capital letter.
    else{result+= str[i].toLowerCase()}
  }
  let camelStr='';
  for(i=0;i<result.length;i++){
    if(result[i]!==' '){camelStr+= result[i];}//string only building when character is not space.
  }
  return camelStr;
}
const crazyCase2ReturnOfCrazyCase = function(str){
  let result ='';
  let ii=0;//set counter count non-space character.
  for(i=0;i<str.length;i++){
    if (str[i]===' '){result+=str[i]}
    else if(ii%2===0){result+=str[i].toLowerCase();ii++}
    else {result+=str[i].toUpperCase();ii++}
  }
  return result

}





 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
