'use strict';

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((localMediaStream) => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch((error) => {
            window.alert('¡Lo siento! No hemos conseguido acceder a tu cámara');
            console.log(error);
        });
}

function paintToCanvas() {
    //Adapt canvas to video size
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    //Capture image from video
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        //take the pixels and mess with them
        // let pixels = ctx.getImageData(0, 0, width, height);
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        // pixels = greenScreen(pixels);
        // ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    //play sound
    snap.currentTime = 0;
    snap.play();
    //turn data into a jpeg capture
    const data = canvas.toDataURL('image/jpeg');
    //place captures as links
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'selfie');
    link.innerHTML = `<img src="${data}" alt="selfie" />`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; //red
        pixels.data[i + 100] = pixels.data[i + 1]; // green
        pixels.data[i - 150] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
