require('dotenv').config(); // Import dotenv to load environment variables

const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());


// Load Zego credentials from environment variables
const appId = process.env.ZEGO_APP_ID;
const serverSecret = process.env.ZEGO_SERVER_SECRET;

app.get('/generate-token', (req, res) => {
  // Generate the kitToken using the Zego appId and serverSecret in the backend
  const roomId = req.roomId;
  const userId = req.userId;

  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appId,
    serverSecret,
    roomId,
    userId
  );

  res.json({ kitToken });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
