import Navbar from '../components/navbar';
import Header from '../components/header';
import jobCard from '../components/jobCard';
import footer from '../components/footer';
import jobs from '../datas/jobs';
import createElement from '../functions/createElement';

const cards = jobs()

const categories = cards.map(card => card.category).filter((x, i) => cards.map(card => card.category).indexOf(x) === i)

/**
 * Return Jobs page
 * @return { HTMLElement }
 */
export default () => {
    const element = document.createElement('div');
    const main = document.createElement('main');
    const jobsContainer = createElement('div', { class: 'jobs-container' });
    element.appendChild(Navbar());
    
    categories.forEach((category, index) => {

        let categoryContainer = createElement('div', { class: 'category-container' });
        let categoryContent = createElement('div', { class: 'category-content' });

        let title = createElement('h2', { class: 'category-title' });
        title.textContent = category;
        categoryContainer.appendChild(title);
        categoryContainer.appendChild(categoryContent);
        categoryContainer.classList.add(`category-${index + 1}`)

        cards.filter(card => card.category === category).forEach(card => {
            categoryContent.appendChild(jobCard(card))
        });

        jobsContainer.appendChild(categoryContainer);

    });
    
    main.appendChild(jobsContainer) 
    element.appendChild(Header())
    element.appendChild(main)
    element.appendChild(footer())
    return element;
}