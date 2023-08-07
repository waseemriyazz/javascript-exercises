const sumAll = function(num1 , num2) {
    if(num1>=0 && num2>=0 && typeof(num1)==typeof(72) &&typeof(num2)==typeof(72))
    {
        const larger = num1>num2? num1:num2;
        let smaller = num1+num2-larger;
        let sum=0;
        for(;smaller<=larger;smaller++)
        {
            sum=sum+smaller;
        }
        return sum;
    }
    else
    {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
