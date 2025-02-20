let ResponsiveNavBar = () => {
    var menue_icon = document.querySelector('#menue')
    var cross_icon = document.querySelector("#cross_icon")
    var menue_box = document.querySelector(".navigation")

    menue_icon.addEventListener("click", () => {
        menue_box.classList.remove('nav_hidden')
        cross_icon.style.display = "block"
    })
    cross_icon.addEventListener('click', () => {
        cross_icon.style.display = "none"
        menue_box.classList.add('nav_hidden')
    })
}

ResponsiveNavBar()


let GoToTopFunction = () => {
    var Button = document.querySelector('#topbtn')
    Button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}
GoToTopFunction()



// Make the  nav Stickey 
window.addEventListener('scroll', function () {

    var nav = document.querySelector('.second-nav')
    if (window.pageYOffset > 300) {
        nav.classList.add('fixed')

    }
    else {
        nav.classList.remove('fixed')
    }
})



// Images Show and Hidden Fuctionality

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    const removeBtn = document.querySelector("#remove_images_btn");
    const showBtn = document.querySelector("#Show_images_btn");

    // Store original image sources in localStorage if not already stored
    if (!localStorage.getItem('image_sources')) {
        const imgSources = Array.from(images).map(img => img.src);
        localStorage.setItem('image_sources', JSON.stringify(imgSources));
    }

    function hideImages() {
        images.forEach(img => {
            img.src = ""
            removeBtn.style.display = "none"
            showBtn.style.display = "block"
        }
        );
        // Hide all images
        localStorage.setItem('Image_remove', 'true'); // Save state
    }

    function showImages() {
        const storedSources = JSON.parse(localStorage.getItem('image_sources'));
        if (storedSources) {
            images.forEach((img, index) => img.src = img.alt); // Restore original sources
            removeBtn.style.display = "block"
            showBtn.style.display = "none"
        }
        localStorage.setItem('Image_remove', 'false'); // Save state
    }

    // Apply stored visibility state on page load
    if (localStorage.getItem('Image_remove') === 'true') {
        hideImages();
    }

    removeBtn.addEventListener('click', hideImages);
    showBtn.addEventListener('click', showImages);
});





// Background_Color Part

var background_color = document.querySelector("#background_color");
var bg_color_box = document.querySelector(".background_colors_box");
var counter = true;
background_color.addEventListener('click', function () {
    if (counter) {
        bg_color_box.style.display = "flex"
        counter = false
    }
    else {
        bg_color_box.style.display = "none"
        counter = true

    }

})

