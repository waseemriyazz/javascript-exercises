const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1 , num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    sum =sum+element;
    
  }); 
  return sum;
	
};

const multiply = function(array) {
  let muliply=1;
  array.forEach(element => {
    muliply=muliply*element;
  });
  return muliply;
};

const power = function(num1, num2) {
  let temp=1;
  while (num2-->0)
  {
    temp=temp*num1;
  }
  return temp;
	
};

const factorial = function(num) {
  if (num == 0)
  {return 1}
  let answer = 1;
  while(num>0)
  {
    answer=num*answer;
    num--;
  }
  return answer;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
