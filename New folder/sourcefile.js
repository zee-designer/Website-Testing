
var sub_box = document.querySelector('.sub_nav');
var heading_one = document.querySelector('.sub_nav #heading_one');
var heading_two = document.querySelector('.sub_nav #heading_two');
var focus_box = document.querySelector(".focus_box");
var color_panal = document.querySelector(".color_panal");
var h1_color_demor_box = document.querySelector(".h1_color_demor_box");
var counter = true;

// Check and set default localStorage value
if (localStorage.getItem('headingColor') === null) {
    localStorage.setItem('headingColor', 'true'); 
}

// Function to apply heading colors
let HeadingFun = () => {
    document.querySelectorAll('h1').forEach(h1 => { h1.style.color = '#1976D2'; });
    document.querySelectorAll('h2').forEach(h2 => { h2.style.color = '#F57C00'; });
    sub_box.classList.add('none');
    focus_box.classList.add('none');
}

// Function to reset heading colors
let HeadingFun2 = () => {
    document.querySelectorAll('h1').forEach(h1 => { h1.style.color = ''; });
    document.querySelectorAll('h2').forEach(h2 => { h2.style.color = ''; });
    sub_box.classList.add('none');
    focus_box.classList.add('none');
}

// Function to toggle heading mode based on localStorage
let HeadingMode = () => {
    var val = localStorage.getItem('headingColor') === "true"; // Ensure it's read as a string
    if (val) {
        HeadingFun();
    } else {
        HeadingFun2();
    }
}

// Add event listener to heading one
heading_one.addEventListener('click', function () {
    localStorage.setItem('headingColor', 'true'); // Set to true
    HeadingMode();
});

// Add event listener to heading two (change to 'click' instead of 'mouseout' for better toggle)
heading_two.addEventListener('click', function () {
    localStorage.setItem('headingColor', 'false'); // Set to false
    HeadingMode();
});

// Apply initial mode on page load
HeadingMode();

// Color panel click event
color_panal.addEventListener("click", function () {
    if (counter) {
        sub_box.classList.remove('none');
        focus_box.classList.remove('none');
        // counter = false;
    } else {
        sub_box.classList.add('none');
        focus_box.classList.add('none');
        // counter = true;
    }
});

// Focus box event
focus_box.addEventListener("click", function () {
    focus_box.classList.add("none");
    sub_box.classList.add("none");
    counter = true;
});

// Hover effects for heading_one
heading_one.addEventListener('mouseenter', function () {
    h1_color_demor_box.classList.remove("none");
});

heading_one.addEventListener('mouseout', function () {
    h1_color_demor_box.classList.add("none");
});







var moon_icon = document.querySelector('#moon_sun_box #moon');
var sun_icon = document.querySelector('#moon_sun_box #sun');


if (localStorage.getItem('BgChange') === null) {
    localStorage.setItem('BgChange', 'true'); // Assume true means dark mode is active
  }
var DarkNav=()=>{
    moon_icon.style.display ="none";
    sun_icon.style.display ="block";
    sun_icon.style.color ="#FE5D37";

    document.querySelector('nav').style.backgroundColor="#2A5675";
    document.querySelector('.color_panal').style.color ="#2A5675"
    document.querySelectorAll('.navigation a i').forEach(i=>{i.style.color="#2A5675"})
    document.querySelector('.color_panal').style.color='#2A5675'
    document.querySelector('#about').style.backgroundColor="#2A5675"
    document.querySelector('#about h1').style.color="#fff"
    document.querySelectorAll('#about p').forEach(p=>{p.style.color="#fff"})
    document.querySelectorAll('#about p span ').forEach(span=>{span.style.color="#fff"})
    document.querySelector('#about #right #inder_right #image1').style.borderColor="#fff"
    document.querySelector('#about #right #inder_right #image2').style.borderColor="#fff"
    document.querySelector('#about #right #inder_right #image3').style.borderColor="#fff"
}
var LightNav=()=>{
    sun_icon.style.display ="none";
    moon_icon.style.display ="block";
    moon_icon.style.color ="#2A5675";
    document.querySelectorAll('nav').forEach(nav=>{ nav.style.backgroundColor="" })
    document.querySelectorAll('.navigation a').forEach(a=>{a.style.color=""})
    document.querySelector('.color_panal').style.color=''
    document.querySelector('.navigation').style.backgroundColor="#fff"
    document.querySelectorAll('.navigation a i').forEach(i=>{i.style.color=""})
    document.querySelector('#about').style.backgroundColor=""
    document.querySelector('#about h1').style.color=""
    document.querySelectorAll('#about p').forEach(p=>{p.style.color=""})
    document.querySelectorAll('#about p span ').forEach(span=>{span.style.color=""})
    document.querySelector('#about #right #inder_right #image1').style.borderColor=""
    document.querySelector('#about #right #inder_right #image2').style.borderColor=""
    document.querySelector('#about #right #inder_right #image3').style.borderColor=""
}
let Mode=()=>{
    var val = localStorage.getItem('BgChange')  === "true"
    if (val){
        DarkNav()
    }
    else{
        LightNav()
    }
}
Mode()
moon_icon.addEventListener('click',function(){
    localStorage.setItem('BgChange','true')
        Mode()
    })
sun_icon.addEventListener('click',function(){
    localStorage.setItem('BgChange','false')
    Mode()

})


