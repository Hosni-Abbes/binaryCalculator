var op1 = document.getElementById('btn0'),
    op2 = document.getElementById('btn1'),
    clr = document.getElementById('btnClr'),
    eql = document.getElementById('btnEql'),
    sum = document.getElementById('btnSum'),
    sub = document.getElementById('btnSub'),
    mul = document.getElementById('btnMul'),
    div = document.getElementById('btnDiv'),
    res = document.getElementById('res'),
    ar1 = [], //will contain the first operand        //example: 1001 + 100 => 
    ar2 = [], //will contain the second operand       // ar1 = [1, 0, 0, 1] and ar2 = [1, 0, 0]
    clickedOp = ''; //variable that will contain the operator (+ , - , * , / )
  
    
  //when click on op1(btn 0) or on op2(btn 1) output first operand on calculator screen 
  //and then if we clicked on operator (+ , - , * , / ) and click again on btn0 or btn1 it will display 'first operand' 'operator' 'second operand'
  //we use a class to check if the div result contains class with the clicked operator symbol or not
  op1.onclick = function(){
    if(res.classList.contains(clickedOp)){
      ar2.push(0);
      res.innerHTML = ar1.join('') + clickedOp + ar2.join('');
    }else{
      ar1.push(0);
      res.innerHTML =ar1.join('');
    }
  }
  op2.onclick=function(){
    if(res.classList.contains(clickedOp)){
      ar2.push(1);
      res.innerHTML = ar1.join('') + clickedOp + ar2.join('');
    }else{
      ar1.push(1);
      res.innerHTML =ar1.join('');
    }
  }

//function sum, function sub, function mul and function div used to add the operator when clicked on it and add class to display the full operation on calculator screen
//function sum
sum.onclick=function(){
  clickedOp = '+'
  res.innerHTML = ar1.join('') + clickedOp + ar2.join('');
  if(res.innerHTML.endsWith(clickedOp)){
    res.classList.add(clickedOp);
  }
}
//function sub
sub.onclick=function(){
  clickedOp = '-'
  res.innerHTML = ar1.join('') + clickedOp + ar2.join('');
  if(res.innerHTML.endsWith(clickedOp)){
    res.classList.add(clickedOp);
  }
}
//function mul
mul.onclick=function(){
  clickedOp = '*'
  res.innerHTML = ar1.join('') + clickedOp + ar2.join('');
  if(res.innerHTML.endsWith(clickedOp)){
    res.classList.add(clickedOp);
  }
}
//function div
div.onclick=function(){
  clickedOp = '/'
  res.innerHTML = ar1.join('') + clickedOp + ar2.join('');
  if(res.innerHTML.endsWith(clickedOp)){
    res.classList.add(clickedOp);
  }
}

//function equal when click on '=' it calculate the full operation and display the result on calculator screen
eql.onclick=function(){
  var decRes = 0; //decimal result
  if(clickedOp == '+'){
    //we use Math.abs to return a positive result
    decRes = Math.abs(parseInt(ar1.join(''),2)) + Math.abs(parseInt(ar2.join(''),2));
  }else if(clickedOp == '-'){
    decRes = Math.abs(parseInt(ar1.join(''),2)) - Math.abs(parseInt(ar2.join(''),2));
  }else if(clickedOp == '*'){
    decRes = Math.abs(parseInt(ar1.join(''),2)) * Math.abs(parseInt(ar2.join(''),2));
  }else{
    decRes = Math.abs(parseInt(parseInt(ar1.join(''),2)  /  parseInt(ar2.join(''),2)));
  }
    
  if(res.classList.contains(clickedOp)){
      res.innerHTML = decRes.toString(2); //transform the decimal result to binary result aand display it on screen
      ar1 = []; //empty ar1
      ar2 = []; //empty ar2
      ar1.push(decRes.toString(2)); //push the binary result in array1 because after any operation we need when we clik on '0' or '1' we need to continue on this result
    res.classList.remove(clickedOp);  //remove class to start a new operation when click on (+ , - , * , / )
  }
}

//funclion clear when click on btn 'C' to clear the calculator screen
clr.onclick=function(){
    ar1=[]; //empty ar1
    ar2=[]; //empty ar2
    res.innerHTML = ''; //clear screen
  if(res.classList.contains(clickedOp)){  //remove class to start a new operation when click on (+ , - , * , / )
    res.classList.remove(clickedOp);  
  }
}