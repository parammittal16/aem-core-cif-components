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
import { List } from '@magento/peregrine';
import { array, func, shape, string } from 'prop-types';

import Product from './product';
import classes from './productList.css';

const ProductList = props => {
    const { cartItems, removeItemFromCart, beginEditItem } = props;

    return (
        <List
            classes={classes}
            render="ul"
            items={cartItems}
            getItemKey={item => item.id}
            renderItem={itemProps => {
                return (
                    <Product
                        item={itemProps.item}
                        removeItemFromCart={removeItemFromCart}
                        beginEditItem={beginEditItem}
                    />
                );
            }}></List>
    );
};

ProductList.propTypes = {
    cartItems: array,
    classes: shape({
        root: string
    }),
    currencyCode: string,
    beginEditItem: func.isRequired,
    removeItemFromCart: func.isRequired
};

export default ProductList;
