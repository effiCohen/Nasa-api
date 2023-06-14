


let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);

    // Data from NASA API json
    const copyright = data["copyright"];
    const date = data["date"];
    const explanation = data["explanation"];
    const hdurl = data["hdurl"];
    const media_type = data["media_type"];
    const title = data["title"];
    const url = data["url"];
    document.getElementById("wrapper-title").innerHTML = title;
    document.getElementById("wrapper-explanation").innerHTML = explanation;
    document.getElementById("wrapper-copyright").innerHTML = copyright;
    document.getElementById("wrapper-hdurl").herf=hdurl;
    document.getElementById("wrapper-url").src = url;
   document.getElementById("intro-date").innerHTML = date;

  }
}
xmlhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=i0q1sEPeUxgcuEIXXO786KkvJ6fykZbK2H9K2MfW", true);
xmlhttp.send();

const getDate = ()=>{
 const x = document.getElementById('wrapper-date').value
 console.log(x)
 const quaryDate = "&date=" + x + "&";

const a = "https://api.nasa.gov/planetary/apod?api_key=i0q1sEPeUxgcuEIXXO786KkvJ6fykZbK2H9K2MfW";


const queryUrl = "https://api.nasa.gov/planetary/apod?";
// API KEY
const queryKey = "api_key=i0q1sEPeUxgcuEIXXO786KkvJ6fykZbK2H9K2MfW";
// Selected date
const queryFull = queryUrl + queryKey + quaryDate;
xmlhttp.open("GET", queryFull, true);
xmlhttp.send();
}
//************************ */
const he=document.getElementById("vid");
const arrvid=['vid/pexels-ahnaf-piash-5747525.mp4','/vid/pexels-rodnae-productions-8474612.mp4']
const themTugler=document.querySelector("div.them-tugler")
console.log(themTugler)
themTugler.addEventListener(`click`,()=>{
  document.body.classList.toggle(`light-them`);
 he.src=arrvid[1]
 if(document.body.classList!='light-them'){
  he.src=arrvid[0]
  document.body
 }

})