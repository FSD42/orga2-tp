import Form from '../components/form';
import ProfileCard from '../components/profileCard';

export default () => {
    const element = document.createElement('main');
    element.appendChild(Form())
    element.appendChild(ProfileCard())
    return element;
}