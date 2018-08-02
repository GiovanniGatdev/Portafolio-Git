class UI {
    constructor() {
        this.profile = document.getElementById('perfil');
    }

    showProfile() {
        this.profile.innerHTML = `
        <div class="card">
        ${user.login}
        </div>
        `;
    }
}
module.exports = UI;