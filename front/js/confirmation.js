function DisplayOrderId () {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('OrderId');
    document.querySelector('#orderId').innerText = orderId;
}

DisplayOrderId();