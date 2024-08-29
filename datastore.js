const quizData = [
    {
        question: "Which language is the best for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "Python"],
        correct: 2,
        fact: "CSS is like the artist for web pages, making them look cool and colorful!",
        points: 20
    },
    {
        question: "What is the main use of JavaScript on web pages?",
        options: ["Creating the structure of the page", "Styling the page", "Making the page interactive and fun", "Storing data"],
        correct: 2,
        fact: "JavaScript adds all the fun stuff like buttons you can click and animations!",
        points: 15
    },
    {
        question: "If HTML is the blueprint for a web page, what adds the magic?",
        options: ["CSS", "JavaScript", "Bootstrap", "Python"],
        correct: 1,
        fact: "JavaScript is like the wizard that makes your web page come alive with animations and interactions!",
        points: 25
    },
    {
        question: "Which language is the best choice for data science?",
        options: ["Java", "C++", "Python", "HTML"],
        correct: 2,
        fact: "Python is super smart and great at solving big math problems and handling lots of information.",
        points: 30
    },
    {
        question: "What should you do if your code isn't working?",
        options: ["Ignore it", "Try to fix it", "Rewrite everything", "Ask a friend"],
        correct: 1,
        fact: "Debugging is like being a detective, finding and fixing mistakes in your code!",
        points: 20
    },
    {
        question: "What is special about open-source software?",
        options: ["It's not very good", "It's a scam", "It's awesome because it's free and everyone can help improve it", "It's only for experts"],
        correct: 2,
        fact: "Open-source software is like a big group project where everyone can help make it better!",
        points: 25
    },
    {
        question: "Which language is really important for building websites?",
        options: ["C++", "JavaScript", "Python", "SQL"],
        correct: 1,
        fact: "JavaScript is like the engine that powers websites, making them interactive and engaging.",
        points: 20
    },
    {
        question: "Which HTML tag is used to hide content on a page?",
        options: ["<div>", "<span>", "<!-- -->", "<hidden>"],
        correct: 2,
        fact: "Using `<!-- -->` is like writing a secret message that only you can see when you look at your code.",
        points: 15
    },
    {
        question: "How can you make your web page look good on all devices?",
        options: ["Use CSS media queries", "Use Python", "Use SQL", "Resize the window manually"],
        correct: 0,
        fact: "CSS media queries are like magic spells that make your web page look great on phones, tablets, and computers!",
        points: 25
    },
    {
        question: "Which programming language is powerful for automation?",
        options: ["Java", "Python", "HTML", "C#"],
        correct: 1,
        fact: "Python is like a robot helper that can automate tasks and make your work easier!",
        points: 30
    },
    {
        question: "Which tool is great for creating websites that work well on all screens?",
        options: ["Bootstrap", "React", "Angular", "jQuery"],
        correct: 0,
        fact: "Bootstrap helps you build websites that look awesome on any device, like a responsive superhero!",
        points: 20
    },
    {
        question: "What's the best way to center a div on a web page?",
        options: ["Flexbox", "Tables", "Positioning", "Float"],
        correct: 0,
        fact: "Flexbox is like a super tool that helps you easily center things on your web page.",
        points: 25
    },
    {
        question: "Which tool is best for creating charts and graphs in Python?",
        options: ["Matplotlib", "Bootstrap", "React", "jQuery"],
        correct: 0,
        fact: "Matplotlib helps you turn data into cool charts and graphs that tell a story.",
        points: 30
    },
    {
        question: "Which tool do you use to style your web pages?",
        options: ["CSS", "PHP", "SQL", "Python"],
        correct: 0,
        fact: "CSS is like a box of crayons that lets you color and style your web pages any way you want!",
        points: 20
    },
    {
        question: "What is Git used for?",
        options: ["It's just a file editor", "It's a version control system", "It's a web design tool", "It's a text editor"],
        correct: 1,
        fact: "Git helps you keep track of all the changes you make in your code, so nothing gets lost!",
        points: 25
    },
    {
        question: "True or False: Python is great for machine learning.",
        options: ["True", "False"],
        correct: 0,
        fact: "Python is like a brainy computer that helps teach machines how to learn and solve problems!",
        points: 30
    },
    {
        question: "Which CSS property is great for creating layouts?",
        options: ["Display: Flex", "Display: Block", "Position: Absolute", "Float: Left"],
        correct: 0,
        fact: "Flexbox makes it super easy to arrange things on your web page just the way you want.",
        points: 20
    },
    {
        question: "What should you do when your code is acting strange?",
        options: ["Take a break", "Debug it", "Throw in a console.log", "Rewrite everything"],
        correct: 2,
        fact: "Adding `console.log` is like putting a magnifying glass on your code to see what's going wrong.",
        points: 15
    },
    {
        question: "How should you save your code to keep it safe?",
        options: ["Save it in Git", "Copy-paste to Notepad", "Just remember it", "Email it to yourself"],
        correct: 0,
        fact: "Saving your code in Git is like putting it in a safe where it can't get lost or messed up.",
        points: 25
    },
    {
        question: "What is an API?",
        options: ["It lets different systems talk to each other", "It's only for front-end developers", "It's for storing data", "It replaces HTML"],
        correct: 0,
        fact: "APIs are like bridges that let different programs and websites talk to each other and share information.",
        points: 20
    },
    {
        question: "Which HTML tag is best for embedding videos?",
        options: ["<video>", "<embed>", "<iframe>", "<object>"],
        correct: 2,
        fact: "Using `<iframe>` lets you easily put videos from sites like YouTube right on your web page.",
        points: 15
    },
    {
        question: "What's the quickest way to test your website locally?",
        options: ["Using a local server like XAMPP", "Just open the HTML file", "Upload to the web", "Print it out"],
        correct: 0,
        fact: "Using a local server like XAMPP lets you test your website with all the server features it needs.",
        points: 30
    },
    {
        question: "Which language is best for server-side scripting?",
        options: ["JavaScript", "Python", "PHP", "SQL"],
        correct: 2,
        fact: "PHP is great for making your website's server do all sorts of cool things behind the scenes.",
        points: 20
    },
    {
        question: "What is a key tool for making animations in CSS?",
        options: ["Keyframes", "Float", "Flexbox", "Grid"],
        correct: 0,
        fact: "Keyframes in CSS are like flipbooks that let you create smooth animations on your web pages.",
        points: 25
    },
    {
        question: "What should you do if your CSS isn't working?",
        options: ["Check the selectors", "Rewrite the whole thing", "Ignore it", "Switch to JavaScript"],
        correct: 0,
        fact: "Checking the selectors in your CSS is like making sure you're pointing at the right thing on your web page.",
        points: 20
    },
    {
        question: "Which database is commonly used in web development?",
        options: ["MySQL", "Excel", "Notepad", "HTML"],
        correct: 0,
        fact: "MySQL is like a big storage box that helps you keep track of all the data on your website.",
        points: 30
    },
    {
        question: "How can you make your website look good on any device?",
        options: ["Use responsive design techniques", "Just build for desktop", "Use absolute positioning", "Ignore mobile users"],
        correct: 0,
        fact: "Responsive design is like making your website stretchy, so it looks great on phones, tablets, and computers!",
        points: 25
    },
    {
        question: "Which JavaScript framework is great for building single-page apps?",
        options: ["React", "jQuery", "Bootstrap", "Angular"],
        correct: 0,
        fact: "React is awesome for making single-page apps that are fast and smooth.",
        points: 20
    },
    {
        question: "What should you do to keep your website secure?",
        options: ["Use HTTPS", "Just use HTTP", "Ignore security", "Manually encrypt everything"],
        correct: 0,
        fact: "Using HTTPS is like putting a lock on your website to keep it safe from hackers.",
        points: 25
    },
    {
        question: "Which language is great for back-end development?",
        options: ["Node.js", "HTML", "CSS", "Photoshop"],
        correct: 0,
        fact: "Node.js is perfect for back-end development, making sure your website runs smoothly behind the scenes.",
        points: 30
    },
    {
        question: "True or False: JavaScript is not important for front-end development.",
        options: ["True", "False"],
        correct: 1,
        fact: "False! JavaScript is super important for front-end development, adding all the fun interactions.",
        points: 20
    },
    {
        question: "What's the best way to center text in CSS?",
        options: ["Text-align: center;", "Align-items: flex-start;", "Float: left;", "Margin: 0 auto;"],
        correct: 0,
        fact: "`Text-align: center;` is the easiest way to center text right in the middle of your web page.",
        points: 25
    },
    {
        question: "Which language is great for building APIs?",
        options: ["Python", "HTML", "CSS", "Photoshop"],
        correct: 0,
        fact: "Python is awesome for creating APIs that let different programs talk to each other.",
        points: 30
    },
    {
        question: "What is Docker used for?",
        options: ["It's a containerization tool", "It's for CSS animations", "It's a type of database", "It's an IDE"],
        correct: 0,
        fact: "Docker helps you package your application with everything it needs so it runs the same everywhere.",
        points: 25
    },
    {
        question: "Which tool is great for creating layouts in CSS?",
        options: ["Grid", "Table", "Inline-block", "Fixed positioning"],
        correct: 0,
        fact: "CSS Grid is perfect for making complex layouts that look great on any device.",
        points: 20
    },
    {
        question: "Which HTML element is important for SEO?",
        options: ["<meta>", "<div>", "<span>", "<section>"],
        correct: 0,
        fact: "`<meta>` tags help search engines understand your content, so they can show your page to more people.",
        points: 30
    },
    {
        question: "What's the best tool for deploying a full-stack application?",
        options: ["Heroku", "Word", "Excel", "PowerPoint"],
        correct: 0,
        fact: "Heroku makes it easy to launch your application so everyone can use it online.",
        points: 25
    },
    {
        question: "Which JavaScript method is useful for working with arrays?",
        options: ["Map", "Alert", "Document.write", "Window.open"],
        correct: 0,
        fact: "`Map` is a handy method for transforming each item in an array into something new.",
        points: 20
    },
    {
        question: "How can you make your website load faster?",
        options: ["Optimize images", "Add more text", "Increase CSS file size", "Use more JavaScript"],
        correct: 0,
        fact: "Optimizing images is like clearing out the clutter, so your website loads quickly.",
        points: 25
    },
    {
        question: "What is SQL used for?",
        options: ["It's for managing databases", "It's a programming language", "It's a type of software", "It's a web design tool"],
        correct: 0,
        fact: "SQL helps you organize and manage all the information in your database.",
        points: 20
    },
    {
        question: "What technology is used for real-time communication in web apps?",
        options: ["WebSockets", "HTTP", "FTP", "SMTP"],
        correct: 0,
        fact: "WebSockets let your web app send and receive messages instantly, like a live chat!",
        points: 30
    },
    {
        question: "Which Python library is great for handling big data?",
        options: ["Pandas", "Bootstrap", "jQuery", "CSS"],
        correct: 0,
        fact: "Pandas helps you sort, analyze, and make sense of large amounts of data.",
        points: 25
    },
    {
        question: "What's a good tool for visualizing Git history?",
        options: ["Git log", "Excel", "PowerPoint", "Notepad"],
        correct: 0,
        fact: "Using `git log` helps you see all the changes made to your project over time.",
        points: 20
    },
    {
        question: "How can you make your app work well on different devices?",
        options: ["Responsive design", "Using a single CSS file", "Ignoring mobile users", "Adding more HTML"],
        correct: 0,
        fact: "Responsive design ensures your app looks great whether on a phone, tablet, or desktop.",
        points: 25
    },
    {
        question: "Which CSS unit is useful for responsive text sizing?",
        options: ["em", "px", "in", "cm"],
        correct: 0,
        fact: "`em` units help your text resize smoothly across different devices.",
        points: 20
    }
];
