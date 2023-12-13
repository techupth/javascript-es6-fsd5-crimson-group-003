//Exercise #6: Nullish Coalescing
let height = undefined;
let result;

function nullishCheck(height){
    return result =  height ?? "Height is not defined"
};

result = nullishCheck(height);


console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
