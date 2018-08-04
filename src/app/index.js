const UI = require("./ui");
const Github = require("./github");
const { ClientID, ClientSecret } = require("./config.json");


const github = new Github(ClientID, ClientSecret);

const ui = new UI;

const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', e =>{

    const search = document.getElementById('textSearch').value;

    if(search != ''){
        github.obtenerUsuario(search).then(data => {
            if(data.userData.message == "Not Found"){
                ui.mensaje('Usuario no existe', 'alert alert-danger col-md-12 mt-2')
            }else{
                ui.mostrarPerfil(data.userData);
                ui.mostrarRepositorios(data.Repos);
            }
        });
    }

    e.preventDefault()

})