Webcam.attach("#camera");
camera=document.getElementById("camera");
Webcam.set({
    width:350, heigth:300, image_format:"png", png_quality:90
});
function capturarimagem(){
    Webcam.snap(function(data_uri){
        document.getElementById("foto").innerHTML='<img id="self_imagem" src="'+data_uri+'">'
    });
}
https://teachablemachine.withgoogle.com/models/CGhFeN2S5/
console.log("versãoml5",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CGhFeN2S5/model.json",modelload);
function modelload(){
    console.log("modelocarregado");
}
function checar(){
    img=document.getElementById("self_imagem");
    classifier.classify(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log("erro")
    }
    else{
        console.log(results);
        document.getElementById("objeto").innerHTML=results[0].label;
        document.getElementById('precisao').innerHTML=((results[0].confidence)*100).toFixed(0)+"%";
    }
}