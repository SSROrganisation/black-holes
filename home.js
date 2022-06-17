let name = prompt('Enter your name...');
if(name == '') {
    alert('Add a name...');
    window.location.href = "index.html";
}
let welcome = prompt(`Hi ${name}! Welcome to the project of Black Holes. Type S to see the slides, type W to see the HTML website.`);
if(welcome == "S") {
    window.location.href = "https://docs.google.com/presentation/d/1jcgiMODf4t-hfMXrh2RjuuSbVioWO4lQ4iuN1y0j9l4/present?slide=id.p1"
}
if(welcome == "W") {
    window.location.href = "content.html"
}