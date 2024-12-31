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
                const response = await result.response;
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