$(document).ready(function(){
    //parallax effect for banner
    $('.backgroundBlur').on('mousemove',function(e){
        let corX = e.clientX;
        let stringX = -corX/150 + 50 + "%";
        let corY = e.clientY;
        let stringY = -corY/150 + 50 + "%"

        $('.backgroundBlur').css({
            backgroundPosition: stringX + " "  + stringY,
        })

    })

    $('.bookingContainer').on('mousemove',function(e){
        let corX = e.clientX;
        let stringX = -corX/150 + 50 + "%";
        let stringX1 = -corX/3000 + "%";
        let corY = e.clientY;
        let stringY = -corY/150 + 50 + "%"
        let stringY1 = -corY/3000 + "%";

        $('.backgroundBlur').css({
            backgroundPosition: stringX + " "  + stringY,
        })

        $('.bookingContainer').css({
            transform: 'translate3d('+stringX1+ ',' +stringY1 + ','+ '0' + ')'
        })
    })

    //Assign datepicker to input
    $('#startDate').flatpickr({
        defaultDate: 'today',
        dateFormat: 'm-d-Y',
    });
    $('#endDate').flatpickr({
        dateFormat: 'm-d-Y',
    });

    $('#startDateIcon').on('click',function(){
        $('#startDate').trigger('click');
    })

    $('#endDateIcon').on('click',function(){
        $('#endDate').trigger('click');
    })

    //next button function

    let numOfForm = $('.formSlider form').length;
    let count = 0;
    console.log(count);
    $('#next').on('click',function(){
        let report = $('.formSlider form').get(count).reportValidity();
        if(report){
            slideNext();
            changeActiveStep();
        }
    })

    $('#pre').on('click',function(){
        slidePre();
        changeActiveStep();

    })

    let slideNext = function(){
        if(count<numOfForm-1){
            count++;
            $('.formSlider').css({
                transform: 'translateX(-'+count*100+'%)',
            })

            if(count == numOfForm-1){
               $('#next').html('Sumbit');
               $('#next').attr('type','submit');
            }
    
            else{
                $('#next').html('Continue');
                $('#next').attr('type','button');

                $('#pre').css({
                    display: 'block'
                })
            }
        }

        
        
    }

    let slidePre = function(){
        if(count>0){
            count--;
            $('.formSlider').css({
                transform: 'translateX(-'+count*100+'%)',
            })

            if(count == 0){
                $('#pre').css({
                    display: 'none'
                })
            }
    
            else{
                $('#next').html('Continue');
                $('#next').attr('type','button');
    
                $('#pre').css({
                    display: 'block'
                })
            }
        }
    }

    let changeActiveStep = () =>{
        $('.stepLabel span').removeClass('activeNum');
        $('.stepLabel span').eq(count).addClass('activeNum');

        $('.stepLabel > div').removeClass('activeName');
        $('.stepLabel > div').eq(count).addClass('activeName');
    }
})