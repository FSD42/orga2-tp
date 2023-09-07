import createElement from '../functions/createElement';
import Input from './input'
import jobs from '../datas/jobs';

/**
 * Return Form component
 * @return { HTMLElement }
 */
export default () => {

    const main = document.createElement('main');
    const container = createElement('div', { class: 'form-container' });
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    const submit = Input({ attributes : { type: "submit", value: "Submit", name:"submit", id:"submit" } })
    
    let user = {
        firstname: localStorage.getItem('firstname') || '',
        lastname: localStorage.getItem('lastname') || '',
        email: localStorage.getItem('email') || '',
        birthday: localStorage.getItem('birthday') || '',
        phone: localStorage.getItem('phone') || '',
    }

    /* Edit User */
    const editUser = (key, value) => {
        user = { ...user, [key]: value }
        localStorage.setItem(key, value)
        window.dispatchEvent(new CustomEvent('user-edited', { detail: user }));
    }

    /** Title */
    const title = document.createElement('h1')
    title.textContent = "Profile"
    form.appendChild(title)

    /** Row element */
    const row = document.createElement('div'); 
    row.classList.add('row'); 

    /** Select Jobs */
    const selectContainer = createElement('div', { class: 'select-container' });
    const label = document.createElement('label');
    label.textContent = "Select job";
    const select = createElement('select', { class: 'jobs-select' });
    selectContainer.appendChild(label);
    selectContainer.appendChild(select);

    jobs().forEach(job => {
        const option = document.createElement('option');
        option.setAttribute('value', job.id);
        option.textContent = job.title;
        select.appendChild(option);
    })

    /* Add inputs */
    row.appendChild(Input({ attributes: { type: "text", name: "firstname", id: "firstname", placeholder: "John", value: user.firstname }, label: "Firstname", onChange: (value) => editUser('firstname', value) } ));
    row.appendChild(Input({ attributes: { type: "text", name: "lastname", id: "lastname", placeholder: "Doe", value: user.lastname }, label: "Lastname", onChange: (value) =>  editUser('lastname', value) }));

    /* Append Row */
    form.appendChild(row)

    /* Append all inputs to form */
    form.appendChild(Input({ attributes: { type: "email", name: "email", id: "email", placeholder: "john.doe@gmail.com", value: user.email }, label: "Email", onChange: (value) => editUser('email', value) }));
    form.appendChild(selectContainer);
    form.appendChild(Input({ attributes: { type: "file", name: "file", id: "file" }, label: "Curriculum Vitae", onChange: (value) => {} }));
    form.appendChild(Input({ attributes: { type: "date", name: "birthday", id: "birthday", value: user.birthday }, label: "Date of birth", onChange: (value) => editUser('birthday', value) }));
    form.appendChild(Input({ attributes: { type: "tel", name: "tel", id: "tel", placeholder: '06 11 22 33 44', value: user.phone },label: "Phone", onChange: (value) => editUser('phone', value) }));
    
    /* Add submit buttons */
    form.appendChild(submit);

    /* Method for Submit */
    const onSubmit = () => {
        console.log("Form validé");
    }

    form.addEventListener('submit', (e) => { e.preventDefault(); onSubmit() });
    container.appendChild(form);
    main.appendChild(container);
    return main

}