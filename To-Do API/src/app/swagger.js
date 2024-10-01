import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerConfig = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "TO-DO API",
            version: "1.0.0"
        },
        servers: [{
            url: "http://localhost:3000"
        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: [`${path.join(__dirname, "../routes/*.js")}`],
};
