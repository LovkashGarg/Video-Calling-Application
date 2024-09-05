import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


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


const Room=()=> {
      const {roomId} =useParams();
      let myMeeting = async (element) => {
     // generate Kit Token
     const hgsl52 = +process.env.REACT_APP_hgsl52;
     const server_ghs30= process.env.REACT_APP_server_ghs30;
     console.log(hgsl52)
     console.log(server_ghs30);

      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest( hgsl52 ,server_ghs30, roomId,  randomID(5),  randomID(5));

     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
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
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
export default Room;
