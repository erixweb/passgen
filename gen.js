let characters_num = 16


document.querySelector(".text").addEventListener("change", (e) => {
    characters_num = e.target.value
})

// On submit generate password
document.querySelector(".submit").addEventListener("click", () => {
    let password = ""

    const characters = [
        ",",
        ";",
        "?",
        "@",
        "^",
        "a",
        "e",
        "w",
        "z",
        "x",
        "i",
        "lx",
        "es",
        "evol",
        "azz",
        "xes",
        "arual"
    ]

    for (let i = 0; i < characters_num; ++i) {
        password += characters[Math.floor(Math.random() * 17)]
    }

    document.querySelector("span").innerHTML = password
})