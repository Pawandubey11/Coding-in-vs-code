document.addEventListener ('DOMContentLoaded',()=>{
    const Input = document.getElementById("Input-container");
    const info = document.getElementById("wheather-info");
    const cityNmae1 = document.getElementById("city-name");
    const temp = document.getElementById("temperture");
    const des = document.getElementById("description");
    const error = document.getElementById("error-message");
    const text = document.getElementById("text1");
  

    const totalexpese =[];
    const expense  = 
    expenseForm .addEventListener ('sumit',(e)=>{
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseamount.value.trim());

        if (name !=="" && !isNaN(amount)  && amount>0){
            const newexpense ={
                id : Date.now(),
                name : name,
                amount : amount
            }
            expense.push(newexpense);
        }
    })
})