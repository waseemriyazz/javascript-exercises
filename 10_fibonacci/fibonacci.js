const fibonacci = function(num) {
    let first  = 1;
    let second = 2;
    let answer = 0;
    if(num<0)
    {
        return 'OOPS';
    }
    if(num==1 || num==2)
    {
        return 1;
    }
    for(let i=3;i<num;i++)
    {
        answer = first + second;
        first=second;
        second=answer;
    }
    return answer;

};

// Do not edit below this line
module.exports = fibonacci;
