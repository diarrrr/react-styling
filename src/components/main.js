import React from "react";
import './main.css';

function Mains () {
    return ( 
        <body>     
        <section id="about">
        <h3>About Me</h3>
        <div className="article">
        <p>
        Halo Perkenalkan nama saya Diar. Saat ini saya sedang belajar bahasa pemrogaman agar bisa menjadi
        seorang web development. Saya merupakan lulusan dari Universitas Jenderal Soedirman pada tahun 2020
        dengan progam studi D3 Bahasa dan Sastra Inggris.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt itaque blanditiis culpa quibusdam expedita error cumque doloremque non aut velit excepturi facere, laudantium laborum fuga rerum ipsa dolor? Earum!</p>
        </div>
        </section>
        <section id="project">
        <div>
            <div><h3 style={{margin: "50px"}}>Project</h3></div>
            <div className="project">
            <div className="card">
                <div className="thumb1"></div>
                <a>Some quick example text to build on the card title and make up the bulk of the card's content.</a>
            </div>
            <div className="card">
                <div className="thumb2"></div>
                <a>Some quick example text to build on the card title and make up the bulk of the card's content.</a>
            </div>
            <div className="card">
                <div className="thumb3"></div>
                <a>Some quick example text to build on the card title and make up the bulk of the card's content.</a>
            </div>
            <div className="card">
                <div className="thumb4"></div>
                <a>Some quick example text to build on the card title and make up the bulk of the card's content.</a>
            </div>
            <div className="card">
                <div className="thumb5"></div>
                <a>Some quick example text to build on the card title and make up the bulk of the card's content.</a>
            </div>
        </div>
        </div>
        </section>
        </body>
    )
};

export default Mains