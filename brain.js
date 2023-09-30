str=""
c=document.querySelectorAll(".num");
Array.from(c).forEach((element) => {
  element.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      str = eval(str);
      document.querySelector('input').value = str;
    }
    else if(e.target.innerHTML == 'C'){
      str= "";
      document.querySelector('input').value = str;

    }
    else{
    str=str+ e.target.innerHTML;
    document.querySelector('input').value = str;}
  })
})
