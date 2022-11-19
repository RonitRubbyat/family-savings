function inputValues(inputId) {
    const inputText = document.getElementById(inputId).value;
    const input = parseFloat(inputText);
    if (input > 0) {
        return input;
    }
    else {
        if (inputId == 'food-input') {
            alert('Please Input Valied Numbers in Food Input');
        }
        else if (inputId == 'rent-input') {
            alert('Please Input Valied Numbers in Rent Input');
        }
        else if (inputId == 'others-input') {
            alert('Please Input Valied Numbers in Others Input');
        }
        else if (inputId == 'income-input') {
            alert('Please Input Valied Numbers in Income Input');
        }
        else {
            alert('Please Input Valied Numbers in Save Input');
        }
    }
}

document.getElementById('calc-total').addEventListener('click', function () {
    const food = inputValues('food-input');
    const rent = inputValues('rent-input');
    const others = inputValues('others-input');
    // total expenses
    const totalAmount = food + rent + others;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalAmount;
    // balance
    const income = inputValues('income-input');
    const totalBalance = income - totalAmount;
    const balanceText = document.getElementById('balance');
    if (totalBalance > 0) {
        balanceText.innerText = totalBalance;
    }
    else {
        balanceText.innerText = 'No Balance Left!';
        totalExpenses.innerText = 'You can not expend that amount!';
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    // savingAmount
    const save = inputValues('save-input');
    const income = inputValues('income-input');
    const saveTotal = (income * save) / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saveTotal;
    // remaining balance
    const balanceText = document.getElementById('balance');
    const balance = parseFloat(balanceText.innerText);
    const remainingBalance = document.getElementById('remaining-balance');
    if(balance >= saveTotal){
        const remain = balance - saveTotal;
        remainingBalance.innerText = remain;
    }
    else{
        savingAmount.innerText = 'You can not save this much!';
        remainingBalance.innerText = "Can't save Money!";
    }
})