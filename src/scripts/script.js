function generarQR() {
    var texto = document.getElementById('textoQr').value;

    if (texto == '' || texto == ' ') {
        console.log('Ingrese un tipo de dato valido')
    } else {
        var qrcode = new QRCode(document.getElementById("areaQr"), {
            text: texto,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}
