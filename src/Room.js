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
     const gh3t2dlskgHd123 = process.env.REACT_gh3t2dlskgHd123;
     const gsh$2mpo9362 = process.env.REACT_gsh2mpo9362;
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(gh3t2dlskgHd123, gsh$2mpo9362, roomId,  randomID(5),  randomID(5));

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
      style={{ width: '50vw', height: '50vh' }}
    ></div>
  );
}
export default Room;
