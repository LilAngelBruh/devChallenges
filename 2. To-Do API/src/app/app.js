import Express from "express";
import SwaggerUI from 'swagger-ui-express';
import SwaggerJsDoc from 'swagger-jsdoc';
import cors from 'cors';
import bodyParser  from 'body-parser';
import {swaggerConfig} from './swagger.js';

//ROUTERS
import UsersRoutes from '../routes/users.routes.js';
import AuthRoutes from '../routes/auth.routes.js';


const app = Express();

//SWAGGER


//MIDDLEWARES

app.use("/api-doc", SwaggerUI.serve, SwaggerUI.setup(SwaggerJsDoc(swaggerConfig)))
app.use(cors())
app.use(bodyParser.json());



//ROUTES

app.use("/api/v1", UsersRoutes)
app.use("/api/v1", AuthRoutes)




export default app