import fs from 'fs';
import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { graphql } from 'graphql'
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import api from './api';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use('/api', api);

/* -- Mongoose configuration -- */
mongoose.connect(
  'mongodb://localhost:27017/local',
  { useCreateIndex: true, useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', () => {
  console.log('--- FAILED to connect to mongoose');
});

db.once('open', () => {
 console.log('-- Connected to mongoose');
});

/* -- Graphql Configuration -- */
const schemaFile = path.join(__dirname, './graphql/schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');
const schema = makeExecutableSchema({ typeDefs });

app.use('/graphql', graphqlHTTP(req => ({ schema, graphiql:true })));

/* -- Server start -- */
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));