const HomePage = () => {

    const Backround_Color_One = () => {
        let HeaderFunction = () => {
            document.querySelectorAll('nav').forEach(nav => { nav.style.backgroundColor = "rgb(232 250 255)" })
            document.querySelector('#first-nav ').style.backgroundColor = '#42abcb'
            document.querySelectorAll('nav .navigation a i').forEach(nav => { nav.style.color = "#42abcb" })
            document.querySelectorAll('nav .navigation #sub_nav li').forEach(li => {
                li.style.borderColor = '#42abcb';
                li.style.backgroundColor = '#fff'
                li.style.color = '#000'
            })

            document.querySelectorAll('nav .navigation #sub_nav li i').forEach(i => {
                i.style.color = '#42abcb'

            })
            document.querySelectorAll("main header #header_banner h1").forEach(h1 => { h1.style.color = "000" })
            document.querySelectorAll('main header #header_banner button').forEach(btn => {
                btn.style.color = '#000'
                btn.style.backgroundColor = '#fff'
                btn.style.borderColor = '#42abcb'
            })

        }
        let AboutSection = () => {
            document.querySelector('#about ').style.backgroundColor = 'rgb(232 250 255)'
            document.querySelector('#about h1 ').style.color = '#000'
            document.querySelectorAll('#about p').forEach(p => { p.style.color = '#000' })
            document.querySelectorAll('#about p span').forEach(p => { p.style.color = '#42abcb' })
            document.querySelector('#about #about_btn_div #about_btn').style.borderColor = '#42abcb'
            document.querySelector('#about #about_btn_div #about_btn').style.backgroundColor = '#fff'
            document.querySelector('#about #about_btn_div #about_btn').style.color = '#000'
            document.querySelectorAll('#right #inder_right div').forEach(div => { div.style.borderColor = "#42abcb" })

        }
        let ProgramSection = () => {
            document.querySelector("#program_container").style.backgroundColor = 'rgb(232 250 255)'
            document.querySelector("#program_container h1").style.color = '#000'
            document.querySelectorAll("#program_container #program_1 ").forEach(box => { box.style.zIndex = "9" })
            document.querySelector("#more_program_container #more_program ").style.borderColor = "#42abcb"
            document.querySelector("#more_program_container #more_program ").style.color = "#000"
            document.querySelector("#more_program_container #more_program ").style.backgroundColor = "#fff";

            document.querySelectorAll(" #program_1 #eroll_btn ").forEach(btn => {
                btn.style.backgroundColor = "#fff"
                btn.style.borderColor = "#42abcb"
                btn.style.color = "#000"
                btn.style.backgroundColor = "#fff";
                btn.style.backgroundColor = "#fff"
            })
            document.querySelectorAll("#program_1 span").forEach(span => { span.style.backgroundColor = '#42abcb' })
        }
        let Choos_us_Section = () => {
            document.querySelectorAll(' #Choos_us_container #inner_container h2').forEach(h2 => { h2.style.color = "#42abcb" })
            document.querySelectorAll(' #Choos_us_container #inner_container p').forEach(p => { p.style.color = "#000" })
            document.querySelector(' #Choos_us_container ').style.backgroundColor = "rgb(232 250 255)"
            document.querySelector(' #Choos_us_container h1').style.color = "#000"
        }
        let FooterSection = () => {
            document.querySelector('.footer').style.backgroundColor = 'rgb(232 250 255)'
            document.querySelector('.footer').style.backgroundColor = 'rgb(232 250 255)'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#fff' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#fff' })
        }
        document.querySelector('#en_roll_btn a ').style.borderColor = "#42abcb"
        document.querySelector('#en_roll_btn a ').style.backgroundColor = "#fff"
        document.querySelector('#en_roll_btn a ').style.color = "#000"
        document.querySelector('#go_to_top_btn button').style.borderColor = '#42abcb'
        document.querySelector('#go_to_top_btn button').style.backgroundColor = "#fff"
        document.querySelector('#go_to_top_btn button').style.color = "#000"
        HeaderFunction()
        AboutSection()
        ProgramSection()
        Choos_us_Section()
        FooterSection()

    }


    const Backround_Color_Two = () => {
        let HeaderFunction = () => {
            document.querySelectorAll('nav').forEach(nav => { nav.style.backgroundColor = "rgb(255 241 224)" })
            document.querySelector('#first-nav ').style.backgroundColor = '#ffab4b'
            document.querySelectorAll('nav .navigation a i').forEach(nav => { nav.style.color = "#ffab4b" })
            document.querySelectorAll('nav .navigation #sub_nav li').forEach(li => {
                li.style.borderColor = '#ffab4b';
                li.style.backgroundColor = '#fff'
                li.style.color = '#000'
            })

            document.querySelectorAll('nav .navigation #sub_nav li i').forEach(i => {
                i.style.color = '#ffab4b'

            })
            document.querySelectorAll("main header #header_banner  h1").forEach(h1 => { h1.style.color = "#000" })
            document.querySelectorAll('main header #header_banner button').forEach(btn => {
                btn.style.color = '#000'
                btn.style.backgroundColor = '#fff'
                btn.style.color = '#000'
                btn.style.borderColor = '#ffab4b'
            })

        }
        let AboutSection = () => {
            document.querySelector('#about ').style.backgroundColor = 'rgb(255 241 224)'
            document.querySelector('#about h1 ').style.color = '#000'
            document.querySelectorAll('#about p').forEach(p => { p.style.color = '#000' })
            document.querySelectorAll('#about p span').forEach(p => { p.style.color = '#ffab4b' })
            document.querySelector('#about #about_btn_div #about_btn').style.borderColor = '#ffab4b'
            document.querySelector('#about #about_btn_div #about_btn').style.backgroundColor = '#fff'
            document.querySelector('#about #about_btn_div #about_btn').style.color = '#000'
            document.querySelectorAll('#right #inder_right div').forEach(div => { div.style.borderColor = "#ffab4b" })

        }
        let ProgramSection = () => {
            document.querySelector("#program_container").style.backgroundColor = 'rgb(255 241 224)'
            document.querySelector("#program_container h1").style.color = '#000'
            document.querySelectorAll("#program_container #program_1 ").forEach(box => { box.style.zIndex = "9" })
            document.querySelector("#more_program_container #more_program ").style.borderColor = "#ffab4b"
            document.querySelector("#more_program_container #more_program ").style.color = "#000"
            document.querySelector("#more_program_container #more_program ").style.backgroundColor = "#fff";

            document.querySelectorAll("#program_container #program_1 #eroll_btn ").forEach(btn => {
                btn.style.backgroundColor = "#fff"
                btn.style.borderColor = "#ffab4b"
                btn.style.color = "#000"
                btn.style.backgroundColor = "#fff";
                btn.style.backgroundColor = "#fff"
            })
            document.querySelectorAll("#program_container #program_1 span").forEach(span => { span.style.backgroundColor = '#ffab4b' })
        }
        let Choos_us_Section = () => {
            document.querySelectorAll(' #Choos_us_container #inner_container h2').forEach(h2 => { h2.style.color = "#ffab4b" })
            document.querySelectorAll(' #Choos_us_container #inner_container p').forEach(p => { p.style.color = "#000" })
            document.querySelector(' #Choos_us_container ').style.backgroundColor = "rgb(255 241 224)"
            document.querySelector(' #Choos_us_container h1').style.color = "#000"
        }
        let FooterSection = () => {
            document.querySelector('.footer').style.backgroundColor = 'rgb(255 241 224)'
            document.querySelector('.footer').style.backgroundColor = 'rgb(255 241 224)'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#000' })
        }
        document.querySelector('#en_roll_btn a ').style.borderColor = "#ffab4b"
        document.querySelector('#en_roll_btn a ').style.backgroundColor = "#fff"
        document.querySelector('#en_roll_btn a ').style.color = "#000"
        document.querySelector('#go_to_top_btn button').style.borderColor = "#ffab4b"
        document.querySelector('#go_to_top_btn button').style.backgroundColor = "#fff"
        document.querySelector('#go_to_top_btn button').style.color = "#000"

        HeaderFunction()
        AboutSection()
        ProgramSection()
        Choos_us_Section()
        FooterSection()

    }

    const Backround_Color_Three = () => {
        let HeaderFunction = () => {
            document.querySelectorAll('nav').forEach(nav => { nav.style.backgroundColor = "rgb(231 255 229)" })
            document.querySelector('#first-nav ').style.backgroundColor = '#63b256'
            // document.querySelectorAll('#first-nav span a ').forEach(txt=>txt.style.color="#000")
            document.querySelectorAll('nav .navigation a i').forEach(nav => { nav.style.color = "#63b256" })
            document.querySelectorAll('nav .navigation #sub_nav li').forEach(li => {
                li.style.borderColor = '#63b256';
                li.style.backgroundColor = '#fff'
                li.style.color = '#000'
            })

            document.querySelectorAll('nav .navigation #sub_nav li i').forEach(i => {
                i.style.color = '#63b256'

            })
            document.querySelectorAll("main header #header_banner  h1").forEach(h1 => { h1.style.color = "#000" })
            document.querySelectorAll('main header #header_banner button').forEach(btn => {

                btn.style.color = '#000'
                btn.style.borderColor = '#63b256'
            })

        }
        let AboutSection = () => {
            document.querySelector('#about ').style.backgroundColor = 'rgb(231 255 229)'
            document.querySelector('#about h1 ').style.color = '#000'
            document.querySelectorAll('#about p').forEach(p => { p.style.color = '#000' })
            document.querySelectorAll('#about p span').forEach(p => { p.style.color = '#63b256' })
            document.querySelector('#about #about_btn_div #about_btn').style.borderColor = '#63b256'
            document.querySelector('#about #about_btn_div #about_btn').style.backgroundColor = '#fff'
            document.querySelector('#about #about_btn_div #about_btn').style.color = '#000'
            document.querySelectorAll('#right #inder_right div').forEach(div => { div.style.borderColor = "#63b256" })
        }
        let ProgramSection = () => {
            document.querySelector("#program_container").style.backgroundColor = 'rgb(231 255 229)'
            document.querySelector("#program_container h1").style.color = '#000'
            document.querySelectorAll("#program_container #program_1 ").forEach(box => { box.style.zIndex = "9" })
            document.querySelector("#more_program_container #more_program ").style.borderColor = "#63b256"
            document.querySelector("#more_program_container #more_program ").style.color = "#000"
            document.querySelector("#more_program_container #more_program ").style.backgroundColor = "#fff";

            document.querySelectorAll("#program_container #program_1 #eroll_btn ").forEach(btn => {
                btn.style.backgroundColor = "#fff"
                btn.style.borderColor = "#63b256"
                btn.style.color = "#000"
                btn.style.backgroundColor = "#fff";
                btn.style.backgroundColor = "#fff"
            })
            document.querySelectorAll("#program_container #program_1 span").forEach(span => { span.style.backgroundColor = '#63b256' })
        }
        let Choos_us_Section = () => {
            document.querySelectorAll(' #Choos_us_container #inner_container h2').forEach(h2 => { h2.style.color = "#63b256" })
            document.querySelectorAll(' #Choos_us_container #inner_container p').forEach(p => { p.style.color = "#000" })
            document.querySelector(' #Choos_us_container ').style.backgroundColor = "rgb(231 255 229)"
            document.querySelector(' #Choos_us_container h1').style.color = "#000"
        }
        let FooterSection = () => {
            document.querySelector('.footer').style.backgroundColor = '#63b256'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#000' })
        }
        document.querySelector('#en_roll_btn a ').style.borderColor = "#63b256"
        document.querySelector('#en_roll_btn a ').style.backgroundColor = "#fff"
        document.querySelector('#en_roll_btn a ').style.color = "#000"
        document.querySelector('#go_to_top_btn button ').style.borderColor = "#63b256"
        document.querySelector('#go_to_top_btn button  ').style.backgroundColor = "#fff"
        document.querySelector('#go_to_top_btn button ').style.color = "#000"
        HeaderFunction()
        AboutSection()
        ProgramSection()
        Choos_us_Section()
        FooterSection()

    }


    var button1 = document.querySelector("#button-1");
    var button2 = document.querySelector("#button-2");
    var button3 = document.querySelector("#button-3");



    button1.addEventListener('click', () => {
        Backround_Color_One()
        console.log('Hellow');

    })
    button2.addEventListener('click', () => {
        Backround_Color_Three()

    })
    button3.addEventListener('click', () => {
        Backround_Color_Two()

    })

}
HomePage()

