export const feedBack = [
    {
        project: 'CareerBuilder',
        text: 'From the start of our relationship with Valor software we saw a fundamental shift in our development practices. The attitude of fully integrating with the team and behaving as a co-owner of the platform was a refreshing departure from classical off shore. I highly recommend Valor to everyone I talk to.',
        img: 'assets/img/feedback/careerBuilder.jpg',
        author: 'Zackary Chapple',
        position: 'Principal Architect'
    },
    {
        project: 'Dollar Street',
        text: 'Thanks "Valor Software" for awesome work! I especially liked your openness and desire to share experience. The best of Valor, is that they never say "It\'simpossible", they always find a good approaches to satisfy the customers.',
        img: 'assets/img/feedback/dollarStreet.jpg',
        author: 'Anna Rosling',
        position: 'Mother of Dollar Street'
    },
    {
        project: 'Souqalmal',
        text: 'I really enjoyed working with Dima! He\'s an excellent developer and he really helped us build our new product, using the latest technologies out there. Dima is very knowledgeable and passionate and he\'s also striving to be up to date with the latest developments in his field. He\'s a true JS ninja!',
        img: 'assets/img/feedback/soqualmal.jpg',
        author: 'Iraklis Alexopoulos',
        position: 'Tech Team Lead'
    },
    {
        project: 'Gapminder Offline',
        text: 'What we can tell you is that Valor Software is very, very knowledgeable and very helpful. We think what sticks out the most is their capacity to find solutions instead of just saying what cannot be done. They know how to develop any feature that we request, and they are very good at user experience. They also know how to communicate with non-tech people. I think that makes them quite special because any client can communicate with them.',
        img: 'assets/img/feedback/gapminder.jpg',
        author: 'Ola Rosling',
        position: 'CEO of Gapminder'
    },
    {
        project: 'TablesReady',
        text: 'I’ve been very impressed with the quality of the developers Valor is able to find. They write good code, communicate well in written English, and have been very easy to work with. And despite the war, there’s been absolutely no downtime or lost productivity, except for those first 2 days after the invasion. (Not that this was something I asked for – it wasn’t – but it’s just a testament to the team and culture.)',
        img: 'assets/img/feedback/tablesReady.png',
        author: 'Mike Errecart',
        position: 'The owner and CEO of TablesReady'
    },
    {
        project: 'Ashes of Creation',
        text: 'We’ve been working with Valor, and they have been doing some amazing stuff with the website. They have a great dedicated team of professionals who we have had an absolute pleasure working with to help support our platform needs. Those who might be in the enterprise business and need technical support and web development support, I would give a major shout-out to the Valor team. They’re doing a great job!',
        img: 'assets/img/feedback/ashes_of_creation.jpg',
        author: 'Steven Sharif',
        position: 'the Creative Director of Ashes of Creation'
    },
    {
        project: 'Breethe',
        text: `Since the very beginning of our SOW assignement, we were able to see and confirm that Valor company have the best and most well prepared team of developers Project managers and programmers by assisting in every single improvement we faced where new features, adjustments, and assistance became needed. All requests raised were promptly addressed and troubleshooted on a timely fashion as adding value to our platform.
        Also, Valor team always shared new ideas, new thoughts, suggestions to improve users acceptance as users smoothly navigation into our app. We were able to develop together a better user friendly environment bringing satisfaction not only to our company as a whole, but to our customers worldwide.
        New challenges are coming and I’m sure that working with Valor team was the best option this company decided to bet on it.
        Thanks Guys.`,
        img: 'assets/img/feedback/breethe.png',
        author: 'Suren Kocharian',
        position: 'Director of Production, Breethe'
    }
];

export interface IFeedBack {
    project: string;
    text: string;
    img: string;
    author: string;
    position: string;
}
