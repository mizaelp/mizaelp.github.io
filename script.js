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

document.querySelector('div#app').innerHTML = 
    `
    <header>
        <!-- <img class="logo" src="https://avatars1.githubusercontent.com/u/46569836?s=460&u=b13c83036193f1465036090faa396fc75c2a1120&v=4" alt="Profile" width="60px"> -->
        <nav>
            <ul class="nav_links">
                <li><a>Home</a></li>
                <li><a>About</a></li>
            </ul>
        </nav>
        <a class="cta" href="#"><button>Contact</button></a>
    </header>
    <main id="main">Teste</main>`