// نمایش قوانین
function showRules() {
    var rulesContent = document.getElementById('rulesContent');
    if (rulesContent.style.display === 'none') {
        rulesContent.style.display = 'block';
    } else {
        rulesContent.style.display = 'none';
    }
}

// دعوت دوستان
function inviteFriend() {
    alert('Share this link with your friends: https://your-lottery-site.com/invite');
}

// پرداخت
function makePayment() {
    // اینجا باید به درگاه پرداخت متصل شود
    alert('Redirecting to payment gateway...');
    window.location.href = 'https://your-payment-gateway.com';
}