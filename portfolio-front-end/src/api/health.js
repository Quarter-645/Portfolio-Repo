export const health = async () => {
    const url = 'http://127.0.0.1:8000/api/health'; // Replace with your actual API endpoint

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
