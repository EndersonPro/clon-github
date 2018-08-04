class UI {
    constructor(){
        this.profile = document.getElementById('profile')
    }

    mostrarPerfil(user){
        this.limpiarMensaje();

        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a class="btn btn-primary btn-block" target="_black" href="${user.html_url}">Perfil</a>
                    <span class="badge badge-success">
                        Seguidores: ${user.followers} 
                    </span>
                    <span class="badge badge-primary">
                        Seguidos: ${user.following} 
                    </span>
                    <span class="badge badge-warning">
                        Compañia: ${user.company} 
                    </span>
                    <span class="badge badge-info d-block">
                        Blog: ${user.blog} 
                    </span>
                </div>
            </div>
        `
    }

    mensaje(mensaje, cssClass){
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(mensaje));

        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile')

        content.insertBefore(div, profile)
    }

    limpiarMensaje(){
        const alertFound = document.querySelector('.alert');
        if(alertFound){
            alertFound.remove()
        }
    }

    mostrarRepositorios(repositorios){
        console.log(repositorios)

        let template = '';

        repositorios.forEach(repos =>{
             template += `
                    <div class="card card-body mt-2 animated bounceInUp">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                            </div>
                            <div class="col-md-6">
                                <span class="badge badge-primary">Lenguaje: ${repos.language}</span>
                                <span class="badge badge-success">Fork: ${repos.forks_count}</span>
                            </div>                    
                        </div>
                    </div>
                `;

        })

        document.getElementById('repositories').innerHTML = template;
    }
}

module.exports = UI;