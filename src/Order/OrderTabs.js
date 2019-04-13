import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';
import Error from "../Error/Error";
import { Link } from 'react-router-dom';

const OrderTabs = ({cur, selectedOptions, product, productImg}) => {

    const tabs = [{key: 1, value: "Car"}, {key:2, value: "Exterior"}, {key:3, value: "Interior"},
        {key: 4, value: "Accessories"}, {key: 5, value: "Payment"}];
    const requiredOptions = ['color', 'numSeats', 'interiorFabricColor', 'dashboardColor', 'dashboardLightsColor',
        'hubcapsMaterial', 'numExhausts', 'spareTire', 'engine', 'floormatsColor'];
    return (
        <div>

            <div className={styles.orderTabs}>
                {
                    tabs.map(element =>
                        <Link onClick={
                            event => {
                                if (element.key === 5) {
                                    if (!selectedOptions) {
                                        event.preventDefault();
                                        alert('showing an alert');
                                        return;
                                    }
                                    let unselectedOptions = [];
                                    requiredOptions.forEach(element => {
                                        if (!selectedOptions[element]) {
                                            unselectedOptions.push(element);
                                        }
                                    });
                                    if (unselectedOptions.length > 0) {
                                        event.preventDefault();
                                        alert('Please select value for following required options first: '
                                            + unselectedOptions.toString());
                                    }
                                }
                            }
                        }
                              to={`/order/${element.key}`} key={element.key}
                              className={cur === element.key ? styles.activedTab : styles.orderTab}>
                                {element.value}
                        </Link>
                    )
                }
            </div>
            {
                (!product)
                    ? <Error error="Please select a Vehicle first!"/>
                    : cur === 5
                    ? ""
                    : <div>
                        <div className={styles.proImg}>
                            <img src={productImg} alt='productImg'/>
                        </div>
                        <div>
                            Show all selected options of product["productId": "{product.id}"] for testing
                            <ul>
                                {
                                    Object.keys(selectedOptions).map((key) => {
                                        return (
                                            <li key={key}>{key}: {selectedOptions[key]}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
            }
        </div>
    );
};
OrderTabs.propTypes = {
    cur: PropTypes.string.isRequired
};
export default OrderTabs;
