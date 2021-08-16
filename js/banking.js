// handle diposit buttonevent
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the diposit amount
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    console.log(newDepositAmountText)

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account blance
    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);

    const newBlanceTotal = previousBlanceTotal + newDepositAmount;
    blanceTotal.innerText = newBlanceTotal;

    // clear the deposite input field
    depositInput.value = '';
})

// handel withdro event handaler
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdroInput = document.getElementById('withdrow-input');
    const newWithdroAmountText = withdroInput.value;
    const newWithdroAmount = parseFloat(newWithdroAmountText);

    // update withdro total
    const withdroTotal = document.getElementById('withdrow-total');
    const widthdroTotalText = withdroTotal.innerText;
    const previousWithdroAmount = parseFloat(widthdroTotalText);

    const newWidthdroTotal = previousWithdroAmount + newWithdroAmount;
    withdroTotal.innerText = newWidthdroTotal;

    //update blance
    const blanceTotal = document.getElementById('balance-total');
    const previousblanceText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousblanceText);

    const newBlanceTotal = previousBlanceTotal - newWithdroAmount;
    blanceTotal.innerText = newBlanceTotal;

    withdroInput.value = '';
})