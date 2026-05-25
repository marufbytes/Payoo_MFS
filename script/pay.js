document.getElementById('pay-bill-btn').addEventListener('click', function () {
    const billerNumber = getValueFromInput('biller-account-number');

    if (billerNumber.length != 11) {
        alert("Invalid biller account number!");
        return;
    }

    const payAmount = getValueFromInput('amount-pay');
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(payAmount);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    const pin = getValueFromInput('pay-pin');

    if (pin == "1234") {
        alert("Pay Bill Successful");
        setBalance(newBalance);

        const history = document.getElementById('history-content');
        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-xl mt-3">
                Pay bill ${payAmount} successful to ${billerNumber} at ${new Date()}
            </div>
        `;

        history.append(newHistory);
    }
    else {
        alert("Invalid Pin");
    }
});