
function add(sampleString) {
  if(sampleString && sampleString.length > 1){
    // check negative numbers
    const negatives = findNegativeNumbers(sampleString);
    if(negatives.length>0){
    return `Negative numbers not allowed ${negatives.join(", ")}.`
    }
    let sum = 0;
    let reference = "0123456789";
    let numbers = [...sampleString].reduce((acc, char) => reference.includes(char) ? acc + char : acc, '');

    for(let num of numbers){
        sum += parseInt(num);
    }
    return sum
  }else{
    if(sampleString == 1){
        return 1
    }else{
        return 0
    }
   
  }
    
  }
  function findNegativeNumbers(str) {
    // Regular expression to match negative numbers
    const regex = /-?\d+(\.\d+)?/g;
    // Find all matches in the string
    const matches = str.match(regex);
    // Filter out positive numbers
    const negativeNumbers = matches ? matches.filter(num => parseFloat(num) < 0) : [];
    return negativeNumbers;
}

export default add