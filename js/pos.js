

$('#login-section').css({display:'block'});
$('#home-sec').css({display:'none'});
$('#customer-sec').css({display:'none'});
$('#store-sec').css({display:'none'});
$('#order-sec').css({display:'none'});

/*home-sec*/
$('#nav-home').on('click',()=>{
    $('#login-section').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#home-sec').css({display:'block'});
})

/*login-sec*/
$('#nav-login').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#login-section').css({display:'block'});
})

/*customer-sec*/
$('#nav-customer').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-section').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#customer-sec').css({display:'block'});
})
/*store-sec*/
$('#nav-store').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-section').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#store-sec').css({display:'block'});
})
$('#nav-order').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-section').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#order-sec').css({display:'block'});
})


var headerNav=document.getElementById('nav-element');
headerNav.style.display='none';

function showHeaderElement(){
    headerNav.style.display="";
}
function hideHeaderElement(){
    headerNav.style.display='none';
}
