class UI {
    constructor() {
        this.profile = document.getElementById('perfil');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card mt-2 animated bounceInLeft" style="width: 18rem;">
        <img src="${user.avatar_url}" class="card-img-top"/>
        <div class="card-body">
        <h3 class="card-title">
        ${user.name} / ${user.login}
        </h3>
        <a href="${user.html_url}" class="btn btn-primary btn-block" target="_black">
        Ver perfil
        </a>
        <span class="badge badge-pill badge-info">
            Seguidores: ${user.followers}
        </span>
        <span class="badge badge-pill badge-primary">
            Siguiendo: ${user.following}
        </span>
        <span class="badge badge-pill badge-dark d-block">
            Repositorios Públicos: ${user.public_repos}
        </span>
        </div>
        </div>
        
        `;
        this.limpiarpantalla();
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#perfil');
        content.insertBefore(div, profile);
    }

    limpiarpantalla() {
        const alertFound = document.querySelector('.alert');
        if (alertFound) {
            alertFound.remove();
        }
    }
}
module.exports = UI;