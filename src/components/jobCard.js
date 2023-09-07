/**
 * Return Job Card component
 * @return { HTMLElement }
 */
export default ({ title, location, salary, description }) => {
    const h2 = document.createElement('h2');
    h2.textContent = title;
    h2.classList.add('job-card-title');

    const h3 = document.createElement('h3');
    h3.textContent = location;
    h3.classList.add('job-card-location');

    const money = document.createElement('h2');
    money.textContent = `Salaire: ${salary}€`;
    money.classList.add('job-card-salary');

    const p = document.createElement('p');
    p.textContent = description;
    p.classList.add('job-card-description');

    const button = document.createElement('button');
    button.textContent = 'Apply now';
    button.classList.add('job-card-button');

    const div = document.createElement('div');
    div.classList.add('job-card');
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(money);
    div.appendChild(p);
    div.appendChild(button);

    return div;
}