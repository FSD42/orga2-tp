import footer from '../components/footer';
import Navbar from '../components/navbar';

/**
 * Return Error page
 * @return { HTMLElement }
 */
export default () => {
    const element = document.createElement('div');

    const main = document.createElement('main');
    main.classList.add('error');
    
    const error = document.createElement('h1');
    error.textContent = "Error 404";
    main.appendChild(error);

    element.appendChild(Navbar())
    element.appendChild(main)
    element.appendChild(footer())

    return element;
}