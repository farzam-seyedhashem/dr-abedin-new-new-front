export function makeRatingAjaxRequest(vin, style, price, minRating, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", encodeURI("https://www.cargurus.com/Cars/api/1.0/dealRatingRequest.action"));
    var dataToSend = "vins=" + encodeURIComponent(JSON.stringify([{
            vin,
            price: parseInt(price.replace(/[^0-9\.]+/g, "")),
            style
        }]))
        + "&minRating=" + encodeURIComponent(minRating)
        + "&style=" + encodeURIComponent(style)
        + "&showContactDealer=" + encodeURIComponent(true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
            cb(JSON.parse(xhr.responseText))
            return true
        } else {
            console.log("Error response to Rating received");
            return true;
        }
    };
    xhr.onerror = function () {
        console.log("Error sending ajax request");
    };
    xhr.send(dataToSend);
}

