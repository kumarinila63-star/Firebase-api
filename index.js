const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/firebase-config', (req, res) => {
    res.json({
        app_id: "1:727233970063:android:a96ba61d098ad2a798d5fa",
        api_key: "AIzaSyCqLHAnga2o-vqf9nmuznn2kepzNvpLpwk",
        database_url: "https://mmproject-c27e0-default-rtdb.firebaseio.com",
        project_id: "myproject-c27e0"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

