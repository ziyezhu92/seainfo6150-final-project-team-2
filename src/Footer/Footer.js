import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <div>
        <div className={styles.info}>
            <div className={styles.subscribe}>
                <p>
                    Subscribe via Email
                </p>
                <p>
                    Subscribe to our email newsletter today to receive updates on the latest products and offers!
                </p>
                <p>
                    <input className={styles.emailInput} type='email' placeholder='Email Address'/>
                    <button className={styles.emailButton}>SUBSCRIBE</button>
                </p>
            </div>
            <div className={styles.phone}>
                <p>
                    +1 (206) 222 2222
                </p>
                <p>
                    vehicleMart@gmail.com
                </p>
                <p>
                    Find a store
                </p>
            </div>
            <div className={styles.contact}>
                <p>
                    CONTACT US
                </p>
                <p>
                    Ordering & Payment
                </p>
                <p>
                    Shipping
                </p>
                <p>
                    Returns
                </p>
                <p>
                    FAQ
                </p>
                <p>
                    Affiliates
                </p>
            </div>
            <div className={styles.about}>
                <p>
                    ABOUT
                </p>
                <p>
                    Work with us
                </p>
                <p>
                    Privacy policy
                </p>
                <p>
                    Terms & Conditions
                </p>
                <p>
                    Press enquiries
                </p>
            </div>
        </div>
        <div className={styles.footer}>
            @Company 2019
            <div className={styles.mediaShare}>
                <img src='/assets/img/icons/instagram.png' alt='instagram'/>
                <img src='/assets/img/icons/twitter.png' alt='twitter'/>
                <img src='/assets/img/icons/facebook.png' alt='facebook'/>
            </div>
        </div>
    </div>
);

export default Footer;
