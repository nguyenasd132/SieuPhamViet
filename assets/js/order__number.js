$(document).ready( function(){
    // ------------------------------ thay doi so luong san pham ---------------------------
    $('#change__decrease-1').click(
        function(){
            let number = parseInt($('#quantity-1').val());
            if(number>0){
                $('#quantity-1').val(number-1);
            }
        }
    );

    $('#change__increase-1').click(
        function(){
            let number = parseInt($('#quantity-1').val());
            $('#quantity-1').val(number+1);
        }
    )
    // ------------------------------------
    $('#change__decrease-2').click(
        function(){
            let number = parseInt($('#quantity-2').val());
            if(number>0){
                $('#quantity-2').val(number-1);
            }
        }
    );

    $('#change__increase-2').click(
        function(){
            let number = parseInt($('#quantity-2').val());
            $('#quantity-2').val(number+1);
        }
    )
    // -----------------------------------
    $('#change__decrease-3').click(
        function(){
            let number = parseInt($('#quantity-3').val());
            if(number>0){
                $('#quantity-3').val(number-1);
            }
        }
    );

    $('#change__increase-3').click(
        function(){
            let number = parseInt($('#quantity-3').val());
            $('#quantity-3').val(number+1);
        }
    )

    // ----------------------------------------------------------------------------------
     
});

