const btns = document.querySelectorAll("button");
const display =document.getElementById("result");

for(let i=0;i<btns.length ; i++)
{
    btns[i].addEventListener("click",()=>
    {
        const btnvalue = (btns[i].textContent);
        if(btnvalue==='C')
        {
            clearResult();
        }else if(btnvalue==='=')
        {
            calculateResult();
        }else{
            appendValue(btnvalue);
        }
    })


}





function clearResult(){
        display.value="";
}

function calculateResult(){
        display.value=eval(display.value);
}

function appendValue(btnvalue){
    display.value+=btnvalue;
}