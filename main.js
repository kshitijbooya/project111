        
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

 camera = document.getElementById("camera");
 Webcam.attach(camera);

function take_snapshort()
{

    Webcam.snap(function(data_uri) {
        document.getElementById("result").inner_HTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });

    console.log('m15 version:', m15.version);

classifier = m15.imageclassifier('https://teachablemachine.withgoogle.com/models/zCxVQoYjN/model.json' ,modelloaded);
}

function modelloaded() {
    console.log('Model Loaded');
}

function check()
{
    min = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}