import removeChildes from './removeAllChildNodes';

/**
 * Subscribe to the router-event and load the component if the path is the same.
 * @param { String } path
 * @param { HTMLElement } element
 * @return { void }
 */
export default ({ path, element, title = "" }) => {

    const routes = localStorage.getItem('routes') ? JSON.parse(localStorage.getItem('routes')) : [];

    if(!routes.includes(path) && path != "*") {
        routes.push(path);
        localStorage.setItem('routes', JSON.stringify(routes));
    }

    const editDom = () => {
        document.title = `Discord my boi | ${title}`;
        removeChildes(document.getElementById('root'));
        document.getElementById('root').appendChild(element);
    }

    window.addEventListener('router-event', ({ detail }) => {
        if (routes.includes(detail.path) && detail.path === path) editDom()
        let tempRoutes = localStorage.getItem('routes') ? JSON.parse(localStorage.getItem('routes')) : [];

        if(!tempRoutes.includes(detail.path) && path === "*") {
            editDom();
        }
    });

    window.addEventListener('load', (e) => {
        if(routes.includes(window.location.pathname) && window.location.pathname === path) {
            window.dispatchEvent(new CustomEvent('router-event', { detail: { path } }));
        }
        if(!routes.includes(window.location.pathname) && path === "*") editDom();
    })

}

