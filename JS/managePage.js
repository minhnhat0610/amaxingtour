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

    $('.manageTripContainer').on('mousemove',function(e){
        let corX = e.clientX;
        let stringX = -corX/150 + 50 + "%";
        let stringX1 = -corX/3000 + "%";
        let corY = e.clientY;
        let stringY = -corY/150 + 50 + "%"
        let stringY1 = -corY/3000 + "%";

        $('.backgroundBlur').css({
            backgroundPosition: stringX + " "  + stringY,
        })

        $('.manageTripContainer').css({
            transform: 'translate3d('+stringX1+ ',' +stringY1 + ','+ '0' + ')'
        })
    })


    //Form slider function
    let numOfForm = $('.formSlider form').length;
    let count = 0;

    let tripResult = "";
    $("#next").on('click', function(){
        const report = $('#tripLookup').get(count).reportValidity();
        if(report){
            if(count==0){
                $('#tripLookup').submit(function(e){
                    $.ajax({
                        type:'post',
                        url: 'PHP/readData.php',
                        data: $('#tripLookup').serialize(),
                        success: function(data){
                            if(data!='empty'){
                                console.log(data);
                                tripResult = data;
                                InjectTripData(); 
                                slideNext(); 
                                $('#tripValidReport').css({
                                    opacity: 0
                                });  
                            }

                            else{
                                $('#tripValidReport').css({
                                    opacity: 1
                                });
                            };

                        },

                        error: function(jqXHR, textStatus, errorThrown){
                             // Log the error to the console
                             console.error(
                                "The following error occurred: "+
                                textStatus, errorThrown
                            );
                        }
                    });
                    e.preventDefault();
                })

                $("#tripLookup").submit();
            }

            else{
                slideNext();

            }
        }
        
    })

    $('#pre').on('click',function(){
        slidePre();
    })
    let slideNext = function(){
        if(count<numOfForm-1){
            count++;


            if(count == numOfForm-1){
               $('#next').css({
                   display: 'none'
               })

               $('#pre').css({
                display: 'block'
                })

                $('#tripDisplay').css({
                    display: 'flex'
                })

            }

            

    
            else{
                $('#next').html('Continue');
                $('#next').attr('type','button');
                $('#pre').css({
                    display: 'block'
                })
            }

            $('.formSlider').css({
                transform: 'translateX(-'+count*100+'%)',
            })
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
                $('#next').css({
                    display: 'block'
                })

                setTimeout(function(){
                    $('#tripDisplay').css({
                        display: 'none'
                    })
                },500)
                
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


    //Insert data from database
    function InjectTripData(){
        tripResult = tripResult.split('...');
        
        for(let i = 0; i<tripResult.length; i++){
            $('#tripDisplay input').eq(i).val(tripResult[i]);
        }
    }

    //Trigger Edite button to make input writeable
    let isEdited = false;
    $('.updateButton').on('mousedown',function(){
        $(this).css({
            borderBottom: 'none'
        })
    })
    $('.updateButton').on('mouseup',function(){
        if(!isEdited){
            $('.guestInforReview input').removeAttr('readonly');
            $('.guestInforReview input').css({
                borderBottom: '1px solid #606c38'
            });
            $(this).css({
                borderBottom: '5px solid #dda15e'
            });
            $(this).html('<i class="fas fa-edit"></i> apply');
            isEdited = true;
        }

        else{
            $('#tripDisplay').submit(function(e){      //Sum,bit the update information
                $.ajax({
                    type:'post',
                    data: $('#tripDisplay').serialize(),
                    url: 'PHP/updateData.php',
                    success: function(data){
                        console.log(data);
    
                    },
    
                    error: function(jqXHR, textStatus, errorThrown){
                         // Log the error to the console
                         console.error(
                            "The following error occurred: "+
                            textStatus, errorThrown
                        );
                    }
                })
                e.preventDefault();
            });

            $('#tripDisplay').submit();


            $('.guestInforReview input').attr('readonly','true');
            $('.guestInforReview input').css({
                borderBottom: 'none'
            });
            $(this).css({
                borderBottom: '5px solid #dda15e'
            });
            $(this).html('<i class="fas fa-edit"></i> edit');

            isEdited = false;
        }

    })

    //Cancel trip button
    $('#tripCancelButton').on('mousedown',function(){
        $(this).css({
            borderBottom: 'none',
        })
    })

    $('#tripCancelButton').on('mouseup',function(){
        $(this).css({
            borderBottom: '5px solid #a4161a',
            display: 'none',
        })

        $('.finalConfirm').css({
            display: 'block'
        })
        
    })

    $('#noConfirmation').on('mousedown',function(){
        $(this).css({
            borderBottom: 'none',
        })
    })

    $('#noConfirmation').on('mouseup',function(){
        $(this).css({
            borderBottom: '5px solid #a4161a',
        })

        $('.finalConfirm').css({
            display: 'none'
        })

        $('#tripCancelButton').css({
            display: 'block'
        })
    })

    $('#yesConfirmation').on('mousedown',function(){
        $(this).css({
            borderBottom: 'none',
        })
    })

    $('#yesConfirmation').on('mouseup',function(){
        $(this).css({
            borderBottom: '5px solid #283618',
        })

        $('.tourInfor').submit(function(e){
            $.ajax({
                type: 'post',
                url: 'PHP/tripCancel.php',
                data: $('.tourInfor').serialize(),
                success: function(data){
                    $('.reportCatch').html(data);
                },
                error: function(jqXHR, textStatus, errorThrown){
                    // Log the error to the console
                    console.error(
                       "The following error occurred: "+
                       textStatus, errorThrown
                   );
               },
            })

            e.preventDefault();
        })

        $('.tourInfor').submit();

        $('.serverReportContainer').css({
            display: 'flex'
        })

        $('.finalConfirm').css({
            display: 'none',
        })

    })

    
})