import Form from '../components/form';
import Navbar from '../components/navbar';
import footer from '../components/footer';

/**
 * Return Profile page
 * @return { HTMLElement }
 */
export default () => {
    const element = document.createElement('div');
    element.appendChild(Navbar())
    element.appendChild(Form())
    element.appendChild(footer())
    return element;
}