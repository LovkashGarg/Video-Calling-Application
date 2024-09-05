import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';





const Room=()=> {
      const {roomId} =useParams();
      let myMeeting = async (element) => {
     // generate Kit Token
     const response = await fetch(
        `https://video-calling-mul.onrender.com/generate-token?roomId=${roomId}`
      );

      const kittoken = await response.json();
       console.log("kit token",kittoken);
     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kittoken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`https://localhost:3000/Room/${roomId}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });

    
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '50vw', height: '50vh' }}
    ></div>
  );
}
export default Room;
