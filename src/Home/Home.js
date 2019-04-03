import React from 'react';
import styles from './Home.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activedSlide: 1
        };
    }

    changeSlide(goNext) {
        let curSlide = this.state.activedSlide;
        this.setState({
            activedSlide: goNext ? curSlide === 3 ? 1 : curSlide + 1
                : curSlide === 1 ? 3 : curSlide - 1
        });
    }

    render() {
        return (
            <div className={styles.slideshow}>
                <div className={this.state.activedSlide === 1 ? styles.active : styles.slide}>
                    <img src="/assets/img/product/limousine-lg.jpg" alt='slide1'/>
                    <div className={styles.advertisement}>
                        <div className={styles.adTitle}>
                            Enjoy Our BlackFriday sale
                        </div>
                        <div className={styles.adEmphasize}>
                            NOW
                        </div>
                        <Link to='/products/'>
                            <button className={styles.adButton}>Shop Now</button>
                        </Link>
                    </div>
                </div>

                <div className={this.state.activedSlide === 2 ? styles.active : styles.slide}>
                    <img src="/assets/img/product/jeep-lg.jpg" alt='slide2'/>
                    <div className={styles.advertisement}>
                        <div className={styles.adTitle}>
                            All you want is a
                        </div>
                        <div className={styles.adEmphasize}>
                            JEEP
                        </div>
                        <Link to='/products/jeep/1c2d9303a50f'>
                            <button className={styles.adButton}>Shop JEEP Now</button>
                        </Link>
                    </div>
                </div>

                <div className={this.state.activedSlide === 3 ? styles.active : styles.slide}>
                    <img src="/assets/img/product/sportsCar-lg.jpg" alt='slide3'/>
                    <div className={styles.advertisement}>
                        <div className={styles.adTitle}>
                            Need more information?
                        </div>
                        <div className={styles.adEmphasize}>
                            Contact Us
                        </div>
                        <Link to='/contact/'>
                            <button className={styles.adButton}>Contact</button>
                        </Link>
                    </div>
                </div>

                <span className={styles.prev} onClick={() => this.changeSlide(false)}>&#10094;</span>
                <span className={styles.next} onClick={() => this.changeSlide(true)}>&#10095;</span>
            </div>)
    }
};
Home.propTypes = {
    activedSlide: PropTypes.number
};
export default Home;
