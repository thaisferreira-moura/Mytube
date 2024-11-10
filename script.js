function dados() {
    return [ 
        {login: "paul", password: "1234@", email: "paul@gmail.com"}, 
        {login: "ringo", password: "1234@", email: "ringo@gmail.com"},
        {login: "john", password: "1234@", email: "john@gmail.com"},
        {login: "richard", password: "1234@", email: "richard@gmail.com"}
    ];
}

function login() {
    const usuarios = dados();
    const log = document.querySelector("#login").value;
    const senha = document.querySelector("#password").value;

    for (let i = 0; i < usuarios.length; i++) {
        if (log === usuarios[i].login && senha === usuarios[i].password) {
            alert("Você logou!");
            return;
        }
    }
    
    alert("Usuário ou senha incorretos!");
}
