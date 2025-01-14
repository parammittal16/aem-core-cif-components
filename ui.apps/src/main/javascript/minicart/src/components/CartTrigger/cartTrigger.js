/*******************************************************************************
 *
 *    Copyright 2019 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import CartCounter from './cartCounter';

import Icon from '../Icon';
import { ShoppingCart as ShoppingCartIcon } from 'react-feather';
import classes from './cartTrigger.css';

const parentEl = document.querySelector('.header__cartTrigger');

const Trigger = props => {
    const { cartQuantity, handler } = props;
    const iconColor = 'rgb(var(--venia-text))';
    const svgAttributes = {
        stroke: iconColor
    };

    if (cartQuantity > 0) {
        svgAttributes.fill = iconColor;
    }

    const button = (
        <button className={classes.root} aria-label="Toggle mini cart" onClick={() => handler(true)}>
            <Icon src={ShoppingCartIcon} attrs={svgAttributes} />
            <CartCounter counter={cartQuantity ? cartQuantity : 0} />
        </button>
    );

    return ReactDOM.createPortal(button, parentEl);
};

Trigger.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string
    }),
    handler: PropTypes.func.isRequired,
    cartQuantity: PropTypes.number
};

export default Trigger;
