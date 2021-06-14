// get full name

function fullName(firstName , lastName){
    return `${firstName} ${ lastName}`
}


let result = fullName("vikram" ,"shahi");

let expected = "vikram";

if( expected !== result){
    throw new Error(`${result} is not equal to ${expected}`);
}

result = fullName("vikram" ,"shahi");

expected = "vikram shahi";

if( expected !== result){
    throw new Error(`${result} is not equal to ${expected}`);
}

//calculate total aount

function totalAmount(amount, taxRate){
    return amount + (amount * taxRate)
}

let result = totalAmount(50 , 5);

let expected = 30 ;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}


result = totalAmount(50 , 2);

expected = 150;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}