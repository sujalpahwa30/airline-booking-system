const express = require('express');

const amqplib = require("amqplib");
const { EmailService } = require('./services');
async function connectQueue() {
    try {
        const connection = await amqplib.connect(ServerConfig.RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue("notification-queue");
        channel.consume("notification-queue", async (data) => {
            console.log(`${Buffer.from(data.content)}`);
            const object = JSON.parse(`${Buffer.from(data.content)}`);
            await EmailService.sendEmail("airlinenotification@gmail.com", object.recepientEmail, object.subject, object.text);
            channel.ack(data);
        })
    } catch (error) {
        console.error("Error connecting to RabbitMQ:", error);
    }
}

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const mailsender = require('./config/email-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await connectQueue();
    console.log("Queue is up");
});