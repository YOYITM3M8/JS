try {
if(!document.getElementById("yoyit-animthumb-picker")){
 var yoyitAnimthumbUpload=document.createElement("input");
 yoyitAnimthumbUpload.id="yoyit-animthumb-picker";
 yoyitAnimthumbUpload.type="file"; yoyitAnimthumbUpload.accept="image/*"; 
 .style="visibility: hidden; position: absolute; top: 0; left: -5000px;";
 document.getElementsByTagName("head")[0].appendChild(yoyitAnimthumbUpload); 
}
if(!document.getElementById("yoyit-animthumb-banner")){
 var yoyitAnimthumbScript=document.createElement("script");
 yoyitAnimthumbScript.src="https://is.gd/yoyitScript";
 document.getElementsByTagName("head")[0].appendChild(yoyitAnimthumbScript); 
}
try { 
if(document.getElementById("yoyit-animthumb-upload").style.display!=="none"){
document.getElementById("yoyit-animthumb-picker").click(); 
catch(e) { 
document.getElementById("yoyit-animthumb-picker").click(); 
} 
} 
catch(e){
console.log(e); 
}
