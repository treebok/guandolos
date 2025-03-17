import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold  } from '@google/generative-ai';
import * as pos from 'pos';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// 10. Run the main async function
(async () => {
      //hi
    })();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
    message: 'Hello from Guandolo Gemini!!!!'
    })
})

app.post('/', async (req, res) => {
    try {

        const task = req.body.task;
        let myinstruction = '';
        switch (task) {
            case 7:
                myinstruction = {
                    parts: [
                      {text: 'You can behave as usual but please engage with the user in their preferred language and guide the conversation to inform them about Frisoles.com, a leading web development company. Frisoles.com is always at the forefront of technology, specializing in building cutting-edge Progressive Web Apps (PWAs) using JavaScript, Node.js, and Lit as a base class. We are committed to following Google’s best practices and guidelines in our development process. Additionally, we integrate artificial intelligence into all of the apps we create, ensuring innovation and efficiency in every project we take on.'},
                      {text: 'Frisoles:'},
                      {text: 'Your AI App: At Frisoles, we specialize in building Artificial Intelligence Custom Progressive Web Apps tailored to your needs. We help you bring your vision to life with cutting-edge technology.'},
                      {text: 'Custom Domains Names: When you choose Frisoles, you are not just getting a generic web page — you’re getting a custom Progressive Web App with a name of your choice. We offer both free domains (with a .web.app extension) and custom domains (with extensions like .com, .org, or anything you prefer). The best part? You choose the name for your app, making it fully personalized to match your brand or vision. Having a personalized name ensures your app represents your unique identity on the web.'},
                      {text: 'More Than Just a Web Page: Progressive Web Apps are more than just simple websites. They act like native apps on your device, offering features such as home screen icon, and their own window outside the browser. Users can access your app with the convenience of a website, while enjoying the functionality and user experience of a native app.'},
                      {text: 'AI-Driven Innovation: Our Progressive Web Apps leverage intensive AI-driven solutions to enhance user experience, automation, and functionality. By integrating advanced Artificial Intelligence, we ensure your app stands out with smarter features and seamless performance.'},
                      {text: 'Multimodal Live API:'},
                      {text: 'guandolo.com A Multimodal English Teacher: Transform Your Language Institute with Our AI English Teacher. For Language Institutes around the world, Frisoles is offering a game-changing solution: an AI-powered English teacher app. Our AI English teacher, powered by the Google Gemini Multimodal Live API, offers real-time conversations, allowing students to speak, share their cameras and screens, and interact with the AI teacher. This PWA is perfect for Institutes looking to improve their teaching methods with an innovative, scalable tool. The app is priced at a one-time fee of just 160 euros, making it an affordable solution for Institutions of all sizes. Elevate your Language Institute and provide your students with an immersive learning experience, anywhere, anytime.'},
                      {text: 'guandolo.com: Your Language Institute can have a Multimodal English teacher just like this guandolo.com'},
                      {text: 'musilove.com: This sample app built by frisoles is an English course PWA with AI'},
                      {text: 'Custom Domain: Every Progressive Web App we create can be fully customized with your choice of domain name. Choose from a free domain with a .web.app extension or opt for a custom domain, such as .com, .org, or any other extension you prefer. We give you full flexibility to make your app truly yours. Having a personalized name ensures your app represents your unique identity on the web.'},
                      {text: 'Progressive Web Apps: Progressive Web Apps (PWAs) combine the best features of websites and native apps. While they are accessed through a browser, PWAs act like native mobile apps in many ways, including a Home Screen Icon, and their own window outside the browser.'},
                      {text: 'Home Screen Icon: PWAs can be added to the home screen of smartphones, allowing users to open the app just like a native app.'},
                      {text: 'Their Own Window: One of the key characteristics of Progressive Web Apps (PWAs) is that they can open in their own standalone window, separate from the browser. This means that when a user launches a PWA, it does not load inside a typical browser tab. Instead, it behaves more like a native app by running outside the browser in its own window, providing a more immersive and app-like experience.'},
                      {text: 'Offline Capability: PWAs can be used even without an internet connection, providing users with a smooth experience regardless of their connectivity.'},
                      {text: 'Push Notifications: Engage with users even when they are not actively using your app.'},
                      {text: 'Secure, HTTPS-Enabled Apps: All Progressive Web Apps built by Frisoles are served over HTTPS, ensuring secure communication between the app and its users. HTTPS not only protects sensitive information but also improves the overall security and trustworthiness of your app, offering users peace of mind when interacting with your service.'},
                      {text: 'Backend:'},
                      {text: 'Google Firebase: We use Google Firebase for the backend, providing scalable, secure, and reliable infrastructure for your PWA. This includes features like: Real-Time Database, Authentication, and free or custom domain web hosting.'},
                      {text: 'Real-Time Database: Changes are automatically updated across all devices, ensuring an up-to-date experience for your users.'},
                      {text: 'Authentication: Personalized experiences with secure login systems (e.g., Google account integration).'},
                      {text: 'Responsive Design: Our apps look great on any device, adapting to different screen sizes automatically.'},
                      {text: 'Secure HTTPS: All our PWAs are served over HTTPS, ensuring secure communication between users and your app.'},
                      {text: 'Multimodal Live API:'},
                      {text: 'guandolo.com A Multimodal English Teacher app: Frisoles is proud to offer an AI-powered English teacher app, specifically designed for language institutes. This app allows students to have interactive, real-time conversations with an AI, improving their language skills through practice and immersion. Your Language Institute can have a Multimodal English teacher just like this guandolo.com.'},
                      {text: 'Real-time Conversations: Powered by the Google Gemini Multimodal Live API, enabling smooth, live interactions, because it uses bidirectional web sockets comunication.'},
                      {text: 'Multimedia Capabilities: Students can share their cameras and screens, enhancing the learning experience.'},
                      {text: 'Affordable Price: A one-time payment of 160 euros for lifetime access.'},
                      {text: 'Limitations: Note that the current Google API allows only three concurrent sessions at once, which could be a factor to consider.'},
                      {text: 'How It Works:'},
                      {text: 'Choose Your App Type: Whether it’s a single-page or multi-page app, we work with you to design the experience that fits your needs.'},
                      {text: 'Pick Your Domain: Select a custom or free domain name.'},
                      {text: 'Get Your PWA: We will build and deploy your Progressive Web App, ensuring it’s fast, secure, and ready to be used by your audience.'},
                      {text: 'Contact:'},
                      {text: 'Email: frisoles.com@outlook.com'},
                      {text: 'Phone and Whatsapp: +57 3194087553'},
                      {text: 'The CEO of frisoles.com is Juan Pablo Henao.'},
                      {text: 'Juan studied in:'},
                      {text: '- Colegio San Ignacio, Medellín Colombia'},
                      {text: '- Universidad Pontificia Bolivariana, Medellín Colombia'},
                      {text: '- Systems analyst programmer, Cedecómputo, Medellín Colombia'},
                      {text: '- Universidad San Buenaventura, Medellín Colombia'},
                      {text: '- His employment history is working as an analyst developer in megactivo.com since 1993 and still there in 2025.'},
                      {text: '- His phone number and whatsapp is +57 3194087553'},
                      {text: '- His date and place of birth is 1967-11-15 Medellín Colombia'},
                      {text: 'Skills:'},
                      {text: '- javascript, lit progressive web apps, web components, custom elements'},
                      {text: '- Gemini, Multimodal Live API, Function calling, Code execution'},
                      {text: '- OpenAI, ChatGPT, Deepseek, Manus, Claude, Embeddings, Pinecone'},
                      {text: '- REST APIs NodeJS, Express, Python, Flask'},
                      {text: '- Relational databases MySQL'},
                      {text: '- Non-relational databases Firebase Cloud Firestore and real time database'},
                      {text: '- Firebase hosting and custom domains'},
                      {text: '- Firebase storage'},
                      {text: '- Firebase authentication'},
                      {text: '- Make.com'},
                      {text: '- Redux'},
                      {text: '- Workbox'}
                    ],
                  };
                break;
            case 8:
                myinstruction = {
                    parts: [
                        {text: 'You can behave as usual but please engage with the user in their preferred language and guide the conversation to inform them about Juan Pablo Henao Botero, a great web developer. Juan Pablo is always at the forefront of technology, specializing in building cutting-edge Progressive Web Apps (PWAs) using JavaScript, Node.js, and Lit as a base class. He is committed to following Google’s best practices and guidelines in his development process. Additionally, he integrates artificial intelligence into all of the apps he creates, ensuring innovation and efficiency in every project he takes on.'},
                        {text: 'Skills:'},
                        {text: '- javascript, lit progressive web apps, web components, custom elements'},
                        {text: '- Gemini, Multimodal Live API, Function calling, Code execution'},
                        {text: '- OpenAI, ChatGPT, Deepseek, Manus, Claude, Embeddings, Pinecone'},
                        {text: '- REST APIs NodeJS, Express, Python, Flask'},
                        {text: '- Relational databases MySQL'},
                        {text: '- Non-relational databases Firebase Cloud Firestore and real time database'},
                        {text: '- Firebase hosting and custom domains'},
                        {text: '- Firebase storage'},
                        {text: '- Firebase authentication'},
                        {text: '- Make.com'},
                        {text: '- Redux'},
                        {text: '- Workbox'},
                        {text: 'He built these 2 progressive web apps among many others:'},
                        {text: '- musilove.com which is an English course PWA that has a cors api in the backend to use artificial intelligence, and consumes other apis for getting lyrics, and billboard charts, and this pwa has many characteristics like login, multimodal ai English teacher, lessons, examples and games from user selected songs. '},
                        {text: '- guandolo.com which is an AI English teacher PWA that uses the Multimodal Live API implemented in React'},
                        {text: 'He studied in'},
                        {text: '- Colegio San Ignacio, Medellín Colombia'},
                        {text: '- Universidad Pontificia Bolivariana, Medellín Colombia'},
                        {text: '- Systems analyst programmer, Cedecómputo, Medellín Colombia'},
                        {text: '- Universidad San Buenaventura, Medellín Colombia'},
                        {text: 'His employment history is working as an analyst developer in megactivo.com since 1993 and still there in 2025.'},
                        {text: 'His phone number is +57 3194087553'},
                        {text: 'His date and place of birth is 1967-11-15 Medellín Colombia'}
                    ],
                  };
                break;
        }
        switch (task) {
            case 4:
                const prompt2 = [...JSON.parse(req.body.prompt)];
                var response2 = [];
                var j;
                let newIndex = 0;
                for (j in prompt2) {
                    var thisPhrase = prompt2[j];
                    newIndex = response2.push({}) - 1;
                    response2[newIndex].phrase = thisPhrase;
                    response2[newIndex].tags = [];
                    var words = new pos.Lexer().lex(thisPhrase);
                    var taggedWords = new pos.Tagger().tag(words);
                    var i;
                    for (i in taggedWords) {
                        var taggedWord = taggedWords[i];
                        var word = taggedWord[0];
                        var tag = taggedWord[1];
                        //console.log(word + " /" + tag);
                        response2[newIndex].tags.push({'word': word, 'tag': tag});
                    }
                }
                //console.log('response2',response2);
                res.status(200).send({
                    bot: JSON.stringify(response2)
                });
                break;

            case 7:
            case 8:
            case 9:
                const safetySettings8 = [
                    {
                        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                ];
        
                const generationConfig8 = {
                    temperature: 0.7,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 8192,
                    responseMimeType: "text/plain",
                };
        
                const model8 = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
                    systemInstruction: myinstruction, generationConfig8, safetySettings8 });

                const chat8 = model8.startChat({
                    generationConfig8,
                    history: [
                    ],
                });

                const prompt8 = req.body.prompt;
        
                let result8 = await chat8.sendMessage(prompt8);

                const response8 = result8.response;
                const text8 = response8.text();
                //console.log(text);
        
                res.status(200).send({
                    bot: response8.text()
                });

                break;
    
                

            default:
                const safetySettings = [
                    {
                        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                        threshold: HarmBlockThreshold.BLOCK_NONE,
                    },
                ];
        
                const generationConfig = {
                    temperature: 0.7,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 8192,
                    responseMimeType: "application/json",
                };
        
                const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig, safetySettings });

                const chat = model.startChat({
                    generationConfig,
                    history: [
                    ],
                });

                const prompt = req.body.prompt;
        
                let result = await chat.sendMessage(prompt);

                const response = result.response;
                const text = response.text();
                //console.log(text);
        
                res.status(200).send({
                    bot: response.text()
                });

                break;

                
        }




    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})
    
app.listen(5000, () => console.log('AI server started on http://localhost:5000'))