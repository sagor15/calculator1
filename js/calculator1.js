function add(Id){
    console.log('clicked');
    const feildText = document.getElementById('current-operand');
    const updateText = feildText.innerText;

    const bag = document.getElementById(Id);
    const TextButtonInput = bag.innerText;
    const result = feildText.innerText =  feildText.innerText + TextButtonInput;

    return result;
}

console.log(typeof('delete'));

function Ac(Id){
    const feildText = document.getElementById('current-operand');
    const updateText = feildText.innerText;
    const text = document.getElementById(Id);
    feildText.innerText = '';

    return feildText.innerText;
}


function Delete(Id){
    const feildText = document.getElementById('current-operand');
    const updateText = feildText.innerText;
    const Delete = document.getElementById(Id);
    const update = feildText.innerText.slice(0,-1);
    const result = feildText.innerText = update;
    return result;
}

document.getElementById('equals').addEventListener('click',function(){
    // console.log('clicked')
    const feildText = document.getElementById('current-operand');
    console.log(feildText)
    const updateText = feildText.innerText;
    
    // console.log(typeof(updateText));
    const resultEquals = eval(updateText);
    console.log(updateText);
    
    feildText.innerText = resultEquals;



})

