console.clear
const fiveEl=document.getElementById("five")
const tenEl=document.getElementById("ten")
const fifteenEl=document.getElementById("fifteen")
const twentyfiveEl=document.getElementById("twentyfive")
const fiftyEl=document.getElementById("fifty")
const customEl=document.getElementById("value")
const resetEl=document.getElementById("reset")
let totalTip=0
function cal(a){
    let bill=document.getElementById("bill").value
    let tax=a/100
    let person=document.getElementById("people-value").value
    if(person==0){
        document.getElementById("comment").style.visibility="visible"
    }
    else{
        document.getElementById("comment").style.visibility="hidden"
        let val=((bill*tax)/person).toFixed(2)
        document.getElementById("tip-value").innerText=`$ ${val}`
        totalTip=totalTip+Number(val)
        document.getElementById("tip-values").innerText=`$ ${totalTip.toFixed(2)}`
       
    }
    
}
function clear(){
    document.getElementById("bill").value=""
    document.getElementById("value").value=""
    document.getElementById("tip-value").innerText=`$ 0.00`
    document.getElementById("tip-values").innerText=`$ 0.00`

}
fifteenEl.addEventListener("click",()=>{cal(15)})
fiveEl.addEventListener("click",()=>{cal(5)})
twentyfiveEl.addEventListener("click",()=>{cal(25)})
fiftyEl.addEventListener("click",()=>{cal(50)})
customEl.addEventListener("click",()=>{cal(Number(customEl.value))})
tenEl.addEventListener("click",()=>{cal(10)})
resetEl.addEventListener("click",()=>{clear()})
