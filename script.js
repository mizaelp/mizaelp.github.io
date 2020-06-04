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

document.querySelector('a#piano').addEventListener('click', () => {
    document.querySelector('main#main').innerHTML = `
        <div class="container_piano">
        <div class="painel_piano">
            <div>
                <label>Volume:</label>
                <input id="input-volume" type="range" min="0" max="5" step="0.5"/>
                <span id="volume-value">Valor</span>
            </div>
            <select>
                <option>sine</option>
                <option>sine</option>
                <option>sine</option>
                <option>sine</option>
            </select>
        </div>
        <div class="keys_piano">
            <button class="button_keys_white">Dó</button>
            <button class="button_keys_black">Dó#</button>
            <button class="button_keys_white">Ré</button>
            <button class="button_keys_black">Ré#</button>
            <button class="button_keys_white">Mi</button>
            <button class="button_keys_white">Fá</button>
            <button class="button_keys_black">Fá#</button>
            <button class="button_keys_white">Sol</button>
            <button class="button_keys_black">Sol#</button>
            <button class="button_keys_white">Lá</button>
            <button class="button_keys_black">Lá#</button>
            <button class="button_keys_white">Si</button>
        </div>
    </div>
    `
})

document.querySelector('a#about').addEventListener('click', () => {
    document.querySelector('main#main').innerHTML = `
    <div class="card">
    <img class="logo" src="https://avatars1.githubusercontent.com/u/46569836?s=460&u=b13c83036193f1465036090faa396fc75c2a1120&v=4" alt="Profile">
  <h1>Mizael Pereira</h1>
  <p class="title">Web Developer</p>
  <p>Graduated at Instituto Federal do Triângulo Mineiro</p>
  <div style="margin: 24px 0;">
    <a class="a_card" href="#"><i class="fa fa-dribbble"></i></a> 
    <a class="a_card" href="#"><i class="fa fa-twitter"></i></a>  
    <a class="a_card" href="#"><i class="fa fa-linkedin"></i></a>  
    <a class="a_card" href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button class="btn-contact">Contact</button></p>
</div>
    `
})