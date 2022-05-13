document.getElementById('submit').addEventListener('click',function () {
    document.body.classList.toggle('active')
    
})

document.getElementById('username').addEventListener('focus',function () {
    console.log('input is focused');
})