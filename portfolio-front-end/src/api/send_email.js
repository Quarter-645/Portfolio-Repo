export const sendSelectionHistory = async (history) => {
    const url = 'http://127.0.0.1:8000/api/handle_email'; // Replace with your actual API endpoint

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ history }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('This API is not supported');
    }
};
