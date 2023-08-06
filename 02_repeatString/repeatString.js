const repeatString = function(string, number) {
    let dummy="";
    if (number<0)
    {
        return 'ERROR';
    }
    for(let i = 1;i<=number;i++)
    {
        dummy=dummy+string;
    }
    return dummy;

};

// Do not edit below this line
module.exports = repeatString;
