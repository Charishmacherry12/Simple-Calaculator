let screen=document.getElementById('screen')
buttons=document.querySelectorAll('button')
var screenValue=''
window.addEventListener('keypress', function(e) {
    var keycode = e.keyCode;
    var valueEntered = String.fromCharCode(keycode);
    if(keycode==13)
    {
        screen.value=eval(screen.value)
    }  
  });
for(item of buttons)
{
    item.addEventListener('click',function(e){
       buttonText=e.target.innerText;
       if(buttonText=='=')
       {
          screen.value=eval(screenValue)
       }
       else if(buttonText=='C')
       {
           screenValue=''
           screen.value=screenValue;
       }
       else
       {
           screenValue+=buttonText
           screen.value=screenValue
       }
    })
}