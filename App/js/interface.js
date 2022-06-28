// alert('Este é o sistema interno')
//APRESENTACAO INICIAL 

// // window.onload = apresentacao
// function apresentacao(){

//     setTimeout(()=>{

//       document.querySelector('#apresentacao').style.display = 'none'

//     }, 12000)
// }

/********* RESPONSIVIDADE DO MENU  *********/

let hamburguer = document.querySelector('#btn-menu')

let navMenu = document.querySelector('#nav')

hamburguer.addEventListener('click', ()=>{
  navMenu.classList.toggle('active')
  hamburguer.classList.toggle('foco')

})  

let tagAudio = document.querySelector('#audio')
let btnPlayer = document.querySelector('#play')
let btnPause = document.querySelector('#pause')
let btnNext = document.querySelector('#next')
let btnBack = document.querySelector('#back')
let index = 0 // posição inicial da musica referente ao array "MUSICAS"

let inicio = document.querySelector('#inicio')

let lista = document.querySelector('#lista')
let itensLista = lista.children

  /*  IMPORTANDO AS MUSICAS */ 

let playlist = [
    {
    font: './playlist/musica0/Jason Derulo - Swalla (BL Moombahton Remix).mp3',
    musica: 'Swalla (BL Moombahton Remix) - teste scroll animado', 
    artista: 'Jason Derulo',
    capa: './playlist/musica0/capa.jpg'
  }
,
  {
    font: './playlist/musica1/Tim Maia - Sossego (Lazy Bear Bootleg).mp3',
    musica: 'Sossego (remix)', 
    artista: 'Tim Maia',
    capa: './playlist/musica1/capa.jpg'
  },
  {
    font: './playlist/musica0/Jason Derulo - Swalla (BL Moombahton Remix).mp3',
    musica: 'Swalla (BL Moombahton Remix)', 
    artista: 'Jason Derulo',
    capa: './playlist/musica0/capa.jpg'
  }
,
  {
    font: './playlist/musica1/Tim Maia - Sossego (Lazy Bear Bootleg).mp3',
    musica: 'Sossego (remix)', 
    artista: 'Tim Maia',
    capa: './playlist/musica1/capa.jpg'
  },
  {
    font: './playlist/musica0/Jason Derulo - Swalla (BL Moombahton Remix).mp3',
    musica: 'Swalla (BL Moombahton Remix)', 
    artista: 'Jason Derulo',
    capa: './playlist/musica0/capa.jpg'
  }
,
  {
    font: './playlist/musica1/Tim Maia - Sossego (Lazy Bear Bootleg).mp3',
    musica: 'Sossego (remix)', 
    artista: 'Tim Maia',
    capa: './playlist/musica1/capa.jpg'
  },
  {
    font: './playlist/musica0/Jason Derulo - Swalla (BL Moombahton Remix).mp3',
    musica: 'Swalla (BL Moombahton Remix)', 
    artista: 'Jason Derulo',
    capa: './playlist/musica0/capa.jpg'
  }
,
  {
    font: './playlist/musica1/Tim Maia - Sossego (Lazy Bear Bootleg).mp3',
    musica: 'Sossego (remix)', 
    artista: 'Tim Maia',
    capa: './playlist/musica1/capa.jpg'
  }
]

tagAudio.setAttribute('src', playlist[index].font) // MUSICA PADRÃO DESTACADA DE INICIO

window.onload = atualizarDados(index)

function atualizarDados(index){

    setTimeout(()=>{

        let minutos = Math.floor(tagAudio.duration / 60)
        let segundos = Math.floor(tagAudio.duration % 60);
        document.querySelector('#fim').textContent = minutos +':'+segundos;
        document.querySelector('#nome-musica').textContent = playlist[index].musica
        document.querySelector('#artista').textContent = playlist[index].artista
        document.querySelector('#capa').setAttribute('src', playlist[index].capa)
    }, 1000)
}

//****** funcao para os controles player ******//

