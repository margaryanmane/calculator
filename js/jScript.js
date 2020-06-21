function  number(n) {
  event.preventDefault();
  formInp.calc.value += n;
}

function funC(){
  event.preventDefault();
  formInp.calc.value = "";
}

function del(){
  event.preventDefault();
  var num = formInp.calc.value;
  formInp.calc.value = num.substr(0,num.length -1);
}

function funGr() {
  event.preventDefault();
  var x = formInp.calc.value/100,
      y = x*formInp.calc.value;
  formInp.calc.value = y;
}

function result(){
  event.preventDefault();
  formInp.calc.value = eval(formInp.calc.value);
}


