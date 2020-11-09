 
import corsMiddleware from 'restify-cors-middleware'
const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*','http://localhost:4200'],
    allowHeaders: ['*'],
    exposeHeaders: ['*']
})

export default cors
