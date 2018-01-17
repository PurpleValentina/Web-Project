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
htmlString += "<p>"+data[i].name+ ": Perfect photos from my  "+data[i].event+".</p>";
}
document.getElementById("info").innerHTML = htmlString;

}

fetch("http://localhost:3000/review/4", {
  method: "put",
  headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: "name: Ada, event: PoolParty"
});

fetch("http://localhost:3000/review/5", {
  method: "put",
  headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: "name: Dan, event: NewYearParty"
});

fetch("http://localhost:3000/review/3",{
  method:"delete",
  headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
});
