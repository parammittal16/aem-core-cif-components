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
import { bool, func, shape, string } from 'prop-types';

import CheckoutButton from './checkoutButton';
import classes from './cart.css';

const Cart = props => {
    const { beginCheckout, ready, submitting } = props;

    const disabled = submitting || !ready;

    return (
        <div className={classes.root}>
            <CheckoutButton disabled={disabled} onClick={beginCheckout} />
        </div>
    );
};

Cart.propTypes = {
    beginCheckout: func.isRequired,
    classes: shape({
        root: string
    }),
    ready: bool.isRequired,
    submitting: bool.isRequired
};

export default Cart;
