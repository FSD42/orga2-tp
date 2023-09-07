import Input from './input'

export default () => {

    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    const submit = Input({ attributes : { type: "submit", value: "S'inscrire", name:"submit", id:"submit" } })
    
    let user = {
        firstname: '',
        lastname: '',
        email: '',
        birthday: '',
        phone: '',
        password: '',
        passwordComfirm: '',
    }

    /* Edit User */
    const editUser = (key, value) => {
        user = { ...user, [key]: value }
        window.dispatchEvent(new CustomEvent('user-edited', { detail: user }));
    }

    /** Title */
    const title = document.createElement('h1')
    title.textContent = "S'inscrire"
    form.appendChild(title)

    /** Row element */
    const row = document.createElement('div'); 
    row.classList.add('row'); 

    /* Add inputs */
    row.appendChild(Input({ attributes: { type: "text", name: "firstname", id: "firstname", placeholder: "Prénom" }, label: "Prénom", onChange: (value) => editUser('firstname', value) } ));
    row.appendChild(Input({ attributes: { type: "text", name: "lastname", id: "lastname", placeholder: "Nom" }, label: "Nom", onChange: (value) =>  editUser('lastname', value) }));

    /* Append Row */
    form.appendChild(row)

    /* Append all inputs to form */
    form.appendChild(Input({ attributes: { type: "email", name: "email", id: "email", placeholder: "Email" }, label: "Email", onChange: (value) => editUser('email', value) }));
    form.appendChild(Input({ attributes: { type: "date", name: "birthday", id: "birthday", placeholder: "Date de naissance" }, label: "Date de naissance", onChange: (value) => editUser('birthday', value) }));
    form.appendChild(Input({ attributes: { type: "tel", name: "tel", id: "tel" },label: "Téléphone", onChange: (value) => editUser('phone', value) }));
    form.appendChild(Input({ attributes: { type: "password", name: "password", id: "password" },label: "Mot de passe", onChange: (value) => editUser('password', value) }));
    form.appendChild(Input({ attributes: { type: "password", name: "password2", id:"password2" },label: "Confirmer votre mot de passe", onChange: (value) => editUser('passwordComfirm', value) }));
    
    /* Add submit buttons */
    form.appendChild(submit);

    /* Méthode pour la */
    const onSubmit = () => {
        console.log("Form validé");
    }

    form.addEventListener('submit', (e) => { e.preventDefault(); onSubmit() });
    return form

}