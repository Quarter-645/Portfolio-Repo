import axios from 'axios';

export const sendDiscordMessage = async (type) => {
    const fetchIp = async () => {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            return (response.data.ip);
        } catch (error) {
            console.error('Error fetching IP address:', error);
            return "*IP COULDN'T BE GOTTEN";
        }
    };

    const ip = await fetchIp();

    const webhookURL = "https://discord.com/api/webhooks/1261665588195885150/cEXr4L-dJtqha81dVJi2J6JgTEfWBKRkk1anvrv7XswZo-6sBvXDlocOHjylNM1i0GGn";

    let message;

    if (type === "ip") {
        message = {
            content: `A User with the IP: ${ip} Just Visited Your Portfolio!`
        };
    } else if (type === "form") {
        message = {
            content: `A User with the IP: ${ip} Just Completed Your Form!`
        };
    } else {
        message = {
            content: `A User with the IP: ${ip} took an unknown action!`
        };
    }
    

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            console.log('Message sent successfully!');
        } else {
            console.error('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}