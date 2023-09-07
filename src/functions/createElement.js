/**
 * Create an HTML element with attributes and onClick event. Return HTMLElement
 * @param { String } type
 * @param { Object } attributes
 * @param { Functions } onClick
 * @return { HTMLElement }
 */
export default (type, attributes, onClick = () => {}) => {
    const element = document.createElement(type);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    })
    element.addEventListener('click', onClick);
    return element;
}