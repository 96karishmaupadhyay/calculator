const selectInputBox=document.getElementById("input-box")
function appendbtn(btnvalue){
    const currentValue=selectInputBox.value
    const lastdigit=selectInputBox.value.slice(-1)
    if((['-','+','*',"/","%",'.'].includes(lastdigit)
        &&['-','+','*',"/","%",'.'].includes(btnvalue))||
    (currentValue==""&&
        ['-','+','*',"/","%",'.'].includes(btnvalue)  
    )){
        return "";
    }else{
    selectInputBox.value+=btnvalue}
}
function clearAll(){
    selectInputBox.value=""
}
function clearOneOnly(){
    selectInputBox.value=selectInputBox.value.slice(0,-1)
}
function calculate(){
  selectInputBox.value=  eval(selectInputBox.value)
}