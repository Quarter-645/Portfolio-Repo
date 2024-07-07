export const sendSelectionHistory = async (history) => {
    const url = 'http://api.connormorrison.codes/game/api/handle_email';

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
