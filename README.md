# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Derick Ngweamaw - Web Development Blog</title>
</head>
<body>
    <div id="root"></div> <!-- This is where your React app will be mounted -->
    <header class="bg-dark text-light p-4 text-center">
        <img src="assets/pic.jpg" alt="Derick Ngweamaw" class="profile-photo rounded-circle">
        <h1>Derick Ngweamaw</h1>
        <p>Web Development Blog</p>
        <div class="container">
            <p>Welcome to my web development blog! I'm a results-oriented Full Stack Developer with a strong foundation in web development technologies and a passion for creating responsive and user-friendly web applications. I'm proficient in HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and MySQL. I'm eager to leverage my technical skills to contribute to innovative web projects and expand my knowledge in the field. Here, you'll find articles, tutorials, and my portfolio showcasing my journey in web development. Let's explore together.</p>
        </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="container mt-4">
        <section id="blog">
            <h2>Latest Articles</h2>
            <!-- Blog Post 1 -->
            <article class="blog-post">
                <h3>Building Responsive Websites</h3>
                <p>Responsive web design is crucial in today's digital landscape. Learn how to create responsive websites using HTML, CSS, and Bootstrap. Check out our guide to responsive design <a href="https://www.w3schools.com" target="_blank">Read More</a>.</p>
            </article>
            <!-- Blog Post 3 -->
            <article class="blog-post">
                <h3>Importance of REST API</h3>
                <p>RESTful APIs are the backbone of modern web applications. Learn why understanding REST API design and implementation is crucial for web developers. Explore more about REST APIs <a href="https://www.w3schools.com/js/js_api_intro.asp" target="_blank">Read More</a>.</p>
            </article>
            <!-- Blog Post 4 - Best 12 AI Tools in 2023 -->
            <article class="blog-post" id="blog-post-4">
                <h3>Best 12 AI Tools in 2023</h3>
                <p>In the rapidly evolving landscape of technology, artificial intelligence (AI) has made significant strides, revolutionizing various industries and enhancing the way we work and live. In 2023, AI tools continue to play a pivotal role in simplifying tasks, generating creative content, and automating processes. In this article, we'll explore the best 12 AI tools that you should consider using this year to boost your productivity and creativity.</p>
                <!-- AI Tool List (Partial) -->
                <div id="ai-tools-partial">
                    <p>1) Solves Anything - Chat GPT</p>
                    <p>2) Writes Anything - Writesonic</p>
                    <!-- Read More Link to Expand Content -->
                    <button id="read-more-button">Read More</button>
                </div>
                <!-- Hidden AI Tool List (Full) -->
                <div id="ai-tools-full" style="display: none">
                    <p>3) Generates Art - Midjourney</p>
                    <p>4) Generates Code - Replit</p>
                    <p>5) Generates Music - Soundraw</p>
                    <p>6) Generates TikToks - Fliki</p>
                    <p>7) Generates Avatars - Starrytars</p>
                    <p>8) Generates PPTs - Slides AI</p>
                    <p>9) Edit Pictures - Remini</p>
                    <p>10) Edit Videos - Pictory</p>
                    <p>11) Summarize Notes - Wordtune</p>
                    <!-- Read Less Link to Collapse Content -->
                    <button id="read-less-button">Read Less</button>
                    <p>12) Pose Anything - PoseMaster</p>
                </div>
                <p>These AI tools are at the forefront of innovation in 2023, and they offer incredible potential to simplify tasks, boost creativity, and improve productivity in various fields. As technology continues to advance, staying updated on the latest AI tools can give you a competitive edge in your endeavors.</p>
                <p>So, whether you're a developer, writer, artist, or simply someone looking to make your daily tasks more efficient, consider integrating these AI tools into your workflow. Embracing AI in 2023 can help you achieve new heights of creativity and productivity.</p>
                <p>Remember, technology is a powerful tool, but it's your creativity and vision that will ultimately drive your success. Make the most of these AI tools, and let your imagination soar.</p>
            </article>
            <!-- Blog Post 5: What it takes to be a FullStack Developer? -->
            <article class="blog-post" id="blog-post-5">
                <h3>What it takes to be a FullStack Developer?</h3>
                <p>Gone are the days where you just needed HTML, CSS, and JavaScript to be qualified as a Web Developer. In this current era of frontend/backend frameworks and conceptual websites you will need a lot more than the basic frontend.</p>
                <p>These days HTML, CSS, and JS are a requirement for every Web Developer out there. Apart from this, you will need to learn a CSS framework such as BootStrap or Tailwind CSS. A lot of people are ashamed for using a frontend framework but it is absolutely fine as long as it gets the work done.</p>
                <p>After learning a framework, try learning MERN (Mongo DB, Express JS, React JS, Node JS) stack or MEAN (Mongo DB, Express JS, Angular JS, Node JS) stack. These days tech stacks are highly valued in the web development industry.</p>
                <p>Learn Web Development from <a href="https://www.w3schools.com" target="_blank">W3Schools.com</a></p>
            </article>
        </section>
        <section id="portfolio" class="mt-4">
            <h2>Portfolio</h2>
            <!-- Portfolio Item 1 -->
            <div class="project">
                <h3>Personal Website</h3>
                <p>Developed a responsive personal website showcasing my portfolio and skills using HTML, CSS, and JavaScript. <a href="https://portfolio-rho-lyart-62.vercel.app/" target="_blank">Portfolio</a></p>
            </div>
            <!-- Portfolio Item 2 -->
            <div class="project">
                <h3>3 page Resto web page</h3>
                <p>Created a 3 page Resto website with a user-friendly interface using HTML, CSS, JavaScript, and Bootstrap for the front-end and for back-end using Express js and Node js <a href="https://mereo83.github.io/Resto/" target="_blank">RESTO</a></p>
            </div>
            <!-- Portfolio Item 3 -->
            <div class="project">
                <h3>Back-End for Classified App</h3>
                <p>Designed a Back-End for a classified app using Express js and Node js, for database I used MYSQL. <a href="https://github.com/mereo83/Classified-Page.git" target="_blank">Glassified-Page</a></p>
            </div>
        </section>
        <section id="skills" class="mt-4">
            <h2>Skills</h2>
            <!-- Skills List -->
            <div class="row">
                <div class="col-md-4">
                    <div class="skill">
                        <h3>Front-End Development</h3>
                        <ul>
                            <li>Proficient in HTML5, CSS3, and JavaScript</li>
                            <li>Strong knowledge of responsive web design and cross-browser compatibility</li>
                            <li>Experience with Bootstrap for building responsive web interfaces</li>
                            <li>Familiarity with modern front-end libraries and frameworks</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="skill">
                        <h3>Back-End Development</h3>
                        <ul>
                            <li>Proficient in Node.js and Express.js for server-side development</li>
                            <li>Understanding of RESTful API design and implementation</li>
                            <li>Advanced knowledge of database design and management using MySQL</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="skill">
                        <h3>Developmental Tools</h3>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Git and Github</li>
                            <li>npm</li>
                            <li>Python (Basic)</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="mt-4">
            <h2>Contact</h2>
            <!-- Contact Form -->
            <p>If you'd like to get in touch, please use the contact form below:</p>
            <div id="success-message" class="alert alert-success" style="display: none">
                Message Received: Your message has been sent successfully and data saved in the database.
            </div>
            <form id="contact-form" action="./contact/submit" method="POST">
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="file" class="form-label">Attach Documents (PDF, DOCX, etc.):</label>
                    <input type="file" class="form-control" id="file" name="file">
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </section>
    </main>
    <footer class="bg-dark text-light text-center p-2">
        <p>+971 58 514 7266 | <a href="mailto:mereo83@gmail.com" class="text-light">mereo83@gmail.com</a> | Github: <a href="https://github.com/mereo83" target="_blank" class="text-light">github.com/mereo83</a></p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
