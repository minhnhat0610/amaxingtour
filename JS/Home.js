$(document).ready(function(){
    //parallax effect for banner
    $('.bannerContainer').on('mousemove',function(e){
        let corX = e.clientX;
        let stringX = -corX/150 + 50 + "%";
        let corY = e.clientY;
        let stringY = -corY/150 + 50 + "%"

        $(this).css({
            backgroundPosition: stringX + " "  + stringY,
        })
    })

    //paralax effect for mission statement photos
    let position = $(document).scrollTop();

   $(document).scroll(function(){
       let scrollPosition = $(window).scrollTop();
       console.log(scrollPosition);
       if(scrollPosition - position > 0){   // scroll down
        $('.image1 img').css({
            transform: 'translateY(' + scrollPosition/5 + 'px' +')',
        })

        $('.image2 img').css({
            transform: 'translateX(' + scrollPosition/20 + 'px'+')'
        })

    }
    else{       //scroll up
        $('.image1 img').css({
            transform: 'translateY(' + scrollPosition/5 + 'px' +')',
        })

        $('.image2 img').css({
            transform: 'translateX(' + scrollPosition/20 + 'px'+')'
        })

    }
    position = scrollPosition;


      

    })

    //hightlight section calendar
    $('.cld-number').on('click',function(e){
        $('.cld-number').css({
            borderRadius: '50px',
            border: 'none',

        })

        $(e.currentTarget).css({
            borderRadius: '50px',
            border: '1px solid #bc6c25'
        })
    })

    $('.cld-nav').on('click', function(){
        $('.cld-number').on('click',function(e){
            $('.cld-number').css({
                borderRadius: '50px',
                border: 'none',
    
            })
    
            $(e.currentTarget).css({
                borderRadius: '50px',
                border: '1px solid #bc6c25'
            })
        })
    })


    //Slider function
    let containerWidth = $('.tourContainer').eq(0).width();
    let numOfTours = $('.tourContainer').length;
    console.log(`tour number: ${numOfTours}`);
    let count = 1;
    $('.next').on('click',function(){
        if(count<numOfTours-1){

            $('.slider').css({
                transform: 'translateX(' + count*(-containerWidth) + 'px)',
            })

    
            $('.tourContainer').eq(count).removeClass('focused');
            $('.tourContainer').eq(count+1).addClass('focused');
    
            $('.tourDetailContainer').eq(count).css({
                transition: 'none'
            })
    
            $('.tourDetailContainer').eq(count+1).css({
                transition: '500ms ease-in-out 1000ms'
            })
    
            count++;

            if(count == numOfTours-1){
                $('.next').css({
                    display: 'none'
                })
            }
            else{
                $('.prev').css({
                    display: 'block'
                })
                $('.next').css({
                    display: 'block'
                })
            }
        }

        
        

    })

    $('.prev').on('click',function(){
        count--;
        if(count == 0){
            $('.prev').css({
                display: 'none'
            })
        }
        else{
            $('.prev').css({
                display: 'block'
            })
            $('.next').css({
                display: 'block'
            })
        }
        if(count>=0){

            $('.slider').css({
                transform: 'translateX(' + (count-1)*(-containerWidth) + 'px)',
            })
    
            $('.tourContainer').eq(count).addClass('focused');
            $('.tourContainer').eq(count+1).removeClass('focused');
    
            $('.tourDetailContainer').eq(count+1).css({
                transition: 'none'
            })
    
            $('.tourDetailContainer').eq(count).css({
                transition: '500ms ease-in-out 1000ms'
            })
    
            
        }

        
        

    })


})


