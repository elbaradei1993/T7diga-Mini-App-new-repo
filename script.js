// Initialize the Telegram Web App
const tg = window.Telegram.WebApp;

// Expand the Mini App to full screen
tg.expand();

// Fetch user data from Telegram
const user = tg.initDataUnsafe.user;

// Display user data in the Mini App
if (user) {
    document.getElementById('username').textContent = user.username || 'N/A';
    document.getElementById('name').textContent = user.first_name || 'N/A';
    document.getElementById('age').textContent = 'N/A'; // Age is not available in initDataUnsafe
    document.getElementById('bio').textContent = 'N/A'; // Bio is not available in initDataUnsafe
    document.getElementById('type').textContent = 'N/A'; // Type is not available in initDataUnsafe
}

// Handle the button click to send data to the bot
document.getElementById('sendDataButton').addEventListener('click', () => {
    const data = {
        message: 'Hello from the Mini App!',
        userId: user?.id || 'N/A',
        username: user?.username || 'N/A'
    };

    // Send data to the bot
    tg.sendData(JSON.stringify(data));

    // Optionally, close the Mini App after sending data
    tg.close();
});

// Handle the event when the Mini App is ready
tg.ready();
