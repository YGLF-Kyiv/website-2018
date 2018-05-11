module.exports = {
  "days": [
    {
      "dayId": 1,
      "title": "Day One",
      "date": "May 24th",
      "day": 24,
      "events": [
        {
          "id": 1,
          "className": "",
          "time": {
            "hours": "10",
            "minutes": "00"
          },
          "duration": "1 hour 20 minutes",
          "title": "Registration & Breakfast",
          "description": [
            "Pick up your badge. Take some time to enjoy your morning coffee and pastries."
          ],
          "showReadMore": false,
        },
        {
          "id": 2,
          "time": {
            "hours": "11",
            "minutes": "20"
          },
          "className": "height90",
          "title": "Opening",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 3,
          "className": "",
          "time": {
            "hours": "11",
            "minutes": "30"
          },
          "title": "Creating web apps by writing HTML?!",
          "speakerId": 1,
          "description": [
            'We all know that HTML is easier, more straightforward, and more readable\n' +
            'than programming, even for people who can do both. There is no control flow\n' +
            'to think about, no state to manage, no low-level steps to spell out. It just\n' +
            'works. What if our UI libraries could be used in the same way? Or, taking\n' +
            'this further, what if it were possible to create entire web applications by\n' +
            'just writing HTML? Lea has been researching this question for almost a\n' +
            'decade, a journey which started with releasing a number of successful open\n' +
            'source libraries, and continued via her multi-year research at MIT which\n' +
            'explores (and pushes!) the boundaries of what can be done by just writing\n' +
            'HTML. She coined the term HTML API and was the first person to concretely\n' +
            'define good design principles for this way of authoring. This talk will take\n' +
            'you through this this journey, and will culminate in Lea\'s current project,\n' +
            'Mavo, which aims to make web application building accessible to anyone who\n' +
            'can write HTML.'
          ],
          "showReadMore": true,
        },
        {
          "id": 4,
          "className": "",
          "time": {
            "hours": "12",
            "minutes": "30"
          },
          "title": "Journey through VR and AR with React",
          "speakerId": 4,
          "anchor": "Tomasz-Lakomy-24-12-30",
          "description": [
            "It's time to leave the 2D world of a browser window and venture into the world of enhanced reality JavaScript applications. During the talk, we'll see how to make great VR and AR experiences using just your browser and a bit of React, with live demos included, so we'll get to see them in action!"
          ],
          "showReadMore": true,
        },
        {
          "id": 5,
          "className": "height90",
          "time": {
            "hours": "13",
            "minutes": "10"
          },
          "title": "Coffee Break",
          "duration": "30 mins",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 6,
          "className": "",
          "time": {
            "hours": "13",
            "minutes": "40"
          },
          "title": "GraphQL client-side execution",
          "speakerId": 8,
          "anchor": "Mikhail-Novikov-24-13-40",
          "description": [
            "Traditionally, GraphQL clients were focused on client-server communication and caching, with GraphQL query executor on the server. However, it's also possible to run full GraphQL executor on the client side.",
            "The talk will explore the concept of schema stitching (connecting multiple GraphQL schemas together) from a client-side point of view. Using this approach, developer can merge multiple remote schemas together with a frontend schema. The combined schema is responsible for routing requests to a server and a client-side storage/cache.",
            "The talk will explore both schema stitching implementation and the possible applications. Applications of this approach include prototyping application's GraphQL schema without a server. After prototype stage, the schema can be moved to the server. Another use-case is building frontend-only applications that use multiple public GraphQL APIs."
          ],
          "showReadMore": true,
        },
        {
          "id": 7,
          "className": "height270",
          "time": {
            "hours": "14",
            "minutes": "20"
          },
          "title": "East meets West: web typography and modern layouts",
          "speakerId": 3,
          "anchor": "Chen-Hui-Jing-24-14-20",
          "description": [
            "This talk traces the parallel history of western and eastern typography from handwriting to the internet age, setting the context for how the web is a brand new medium for typesetting. CSS allows us to implement advanced typographic features and multi-directional layouts, that not only benefits internationalization, but opens up a myriad of options for creative and interesting layouts in general as well."
          ],
          "showReadMore": true,
        },
        {
          "id": 8,
          "className": "height90",
          "time": {
            "hours": "15",
            "minutes": "00"
          },
          "title": "Lunch",
          "duration": "1 hour 30 mins",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 9,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "16",
            "minutes": "30"
          },
          "speakerId": 2,
          "anchor": "Benedikt-Meurer-24-16-30",
          "title": "JavaScript: The fairly odd parts",
          "description": [
            "JavaScript is the new language of choice for many applications, and it’s certainly a great language for many tasks. But it also has some strange quirks. This lightning talk focuses on some of JavaScript’s weird parts, that you usually don’t run into… unless you try to implement a JavaScript VM that correctly follows the language specification."
          ],
          "showReadMore": true,
        },
        {
          "id": 10,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "16",
            "minutes": "40"
          },
          // "speakerId": 2,
          "title": "TBA",
          "description": [

          ],
          "showReadMore": false,
        },
        {
          "id": 11,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "16",
            "minutes": "50"
          },
          "speakerId": 15,
          "anchor": "Leonid-Khachaturov-24-16-40",
          "title": "100% Kotlin frontend",
          "description": [
            "Kotlin is much more than a hot new language for Android apps or your server's backend, it is also a fun and efficient way to develop the frontend part of your web-based app. I will demonstrate how to develop a React app (with styled-components, of course!) without ever leaving Kotlin."
          ],
          "showReadMore": true,
        },
        {
          "id": 12,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "17",
            "minutes": "00"
          },
          "speakerId": 16,
          "anchor": "Gregory-Shehet-25-16-10",
          "title": "React Native: New Age Hack or Stone Age Tool?",
          "description": [
            "React Native is currently a very popular library for writing native applications. It’s super easy to get started with it if you already know React — you can think that you’ve become a mobile developer in less than 15 minutes!",
            "However, while React Native may make it easy for front-end developers to get started with mobile development, it’s severely lacking in comparison to more established and comprehensive languages like Swift or Kotlin. Compared to Swift or Kotlin, React Native seems like it’s from the Stone Ages!",
            "So the question is, should you use React Native in production ? In my talk, I will tell you about the pros and cons of React Native."
          ],
          "showReadMore": true
        },
        {
          "id": 13,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "17",
            "minutes": "10"
          },
          "speakerId": 12,
          "anchor": "Michaela-Lehr-24-16-50",
          "title": "Using New Web APIs For Your Own Pleasure",
          "description": [
            "When I first heard about the Web Bluetooth API I was so curious, that I could not wait to try it out. So I asked myself: Which Bluetooth device should I buy? Especially if I do not want to through it away after I was finished experimenting with the API.",
            "So obviously a Bluetooth enabled vibrator was a perfect fit. And it came with a serious use case, too: The slogan of the vibrator was \"Let him control you\", which I found very limiting, so I used the Web Bluetooth API to connect it to the browser, and the Web Audio API, to establish my own slogan: \"Let a video control you\".",
            "In my lightning talk, you will learn how to use the Web Bluetooth API to connect a Bluetooth enabled device to the browser. Also, you will see what is possible with the Web Audio API, especially when it comes to analyzing spoken words."
          ],
          "showReadMore": true,
        },
        {
          "id": 14,
          "className": "",
          "time": {
            "hours": "17",
            "minutes": "20"
          },
          "title": "WebAssembly as cross-platform architecture",
          "speakerId": 11,
          "anchor": "Benedek-Gagyi-24-17-00",
          "description": [
            "With the rise of web-to-native cross-platform solutions like React Native and Electron, we got to witness not only their potential, but also their shortcomings. Thanks to WebAssembly we now have an alternative that uses a different approach, but promises the same results.",
            "In my talk, I’ll share the lessons the join.me team learned over the last few years while creating and maintaining a cross-platform (web included!) C++ codebase, with special attention to management and team-dynamic aspects. You’ll also see how WebAssembly changes the game and, through a bit of live-coding, how easy it is to get started with it."
          ],
          "showReadMore": true,
        },
        {
          "id": 15,
          "className": "height90",
          "time": {
            "hours": "18",
            "minutes": "00"
          },
          "title": "Coffee Break",
          "duration": "30 mins",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 16,
          "className": "denis-radin",
          "time": {
            "hours": "18",
            "minutes": "30"
          },
          "title": "Mining crypto in browser: GPU, WebAssembly, JavaScript and all the good things to try",
          "speakerId": 9,
          "anchor": "Denis-Radin-24-18-10",
          "description": [
            "A year ago an unnamed investor asked me for a consultancy on topic: \"If this is possible to mine crypto in browser using GPU?\". The talk shares some insights/outcome found during the research and gives an idea of what to expect when mining cryptocurrencies using a pool of browser-based miners."
          ],
          "showReadMore": true,
        },
        {
          "id": 17,
          "className": "",
          "time": {
            "hours": "19",
            "minutes": "10"
          },
          "title": "Case Study - React Finland",
          "speakerId": 7,
          "anchor": "Juho-Vepsalainen-24-18-50",
          "description": [
            "Organizing a conference means you require a certain amount of technical infrastructure. We developed a custom website and application for <a target=\"_blank\" href='https://react-finland.fi/'>React Finland</a>. In this talk, you'll learn how we did it and how to achieve a modern frontend architecture using technologies such as Webpack, React, and GraphQL. You will also gain insight on the non-technical aspects including marketing and sales and see how they align with technology."
          ],
          "showReadMore": true,
        },
        {
          "id": 18,
          "className": "height90",
          "time": {
            "hours": "19",
            "minutes": "50"
          },
          "title": "Closing & Networking",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 19,
          "className": "height90 party icon",
          "time": {
            "hours": "20",
            "minutes": "00"
          },
          "title": "Wix Afterparty",
          "description": [],
          "duration": "till midnight",
          "showReadMore": false,
        }
      ]
    },
    {
      "dayId": 2,
      "title": "Day Two",
      "date": "May 25th",
      "day": 25,
      "events": [
        {
          "id": 20,
          "className": "",
          "time": {
            "hours": "10",
            "minutes": "00"
          },
          "title": "Breakfast",
          "duration": "1 hour 10 mins",
          "description": [
            "Take some time to enjoy your morning coffee and pastries."
          ],
          "showReadMore": false,
        },
        {
          "id": 21,
          "className": "",
          "time": {
            "hours": "11",
            "minutes": "10"
          },
          "title": "Keynote: TBA",
          "speakerId": 17,
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 22,
          "className": "",
          "time": {
            "hours": "12",
            "minutes": "10"
          },
          "title": "The bumpy road to Universal JavaScript",
          "speakerId": 6,
          "anchor": "Johannes-Ewald-25-12-10",
          "description": [
            "Since the mid 90s, developers have struggled to build web applications that can be executed both on the client and the server. And still today, even with Node.js and virtual DOM libraries like React, this can be quite challenging.",
            "In this talk, we'll look at common obstacles and problems that developers face when building this type of web application, including typical performance and security issues. You'll leave the presentation knowing how to build a fast and secure web application that can be rendered on the client and the server.",
          ],
          "showReadMore": true,
        },
        {
          "id": 23,
          "className": "height90",
          "time": {
            "hours": "12",
            "minutes": "50"
          },
          "title": "Coffee Break",
          "duration": "30 mins",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 24,
          "className": "michaela-lehr",
          "time": {
            "hours": "13",
            "minutes": "20"
          },
          "title": "Writing Virtual and Augmented Reality Apps With Web Technology",
          "speakerId": 12,
          "anchor": "Michaela-Lehr-25-13-20",
          "description": [
            "Writing 3D applications for the browser is possible since some years due to the WebGL API. But since Virtual Reality and Augmented Reality are getting more popular, web developers and designers now have a serious reason to get to know the 3D web, its APIs and design patterns.",
            "In this talk you will learn how to create 3D applications in the browser, using the WebGL and the WebVR API, and popular libraries, like A-Frame and ReactVR. You will also see what is necessary to create a Virtual Reality app that runs on common VR devices, and how to create Augmented Reality applications for Android and iOS phones.",
            "Since 3D user interfaces and interactions in the browser are relatively new for designers and users, there are no established UX design patterns yet, but you will get to know best-practices and see some tips for improving the usability of your 3d application.",
            "The talk ends with my advice on how to create responsible applications, that won’t harm your users – neither physically nor psychologically."
          ],
          "showReadMore": true,
        },
        {
          "id": 25,
          "className": "",
          "time": {
            "hours": "14",
            "minutes": "00"
          },
          "title": "Brave New World: Moving on to ES201X",
          "speakerId": 2,
          "anchor": "Benedikt-Meurer-25-14-00",
          "description": [
            "With ES2015 the JavaScript specification changed to a yearly release schedule. Since then we already got another three updates, namely ES2016, ES2017 and most recently ES2018. This puts a lot of pressure on JavaScript VMs to not only keep up with implementing all these new proposals, but continuously think about ways to optimize them, so that developers can not only rely on them being available, but also having reasonable performance.",
            "In this talk, I’ll give an update on the state of the ES201X features and their performance in V8, the JavaScript engine that powers both Node.js and Chrome."
          ],
          "showReadMore": true,
        },
        {
          "id": 26,
          "className": "height90",
          "time": {
            "hours": "14",
            "minutes": "40"
          },
          "title": "Lunch",
          "duration": "1 hour 30 mins",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 27,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "16",
            "minutes": "10"
          },
          "title": "Writing bots for GitHub",
          "speakerId": 18,
          "description": [
            "My talk is going to be about Probot — GitHub's framework for creating bots. A bot built with Probot is a NodeJS application that handles GitHub's events. Probot allows us to automate and improve GitHub workflow, extend it with tools that we love as far as we wish.",
            "In my talk, I will show what Probot can do right now and how you can create your own bot."
          ],
          "showReadMore": true
        },
        {
          "id": 28,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "16",
            "minutes": "20"
          },
          "title": "Parcel — bundler: New kid on the block (Zero config comparison with Webpack 4)",
          "speakerId": 19,
          "description": [
            "Parcel is a new web application bundler which doesn’t require a config file whereas in webpack 3, even for a very basic project, we need to configure a `webpack.config` file. So webpack team recently released a new version of webpack (webpack 4) which implements zero config.",
            "I might help in deciding whether one should head over to Webpack 4 or look towards Parcel and what advantages both have."
          ],
          "showReadMore": true
        },
        {
          "id": 29,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "16",
            "minutes": "30"
          },
          "title": "DevTools Tips and Tricks",
          "speakerId": 20,
          "description": [
            "We spend a lot of time debugging our code in a browser. But often we just use console.log. In this talk, I will share useful features of DevTools in Chrome and tips and tricks that will help you develop and debug more quickly, easily, and efficiently!"
          ]
        },
        {
          "id": 30,
          "className": "lightning icon opaque-line",
          "time": {
            "hours": "16",
            "minutes": "40"
          },
          "title": "You gotta love Rx",
          "speakerId": 21,
          "description": [
            "Video streaming is a breeze with RxJS, but even if you have nothing to do with the video you do streaming every day. In my lightning talk, I will show you that even something as trivial as handling DOM events could be a fascinating task if you add Observables to it."
          ],
          "showReadMore": true
        },
        {
          "id": 31,
          "className": "ronen-amiel",
          "speakerId": 13,
          "anchor": "Ronen-Amiel-25-16-40",
          "time": {
            "hours": "16",
            "minutes": "50"
          },
          "title": "Build your own Webpack (Live coding an ultra-simplified example of a modern module bundler in JavaScript)",
          "description": [
            "Most of us don't have to think too much about module bundlers in our day jobs. However, module bundlers are all around us, and if you’re a web developer you are probably using module bundlers on a daily basis.",
            "Having a good understanding of how popular tools like Webpack or Browserify work can be extremely helpful. In this talk, I will help you understand how most module bundlers work and show you that they’re not as scary as you might think."
          ],
          "showReadMore": true,
        },
        {
          "id": 32,
          "className": "height90",
          "time": {
            "hours": "17",
            "minutes": "30"
          },
          "title": "Coffee Break",
          "duration": "30 mins",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 33,
          "className": "andrey-okonetchnikov",
          "time": {
            "hours": "18",
            "minutes": "00"
          },
          "title": "A common design language: let designers & developers talk to each other",
          "speakerId": 10,
          "anchor": "Andrey-Okonetchnikov-25-17-50",
          "description": [
            "\"Should designers code?\" or \"Should coders design?\"&nbsp;— these 2 eternal questions are being asked for years with no particular answer given.",
            {"__html": "<ul><li>How to let developers know what typography style or button variance they should be using on this particular screen?</li><li>How to ensure that the whole UI is consistent?</li><li>How to let designers know that some screen design doesn't fit the requirements and needs to be updated?</li></ul>"},
            "In order to answer those questions designers and developers have to speak the same language. But what language should it be. UI components and pattern libraries can provide this intermediate abstraction and be a common language for both designers and developers.",
            "During this talk, I'll guide you through some frustrations I've experienced as a designer and as a developer when working on different projects. I'll show how the common UI patterns library can solve some of these problems and improve the overall productivity of the team."
          ],
          "showReadMore": true,
        },
        {
          "id": 34,
          "time": {
            "hours": "18",
            "minutes": "40"
          },
          "title": "Keynote: New Adventures In Front-End, Season 2",
          "speakerId": 5,
          "anchor": "Vitaly-Friedman-25-18-30",
          "description": [
            "The beast is alive! How do you feel about ASCII-alike CSS Grid layout with polyfluid sizing and ch unit? Do you feel itchy when it comes to building responsive HTML email layouts? What about the brave new world of dynamic static site generators and JAM stack? Have you ever tried to work around nested CSS Custom Properties, untamed 3rd-party scripts, shady service workers, multi-dimensional variable fonts and painfully outdated pattern libraries? Well, let’s bring it on!",
            "If you attended or watched the <a target=\"_blank\" href='https://www.youtube.com/watch?v=cUIfBu0mV08'>first season</a>, you better tighten up your seatbelts: it's an entirely different session, with a slightly different cast and a dash of dirty little front-end tricks. Beware: you will not be able to unlearn what you’ll learn in the session! Ah, one more thing, take the techniques with a grain of salt — we do not take responsibility for sleepless nights and nightmares caused by the content of this session."
          ],
          "showReadMore": true,
        },
        {
          "id": 35,
          "className": "height90",
          "time": {
            "hours": "19",
            "minutes": "40"
          },
          "title": "Closing part",
          "description": [],
          "showReadMore": false,
        },
        {
          "id": 36,
          "className": "height90 party icon",
          "time": {
            "hours": "20",
            "minutes": "00"
          },
          "title": "Craft Beer Afterparty",
          "duration": "till midnight",
          "description": [],
          "showReadMore": false,
        }
      ]
    }
  ]
};
