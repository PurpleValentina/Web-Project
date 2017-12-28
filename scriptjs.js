var review = document.getElementById("info");
var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
var myRequest= new XMLHttpRequest();
myRequest.open('GET','script.json');
myRequest.onload=function(){
    var myData=JSON.parse(myRequest.responseText);
    renderHTML(myData);
};
myRequest.send();

});
function renderHTML(data){
var htmlString="";
for(i=0;i<data.length;i++) {
htmlString += "<p>"+data[i].name+ "is a"+data[i].event+".</p>";
}
document.getElementById("info").insertAdjacentHTML('beforeEnd', htmlString);

}