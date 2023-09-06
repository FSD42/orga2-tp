// Description: Profile card component
window.addEventListener('user-edited', ({ detail: user }) => {
    const profileCard = document.querySelector('.profile-card')
    let age = null
    if(user.birthday) age = new Date().getFullYear() - new Date(user.birthday).getFullYear();
    profileCard.querySelector('.firstName').textContent = `Prénom: ${user.firstname ?? ""}`
    profileCard.querySelector('.lastName').textContent = `Nom: ${user.lastname ?? ""}`
    profileCard.querySelector('.age').textContent = `Age: ${age ?? ""}`
    profileCard.querySelector('.email').textContent = `Email: ${user.email ?? ""}`
    profileCard.querySelector('.phone').textContent = `Téléphone: ${user.phone ?? ""}`
})

export default () => {
    const profileCard = document.createElement('div')
    profileCard.classList.add('profile-card')
    profileCard.innerHTML = `
        <h2>Aperçu du profil</h2>
        <div class="profile-card-content">
            <h3 class="firstName">Prénom: </h3>
            <h3 class="lastName">Nom:</h3>
            <h4 class="age">Age:</h5>
            <h4 class="email">Email:</h4>
            <h4 class="phone">Téléphone:</h4>
        </div>
    `
    return profileCard
}