import React from 'react';
import "./Footer.css";
import $ from 'jquery';
import {isMobile} from 'react-device-detect';
import Swal from "sweetalert2"

function coming() {
    let timerInterval
    Swal.fire({
        title: 'تأتي قريباً',
        timer: 5000,
        // timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()

        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })


    if (isMobile) {
        $(".navbar-toggler").trigger("click")
    }
}
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-right'>
                    <div className='footer-social-media'>
                        <a href='https://www.facebook.com/edrakmu/' style={{ color: "#fff" }} target="_blank">
                            <span><i className="fa-brands fa-facebook-f"></i></span>
                        </a>
                        <a href='https://twitter.com/EdrakMu' style={{ color: "#fff" }} target="_blank">
                            <span><i className="fa-brands fa-twitter"></i></span>
                        </a>
                        <a href='https://youtube.com/channel/UCGYYfQjb46UlIHP1-a7tLjg' style={{ color: "#fff" }} target="_blank">
                            <span><i className="fa-brands fa-youtube"></i></span>
                        </a>
                    </div>
                    <h2>اشترك فى نشراتنا البريدية</h2>
                    <div className='footer-email'>

                        <input type='email' placeholder='البريد الالكترونى' />
                        <button onClick={()=>{coming()}}>اشترك الأن</button>

                    </div>
                </div>

                <div className='footer-left'>
                    <div className='footer-left-r'>
                        <a href='/' style={{color : "#fff" , textDecoration : "none"}}><h3 >الرئيسية</h3> </a>
                        <h3 onClick={()=>{coming()}}>بودكاست</h3>
                        <a href='/articles' style={{color : "#fff" , textDecoration : "none"}}><h3>مقالات</h3> </a>
                    </div>
                    <div className='footer-left-l'>
                        <h3 onClick={()=>{coming()}}>كتاب إدراك</h3>
                        <h3 onClick={()=>{coming()}}>تلفزيون إدراك</h3>
                        <span style={{ color: "transparent" }}>.</span>
                    </div>
                </div>
            </div>
            <div className='copy-right'>
                <span>Copyright@<a href='https://depax.tech/' target="_blank" style={{ color: "#fff" }}>Depax</a>-2022-All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer