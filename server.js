import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold  } from '@google/generative-ai';

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
            maxOutputTokens: 2048,
        };

        const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig, safetySettings });
        
        const prompt = req.body.prompt;

        const result = await model.generateContent (
            prompt
        );
        const response = await result.response;
        const text = response.text();
        console.log(text);

        res.status(200).send({
            bot: response.text()
        });
    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})
    
app.listen(5000, () => console.log('AI server started on http://localhost:5000'))