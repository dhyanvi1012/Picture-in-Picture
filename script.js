const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video elemnet, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log(error, 'This is the eroror');
    }
};

button.addEventListener('click', async () => {
    // Disable Button
    // button.disabled = true;
    // Start Picture in Picture 
    selectMediaStream();
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

videoElement.onloadedmetadata = function() {
// On Load trigger the media stream function
    selectMediaStream();

}
