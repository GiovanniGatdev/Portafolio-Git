class UI {
    constructor() {
        this.profile = document.getElementById('perfil');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card mt-2 py-2 animated bounceInLeft" style="width: 18rem;">
        <img src="${user.avatar_url}" class="card-img-top"/>
        <div class="card-body">
        <h3 class="card-title">
        ${user.name} / ${user.login}
        </h3>
        <a href="${user.html_url}" class="btn btn-primary btn-block" target="_black mx-auto">
        Ver perfil
        </a>
        <span class="badge badge-pill badge-info">
            Seguidores: ${user.followers}
        </span>
        <span class="badge badge-pill badge-primary">
            Siguiendo: ${user.following}
        </span>
        <span class="badge badge-pill badge-dark d-block mt-2">
            Repositorios públicos: ${user.public_repos}
        </span>
        </div>
        </div>
        
        `;
        this.limpiarpantalla();
    }
    showRepositories(repositories) {
        let template = '';
        repositories.forEach(repo => {
            template += `
        <div class="card card-body mt-2 animated bounceInUp">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">
                  Language: ${repo.language}
                </span>
                <span class="badge badge-success">
                  Forks: ${repo.forks_count}
                </span>
            </div>
          </div>
        </div>
      `;
        })
        document.getElementById('repositorios').innerHTML = template;

    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#perfil');
        content.insertBefore(div, profile);
        setTimeout(() => this.limpiarpantalla(), 3000);
    }

    limpiarpantalla() {
        const alertFound = document.querySelector('.alert');
        if (alertFound) {
            alertFound.remove();
        }
    }
    reset() {
        this.profile.innerHTML = `
          <div class="container mt5">
            <h3 class="display-2 text-center">Gracias!</h3>
          </div>
        `
    }
}
module.exports = UI;