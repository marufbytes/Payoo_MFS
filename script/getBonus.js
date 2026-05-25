document.getElementById('get-bonus-btn').addEventListener('click', function () {
    const coupon = getValueFromInput('bonus-coupon');

    if (coupon != "FREE") {
        alert("Invalid coupon!");
        return;
    }

    const bonusAmount = 100;
    const currentBalance = getBalance();
    const newBalance = currentBalance + bonusAmount;

    alert("You got 100 tk bonus");
    setBalance(newBalance);

    const history = document.getElementById('history-content');
    const newHistory = document.createElement('div');

    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl mt-3">
            Bonus amount ${bonusAmount} successfully added to your account at ${new Date()}
        </div>
    `;

    history.append(newHistory);
});