$(document).ready( function(){
    // ------------------------------ thay doi so luong san pham ---------------------------
    $('#change__decrease-1').click(
        function(){
            console.log('#change__decrease-1');
            let number = parseInt($('#quantity-1').val());
            if(number>0){
                number--;
                $('#quantity-1').val(number);
            }
        }
    );

    $('#change__increase-1').click(
        function(){
            console.log('#change__increase-1');
            let number = parseInt($('#quantity-1').val());
            number++;
            $('#quantity-1').val(number);
        }
    )
    // ------------------------------------
    $('#change__decrease-2').click(
        function(){
            let number = parseInt($('#quantity-2').val());
            if(number>0){
                number--;
                $('#quantity-2').val(number);
            }
        }
    );

    $('#change__increase-2').click(
        function(){
            let number = parseInt($('#quantity-2').val());
            number++;
            $('#quantity-2').val(number);
        }
    )
    // -----------------------------------
    $('#change__decrease-3').click(
        function(){
            let number = parseInt($('#quantity-3').val());
            if(number>0){
                number--;
                $('#quantity-3').val(number);
            }
        }
    );

    $('#change__increase-3').click(
        function(){
            let number = parseInt($('#quantity-3').val());
            number++;
            $('#quantity-3').val(number);
        }
    )

    // ----------------------------------------------------------------------------------
     
});