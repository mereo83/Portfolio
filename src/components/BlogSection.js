import React, { useState } from 'react';

const BlogSection = () => {
  const [showMoreAI, setShowMoreAI] = useState(false);

  const toggleShowMoreAI = () => {
    setShowMoreAI(!showMoreAI);
  };

  return (
    <section id="blog">
      <h2>Latest Articles</h2>

      <div className="blog-post">
        <h3>Building Responsive Websites</h3>
        <p>
          Responsive web design is crucial in today's digital landscape. Learn
          how to create responsive websites using HTML, CSS, and Bootstrap.
          Check out our guide to responsive design{' '}
          <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
            Read More
          </a>
          .
        </p>
      </div>

      <div className="blog-post">
        <h3>Importance of REST API</h3>
        <p>
          RESTful APIs are the backbone of modern web applications. Learn why
          understanding REST API design and implementation is crucial for web
          developers. Explore more about REST APIs{' '}
          <a
            href="https://www.w3schools.com/js/js_api_intro.asp"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
          .
        </p>
      </div>

      <div className="blog-post" id="blog-post-4">
        <h3>Best 12 AI Tools in 2023</h3>
        <p>
          In the rapidly evolving landscape of technology, artificial
          intelligence (AI) has made significant strides, revolutionizing
          various industries and enhancing the way we work and live. In 2023,
          AI tools continue to play a pivotal role in simplifying tasks,
          generating creative content, and automating processes. In this
          article, we'll explore the best 12 AI tools that you should consider
          using this year to boost your productivity and creativity.
        </p>
        {/* AI Tool List */}
        <div id="ai-tools-partial" style={{ textAlign: "left" }}>
          <p><strong><u>1) Solves Anything - Chat GPT</u></strong></p>
          <p>
            Chat GPT is a versatile AI tool that can solve a wide range of
            problems and answer your questions. Whether you need assistance
            with coding, research, or general knowledge, Chat GPT is your
            go-to AI assistant.
          </p>
          <p><strong><u>2) Writes Anything - Writesonic</u></strong></p>
          <p>
            Writesonic is an AI-powered writing assistant that can generate
            high-quality content, including articles, blog posts, ads, and
            more, based on user input.
          </p>
          <p><strong><u>3) Generates Art - Midjourney</u></strong></p>
          <p>
            Midjourney is an AI tool that generates art, including images,
            graphics, and visual content, suitable for various creative
            projects.
          </p>
          {/* Read More Link */}
          <button onClick={toggleShowMoreAI}>
            {showMoreAI ? "Show Less" : "Read More"}
          </button>
          {/* Remaining AI tools hidden initially */}
          {showMoreAI && (
            <>
              <p><strong><u>4) Generates Code - Replit</u></strong></p>
              <p>
                Replit is an AI tool that generates code snippets, helping
                developers automate coding tasks, write code faster, and explore
                new programming concepts.
              </p>
              <p><strong><u>5) Generates Music - Soundraw</u></strong></p>
              <p>
                Soundraw is an AI tool that generates music tracks, melodies, and
                compositions based on user preferences, enabling musicians and
                creators to produce original music effortlessly.
              </p>
              <p><strong><u>6) Generates TikToks - Fliki</u></strong></p>
              <p>
                Fliki is an AI tool that generates TikTok videos, offering
                templates, effects, and editing options to create engaging
                content for social media platforms.
              </p>
              <p><strong><u>7) Generates Avatars - Starrytars</u></strong></p>
              <p>
                Starrytars is an AI tool that generates customizable avatars for
                various purposes, such as profiles, branding, and social media,
                providing users with unique digital identities.
              </p>
              <p><strong><u>8) Generates PPTs - Slides AI</u></strong></p>
              <p>
                Slides AI is an AI tool that generates professional PowerPoint
                presentations based on input content, helping users create
                visually appealing slideshows quickly and efficiently.
              </p>
              <p><strong><u>9) Edit Pictures - Remini</u></strong></p>
              <p>
                Remini is an AI tool for enhancing and editing pictures, offering
                features like image restoration, retouching, and enhancement,
                allowing users to improve the quality of their photos with ease.
              </p>
              <p><strong><u>10) Edit Videos - Pictory</u></strong></p>
              <p>
                Pictory is an AI tool for editing videos, providing features like
                video enhancement, editing, and effects, enabling users to create
                professional-looking videos effortlessly.
              </p>
              <p><strong><u>11) Summarize Notes - Wordtune</u></strong></p>
              <p>
                Wordtune is an AI tool that summarizes text, helping users
                condense information and extract key points from documents, notes,
                and articles, saving time and improving productivity.
              </p>
              <p><strong><u>12) Pose Anything - PoseMaster</u></strong></p>
              <p>
                PoseMaster is an AI tool for generating poses and animations for
                characters, illustrations, and digital art, providing users with
                versatile tools for creating dynamic visual content.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="blog-post" id="blog-post-5">
        <h3>What it takes to be a FullStack Developer?</h3>
        <p>
          Gone are the days where you just needed HTML, CSS, and JavaScript to
          be qualified as a Web Developer. In this current era of
          frontend/backend frameworks and conceptual websites you will need a
          lot more than the basic frontend.
        </p>
        <p>
          These days HTML, CSS, and JS are a requirement for every Web
          Developer out there. Apart from this, you will need to learn a CSS
          framework such as BootStrap or Tailwind CSS. A lot of people are
          ashamed for using a frontend framework but it is absolutely fine as
          long as it gets the work done.
        </p>
        <p>
          After learning a framework, try learning MERN (Mongo DB, Express JS,
          React JS, Node JS) stack or MEAN (Mongo DB, Express JS, Angular JS,
          Node JS) stack. These days tech stacks are highly valued in the web
          development industry.
        </p>
        <p>
          Learn Web Development from{' '}
          <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
            W3Schools.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default BlogSection;