function player(){
  
  atualizarDados(index)
    audio.play()
    btnPlayer.style.display = 'none'
    btnPause.style.display = 'flex'
    audio.addEventListener('timeupdate', tempo)
  
    // ANIMAR/DESTACAR MUSICAS QUANDO ESTIVER TOCANDO NA PLAYLIST
    document.querySelectorAll('.iconSpan').forEach((animado, i)=>{ 

    if(i == index){
      animado.style.display = 'flex'
    }else{
          animado.style.display = 'none'
    }
  })
}

btnPlayer.addEventListener('click', player)

btnPause.addEventListener('click', ()=>{
    audio.pause()
    btnPlayer.style.display = 'flex'
    btnPause.style.display = 'none'
})

btnBack.addEventListener('click', ()=>{
    index--
    audio.pause()
    // audio.currentTime = 0
    atualizarDados(index)
    tagAudio.setAttribute('src', playlist[index].font)
    player()
})

btnNext.addEventListener('click', ()=>{
    index++
    audio.pause()
    atualizarDados(index)
    tagAudio.setAttribute('src', playlist[index].font)
    player()
})

audio.addEventListener('timeupdate', tempo())
function tempo(){
    
    let tempoReal = audio.currentTime 
    let segundo = Math.floor(audio.currentTime % 60);
    
    let minutos = Math.floor(audio.currentTime / 60);
    inicio.textContent = '0'+minutos+':0' +segundo;
    
    if(segundo >= 10){
        inicio.textContent = '0'+minutos+':' +segundo;

        if(segundo >= 60){

            console.log(minutos)
            inicio.textContent = '0'+minutos+':0'+ segundo
        }
    }
    uploadBarra(tempoReal)

}

function uploadBarra(tempoReal){
    
    let progresso = document.querySelector('#progresso')
    let progressoAtual = Math.floor((tempoReal/audio.duration) * 100)
    // console.log(progressoAtual)
    progresso.style.width = progressoAtual+'%'

}

/******* playlist  ********/
window.onload = ordemPlaylist()
function ordemPlaylist(){

    let ul = document.querySelector('#lista')

    playlist.forEach((item, posicao)=>{
        let capa = item.capa
        let artista = item.artista
        let nomeMusica = item.musica

        ul.innerHTML += `<li class="${posicao} item-playlist">
        <img class="${posicao} item-playlist" src="${capa}" alt="">

        <p class="${posicao} item-playlist"> <span class="${posicao} item-playlist"> ${artista}</span> <br> ${nomeMusica}</p>

        <div class="iconSpan">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
    </div>

    </li>`

    })

}

let itemLista = document.querySelectorAll('.item-playlist')
itemLista.forEach((item)=>{
  
  item.addEventListener('click',(elemento)=>{ 

        audio.currentTime = 0
        audio.pause()
        let tag = elemento.target
        index = parseInt(tag.classList[0])
        // console.log(index)
        atualizarDados(index)
        tagAudio.setAttribute('src', playlist[index].font)
        player()
        btnPlayer.style.display = 'none'
        btnPause.style.display = 'flex'

        
        
      })
      
  

})

/*  NAVEGACAO MENU  - FUTURO DESENVOLVIMENTO DA PLATAFORMA COMPLETA */
/*
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

    sessao.addEventListener('click', (pagina)=>{
       
      switch(sessao.id){
            case 'nav-player':
                    containerPlayer.style.display = 'grid'
                    containerPodcast.style.display = 'none'
                    containerRadio.style.display = 'none'
                    containerExplorar.style.display = 'none'
                    containerFavoritos.style.display = 'none'

            break
            case 'nav-podcast': 
            containerPlayer.style.display = 'none'
            containerPodcast.style.display = 'flex'
            
            containerRadio.style.display = 'none'
            containerExplorar.style.display = 'none'
            containerFavoritos.style.display = 'none'
            console.log('foi')
                     
            break
            case 'nav-radio': 

            containerPlayer.style.display = 'none'
            containerPodcast.style.display = 'none'
            containerRadio.style.display = 'flex'
            containerExplorar.style.display = 'none'
            containerFavoritos.style.display = 'none'
            break
            case 'nav-explorar': console.log('sessão explorar')
            break
            case 'nav-favoritos': console.log('sessão favoritos')
            break
            default: console.log('error')
    
        }

    })

})





*/