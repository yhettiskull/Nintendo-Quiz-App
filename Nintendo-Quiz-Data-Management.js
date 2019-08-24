const dataBank = [
    {
        question: 'This plumber first saw audiences in 1981, before starring in his own game with his brother Luigi in 1983.',
        answers: ['Donkey Kong', 'Mario Kart', 'Mario', 'Wario'],
        correctAnswer: 'Mario',
        icon: `class='hidden'`,
        trueFalse: false,
        pointValue: 10,
        userCorrect: '',
        fact: 'Mario was originally just a no-name carpenter with a pet monkey we now know as Donkey Kong, before his starlight role with the name Mario and new gig as a princess saving plumber.'
    },
    {
        question: 'Name this pokemon.',
        answers: ['Eevee', 'Pikachu', 'Sparkle', 'Pichu'],
        correctAnswer: 'Pikachu',
        icon: `src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"`,
        alt: 'Yellow Pokemon with red cheeks. Also known as the Electric Mouse Pokemon.',
        trueFalse: false,
        pointValue: 10,
        userCorrect: '',
        fact: 'Pikachu is the most recognizable Pokemon from the long running cartoon and game franchise, but there are over 800 Pokemon now. Can you catch \'em all?'
    },
    {
        question: 'Name this character.',
        answers: ['Luigi', 'Wario', 'Drybones', 'Waluigi'],
        correctAnswer: 'Waluigi',
        icon: `src="https://upload.wikimedia.org/wikipedia/en/4/46/Waluigi.png"`,
        alt: 'A tall lanky character clad in purple overalls and an upside down L on his hat.',
        trueFalse: false,
        pointValue: 10,
        userCorrect: '',
        fact: 'Waluigi, the long-time rival of Luigi and counter-part to Wario, Mario\'s nemisis, made his first apperence in Mario Tennis for the N64 and GameBoy Color in 2000.'
    },
    {
        question: 'Named after its function and shape, this console well undersold after only 22 million units left shelves during its lifetime.',
        answers: ['GameBoy', 'Gamecube', 'Wii', 'GameSphere'],
        correctAnswer: 'Gamecube',
        icon: `class='hidden'`,
        trueFalse: false,
        pointValue: 20,
        userCorrect: '',
        fact: 'The Gamecube is considered one of Nintendo\'s largest failures. Though it had many now iconic titles, it fell flat compared to its competition including Sony\'s PlayStation 2, the most successful console ever.'
    },
    {
        question: 'When the Wii debuted in 2006, which game came with all consoles?',
        answers: ['WiiFit', 'Mario Kart', 'Super Mario Bros 2', 'Wii Sports'],
        correctAnswer: 'Wii Sports',
        icon: `class='hidden'`,
        trueFalse: false,
        pointValue: 20,
        userCorrect: '',
        fact: 'Wii Sports is not only the best selling video game of all time, but was the first game to truly showcase full motion based controls.'
    },
    {
        question: 'Breaking past tradition, the Gamecube allowed players to play Wii games as long as players had the proprietary wireless Powerglove adapter.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
        icon: `class='hidden'`,
        trueFalse: true,
        pointValue: 30,
        userCorrect: '',
        fact: 'The Gamecube spouted many excellent addons during its lifetime, including one of the first wireless controllers for console, and a small mountable screen. The Powerglove however, performed terrible and was discontinued two years before the Gamecube was released.'
    },
    {
        question: 'Nintendos flagship handheld console the GameBoy met consumers for the first time in which year?',
        answers: ['1989', '1997', '1990', '2000'],
        correctAnswer: '1989',
        icon: `class='hidden'`,
        trueFalse: false,
        pointValue: 30,
        userCorrect: '',
        fact: 'Arguably the most iconic console ever released for handheld use, the GameBoy met shelves in 1989, and saw 15 years of success and 6 models.'
    },
    {
        question: 'Bill Gates founded Nintendo in 1974 as a pet project. In 1980 after creating several fan-favorite arcade games he sold the company to a Japanese playing card company, and went on to create Microsoft and the Xbox console family.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
        icon: `class='hidden'`,
        trueFalse: true,
        pointValue: 30,
        userCorrect: '',
        fact: 'Bill Gates founded Microsoft in 1974 to build computer parts. However, by the early 2000\'s Gates was clamoring to buy Nintendo, though Nintendo executives declined his many offers.'
    },
    {
        question: 'How many colors is the GameBoy Advance capable of potentially displaying?',
        answers: ['65,535', '16', '32,000', '511'],
        correctAnswer: '65,535',
        icon: `class='hidden'`,
        trueFalse: false,
        pointValue: 40,
        userCorrect: '',
        fact: 'The GameBoy Advance was the largest overhall of the handheld platform when it premeired in 2001. A much larger color display with a pallet of 65,535 possible colors, and a 32-bit CPU all helped usher a new generation of gaming.'
    },
    {
        question: 'Nintendo was founded in which year?',
        answers: ['1974', '1982', '1987', '1889'],
        correctAnswer: '1889',
        icon: `class='hidden'`,
        trueFalse: false,
        pointValue: 40,
        userCorrect: '',
        fact: 'Nintendo started out as a playing card company in Kyoto in 1889. Struggling to compete they turned to toys in the 60\'s with some newly found capital, finally stepping into video games in the mid 70\'s.'
    },
];

const imageBank = [
    {
        correctImg: 'https://thumbs.gfycat.com/BlissfulFearfulCavy-small.gif',
        incorrectImg: 'https://media2.giphy.com/media/ITtS9PuHBTjeo/giphy.gif'
    }
];