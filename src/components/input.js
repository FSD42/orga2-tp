import checkValuesFunc from '../functions/checkValues'

export default ({attributes = { }, label: labelText = "", onChange = () => { console.warning("You're Input are not connected to onChange function !") }, required = true}) => {
    /**  form control Creation*/
    const formControl = document.createElement('div');
    formControl.classList.add('form-control');

    /** Label creation */
    const label = document.createElement('label');
    label.innerText = labelText ?? attributes.name;
    label.htmlFor = attributes.name ?? "";


    /** SpanError creation */
    const spanError = document.createElement('small');
    spanError.classList.add('error-message');

    /** Input creation */
    const input = document.createElement('input');
    
    /** User edition */
    const onEdit = (value) => {
        const error = checkValuesFunc(attributes.type, value)
        setError(error)
        onChange(value);
    }

    /** Set error */
    const setError = (err) => {
        spanError.innerText = err
    }

    /** Set attributes for the input */
    if(attributes) {
        Object.keys(attributes).forEach((key) => {
            input[key] = attributes[key]
        })
    }
    input.required = required;

    /** Set the modification of the input */
    input.addEventListener('input', ({ target: { value } }) => { onEdit(value) });

    /** Add created elements */
    if(attributes.type !== "submit") formControl.appendChild(label);
    formControl.appendChild(input);

    formControl.appendChild(spanError);
    return formControl;
}