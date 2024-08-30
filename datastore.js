const scenarios = [
    {
        question: "Which language is best for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "Python"],
        correct: 2,
        difficulty: "easy",
        fact: "CSS is the best for styling web pages!"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "Hyper Tool Markup Language", "Home Tool Markup Language"],
        correct: 0,
        difficulty: "easy",
        fact: "HTML stands for Hypertext Markup Language."
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>"],
        correct: 2,
        difficulty: "easy"
    },
    // Add more questions for different difficulties...
];

let currentQuestionIndex = 0;

const quizData = [
    {
        question: "Which language is the GOAT 🐐 for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "Python"],
        correct: 2,
        fact: "CSS is the GOAT 🐐 for styling web pages, no cap! 💯",
        points: 20
    },
    {
        question: "Deadass, what’s the main use of JavaScript? 💻",
        options: ["Creating structure in web pages", "Styling web pages", "Adding interactivity to web pages", "Storing data"],
        correct: 2,
        fact: "JavaScript is the real one when it comes to adding interactivity to your web pages. ⚡",
        points: 15
    },
    {
        question: "If HTML is the blueprint 🛠, what’s the sauce? 🥫",
        options: ["CSS", "JavaScript", "Bootstrap", "Python"],
        correct: 1,
        fact: "JavaScript is the sauce 🥫 that brings the flavor, making web pages interactive. 😎",
        points: 25
    },
    {
        question: "No cap 🧢, which language should you stan for data science? 📊",
        options: ["Java", "C++", "Python", "HTML"],
        correct: 2,
        fact: "Python is the plug 🔌 for data science. It's versatile and user-friendly. 🧠",
        points: 30
    },
    {
        question: "When the code is sus 👀, what do you do?",
        options: ["Ignore it", "Debug it", "Rewrite everything", "Ask a friend"],
        correct: 1,
        fact: "Debugging is clutch 🛠 when your code is acting sus 👀. It's the key to fixing issues.",
        points: 20
    },
    {
        question: "What's the tea 🍵 on open-source software?",
        options: ["It's mid", "It's a scam", "It's lit 🔥 because it's free and anyone can contribute", "It's only for pros"],
        correct: 2,
        fact: "Open-source software is lit 🔥 because it's free and allows collaboration from all levels of developers. 🤝",
        points: 25
    },
    {
        question: "No cap 🧢, which language is bae ❤️ for web development?",
        options: ["C++", "JavaScript", "Python", "SQL"],
        correct: 1,
        fact: "JavaScript is bae ❤️ when it comes to front-end web development. It's essential for making web pages interactive. 🌐",
        points: 20
    },
    {
        question: "When you're tryna keep it lowkey 🤫, which HTML tag hides content?",
        options: ["<div>", "<span>", "<!-- -->", "<hidden>"],
        correct: 2,
        fact: "Using the <!-- --> tag is how you keep content on the DL (down-low) 📥 in HTML, by making it a comment.",
        points: 15
    },
    {
        question: "What's the move 🚀 when your code needs to hit different screens?",
        options: ["Use CSS media queries", "Use Python", "Use SQL", "Resize the window manually"],
        correct: 0,
        fact: "CSS media queries are the move 🚀 when you want your code to hit different screen sizes smoothly.",
        points: 25
    },
    {
        question: "Which programming language is lowkey OP (overpowered) 💪 for automation?",
        options: ["Java", "Python", "HTML", "C#"],
        correct: 1,
        fact: "Python is lowkey OP 💪 for automation. It's simple, powerful, and has tons of libraries. 📚",
        points: 30
    },
    {
        question: "What's the vibe ✨ for responsive design?",
        options: ["Bootstrap", "React", "Angular", "jQuery"],
        correct: 0,
        fact: "Bootstrap is the vibe ✨ when you need your web design to be responsive across devices. 📱",
        points: 20
    },
    {
        question: "No cap 🧢, what's the best way to center a div?",
        options: ["Flexbox", "Tables", "Positioning", "Float"],
        correct: 0,
        fact: "Flexbox is the move for centering a div easily. It’s a real lifesaver. ⛑️",
        points: 25
    },
    {
        question: "What's the plug-in 🔌 for data visualization in Python?",
        options: ["Matplotlib", "Bootstrap", "React", "jQuery"],
        correct: 0,
        fact: "Matplotlib is the plug-in 🔌 for creating lit 🔥 data visualizations in Python.",
        points: 30
    },
    {
        question: "When the UI needs to be fire 🔥, what do you use?",
        options: ["CSS", "PHP", "SQL", "Python"],
        correct: 0,
        fact: "CSS is fire 🔥 for styling and making your UI look clean and professional. 💼",
        points: 20
    },
    {
        question: "What's the tea 🍵 on Git?",
        options: ["It's just a file editor", "It's a version control system", "It's a web design tool", "It's a text editor"],
        correct: 1,
        fact: "Git is the real deal 💯 for version control, keeping your code history organized. 📚",
        points: 25
    },
    {
        question: "True or False: Python is lowkey goated 🐐 for machine learning.",
        options: ["True", "False"],
        correct: 0,
        fact: "Python is absolutely goated 🐐 for machine learning with its powerful libraries like TensorFlow and scikit-learn. 🧠",
        points: 30
    },
    {
        question: "Which CSS property is a flex 💪 for layouts?",
        options: ["Display: Flex", "Display: Block", "Position: Absolute", "Float: Left"],
        correct: 0,
        fact: "Display: Flex is the flex 💪 you need to create dynamic and responsive layouts. 🖥️",
        points: 20
    },
    {
        question: "When your code needs to chill 😎, what do you do?",
        options: ["Take a break", "Debug it", "Throw in a console.log", "Rewrite everything"],
        correct: 2,
        fact: "Throwing in a console.log is clutch 🛠 for finding out what's really going on in your code.",
        points: 15
    },
    {
        question: "When the code’s a vibe 😎, how do you save it?",
        options: ["Save it in Git", "Copy-paste to Notepad", "Just remember it", "Email it to yourself"],
        correct: 0,
        fact: "Saving your code in Git is the move to keep it safe and version-controlled. 💾",
        points: 25
    },
    {
        question: "What’s the tea 🍵 on APIs?",
        options: ["They let different systems vibe together", "They're only for front-end devs", "They're for storing data", "They replace HTML"],
        correct: 0,
        fact: "APIs are fire 🔥 because they let different systems communicate and vibe together. 💬",
        points: 20
    },
    {
        question: "Which HTML tag is lowkey the MVP 🏆 for embedding videos?",
        options: ["<video>", "<embed>", "<iframe>", "<object>"],
        correct: 2,
        fact: "<iframe> is the MVP 🏆 when you need to embed videos from platforms like YouTube. 🎥",
        points: 15
    },
    {
        question: "No cap 🧢, what’s the fastest way to test your website locally?",
        options: ["Using a local server like XAMPP", "Just open the HTML file", "Upload to the web", "Print it out"],
        correct: 0,
        fact: "Using a local server like XAMPP is the move to test your site with full server functionality. ⚡",
        points: 30
    },
    {
        question: "When you need to go off with server-side scripting, which language is bae ❤️?",
        options: ["JavaScript", "Python", "PHP", "SQL"],
        correct: 2,
        fact: "PHP is bae ❤️ when it comes to server-side scripting. It's super reliable for web development. 🛠️",
        points: 20
    },
    {
        question: "What’s the drip 💧 for designing sick animations in CSS?",
        options: ["Keyframes", "Float", "Flexbox", "Grid"],
        correct: 0,
        fact: "CSS keyframes are the drip 💧 for creating animations that stand out. ✨",
        points: 25
    },
    {
        question: "When your CSS isn’t working, what’s the move?",
        options: ["Check the selectors", "Rewrite the whole thing", "Ignore it", "Switch to JavaScript"],
        correct: 0,
        fact: "Checking the selectors is clutch 🛠 for catching bugs when your CSS isn’t working as expected.",
        points: 20
    },
    {
        question: "Which database is the real one 🔥 for web development?",
        options: ["MySQL", "Excel", "Notepad", "HTML"],
        correct: 0,
        fact: "MySQL is the real one 🔥 when it comes to managing databases in web development.",
        points: 30
    },
    {
        question: "What’s the move 🚀 for making your site look lit 🔥 on all devices?",
        options: ["Use responsive design techniques", "Just build for desktop", "Use absolute positioning", "Ignore mobile users"],
        correct: 0,
        fact: "Responsive design techniques are the key to making your site look lit 🔥 on any device.",
        points: 25
    },
    {
        question: "Which JavaScript framework is no cap 🧢 for building single-page apps?",
        options: ["React", "jQuery", "Bootstrap", "Angular"],
        correct: 0,
        fact: "React is no cap 🧢 when it comes to building efficient and dynamic single-page applications. 🖥️",
        points: 20
    },
    {
        question: "When you need to keep it 100 💯 with web security, what should you do?",
        options: ["Use HTTPS", "Just use HTTP", "Ignore security", "Manually encrypt everything"],
        correct: 0,
        fact: "Using HTTPS is the move to keep your website secure and 100 💯.",
        points: 25
    },
    {
        question: "Which programming language is straight fire 🔥 for back-end development?",
        options: ["Node.js", "HTML", "CSS", "Photoshop"],
        correct: 0,
        fact: "Node.js is straight fire 🔥 for back-end development, especially in JavaScript environments.",
        points: 30
    },
    {
        question: "True or False: JavaScript is mid 🥱 for front-end development.",
        options: ["True", "False"],
        correct: 1,
        fact: "False! JavaScript is essential and far from mid 🥱 for front-end development.",
        points: 20
    },
    {
        question: "What's the cheat code 🎮 for centering text in CSS?",
        options: ["Text-align: center;", "Align-items: flex-start;", "Float: left;", "Margin: 0 auto;"],
        correct: 0,
        fact: "Text-align: center; is the cheat code 🎮 to center text in CSS like a pro.",
        points: 25
    },
    {
        question: "Which language is clutch 🛠 for creating APIs?",
        options: ["Python", "HTML", "CSS", "Photoshop"],
        correct: 0,
        fact: "Python is clutch 🛠 for building powerful and efficient APIs.",
        points: 30
    },
    {
        question: "What’s the tea 🍵 on Docker?",
        options: ["It's a containerization tool", "It's for CSS animations", "It's a type of database", "It's an IDE"],
        correct: 0,
        fact: "Docker is a containerization tool that's key for deploying and managing applications. 🛳️",
        points: 25
    },
    {
        question: "When you need to flex on your CSS, what's the go-to layout tool? 💪",
        options: ["Grid", "Table", "Inline-block", "Fixed positioning"],
        correct: 0,
        fact: "CSS Grid is the go-to tool when you want to flex 💪 on your layouts with precision and ease. 🔥",
        points: 20
    },
    {
        question: "Which HTML element is high-key important 🔑 for SEO?",
        options: ["<meta>", "<div>", "<span>", "<section>"],
        correct: 0,
        fact: "<meta> tags are high-key 🔑 important for SEO, helping search engines understand your content. 📈",
        points: 30
    },
    {
        question: "What’s the vibe ✨ for deploying a full-stack application?",
        options: ["Heroku", "Word", "Excel", "PowerPoint"],
        correct: 0,
        fact: "Heroku is the vibe ✨ for deploying full-stack applications with ease and scalability. 🚀",
        points: 25
    },
    {
        question: "Which JavaScript method is lit 🔥 for manipulating arrays?",
        options: ["Map", "Alert", "Document.write", "Window.open"],
        correct: 0,
        fact: "The map method is lit 🔥 for efficiently manipulating and transforming arrays in JavaScript.",
        points: 20
    },
    {
        question: "When you want your site to load faster ⚡, what's the move?",
        options: ["Optimize images", "Add more text", "Increase CSS file size", "Use more JavaScript"],
        correct: 0,
        fact: "Optimizing images is the move to keep your site loading fast and smooth. 🏎️",
        points: 25
    },
    {
        question: "What’s the real tea 🍵 on SQL?",
        options: ["It's for managing databases", "It's a programming language", "It's a type of software", "It's a web design tool"],
        correct: 0,
        fact: "SQL is for managing databases, letting you store, retrieve, and manipulate data efficiently. 📊",
        points: 20
    },
    {
        question: "What’s the drip 💧 for real-time communication in web apps?",
        options: ["WebSockets", "HTTP", "FTP", "SMTP"],
        correct: 0,
        fact: "WebSockets are the drip 💧 for enabling real-time communication between clients and servers in web apps. 📡",
        points: 30
    },
    {
        question: "Which of these is a real one 🔥 for handling large datasets in Python?",
        options: ["Pandas", "Bootstrap", "jQuery", "CSS"],
        correct: 0,
        fact: "Pandas is a real one 🔥 for handling, manipulating, and analyzing large datasets in Python.",
        points: 25
    },
    {
        question: "No cap 🧢, which tool is fire 🔥 for visualizing Git history?",
        options: ["Git log", "Excel", "PowerPoint", "Notepad"],
        correct: 0,
        fact: "Using git log is fire 🔥 for visualizing the commit history and tracking changes in your project.",
        points: 20
    },
    {
        question: "When your app needs to vibe ✨ across devices, what’s the key?",
        options: ["Responsive design", "Using a single CSS file", "Ignoring mobile users", "Adding more HTML"],
        correct: 0,
        fact: "Responsive design is the key to making your app vibe ✨ across all devices.",
        points: 25
    },
    {
        question: "Which CSS unit is clutch 🛠 for responsive text sizing?",
        options: ["em", "px", "in", "cm"],
        correct: 0,
        fact: "em is clutch 🛠 for creating scalable, responsive text sizing in your web designs.",
        points: 20
    }
];