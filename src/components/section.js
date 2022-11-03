import React from "react";
import './section.css';

function Sections () {
    return (   
    <div>         
    <section className="contact" id="contact">
    <div className="contacttext">
        <p>Nama Lengkap</p>
        <div><input className="small" type="text"/></div>
    </div>
    <div className="contacttext">
        <p>Email</p>
        <div><input className="small" type="text"/></div>
    </div>
    <div className="contacttext">
        <p>Pesan</p>
        <div><input className="xl" type="text"/></div>
    </div>
    <input className="btn" type="submit" value="send"/>
</section>
 </div>
    )
};

export default Sections