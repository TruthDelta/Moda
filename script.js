function changeImage() {
    const img1 = document.getElementById('myImage1');
    const img2 = document.getElementById('myImage2');
    const img3 = document.getElementById('myImage3');
    const currentSrc1 = img1.getAttribute("src");
    const currentSrc2 = img2.getAttribute("src");
    const currentSrc3 = img3.getAttribute("src");

    if (currentSrc1 === 'imagens/roupa 1.png') { 
        img1.setAttribute("src", "imagens/roupa 4.png"); 
        img1.setAttribute("alt", "roupa4");
    } else { 
        img1.setAttribute("src", "imagens/roupa 1.png");
        img1.setAttribute("alt", "roupa1");
    }

    if (currentSrc2 === 'imagens/roupa 2.png') { 
        img2.setAttribute("src", "imagens/roupa 5.png"); 
        img2.setAttribute("alt", "roupa5");
    } else { 
        img2.setAttribute("src", "imagens/roupa 2.png");
        img2.setAttribute("alt", "roupa2");
    }

    if (currentSrc3 === 'imagens/roupa 3.png') { 
        img3.setAttribute("src", "imagens/roupa 6.png"); 
        img3.setAttribute("alt", "roupa6");
    } else { 
        img3.setAttribute("src", "imagens/roupa 3.png");
        img3.setAttribute("alt", "roupa3");
    }
}

