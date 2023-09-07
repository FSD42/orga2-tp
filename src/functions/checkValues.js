export default (type, value) => {
    let regex = null;
    // Switch to check if the value is valid
    switch(type) {
        case 'email':
            regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i;
            return regex.test(value) ? "" : "Votre email n'est pas valide !";
        case 'password':
            regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
            return regex.test(value) ? "" : "Votre mot de passe doit contenir 8 char minimum, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial  !";
        case 'date':
            const date = new Date(value);
            const now = new Date();
            const age = now.getFullYear() - date.getFullYear();
            if(0 < age && age < 15) return "Vous devez avoir plus de 15 ans !";
            if(age > 115) return "Où se trouve la fontaine de jouvence ?";
            if(date > now) return "Vous ne pouvez pas être né dans le futur !";
            return ""
        case 'text':
            return value.length > 1 ? "" : "Ce champ ne doit pas être vide !";
        case 'tel':
            regex = /^[0-9]{10}$/i;
            return regex.test(value) ? "" : "Votre numéro de téléphone n'est pas valide !";
        default:
            return "";
    }
}