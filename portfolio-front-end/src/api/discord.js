import axios from 'axios';

export const sendDiscordMessage = async () => {
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

    let message = {
        content: `A User with the IP: ${ip} Just Visited Your Portfolio!`
    };

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