'use strict';

   
var arrowsoben = document.getElementById('Pfeile-oben');    
var arrowsunten = document.getElementById('Pfeile-unten');        
var line = document.getElementById('Mittellinie-Hintergrund');
arrowsoben.style.opacity = "0"
arrowsunten.style.opacity = "0"
line.style.opacity = "0"
console.log('Hallo')




    
let throttleOrig = 0;
let value = 0;
let speed = 0;
let consumption = 0;
let torque = 0;

    
document.bewegen = function(data){
    
        throttleOrig = data.throttle;
        value = data.throttle;
        speed = data.speed*1.6;
        consumption = data.consumption;
        torque = data.torque;

    
    const efficiencyMapValues = [
        [0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7],
        [0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7],
        [0.7-0.7, 0.723418186-0.7, 0.758787864-0.7, 0.767137591-0.7, 0.760788743-0.7, 0.752388867-0.7, 0.746292794-0.7, 0.740676241-0.7, 0.730818134-0.7, 0.726345965-0.7, 0.715914639-0.7],
        [0.7-0.7, 0.753610288-0.7, 0.805869295-0.7, 0.812431638-0.7, 0.809574789-0.7, 0.807666017-0.7, 0.804359027-0.7, 0.800954113-0.7, 0.792348594-0.7, 0.783343237-0.7, 0.769329441-0.7],
        [0.7-0.7, 0.770920836-0.7, 0.823156977-0.7, 0.835300484-0.7, 0.83394582-0.7, 0.83135591-0.7, 0.830175772-0.7, 0.825524969-0.7, 0.821046359-0.7, 0.816525129-0.7, 0.80674766-0.7],
        [0.7-0.7, 0.764503009-0.7, 0.831899951-0.7, 0.849889592-0.7, 0.850326979-0.7, 0.849962727-0.7, 0.848989307-0.7, 0.846461075-0.7, 0.843426802-0.7, 0.839272883-0.7, 0.808004859-0.7],
        [0.7-0.7, 0.777613757-0.7, 0.848567847-0.7, 0.859580638-0.7, 0.861693424-0.7, 0.862821504-0.7, 0.862885798-0.7, 0.861845599-0.7, 0.859829962-0.7, 0.853571269-0.7, 0.808262558-0.7],
        [0.7-0.7, 0.808042881-0.7, 0.850319892-0.7, 0.865665409-0.7, 0.872209944-0.7, 0.873054411-0.7, 0.873250529-0.7, 0.86966634-0.7, 0.863617869-0.7, 0.860025992-0.7, 0.832559861-0.7],
        [0.7-0.7, 0.803812249-0.7, 0.852288508-0.7, 0.867997957-0.7, 0.87897319-0.7, 0.879970526-0.7, 0.88-0.7, 0.876692437-0.7, 0.869807183-0.7, 0.86231639-0.7, 0.824829062-0.7],
        [0.7-0.7, 0.794057161-0.7, 0.845510236-0.7, 0.867811018-0.7, 0.876832838-0.7, 0.88-0.6, 0.879905765-0.7, 0.878130335-0.7, 0.868703422-0.7, 0.858013941-0.7, 0.835850828-0.7],
        [0.7-0.7, 0.781416499-0.7, 0.8358298-0.7, 0.865409578-0.7, 0.875771178-0.7, 0.879614963-0.7, 0.877381142-0.7, 0.872126578-0.7, 0.864439542-0.7, 0.854626639-0.7, 0.842079536-0.7],
        [0.7-0.7, 0.771523275-0.7, 0.823222905-0.7, 0.856227136-0.7, 0.867111807-0.7, 0.871813911-0.7, 0.871654624-0.7, 0.866370827-0.7, 0.858738168-0.7, 0.848549315-0.7, 0.836527588-0.7],
        [0.7-0.7, 0.758920457-0.7, 0.808213949-0.7, 0.844602443-0.7, 0.855385968-0.7, 0.86-0.6, 0.86-0.7, 0.858167374-0.7, 0.854393246-0.7, 0.84308132-0.7, 0.832257636-0.7],
        [0.7-0.7, 0.745294993-0.7, 0.786928395-0.7, 0.819136703-0.7, 0.838825111-0.7, 0.848660086-0.7, 0.852228706-0.7, 0.853241832-0.7, 0.844230008-0.7, 0.834784629-0.7, 0.824686136-0.7],
        [0.7-0.7, 0.732714959-0.7, 0.765301131-0.7, 0.796673543-0.7, 0.824574116-0.7, 0.837850287-0.7, 0.846055324-0.7, 0.841710006-0.7, 0.83589766-0.7, 0.827729053-0.7, 0.81875825-0.7],
        [0.7-0.7, 0.701434479-0.7, 0.702868957-0.7, 0.733620384-0.7, 0.767383996-0.7, 0.795928514-0.7, 0.823277743-0.7, 0.828452945-0.7, 0.82502554-0.7, 0.818716865-0.7, 0.810696405-0.7],
        [0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.709997101-0.7, 0.738915581-0.7, 0.767625779-0.7, 0.78531552-0.7, 0.803005262-0.7, 0.803109749-0.7],
        [0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.702901421-0.7, 0.711488641-0.7, 0.720075862-0.7],
        [0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7],
        [0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7],
        [0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7, 0.7-0.7]
    ];
    


    var efficiencyValues = [];
    function getCorrectArray(){
        if (speed >= 0 && speed <= 6.75){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 6.75 && speed <= 13.5){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 13.5 && speed <= 20.25){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 20.25 && speed <= 27){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 27 && speed <= 33.75){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 33.75 && speed <= 40.5){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 40.5&& speed <= 47.25){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 47.25 && speed <= 54){
            efficiencyValues = efficiencyMapValues[7];
        }
        if (speed > 54 && speed <= 60.75){
            efficiencyValues = efficiencyMapValues[8];
        }
        if (speed > 60.75 && speed <= 67.5){
            efficiencyValues = efficiencyMapValues[9];
        }
        if (speed > 67.5 && speed <= 74.25){
            efficiencyValues = efficiencyMapValues[10];
        }
        if (speed > 74.25 && speed <= 81){
            efficiencyValues = efficiencyMapValues[11];
        }
        if (speed > 81 && speed <= 87.75){
            efficiencyValues = efficiencyMapValues[12];
        }
        if (speed > 87.75 && speed <= 94.5){
            efficiencyValues = efficiencyMapValues[13];
        }
        if (speed > 94.5 && speed <= 101.25){
            efficiencyValues = efficiencyMapValues[14];
        }
        if (speed > 101.25 && speed <= 108){
            efficiencyValues = efficiencyMapValues[15];
        }
        if (speed > 108 && speed <= 114.75){
            efficiencyValues = efficiencyMapValues[16];
        }
        if (speed > 114.75 && speed <= 121.5){
            efficiencyValues = efficiencyMapValues[17];
        }
        if (speed > 121.5 && speed <= 128.25){
            efficiencyValues = efficiencyMapValues[18];
        }
        if (speed > 128.25 && speed <= 135){
            efficiencyValues = efficiencyMapValues[19];
        }
        if (speed > 135){
            efficiencyValues = efficiencyMapValues[20];
        }

        return efficiencyValues;
        
    }
    getCorrectArray();
    

    // console.log(efficiencyMapValues.indexOf(efficiencyValues))
    // const efficiencyValues = [0.7-0.7, 0.770920836-0.7, 0.823156977-0.7, 0.835300484-0.7, 0.83394582-0.7, 0.83135591-0.7, 0.830175772-0.7, 0.725524969-0.7, 0.721046359-0.7, 0.716525129-0.7, 0.70674766-0.7]
    
    var throttlepos = 0;
    function getThrottlePos(){

        if (value == 0){
            throttlepos = efficiencyValues[0];
            
        }
        if (value > 0 && value <= 10){
            throttlepos = efficiencyValues[1];
        }
        if (value > 10 && value <= 20 ){
            throttlepos = efficiencyValues[2];
        }
        if (value > 20 && value <= 30 ){
            throttlepos = efficiencyValues[3];
        }
        if (value > 30 && value <= 40 ){
            throttlepos = efficiencyValues[4];
        }
        if (value > 40 && value <= 50 ){
            throttlepos = efficiencyValues[5];
        }
        if (value > 50 && value <= 60 ){
            throttlepos = efficiencyValues[6];
        }
        if (value > 60 && value <= 70 ){
            throttlepos = efficiencyValues[7];
        }
        if (value > 70 && value <= 80 ){
            throttlepos = efficiencyValues[8];
        }
        if (value > 80 && value <= 90 ){
            throttlepos = efficiencyValues[9];
        }
        if (value > 90 && value <= 100 ){
            throttlepos = efficiencyValues[10];
        }

        return throttlepos;
    }
    getThrottlePos();

    Array.prototype.max = function() {
        return Math.max.apply(null, this);
      };

    var maximum = 0;
    maximum = efficiencyValues.max();
    
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var grd = context.createLinearGradient(1518,0,1518,canvas.height);
    //var grd = context.createRadialGradient(1518, 869, 200, 1518,  869, 1518)
    grd.addColorStop(0, '#780116');

    grd.addColorStop(0.35, '#C05746');
    
    grd.addColorStop(0.5,"#26A69A"); 
    
    grd.addColorStop(0.7,"#D6F49D");
    grd.addColorStop(0.9, '#780116');

    var wert = 0;
    function getWert(){

    if (efficiencyValues.indexOf(throttlepos)>efficiencyValues.indexOf(maximum)){
        wert = throttlepos*canvas.height/2*1/maximum;  
    }
    if (efficiencyValues.indexOf(throttlepos)<=efficiencyValues.indexOf(maximum)){
        wert = canvas.height - throttlepos*canvas.height/2*1/maximum;
    }
    return wert;
    }
    getWert();
    
    
    // //var opacity = 0;
    // var arrowsoben = document.getElementById('Pfeile-oben');
    // //var opacityoben = Number(arrowsoben.style.opacity);
    // //opacityoben = 0

    // var arrowsunten = document.getElementById('Pfeile-unten');
    
    function pedalReleased(){
        if (value == 0){
            canvas.style.visibility = "hidden";
            arrowsoben.style.visibility = "hidden";
            arrowsunten.style.visibility = "hidden";

        }
        else if (value > 0){
            canvas.style.visibility = "visible";
            arrowsoben.style.visibility = "visible";
            arrowsunten.style.visibility = "visible";           
        }
    }
    pedalReleased()
    
    // //arrowsoben.style.opacity="0"
    // //arrowsunten.style.opacity="0"
    // var line = document.getElementById('Mittellinie-Hintergrund');
    
    function drawGraph(){
        
        
        

        
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (wert < 0){
            wert = 0;
        }
        if (wert > canvas.height){
            wert = canvas.height;
        }
        // context.beginPath();
        // context.moveTo(20, 140);
        // context.lineTo(105, value/3);
        // context.lineTo(210, value/2)
        // context.lineTo(320, value);
        // context.lineTo(620, 140)
        // context.closePath();
        // context.stroke();
        // context.fillStyle = grd;
        // context.fill();
       //if (value > 0){
        //context.globalAlpha = 0.1;
        context.beginPath();

        context.moveTo(canvas.width*0.2,canvas.height/2);
            
        context.quadraticCurveTo(canvas.width/2,wert, canvas.width*0.8,canvas.height/2)
        //context.bezierCurveTo(canvas.width/2,wert, canvas.width/2, wert, canvas.width*0.8,canvas.height/2)
        //context.lineTo(canvas.width/2,wert);
        
  

        //context.lineTo(canvas.width*0.8,canvas.height/2);
        context.shadowBlur = 20;
        context.shadowColor = "black";
        context.fillStyle = grd;     
        context.lineWidth = 6;
        context.strokeStyle = "#D1E3E1";
        context.fill();
        context.stroke();


        
    // }
    // else if (wert == NaN){
    //     arrowsoben.style.opacity = "0"
    //     arrowsunten.style.opacity = "0"
    //     line.style.opacity = "0"
    // }
    }

    var opacity = 0;
    var intervalID = 0; 
    var opacity2 = 0;
    var intervalID2 = 0;
    var opacityM = 0;
    var intervalIDM = 0;

    
    function fadeInOben(){
         intervalID = setInterval(showoben, 100)
    }
    function fadeInUnten(){
        intervalID2 = setInterval(showunten, 100)
    }
    function fadeInMitte(){
        intervalIDM = setInterval(showmitte, 100)
    }
    function fadeOutOben(){
        intervalID = setInterval(hideoben, 100)
    }
    function fadeOutUnten(){
        intervalID2 = setInterval(hideunten, 100)
    }
    function fadeOutMitte(){
        intervalIDM = setInterval(hidemitte, 100)
    }
   
    function showoben(){
        
        opacity = Number(arrowsoben.style.opacity);
        if(opacity<1){
            
            opacity = opacity+0.1
            arrowsoben.style.opacity = opacity;
        }
        else{
            clearInterval(intervalID)
        }
    }
    function hideoben(){
        
        opacity = Number(arrowsoben.style.opacity);
        if(opacity>0){
            opacity = opacity-0.1
            arrowsoben.style.opacity = opacity;
        }
        else{
            clearInterval(intervalID)
        }
    }

    function showunten(){
        
        opacity2 = Number(arrowsunten.style.opacity);
        if(opacity2<1){
            
            opacity2 = opacity2+0.1
            arrowsunten.style.opacity = opacity2;
        }
        else{
            clearInterval(intervalID2)
        }
    }
    function hideunten(){
        
        opacity2 = Number(arrowsunten.style.opacity);
        if(opacity2>0){
            opacity2 = opacity2-0.1
            arrowsunten.style.opacity = opacity2;
        }
        else{
            clearInterval(intervalID2)
        }
    }








    function showmitte(){
        
        opacityM = Number(line.style.opacity);
        if(opacityM<1){
            
            opacityM = opacityM+0.1
            line.style.opacity = opacityM;
        }
        else{
            clearInterval(intervalIDM)
        }
    }
    function hidemitte(){
        
        opacityM = Number(line.style.opacity);
        if(opacityM>0){
            opacityM = opacityM-0.1
            line.style.opacity = opacityM;
        }
        else{
            clearInterval(intervalIDM)
        }
    }

    function blinkenunten(){
        if (arrowsunten.style.opacity=="0" ){
            fadeInUnten()
        }
        if (arrowsunten.style.opacity  == "1"){
            fadeOutUnten()
        }
    }

    function blinkenoben(){
                if (arrowsoben.style.opacity=="0" ){
                    fadeInOben()
                }
                if (arrowsoben.style.opacity  == "1"){
                    fadeOutOben()
                }
    }


    function arrows(){

        // // if (wert != NaN){


        
        //     if (wert > 1.2* canvas.height/2){
        //         arrowsunten.style.opacity = "0"
        //         //  arrowsoben.style.opacity =   "1" 
        //         //fadeOutUnten()
        //         //fadeOutMitte()
        //         if (arrowsoben.style.opacity=="0" ){
        //             fadeInOben()
        //         }
        //         if (arrowsoben.style.opacity  == "1"){
        //             fadeOutOben()
        //         }
                
        //     }
    
        //     // else if (wert <= 1.2*canvas.height/2 && wert >= 0.8*canvas.height/2){
        //     //     arrowsoben.style.opacity = "0"
        //     //     arrowsunten.style.opacity = "0"
        //     //     line.style.opacity = "1"
        //     //     // if (line.style.opacity =="0"){
        //     //     //     fadeInMitte()
    
        //     //     // }
                
        //     // }
    
    
        //     else if (wert < 0.8 * canvas.height/2){
        //         //arrowsunten.style.opacity = "1"
        //         arrowsoben.style.opacity = "0"
        //         //line.style.opacity = "0"
        //         //fadeOutOben()  
        //         //fadeOutMitte()
        //         //fadeInUnten()
        //         if (arrowsunten.style.opacity=="0" ){
        //             fadeInUnten()
        //         }
        //         if (arrowsunten.style.opacity  == "1"){
        //             fadeOutUnten()
        //         }
        //     }

    }






    drawGraph();
    
    if (wert <= 0.8*canvas.height/2){
        if (arrowsoben.style.opacity == "0"){
        //document.getElementById('Pfeile-oben').style.opacity = "0";
            blinkenunten();
        }
        else if (arrowsoben.style.opacity == "1"){
            fadeOutOben();
        }
        fadeOutMitte()
    }

    if (wert > 0.8*canvas.height/2 && wert < 1.2 * canvas.height/2){
        fadeInMitte()
        if (arrowsunten.style.opacity == "1"){
            fadeOutUnten();
        }
        if (arrowsoben.style.opacity == "1"){
            fadeOutOben();
        }
    }

    if (wert >= 1.2*canvas.height/2){
        if (arrowsunten.style.opacity == "0"){
            blinkenoben();
        }
        else if (arrowsunten.style.opacity == "1"){
            fadeOutUnten();
        }
        fadeOutMitte()
        //document.getElementById('Pfeile-unten').style.opacity= "0";
        
    }
    
    console.log(line.style.opacity)
    console.log(wert)
    
    // var arrows = document.getElementById('Pfeile')
    // function drawArrows(){
    //     if (wert > canvas.height/2){
    //         arrows.style.opacity = "0";
    //     }
    //     else if (wert < canvas.height/2){
    //         arrows.style.opacity = "0.5";
    //     }
    // }
    // drawArrows();
    // const canvas = document.getElementById('myCanvas')
    // const c = canvas.getContext('2d')
    
    // canvas.width = innerWidth
    // canvas.height = innerHeight
    
    // const wave = {
    //     y: canvas.height / 2,
    //     length: 0.01,
    //     amplitude: 200,
    //     frequency: 0.03,
    //     frequency2: 0.04
    // }
    
    // let increment = wave.frequency
    // let increment2 = wave.frequency2
    // function animate(){
    //     requestAnimationFrame(animate)
    
    //     c.clearRect(0, 0, canvas.width, canvas.height)
    //     c.beginPath()
    //     c.moveTo(0, canvas.height/2)
    
    //     for (let i = 0; i < canvas.width; i++){
    //         c.lineTo(i, wave.y + Math.sin (i * wave.length + increment) * wave.amplitude * Math.sin(increment))
    //     }
    
    //     c.stroke()
    
    //     c.beginPath()
    //     c.moveTo(0, canvas.height/2)
    
    //     for (let i = 0; i < canvas.width; i++){
    //         c.lineTo(i, wave.y + Math.sin (i * wave.length + increment2) * wave.amplitude * Math.sin(increment2))
    //     }
    
    //     c.stroke()
    //     increment += wave.frequency
    //     increment2 -= wave.frequency2
    // }
    
    // animate()
    
  }


/* https://stackoverflow.com/a/15528789 */



