import Navbar from '../components/navbar';

/**
 * Return Error page
 * @return { HTMLElement }
 */
export default () => {
    const element = document.createElement('div');
    
    const error = document.createElement('h1');
    error.textContent = "Error";

    element.appendChild(Navbar())
    element.appendChild(error)

    return element;
}