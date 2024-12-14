$(document).ready( function(){
    $('button[id^="change__"]').on('click', function () {
        updatePayment();
    });
    function updatePayment(){
        var n1 = Number($('#quantity-1').val());
        var p1 = Number($('#price-1').val());
        var payment1 = n1 * p1;

        var n2 = parseInt($('#quantity-2').val());
        var p2 = parseInt($('#price-2').val());
        var payment2 = n2 * p2;

        var n3 = parseInt($('#quantity-3').val());
        var p3 = parseInt($('#price-3').val());
        var payment3 = n3 * p3;

        console.log("number of the first product : " + typeof n1);
        console.log("price of the first product: " + p1);

        console.log("number of the second product: " + n2);
        console.log("price of the second product: " + p2);

        console.log("number of the third product: " + n3);
        console.log("price of the third product: " + p3);

        const vnd = new Intl.NumberFormat('vi-VN', {
            style: "currency",
            currency: "VND"
        })
        $('#payment1').html(vnd.format(payment1));
        $('#payment2').html(vnd.format(payment2));
        $('#payment3').html(vnd.format(payment3));

        var totalPayment = payment1 + payment2 + payment3;
        $('.totalPayment').html(vnd.format(totalPayment));
    }
    
    $('#quantity-1, #quantity-2, #quantity-3').on('input', function(){
        updatePayment();
    });

    // $('#change__decrease-1, #change__decrease-2, #change__decrease-3, #change__increase-1, #change__increase-2, #change__increase-3').on('click', function(){
    //     updatePayment();
    // });

    updatePayment();
});