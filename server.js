const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock user data (replace with database queries)
const users = [
    {
        id: 1,
        username: 'user1',
        name: 'محمد علي',
        age: 25,
        bio: 'أحب البرمجة والسفر!',
        type: 'سالب',
        location: '37.7749,-122.4194',
        photo: 'https://via.placeholder.com/60',
        distance: 2.5,
    },
    {
        id: 2,
        username: 'user2',
        name: 'أحمد حسن',
        age: 30,
        bio: 'أحب الموسيقى والرياضة!',
        type: 'موجب',
        location: '34.0522,-118.2437',
        photo: 'https://via.placeholder.com/60',
        distance: 5.0,
    },
];

// API to fetch user data
app.get('/api/user', (req, res) => {
    const user = users[0]; // Replace with logic to fetch the current user
    res.json(user);
});

// API to fetch nearby users
app.get('/api/nearby-users', (req, res) => {
    const nearbyUsers = users.slice(1); // Replace with logic to fetch nearby users
    res.json(nearbyUsers);
});

// Serve the Mini App
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
