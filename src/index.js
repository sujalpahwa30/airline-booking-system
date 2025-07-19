const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    // bad code alert 
    // const { City, Airport } = require('./models');

    // const bengaluru = await City.findByPk(1, {include: {model: Airport}});
    // console.log(bengaluru);
});