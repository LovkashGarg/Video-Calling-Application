require('dotenv').config(); // Import dotenv to load environment variables

const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());


// Load Zego credentials from environment variables
const appId = process.env.ZEGO_APP_ID;
const serverSecret = process.env.ZEGO_SERVER_SECRET;

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
app.get('/generate-token', (req, res) => {
    
  // Generate the kitToken using the Zego appId and serverSecret in the backend
  const roomId = req.queryroomId;

  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appId,
    serverSecret,
    roomId,
    randomID(5)
  );

  res.json({ kitToken });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
