$('h1').on('mouseover', function(){
    $(this).animate({
        fontSize: '6.5rem'
    })
}).on('mouseleave', function(){
    $(this).animate({
        fontSize: "5.5rem"
    })
})

$('#my-icon').on('mouseover', function(){
    $(this).addClass('rotated')
}).on('mouseleave', function() {
    $(this).removeClass('rotated')
})