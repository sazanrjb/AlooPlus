$(document).ready(function(){

    $.material.init();

    var player1;
    var player2;
    var turn;
    var win,winner;
    var count=0;
    $('#confirmPlayerBttn').click(function(){
        player1 = $('#player1').val();
        player2 = $('#player2').val();
        if($('#player1').val() == "" || $('#player2').val() == ""){
            swal({
                title: "You must enter both players name!",
                type: "warning"
            });
        }else{
            turn = 1;
            win = 0;
            $('.inputBox').slideUp();
            $('#playerIdentity').html("<p class='pull-left'>"+player1+" is <b>Aloo</b></p><p class='pull-right'>"+player2+" is <b>Plus</b></p>");
            $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>"+player1+"'s Turn</p>");
            $('.tictactable').slideDown();
        }
    })
    $('.tictactable').hide();

    $('.tictactable td').click(function(){
        if(win == 1){
            swal({
                title: winner + " already won!"
            })
            return false;
        }else if(count == 9){
            swal({
                title: "Draw!"
            })
            $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>Draw</p>");

            return false;
        }
        if($(this).children('span').attr('data')){

        }else{
            count++;
            if(turn == 1){
                $(this).children('span').html('<p style="font-size: 40px;color:#1b6d85;">0</p>');
                $(this).children('span').attr('data',0);

                var r1c1 = $('#r1c1').attr('data');
                var r1c2 = $('#r1c2').attr('data');
                var r1c3 = $('#r1c3').attr('data');
                var r2c1 = $('#r2c1').attr('data');
                var r2c2 = $('#r2c2').attr('data');
                var r2c3 = $('#r2c3').attr('data');
                var r3c1 = $('#r3c1').attr('data');
                var r3c2 = $('#r3c2').attr('data');
                var r3c3 = $('#r3c3').attr('data');
                if(r1c1 == 0 && r1c2 == 0 && r1c3 ==0 || r2c1 == 0 && r2c2 == 0 && r2c3 ==0 || r3c1 == 0 && r3c2 ==0 && r3c3 ==0 || r1c1 == 0 && r2c2 == 0 && r3c3 ==0 || r1c3 == 0 && r2c2 ==0 && r3c1 ==0 || r1c1 ==0 && r2c1 ==0 && r3c1 ==0 || r2c1 ==0 && r2c2 ==0 && r2c3==0 || r3c1==0 && r3c2 ==0 && r3c3 ==0){
                    $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>"+player1+" wins</p>");
                    swal({title: player1 + " wins \n"+player2 + " loses"})
                    win = 1;
                    winner = player1;
                    return false;
                }else if(r1c1 == 1 && r1c2 == 1 && r1c3 == 1 || r2c1 == 1 && r2c2 == 1 && r2c3 == 1 || r3c1 == 1 && r3c2 ==1 && r3c3 == 1 || r1c1 == 1 && r2c2 == 1 && r3c3 == 1 || r1c3 == 1 && r2c2 == 1 && r3c1 == 1 || r1c1 == 1 && r2c1 ==1 && r3c1 ==1 || r2c1 ==1 && r2c2 ==1 && r2c3==1 || r3c1==1 && r3c2 ==1 && r3c3 ==1){
                    $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>"+player2+" wins</p>");
                    swal({title: player1 + " wins \n"+player2 + " loses"})
                    win = 1;
                    winner = player2;
                    return false;
                }
                if(count == 9){
                    swal({
                        title: "Draw!"
                    })
                    $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>Draw</p>");
                    return false;
                }

                $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>"+player2+"'s Turn</p>");
                turn = 2;
            }else if(turn == 2){
                $(this).children('span').html('<p style="font-size: 40px;color:#a94442;">X</p>');
                $(this).children('span').attr('data',1);
                if(count == 9){
                    swal({
                        title: "Draw!"
                    })
                    return false;
                }

                var r1c1 = $('#r1c1').attr('data');
                var r1c2 = $('#r1c2').attr('data');
                var r1c3 = $('#r1c3').attr('data');
                var r2c1 = $('#r2c1').attr('data');
                var r2c2 = $('#r2c2').attr('data');
                var r2c3 = $('#r2c3').attr('data');
                var r3c1 = $('#r3c1').attr('data');
                var r3c2 = $('#r3c2').attr('data');
                var r3c3 = $('#r3c3').attr('data');
                if(r1c1 == 0 && r1c2 == 0 && r1c3 ==0 || r2c1 == 0 && r2c2 == 0 && r2c3 ==0 || r3c1 == 0 && r3c2 ==0 && r3c3 ==0 || r1c1 == 0 && r2c2 == 0 && r3c3 ==0 || r1c3 == 0 && r2c2 ==0 && r3c1 ==0 || r1c1 ==0 && r2c1 ==0 && r3c1 ==0 || r2c1 ==0 && r2c2 ==0 && r2c3==0 || r3c1==0 && r3c2 ==0 && r3c3 ==0){
                    $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>"+player1+" wins</p>");
                    swal({title: player1 + " wins \n"+player2 + " loses"})
                    win = 1;
                    winner = player1;
                    return false;
                }else if(r1c1 == 1 && r1c2 == 1 && r1c3 == 1 || r2c1 == 1 && r2c2 == 1 && r2c3 == 1 || r3c1 == 1 && r3c2 ==1 && r3c3 == 1 || r1c1 == 1 && r2c2 == 1 && r3c3 == 1 || r1c3 == 1 && r2c2 == 1 && r3c1 == 1 || r1c1 == 1 && r2c1 ==1 && r3c1 ==1 || r2c1 ==1 && r2c2 ==1 && r2c3==1 || r3c1==1 && r3c2 ==1 && r3c3 ==1){
                    $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>"+player1+" wins</p>");
                    swal({title: player1 + " wins \n"+player2 + " loses"})
                    win = 1;
                    winner = player2;
                    return false;
                }

                if(count == 9){
                    swal({
                        title: "Draw!"
                    })
                    $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>Draw</p>");
                    return false;
                }

                $('.playerturn').html("<br><p class='text-center' style='background-color: #8c8c8c;color: #fff'>"+player1+"'s Turn</p>");
                turn = 1;
            }
        }
    });
});