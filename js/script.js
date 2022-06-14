alert('Bem vindo ao meu projeto')
alert('Para acessar o sistema interno, é clicar em "entrar diratamente')

let btnLogin = document.querySelector('#btn-login')
let btnCriar = document.querySelector('#btn-criar')

let login = document.querySelector('#login')
let criar = document.querySelector('#criar')

let formLogin = document.querySelector('#form-login')
let formCriar = document.querySelector('#form-criar')

btnLogin.addEventListener('click', ()=>{
    
    
    btnLogin.style.display = 'none'
    setTimeout(()=>{
        btnCriar.style.display = 'flex'
        
    }, 900)


    // document.querySelector('.container-criar').style.display = 'none'

    // login.style.display = 'flex'
    login.style.marginLeft = '0%'
    login.style.transition = '1s'
    criar.style.transition = '1s'
    criar.style.marginLeft = '-200%'
    // criar.style.color = 'transparent'

    console.log('foi pra login')

    formLogin.style.transition = '2.4s'
    formLogin.style.display = 'flex'
    formCriar.style.display = 'none'

})

btnCriar.addEventListener('click', ()=>{
    // login.style.display = 'none'
    // criar.style.display = 'flex'

    btnCriar.style.display = 'none'
    setTimeout(()=>{
        btnLogin.style.display = 'flex'        
    }, 900)


    formLogin.style.display = 'none'
    formCriar.style.transition = '2.4s'
    formCriar.style.display = 'flex'


    login.style.marginLeft = '200%'
    login.style.transition = '1s'
    criar.style.transition = '1s'
    criar.style.marginLeft = '0px'
    console.log('foi pra criar')

})