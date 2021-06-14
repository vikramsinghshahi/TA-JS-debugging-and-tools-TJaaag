// /Add two number


function addTwoNumber(numA, numB){
    return numA + numB
}


let result , expected

function test(message , cb){
 try {
     cb();
     console.log("test pass" , message);
 } catch (error) {
     console.error(error);
     console.log("test fail");
 }
}

function expect(actual){
    return {
    toEqual: function(expected){
        if(actual !== expected ){
            throw new Error(`${result} is not equal to ${expected}`);
        }
     
     }
    };
}




function testAdd(){
    result = addTwoNumber(8, 2);
    expected = 10;
    expect(result).toEqual(expected);
   /*if(result !== expected ){
       throw new Error(`${result} is not equal to ${expected}`);
   }*/

}

test("adding 8 and 2" , testAdd)




function isNumber(){
    result = addTwoNumber("vikram", 3);
    expected = 'number';
   if(typeof result !== expected ){
       throw new Error(`${typeof result} is not equal to ${expected}`);
   }

}

test("adding 5 and 3" , isNumber)


//Multiply two numbers


function productOfNumbers(numA , numB){
    return numA*numB 
}


function newTest( message , cb){
    try {
        cb();
        console.log( "test-pass" , message)
        
    } catch (error) {
        console.error(error);
        console.log("test-fail")
        
    }
}

function expect(actual){
    return {
        isEqual : function(actual){
            if(result !== expected){
                throw new Error(`${result}is not equal to ${expected}`)
            }
        }
    }
 }


function testProduct(){
    result = productOfNumbers(5, 3);
    expected = 15;

    expect(result).isEqual(expected);
    
   /* if(result !== expected){
        throw new Error(`${result}is not equal to ${expected}`)
    }*/
}

newTest("multiplying 5 and 3" , testProduct)


function isNumber(){
    result = addTwoNumber("vikram", 3);
    expected = 'number';
   if(typeof result !== expected ){
       throw new Error(`${typeof result} is not equal to ${expected}`);
   }

}

newTest("multiplying 5 and 3" , isNumber)