const AboutPage = () => {

    const AboutColor_1 = () => {
        document.querySelector('body').style.backgroundColor = 'rgb(232, 250, 255)'
        let Constainer_1 = () => {
            document.querySelector('#header_banner span').style.backgroundColor = "#42abcb"
            document.querySelector('#about_main').style.backgroundColor = "rgb(232, 250, 255)"
            document.querySelector('#container-1 #left ').style.backgroundColor = "rgb(232, 250, 255)"
            document.querySelectorAll('#container-1 #left h2 ').forEach(h2 => { h2.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p ').forEach(p => { p.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p span ').forEach(p => { p.style.color = "#42abcb" })
            document.querySelector('#container-1 #main_text ').style.color = "#000"
        }
        let Footer = () => {
            document.querySelector('.footer').style.backgroundColor = '#42abcb'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#000' })
        }

        Constainer_1()
        Footer()
    }


    const AboutColor_2 = () => {
        document.querySelector('body').style.backgroundColor = 'rgb(231, 255, 229)'

        let Constainer_1 = () => {
            document.querySelector('#header_banner span').style.backgroundColor = "#63b256"
            document.querySelector('#about_main #header_banner h1 ').style.color = "#fff"
            document.querySelector('#about_main').style.backgroundColor = "rgb(231, 255, 229)"
            document.querySelector('#container-1 #left ').style.backgroundColor = "rgb(231, 255, 229)"
            document.querySelectorAll('#container-1 #left h2 ').forEach(h2 => { h2.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p ').forEach(p => { p.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p span ').forEach(p => { p.style.color = "#63b256" })
            document.querySelector('#container-1 #main_text ').style.color = "#000"
        }
        let Footer = () => {
            document.querySelector('.footer').style.backgroundColor = '#63b256'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#fff' })
        }

        Constainer_1()
        Footer()
    }
    const AboutColor_3 = () => {
        document.querySelector('body').style.backgroundColor = 'rgb(255, 241, 224)'
        let Constainer_1 = () => {
            document.querySelector('#header_banner span').style.backgroundColor = "#ffab4b"
            document.querySelector(' #header_banner #about_h1 ').style.color = "#fff"
            document.querySelector('#about_main').style.backgroundColor = "rgb(255, 241, 224)"
            document.querySelector('#container-1 #left ').style.backgroundColor = "rgb(255, 241, 224)"
            document.querySelectorAll('#container-1 #left h2 ').forEach(h2 => { h2.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p ').forEach(p => { p.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p span ').forEach(p => { p.style.color = "#ffab4b" })
            document.querySelector('#container-1 #main_text ').style.color = "#000"
        }
        let Footer = () => {
            document.querySelector('.footer').style.backgroundColor = '#ffab4b'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
        }

        Constainer_1()
        Footer()
    }
    document.querySelector('#button-1').addEventListener('click', () => {
        AboutColor_1()
    })
    document.querySelector('#button-2').addEventListener('click', () => {
        AboutColor_2()
    })

    document.querySelector('#button-3').addEventListener('click', () => {
        AboutColor_3()
    })

}

AboutPage()

const ProgramPage = () => {
    let ProgramPageColor_1 = () => {

        document.querySelectorAll('#container-1 #program_1 span').forEach(span => {
            span.style.backgroundColor = '#42abcb'
        })
        document.querySelectorAll('#container-1 #program_1 #eroll_btn').forEach(btn => {
            btn.style.borderColor = '#42abcb'
        })
        document.querySelector('.footer').style.backgroundColor = '#42abcb'
        document.querySelectorAll('.footer h2').forEach(h2 => h2.style.color = '#000')
        document.querySelectorAll('.footer p').forEach(p => p.style.color = '#000')

    }
    let ProgramPageColor_2 = () => {

        document.querySelectorAll('#container-1 #program_1 span').forEach(span => {
            span.style.backgroundColor = '#63b256'
        })
        document.querySelectorAll('#container-1 #program_1 #eroll_btn').forEach(btn => {
            btn.style.borderColor = '#63b256'
        })
        document.querySelector('.footer').style.backgroundColor = '#63b256'
        document.querySelectorAll('.footer h2').forEach(h2 => h2.style.color = '#000')
    }
    let ProgramPageColor_3 = () => {

        document.querySelectorAll('#container-1 #program_1 span').forEach(span => {
            span.style.backgroundColor = '#ffab4b'
        })
        document.querySelectorAll('#container-1 #program_1 #eroll_btn').forEach(btn => {
            btn.style.borderColor = '#ffab4b'
        })
        document.querySelector('.footer').style.backgroundColor = '#ffab4b'
        document.querySelectorAll('.footer h2').forEach(h2 => h2.style.color = '#000')
    }

    document.querySelector("#button-1").addEventListener("click", ProgramPageColor_1)
    document.querySelector("#button-2").addEventListener("click", ProgramPageColor_2)
    document.querySelector("#button-3").addEventListener("click", ProgramPageColor_3)
}

ProgramPage()


let Input_text_form_keybord = () => {
    var key_board_button = document.querySelector(".key_board_button");
    var buttons = document.querySelectorAll(".keyboard button");
    var Chat_keybord = document.querySelector('.keyboard');
    var inputs = document.querySelectorAll("input");
    var textarea = document.querySelector("textarea");
    var delete_Btn = document.querySelector(".delete");
    var key_counter = true;

    var activeInput = null; // Track the currently active input field

    // Detect the focused input field
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            activeInput = input; // Set the active input field
        });
    });

    // Keyboard button click functionality
    buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (activeInput) {
                var button_val = event.target.innerHTML;
                activeInput.value += button_val; // Append to the active input field
            }
        });
    });


    textarea.addEventListener('focus', () => {
        activeInput = textarea
    })

    delete_Btn.addEventListener('click', function () {
        string = string.substring(0, string.length - 1);
        activeInput.value = string;

    })

    key_board_button.addEventListener("click", function () {
        console.log('Hellow');

        if (key_counter) {
            Chat_keybord.classList.remove('Chat_keybord_display_none')
            key_counter = false;


        }
        else {
            Chat_keybord.classList.add('Chat_keybord_display_none')
            key_counter = true;
        }
    })
}


Input_text_form_keybord()