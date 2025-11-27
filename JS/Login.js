// console.log('button click file added');
document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);
    if (phoneNumber==='015' && pinNumber==='1234'){
        console.log('You are logged in')
        window.location.href="/JS/home.html"

    }
    else{
        alert('Wrong Phone number or Pin Number')
    }

})
