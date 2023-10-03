$('.dropbtn').click(function(){
    $('.dropdown-content').toggle('show')
})

$('.menu-btn').click(function(){
    $('.dropdown-content').toggle('show')
    $('.menu-btn').toggle('menu-btn')
    $('.close-btn').addClass('show')
})

$('.close-btn').click(function(){
    $('.dropdown-content').toggle('show')
    $('.menu-btn').toggle('menu-btn')
    $('Close-btn').toggle('close-btn')
})