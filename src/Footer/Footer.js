import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-right'>
                <div className='footer-social-media'>
                    <span><i className="fa-brands fa-facebook-f"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-linkedin-in"></i></span>
                    <span><i className="fa-brands fa-youtube"></i></span>
                </div>
                <h2>اشترك فى نشراتنا البريدية</h2>
                <div className='footer-email'>
                   
                    <input type='email' placeholder='البريد الالكترونى' />
                    <button>اشترك الأن</button>
                        
                </div>
            </div>

            <div className='footer-left'>
                <div className='footer-left-r'>
                    <h3>الرئيسية</h3>
                    <h3>بودكاست</h3>
                    <h3>مقالات</h3>
                </div>
                <div className='footer-left-l'>
                    <h3>كتاب إدراك</h3>
                    <h3>تلفزيون إدراك</h3>
                    <span style={{color:"transparent"}}>.</span>
                </div>
            </div>
        </div>
        <div className='copy-right'>
            <span>Copyright@Depax-2022-AllRights Reserved</span>
        </div>
    </div>
  )
}

export default Footer