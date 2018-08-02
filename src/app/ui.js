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
            Blog: ${user.blog}
        </span>
        </div>
        </div>
        
        `;
    }
}
module.exports = UI;