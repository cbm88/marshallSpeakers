/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var jimPic = new Image();
jimPic.src="img/about/jimMarshall.jpg";

var storePic = new Image();
storePic.src = "img/about/marshall1962.jpg";

var jtm = new Image();
jtm.src = "img/about/jtm.jpg";

var hendrix = new Image();
hendrix.src = "img/about/jimihendrix.jpg";

var zeppelin = new Image();
zeppelin.src = "img/about/ledzeppelinmarshall.jpg";

var kiss = new Image();
kiss.src = "img/about/kissconcert.jpg";

var slayer = new Image();
slayer.src = "img/about/slayer.jpg";

var who = new Image();
who.src = "img/about/thewhomarshall.jpg";

var motorhead = new Image();
motorhead.src = "img/about/motorhead.jpg";


function item(head, pic){
    this.head = head;
    this.pic = pic;
    this.write = function(){
        return '<p><img src="'+this.pic+'"/>'+'<h4><i>'+this.head+'</i></h4>'+
                '<div id="dotsDiv" style="text-align:center"><p><i>Click or tap to view images:</i></p> <span class="dot" onclick="currentSlide(0)"></span><span class="dot" onclick="currentSlide(1)"></span><span class="dot" onclick="currentSlide(2)"></span><span class="dot" onclick="currentSlide(3)"></span><span class="dot" onclick="currentSlide(4)"></span><span class="dot" onclick="currentSlide(5)"></span><span class="dot" onclick="currentSlide(6)"></span><span class="dot" onclick="currentSlide(7)"></span><span class="dot" onclick="currentSlide(8)"></span></div>';};
}

var imgArray = new Array();
imgArray[0] = new item("Founder Jim Marshall, 1962",jimPic.src);
imgArray[1] = new item("The first Marshall store in London, 1962",storePic.src);
imgArray[2] = new item("The JTM-45, Marshall's first amplifier",jtm.src);
imgArray[3] = new item("The Who, 1966",who.src);
imgArray[4] = new item("Jimi Hendrix, 1967",hendrix.src);
imgArray[5] = new item("Led Zeppelin, 1977",zeppelin.src);
imgArray[6] = new item("KISS, early-1980s",kiss.src);
imgArray[7] = new item("Motorhead, 2006",motorhead.src);
imgArray[8] = new item("Slayer, 2010",slayer.src);

var index = 0;
var len = imgArray.length;
var dots = document.getElementsByClassName("dot");
var timer;

function rotateImgs(){
    if(index >= len)
        index = 0;
    document.getElementById("imageShowDiv").innerHTML = imgArray[index].write();
    index++; 
    var i;
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[index-1].className += " active";
    timer = setTimeout('rotateImgs()',4000);
}

function currentSlide(n) {
    rotateImgs(index = n);
}

function pause(){
    if(timer != null){
        clearTimeout(timer);
        timer = null;
    }
}

function play(){
    if(timer == null){
        timer= setTimeout('rotateImgs()',4000);
    }
}