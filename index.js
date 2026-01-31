const express = require('express');
require('dotenv').config();
const connectDB = require('./connect');
const router = require('./Routes/book');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

let app = express();

// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'NaijaReads Bookstore API',
            version: '1.0.0',
            description: 'A professional REST API for managing Nigerian literature and international bestsellers.',
            contact: {
                name: 'Emmanuel Adikwu',
                url: 'https://github.com/Emmanuel8577'
            },
        },
        servers: [
            { url: 'http://localhost:3000', description: 'Development server' }
        ],
        basePath: '/api/v1'
    },
    // Path to the API docs (where your route annotations are)
    apis: ['./Routes/**/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1>📚 NaijaReads API</h1>
            <p>The server is running successfully!</p>
            <p>To view the interactive documentation, go to:</p>
            <a href="/api/v1/docs" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View API Documentation</a>
        </div>
    `);
});

app.use(express.json()); 
app.use('/api/v1/books', router);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
            console.log(`Docs available at http://localhost:${port}/api/v1/docs/`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();