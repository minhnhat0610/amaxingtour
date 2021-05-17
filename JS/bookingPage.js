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
        disableMobile: 'true',
    });
    $('#endDate').flatpickr({
        dateFormat: 'm-d-Y',
        disableMobile: 'true',

    });

    $('#startDateIcon').on('click',function(){
        $('#startDate').trigger('click');
    })

    $('#endDateIcon').on('click',function(){
        $('#endDate').trigger('click');
    })


    //Transfer data from Date and Guest form to Review form

    let dateInputLength = $('.dateInput input').length;
    let guestBasicInforLength = $('.guestInformation .basic input').length;
    let guestextraInforLength = $('.guestInformation .extra input').length;

    let TransferData = (source, destination, length) => {
        for(let i = 0; i< length; i++){
            let value;
            if($(source).eq(i).attr('type') == 'radio'){
                let newSource = source + '[name="gender"]:checked';
                value = $(newSource).val();
            }
            else{
                value = $(source).eq(i).val();
            }


            $(destination).eq(i).val(value);
        }
    }

    //Create a Confirmation
    let ConfirmationGenerator = () => {
        let string = "#" + Math.random().toString(36).substring(2,8);
        $('#confirmationNumber').val(string);
    }


    //next button function

    let numOfForm = $('.formSlider form').length;
    let count = 0;
    $('#next').on('click',function(){
        let report = $('.formSlider form').get(count).reportValidity();
        if(report){
            slideNext();
            changeActiveStep();
            if(count==1){
                TransferData('.dateInput input', '.tourInfor input',dateInputLength);
                TransferData('.guestInformation .basic input', '.guestInforReview .basicReview input',guestBasicInforLength);    
                TransferData('.guestInformation .extra input', '.guestInforReview .extraReview input', guestextraInforLength)     
                ConfirmationGenerator();   

            }
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