// index.js - Entry Point

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

// DB Connections
import mongoose from 'mongoose';
import mysql from 'mysql2/promise';

// Swagger
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ------------------- Middleware -------------------
app.use(cors());
//app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// ------------------- MongoDB Connection -------------------
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/';
mongoose
  .connect(mongoUri) // options are not needed in Mongoose v8+
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ------------------- MySQL Connection -------------------
let mysqlPool;
async function initMySQL() {
  try {
    mysqlPool = await mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log('✅ MySQL Connected');
  } catch (err) {
    console.error('❌ MySQL Connection Error:', err);
  }
}
initMySQL();
app.locals.mysqlPool = mysqlPool;

// ------------------- Swagger Setup -------------------
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Digital Mata API',
      version: '1.0.0',
      description: 'API documentation for Digital Mata Platform',
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ['./routes/*.js'], // Swagger scans your routes folder
};

const swaggerDocs = swaggeJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ------------------- Example Routes -------------------

// Placeholder Login Route (MongoDB)
app.get('/api/login/', (req, res) => {
  res.json({ message: 'Login route working!' });
});

// Placeholder Discussion Route (MySQL)
app.get('/api/discussion/', (req, res) => {
  res.json({ message: 'Discussion route working!' });
});

// ------------------- Default Route -------------------
app.get('/', (req, res) => {
  res.send('Digital Mata API is running!');
});

// ------------------- Start Server -------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
