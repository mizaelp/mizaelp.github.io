const notes = [
    {
        "id": 1,
        "name": "do",
        "frequencia": 261.625519
    },
    {
        "id": 2,
        "name": "doSus",
        "frequencia": 277.182648
    },
    {
        "id": 3,
        "name": "re",
        "frequencia": 293.664734
    },
    {
        "id": 4,
        "name": "reSus",
        "frequencia": 311.126984
    },
    {
        "id": 5,
        "name": "mi",
        "frequencia": 329.627533
    },
    {
        "id": 6,
        "name": "fa",
        "frequencia": 349.228241
    },
    {
        "id": 7,
        "name": "faSus",
        "frequencia": 369.994385
    },
    {
        "id": 8,
        "name": "sol",
        "frequencia": 391.995392
    },
    {
        "id": 9,
        "name": "solSus",
        "frequencia": 415.304688
    },
    {
        "id": 10,
        "name": "la",
        "frequencia": 440
    },
    {
        "id": 11,
        "name": "laSus",
        "frequencia": 466.163788
    },
    {
        "id": 12,
        "name": "si",
        "frequencia": 493.883301
    }
]

const playNote = (freq) => {
    const context = new AudioContext()
    const oscillator = context.createOscillator()
    const volume = context.createGain()
    oscillator.frequency.value = freq
    oscillator.type = "sine"
    volume.gain.value = 0.5

    oscillator.connect(volume)
    volume.connect(context.destination)

    oscillator.start(context.currentTime)
    setTimeout(() => oscillator.stop(), 500)

}

const showSnackBar = (msg) => {
    let div = document.querySelector('div#snackbar')
    div.textContent = msg
    div.className = "show"
    setTimeout(() => {
        div.className = div.className.replace("show", "")
    }, 3000)
}

let note = null
let score = 0
let vidas = 3
const randomNote = () => notes[Math.floor(Math.random() * notes.length)].frequencia

const pianoState = () => {
    pianoPresenter()
}

const pianoView = () => {
    return `
    <div class="container_piano">
        <div class="painel_piano">
            <button id="btn-random" class="btn_play">Sortear nota</button>
            <div class="score-group">
                <label class="lbl_score">Pontuação:</label>
                <div id="div-score" class="score">${score}</div>
            </div>
            <div class="lifes-group">
                <label class="lbl_lifes">Chances:</label>
                <div id="div-lifes" class="lifes">${vidas}</div>
            </div>
            <div id="snackbar"></div>
        </div>
        <div id="container-keys" class="keys_piano">
            <button data="do" class="button_keys_white">Dó</button>
            <button data="doSus" class="button_keys_black">Dó#</button>
            <button data="re" class="button_keys_white">Ré</button>
            <button data="reSus" class="button_keys_black">Ré#</button>
            <button data="mi" class="button_keys_white">Mi</button>
            <button data="fa" class="button_keys_white">Fá</button>
            <button data="faSus" class="button_keys_black">Fá#</button>
            <button data="sol" class="button_keys_white">Sol</button>
            <button data="solSus" class="button_keys_black">Sol#</button>
            <button data="la" class="button_keys_white">Lá</button>
            <button data="laSus" class="button_keys_black">Lá#</button>
            <button data="si" class="button_keys_white">Si</button>
        </div>
    </div>
    `
}

document.querySelector('a#piano').addEventListener('click', () => {
    pianoState()
})

const getValue = name => notes.find(obj => obj.name === name)

const pianoPresenter = () => {
    const view = pianoView()
    document.querySelector('main#main').innerHTML = view

    const btnNote = document.querySelectorAll('#container-keys button')
    const btnRandom = document.querySelector('#btn-random')
    const divScore = document.querySelector('div#div-score')
    const divLifes = document.querySelector('div#div-lifes')

    btnRandom.addEventListener('click', () => {
        note = randomNote()
        playNote(note)
        console.log(note)
        btnRandom.setAttribute('disabled', '')
    })

    btnNote.forEach(element => {
        element.addEventListener('click', event => {
            let playNow = getValue(event.target.getAttribute('data')).frequencia
            playNote(playNow)
            if (note === getValue(event.target.getAttribute('data')).frequencia) {
                showSnackBar('Parabéns, você acertou!')
                note = null
                score ++
                divScore.textContent = score
                btnRandom.removeAttribute('disabled')
            } else {
                vidas--
                divLifes.textContent = vidas
                if (vidas == 0) {
                    showSnackBar('Game Over!')
                    note = null
                    score = 0
                    vidas = 3
                    divLifes.textContent = vidas
                    divScore.textContent = score
                    btnRandom.removeAttribute('disabled')
                }
            }
        })
    })
}

document.querySelector('a#contact').addEventListener('click', () => {
    document.querySelector('main#main').innerHTML = `
    <div class="card">
        <img class="logo" src="https://avatars1.githubusercontent.com/u/46569836?s=460&u=b13c83036193f1465036090faa396fc75c2a1120&v=4" alt="Profile">
        <h1>Mizael Pereira</h1>
        <p class="title">Web Developer</p>
        <p>Graduated at Instituto Federal do Triângulo Mineiro in Licenciatura em Computação</p>
        <div style="margin: 24px 0;">
            <a class="a_card" href="https://github.com/mizaelp" target="_blank"><i class="fa fa-github"></i></a> 
            <a class="a_card" href="https://www.linkedin.com/in/mizael-pereira" target="_blank"><i class="fa fa-linkedin"></i></a>  
            <a class="a_card" href="https://www.instagram.com/mizael.pereira_/" target="_blank"><i class="fa fa-instagram"></i></a> 
        </div>
    </div>
    `
})

document.querySelector('a#home').addEventListener('click', () => {
    document.querySelector('main#main').innerHTML = ''
})

document.querySelector('a#about').addEventListener('click', () => {
    document.querySelector('main#main').innerHTML = `
    <h2 class="h2_about">Sharing science computer with music and art.</h2>
    `
})