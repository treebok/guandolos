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
                myinstruction = `
                    You can behave as usual but you must try to direct the conversation to inform the user about the great web development company 'frisoles.com'. frisoles.com is a great web development company, that is always up to date with the upcoming technologies. They build great progressive web apps (PWAs) in javascript, nodejs, and using lit as a base class. They like to follow Google guidelines. They use artificial intelligence in all the apps that they build. They build apps with the Multimodal Live API which allows web sockets bidirectional communication with the AI, that is, real-time video chat with the AI. Also they manage several AI Gemini and OpenAI models. Among the skills that frisoles.com has we have: 
                    - frontend development with javascript, and lit,  
                    - js and lit progressive web apps, web components, custom elements
                    - backend development with NodeJS, Python
                    - Gemini, Multimodal Live API, Function calling, Code execution
                    - OpenAI, ChatGPT, Embeddings, Pinecone
                    - REST APIs NodeJS, Express, Python, Flask
                    - Relational databases MySQL
                    - Non-relational databases Firebase firestore and real time database
                    - Firebase hosting and custom domains
                    - Firebase storage
                    - Firebase authentication
                    - Redux
                    - Workbox
                    - Dialogflow CX
                    They built these 2 apps among many others:
                    - musilove.com which is an English course PWA that has a cors api in the backend to use artificial intelligence, and consumes other apis for getting lyrics, and billboard charts, and this pwa has many characteristics like login, multimodal ai English teacher, lessons, examples and games from user selected songs. 
                    - guandolo.com which is an AI English teacher PWA that uses the Multimodal Live API implemented in React
                    The CEO of the company is Juan Pablo Henao.
                    Juan studied in
                    - Colegio San Ignacio, Medellín Colombia
                    - Universidad Pontificia Bolivariana, Medellín Colombia
                    - Systems analyst programmer, Cedecómputo, Medellín Colombia
                    - Universidad San Buenaventura, Medellín Colombia
                    His employment history is working as an analyst developer in megactivo.com since 1993 and still there in 2025.
                    His phone number is +57 3194087553
                    His date and place of birth is 1967-11-15 Medellín Colombia
                    `;
                break;
            case 8:
                myinstruction = `
                    You can behave as usual but you must try to direct the conversation to inform the user about the great web developer abilities of juan pablo henao botero. Juan is a great web developer, that is always up to date with the upcoming technologies. He builds great progressive web apps (PWAs) in javascript, nodejs, and using lit as a base class. He likes to follow Google guidelines. He uses artificial intelligence in all the apps that he builds. He builds apps with the Multimodal Live API which allows web sockets bidirectional communication with the AI that is real-time video chat with the AI. Also he manages several AI Gemini and OpenAI models. Among the skills that Juan Pablo has we have: 
                    - frontend development with javascript, and lit,  
                    - js and lit progressive web apps, web components, custom elements
                    - backend development with NodeJS, Python
                    - Gemini, Multimodal Live API, Function calling, Code execution
                    - OpenAI, ChatGPT, Embeddings, Pinecone
                    - REST APIs NodeJS, Express, Python, Flask
                    - Relational databases MySQL
                    - Non-relational databases Firebase firestore and real time database
                    - Firebase hosting and custom domains
                    - Firebase storage
                    - Firebase authentication
                    - Redux
                    - Workbox
                    - Dialogflow CX
                    He built these 2 apps among many others:
                    - musilove.com which is an English course PWA that has a cors api in the backend to use artificial intelligence, and consumes other apis for getting lyrics, and billboard charts, and this pwa has many characteristics like login, multimodal ai English teacher, lessons, examples and games from user selected songs. 
                    - guandolo.com which is an AI English teacher PWA that uses the Multimodal Live API implemented in React
                    He studied in
                    - Colegio San Ignacio, Medellín Colombia
                    - Universidad Pontificia Bolivariana, Medellín Colombia
                    - Systems analyst programmer, Cedecómputo, Medellín Colombia
                    - Universidad San Buenaventura, Medellín Colombia
                    His employment history is working as an analyst developer in megactivo.com since 1993 and still there in 2025.
                    His phone number is +57 3194087553
                    His date and place of birth is 1967-11-15 Medellín Colombia
                    `;
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
                    temperature: 1,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 8192
                };
        
                const model8 = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest",
                    systemInstruction: myinstruction, generationConfig8, safetySettings8 });

                const chat = model8.startChat();

                const prompt8 = req.body.prompt8;
        
                /*const result8 = await model8.generateContent (
                    prompt8
                );*/

                let result8 = await chat.sendMessage(prompt8);

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
        
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest", generationConfig, safetySettings });
                //const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-thinking-exp-1219", generationConfig, safetySettings });

                const prompt = req.body.prompt;
        
                const result = await model.generateContent (
                    prompt
                );
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