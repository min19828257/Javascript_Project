var rand1 = Math.floor(Math.random() * 9);
var rand2 = Math.floor(Math.random() * 9);
var suggestion = rand1+"곱하기"+rand2;

document.body.append(suggestion);
var form = document.createElement('form');
var input = document.createElement('input');
var button = document.createElement('button');
var result = document.createElement('div');

button.textContent = "버튼";

document.body.append(form);
form.append(input);
form.append(button);
form.append(result);

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(typeof(rand1*rand2), " ",parseInt(input.value));
    if(rand1*rand2 === parseInt(input.value)){
        console.log("같다");
        result.textContent="딩동딩동";
        result.focus();
    }else{
        console.log("다르다");
        result.textContent="땡! 정답은: "+rand1*rand2;
        result.focus();
    }
})

