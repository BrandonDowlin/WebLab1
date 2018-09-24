function add(numA, numB){
    return numA+numB;
}

function CheckNums(num1, num2){
    if(num1 < num2)
    return 'True';
    
    if(num1 >= num2)
    return 'False';
}

function list(s1, s2, s3, s4){
    return (s1 +', '+ s2 +', '+ s3 +', '+ s4);
}

function minToHour(num){
    return (Math.trunc(num/60) +' hours and '+ num%60 +' minutes');
}

function calcCircle(rad){
    return ('Area: '+ Math.trunc((Math.PI*rad)*rad)+' Perimeter: '+ rad*2)
}

function milesToKM(distance, unit){
    if(unit == "miles")
    return  distance*1.609344;

    if(unit == "km")
    return  distance*0.621371;
}

function BMI(weight, height){
    return weight/height^2;
}

function date(date){
    var d = new Date(date)
    return (d.getDay +' of '+ d.getMonth);
}

function palindrome(word){
    var dorw = word.split("").reverse().join("").split(" ").reverse().join(" ")
    if(word == dorw)
    return 'True';

    return 'False';
}

function calc(num1, operator, num2){
    if(operator == '+')
    return num1 + num2;

    if(operator == '-')
    return num1 - num2;

    if(operator == '/')
    return num1 / num2;

    if(operator == '*')
    return num1 * num2;

    if(operator == '%')
    return num1 % num2;
}