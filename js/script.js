document.getElementById('calc-total').addEventListener('click', function(){
    const foodText = document.getElementById('food-input').value;
    const food = parseFloat(foodText);
    const rentText = document.getElementById('rent-input').value;
    const rent = parseFloat(rentText);
    const othersText = document.getElementById('others-input').value;
    const others = parseFloat(othersText);
    // total expenses
    const totalAmount = food + rent + others;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalAmount;
    // balance
    const incomeText = document.getElementById('income-input').value;
    const income = parseFloat(incomeText);
    const totalBalance = income - totalAmount;
    const balanceText = document.getElementById('balance');
    balanceText.innerText = totalBalance;
    // console.log(totalAmount);
})