

export default {
    whitelist: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3001', 'http://localhost:3000'  ,'http://192.168.1.104:3000' , 'http://192.168.1.104:3000' , 'http://manage.sam95.link', 'https://manage.sam95.link' ], //white list consumers
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
}