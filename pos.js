/*//////////////--SPA//////////////*/
$('#dashboard-sec').css({display:'block'});
$('#customer-sec').css({display:'none'});
$('#item-sec').css({display:'none'});
$('#order-sec').css({display:'none'});

/*dashboard-manage*/
$('#nav-dashboard').on('click',()=>{
    $('#customer-sec').css({display:'none'});
    $('#item-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#dashboard-sec').css({display:'block'});

})

/*customer-manage*/
$('#nav-customer').on('click',()=>{
    $('#dashboard-sec').css({display:'none'});
    $('#item-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#customer-sec').css({display:'block'});

})

/*item-manage*/
$('#nav-item').on('click',()=>{
    $('#dashboard-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#item-sec').css({display:'block'});

})

/*order-manage*/
$('#nav-order').on('click',()=>{
    $('#dashboard-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#item-sec').css({display:'none'});
    $('#order-sec').css({display:'block'});

})
