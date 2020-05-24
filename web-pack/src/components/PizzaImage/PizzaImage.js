import React from 'react';
import style from './PizzaImage.css';
import PizzaImage from '../../asstes/pizza.jpg';

const pizzaImage = (props) => {
    return (
        <div className={style.PizzaImage}>
            <img src={PizzaImage} className={style.PizzaImg} />
        </div>
    );
};

export default pizzaImage;
