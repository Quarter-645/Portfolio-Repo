export const health = async () => {
    const url = 'https://api.connormorrison.codes/game/health'; // Replace with your actual API endpoint

    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
