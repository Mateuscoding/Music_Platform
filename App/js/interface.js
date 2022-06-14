let audio = document.querySelector('#audio')
let btnPlayer = document.querySelector('#play')
let btnPause = document.querySelector('#pause')
let btnNext = document.querySelector('#next')
let btnBack = document.querySelector('#back')

let inicio = document.querySelector('#inicio')

btnPlayer.addEventListener('click', ()=>{
    audio.play()
    btnPlayer.style.display = 'none'
    btnPause.style.display = 'flex'
    audio.addEventListener('timeupdate', tempo)

})


btnPause.addEventListener('click', ()=>{
    audio.pause()
    btnPlayer.style.display = 'flex'
    btnPause.style.display = 'none'
})


audio.addEventListener('timeupdate', tempo())

function tempo(){
    
    let duracaoTotal = audio.duration
    let tempoReal = audio.currentTime 
    let segundo = Math.floor(audio.currentTime % 60);
    // console.log(segundo)
    
    let minutos = Math.floor(audio.currentTime / 60);
    inicio.textContent = '0'+minutos+':0' +segundo;
    // let segundos = 0;
    
    if(segundo >= 10){
        inicio.textContent = '0'+minutos+':' +segundo;

        if(segundo >= 60){
            // minutos++

            console.log(minutos)
            inicio.textContent = '0'+minutos+':0'+ segundo

        }

    }

    // uploadBarra(Math.floor(audio.duration/60), Math.floor(audio.duration % 60))

    uploadBarra(tempoReal)

}




function uploadBarra(tempoReal){
    
    let progresso = document.querySelector('#progresso')
    let progressoAtual = Math.floor((tempoReal/audio.duration) * 100)
    console.log(progressoAtual)
    progresso.style.width = progressoAtual+'%'

}


/*  NAVEGACAO MENU */

let btnMenu = document.querySelectorAll('.nav')
let navPlayer = document.querySelector('#nav-player')
let navPodcast = document.querySelector('#nav-podcast')
let navRadio = document.querySelector('#nav-radio')
let navExplorar = document.querySelector('#nav-explorar')
let navFavoritos= document.querySelector('#nav-favoritos')

let containerPlayer = document.querySelector('#player')
let containerPodcast = document.querySelector('#podcasts')
let containerRadio = document.querySelector('#container-radio')
let containerExplorar = document.querySelector('#explorar')
let containerFavoritos = document.querySelector('#favoritos')




btnMenu.forEach((sessao)=>{

    sessao.addEventListener('click', ()=>{


        switch(sessao.id){
            case 'nav-player':
                console.log(sessao.id)

                    containerPlayer.style.display = 'grid';
                    containerPodcast.style.display = 'none';
                    containerRadio.style.display = 'none';
                    containerExplorar.style.display = 'none';
                    containerFavoritos.style.display = 'none';

            break;
            case 'nav-podcast': 
            containerPlayer.style.display = 'none';
            containerPodcast.style.display = 'flex';
            containerRadio.style.display = 'none';
            containerExplorar.style.display = 'none';
            containerFavoritos.style.display = 'none';;
            break;
            case 'nav-radio': 

            console.log(sessao.id)
            containerPlayer.style.display = 'none';
            containerPodcast.style.display = 'none';
            containerRadio.style.display = 'flex';
            containerExplorar.style.display = 'none';
            containerFavoritos.style.display = 'none';;
            // document.querySelectorAll('.container-geral').style.background = 'white'
            ;
            break
            case 'nav-explorar': console.log('sessão explorar');
            break
            case 'nav-favoritos': console.log('sessão favoritos');
            break;
            default: console.log('error')
    
        }


    })
})

