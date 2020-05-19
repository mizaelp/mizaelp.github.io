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

const inputVolume = document.querySelector('input#input-volume')
const selectOscillator = document.querySelector('select#select-oscillator')
const spanVolumeValue = document.querySelector('span#span-volume-value')

inputVolume.addEventListener('input', () => {
    spanVolumeValue.textContent = inputVolume.value
})

const getValue = name => notes.find(obj => obj.name === name)

const context = new AudioContext()

const playNote = (frequenciaNota) => {
    const oscillator = context.createOscillator()
    const volume = context.createGain()
    oscillator.frequency.value = frequenciaNota
    oscillator.type = selectOscillator.value
    volume.gain.value = inputVolume.value

    oscillator.connect(volume)
    volume.connect(context.destination)

    oscillator.start(context.currentTime)
    setTimeout(() => oscillator.stop(), 500)
}

const buttonSortear = document.querySelector('button#random-note')
const button = document.querySelectorAll('#container button')

button.forEach(element => {
    element.addEventListener('click', event => {
        playNote(getValue(event.target.className).frequencia)
    })
})
