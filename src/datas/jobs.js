/**
 * Return a list of jobs
 * @return { Array }
 */
export default () => {

    let jobs = [
        {
            title: 'Group Product Marketing Manager',
            category: 'Consumer Marketing',
            salary: '2600-3000',
            location: 'Paris, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Engineering Manager, Media Infrastructure',
            category: 'Core Tech Engineering',
            salary: '35000-3000000',
            location: 'Paris, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Senior Software Engineer, Audio/Video Products',
            category: 'Core Tech Engineering',
            salary: '2800-3200',
            location: 'Lille, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Senior Software Engineer, Core Audio/Video',
            category: 'Core Tech Engineering',
            salary: '2600-3000',
            location: 'Lyon, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Senior Staff Software Engineer, Audio/Video Products',
            category: 'Core Tech Engineering',
            salary: '35000-3000000',
            location: 'Rennes, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Data Engineering Manager',
            category: 'Data Engineering',
            salary: '35000-3000000',
            location: 'Rennes, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Engineering Manager, Data Infrastructure',
            category: 'Data Platform Engineering',
            salary: '35000-3000000',
            location: 'Rennes, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Senior Software Engineer, Machine Learning Platform',
            category: 'Data Platform Engineering',
            salary: '35000-3000000',
            location: 'Rennes, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Software Engineer, Data Products',
            category: 'Data Platform Engineering',
            salary: '35000-3000000',
            location: 'Rennes, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: 'Staff Software Engineer - Machine Learning Platform',
            category: 'Data Platform Engineering',
            salary: '35000-3000000',
            location: 'Rennes, FRANCE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        }
    ]

    const minRange = [2500, 3000]
    const maxRange = [3000, 4000]

    const randomMin = () => Math.floor(Math.random() * (minRange[1] - minRange[0] + 1) + minRange[0])
    const randomMax = () => Math.floor(Math.random() * (maxRange[1] - maxRange[0] + 1) + maxRange[0])

    const localisations = [
        "New York, UNITED STATES",
        "London, UNITED KINGDOM",
        "Paris, FRANCE",
        "Tokyo, JAPAN",
        "Sydney, AUSTRALIA",
        "Berlin, GERMANY",
        "Rome, ITALY",
        "Cairo, EGYPT",
        "Rio de Janeiro, BRAZIL",
        "Toronto, CANADA",
        "Beijing, CHINA",
        "Moscow, RUSSIA",
        "Singapore, SINGAPORE",
        "Seoul, SOUTH KOREA",
        "Buenos Aires, ARGENTINA"
      ];
      

    const randomCity = () => localisations[Math.floor(Math.random() * localisations.length)]

    jobs = jobs.map((job, index) => {  return {...job, id: index + 1, location: randomCity(), salary: `${randomMin()}-${randomMax()}`} })

    return jobs

}