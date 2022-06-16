const projects = [
    { 
        name: 'Menulingua',
        route: 'menulingua',
        image: 'menulingua',
        video_link: '',
        icon: 'menulingua_logo.svg',
        major_project: true,
        tag: 'Progressive Web App • Full Stack',
        colour: '#94C13D',
        secondary_colour: '#EBE9FF',
        description: 'Menulingua is a digital restaurant menu service in use across 19 countries. Focused on QR code-based menus, the service was launched in 2019 and has emerged a popular app in Southeast Asia, particularly in the Philippines and Indonesia.',
        skills: [
            'Payment integration', 
            'Progressive Web App',
            'Ruby on Rails',
            'PostgreSQL',
            'Vue.js',
            'Mandarin Chinese',
            'Bahasa Indonesia',
            'Modern CSS Technologies',
            'Javascript',
            'Git',
            'Heroku',
            'REST APIs'
        ],
        facts: [
            { 
                tag: '200,000+',
                description: 'Number of orders placed on the Menulingua platform'
            },
            { 
                tag: '19',
                description: 'Number of countries in which Menulingua is used'
            },
            {
                tag: '11',
                description: 'Number of languages in which Menulingua is used'
            },
            {
                tag: '2 million+',
                description: 'Number of times Menulingua QR codes have been scanned'
            }
        ],
        site: 'menulingua.com'
    },
    {
        name: 'New Talent Festival',
        route: 'new-talent-festival',
        image: 'newtalent2',
        video_link: '',
        major_project: true,
        icon: 'newtalenticon.svg',
        tag: 'Progressive Web App • Frontend',
        colour: '#472265',
        secondary_colour: '#EBE9FF',
        description: 'Registration site for 2022 New Talent Festival for young musicians. The project included 16 separate automated email processes, payment integrations and implementation of a specific brand identity.',
        skills: [
            'Vue.js', 
            'Progressive Web App',
            'Modern CSS Technologies',
            'Javascript',
            'REST APIs',
            'Payment Integrations',
            'Mandarin Chinese'
        ],
        facts: [
            { 
                tag: '16',
                description: 'Number of automated email processes implemented'
            },
            {
                tag: '28',
                description: 'Number of different countries of origin among competition entrants'                
            },
            {
                tag: '800+',
                description: "Total participants in the competition's history"                
            }
        ],
        site: 'newtalentfestival.com'
    },
    {
        name: 'Plastipoint',
        route: 'plastipoint',
        image: 'plastipoint',
        video_link: '',
        major_project: false,
        icon: 'plastipoint_logo.svg',
        tag: 'Progressive Web App • Frontend',
        colour: '#8bc050',
        secondary_colour: '#EBE9FF',
        description: 'A leading-edge digital solution for community-based plastic waste collection and recycling. Connects consumers, collectors, aggregators and recyclers to maximize plastic waste collection and prevent plastic waste from entering the environment.',
        skills: [
            'Vue.js', 
            'Progressive Web App',
            'Modern CSS Technologies',
            'Javascript',
            'Git',
            'UI/UX design',
            'REST APIs'
        ],
        facts: [
            { 
                tag: 'Kenya',
                description: 'Launch country for Plastipoint project'
            },
            {
                tag: '80%',
                description: 'Four-fifths of global plastic waste originates in 10 river systems in emerging geographies'                
            },
        ],
        site: 'plastipoint.com'
    },
    {
        name: 'ILS frequency lookup',
        route: 'ils-frequency-lookup',
        image: 'ils-lookup',
        video_link: '',
        major_project: false,
        icon: 'ils-lookup_logo.svg',
        tag: 'Progressive Web App • Frontend',
        colour: '#113E4D',
        secondary_colour: '#EBE9FF',
        description: 'ILS Frequency Lookup gives flight simulator enthusiasts a way to find airport information that ensures they can continue flying the virtual skies without incident.',
        skills: [
            'Vue.js', 
            'Progressive Web App',
            'Modern CSS Technologies',
            'Javascript',
            'Git',
            'Google Maps Integration',
            'REST APIs'
        ],
        facts: [
            { 
                tag: '87,000',
                description: 'Number of airports included in the project'
            },
            {
                tag: '100,000+',
                description: 'Total number of searches on ILS Frequency Lookup'                
            },
            {
                tag: '85',
                description: 'Number of countries in which unique users are located.'                
            }
        ],
        site: 'ils-frequency-lookup.com'
    },
    {
        name: "Reena's Jade Massage Therapy",
        route: 'rjmt',
        image: 'rjmt',
        video_link: '',
        major_project: false,
        icon: 'rjmt_logo.png',
        tag: 'Progressive Web App • Frontend',
        colour: '#137444',
        secondary_colour: '#EBE9FF',
        description: "Integrated storefront and booking system for Reena's Jade Massage Therapy in Michigan, United States. Integration with Google Calendar ensures double-bookings don't occur.",
        skills: [
            'Vue.js', 
            'Progressive Web App',
            'Google Calendar integration',
            'Modern CSS Technologies',
            'Javascript',
            'Git',
            'REST APIs'
        ],
        facts: [
            { 
                tag: '500+',
                description: 'Number of bookings processed'
            },
            {
                tag: '10',
                description: 'Number of massage services offered, each with unique time constraints and pricing'                
            }
            // {
            //     tag: '85',
            //     description: 'Number of countries in which unique users are located.'                
            // }
        ],
        site: 'rjmt.care'
    },
    // { 
    //     name: "World's longest passenger flights",
    //     route: 'longest-passenger-flights',
    //     image: 'longflights2',
    //     video_link: 245298475,
    //     icon: 'flights_icon.png',
    //     major_project: false,
    //     tag: 'Video • Animation',
    //     colour: '#7D8D8A',
    //     secondary_colour: '#0F0F36',
    //     description: 'A look at (pre-Covid) passenger flights that allow passengers to travel across continents in a matter of hours.',
    //     skills: [
    //         'Adobe After Effects', 
    //         'Animation',
    //         'Data visualization'
    //     ],
    //     facts: [

    //     ],
    //     site: ''
    // },
    // { 
    //     name: "Urban sprawl: world city data",
    //     route: 'world-cities',
    //     image: 'world-cities',
    //     icon: 'worldcities_logo.svg',
    //     major_project: false,
    //     tag: 'Infographic • Javascript',
    //     colour: '#DA858D',
    //     secondary_colour: '#0F0F36',
    //     description: "Explore all the world's cities with a population of 1 million or more. Includes basic data and maps integration.",
    //     skills: [
    //         'Vue.js', 
    //         'Javascript',
    //         'Data visualization'
    //     ],
    //     facts: [

    //     ],
    //     site: ''
    // }
    // { 
    //     name: "Chinese tourism: facts and figures",
    //     route: 'chinese-tourists',
    //     image: 'tourists',
    //     video_link: 647203662,
    //     icon: 'cra_logo.svg',
    //     major_project: false,
    //     tag: 'Video • Animation',
    //     colour: '#851618',
    //     secondary_colour: '#0F0F36',
    //     description: 'Before Covid, tourists from China were an important (and often misuderstood) subset of the global tourism industry.',
    //     skills: [
    //         'Adobe After Effects', 
    //         'Animation',
    //         'Data visualization'
    //     ],
    //     facts: [

    //     ],
    //     site: ''
    // }
]


export { projects }