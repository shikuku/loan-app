const amount=document.getElementById("loan-amount")
const loanDuration=document.getElementById("loan-duration");
let rate=document.getElementById("rate");
const data=Array.from(document.getElementsByClassName("data"));

const loanAmount=document.getElementById("amount");
const monthlyPaymentDisplay=document.getElementById("monthly-payment");

window.addEventListener("load",()=>{
    for(let i=1;i<=72;i++){
        let option=document.createElement("option");
        option.value=i;
        option.textContent=i;
        loanDuration.appendChild(option);
    }
})

data.forEach(input=>{
    input.addEventListener("change",()=>{
        rate=4;
        const interestAmount=parseInt(amount.value)*(rate/100)*parseInt(loanDuration.value);
        const totalPayable=parseInt(amount.value)+(interestAmount);
const monthlyPayment=totalPayable/parseInt(loanDuration.value)

        monthlyPaymentDisplay.textContent=`Monthly payment:${monthlyPayment}`;
        loanAmount.textContent=`total Amount Payable:${totalPayable} `;

    })
})
const nav=document.getElementById("nav")

window.addEventListener("scroll",()=>{

    if (window.scrollY >= 50) {
       
        nav.classList.add('fixed-nav');
        
      } else {
        
        nav.classList.remove('fixed-nav');
        
      }
    })