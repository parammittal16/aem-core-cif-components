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
import React, { useState, useMemo, useCallback } from 'react';
import { func, number, shape, object, string } from 'prop-types';
import { Price } from '@magento/peregrine';
import classes from './product.css';

import { transparentPlaceholder } from '../../utils/transparentPlaceholder';
import makeUrl from '../../utils/makeUrl';
import Kebab from './kebab';
import Section from './section';

const imageWidth = 80;
const imageHeight = 100;

const Product = props => {
    const { beginEditItem, item, removeItemFromCart } = props;

    const { product = {}, quantity = 0, id = '' } = item;
    const { thumbnail, name, price } = product;
    const { value, currency } = price.regularPrice.amount;

    const [isLoading, setIsLoading] = useState(false);

    const productImage = useMemo(() => {
        const src =
            thumbnail && thumbnail.url
                ? makeUrl(thumbnail.url, { type: 'image-product', width: imageWidth, height: imageHeight })
                : transparentPlaceholder;
        return <img alt={name} className={classes.image} placeholder={transparentPlaceholder} src={src} />;
    });

    const handleEditItem = useCallback(() => {
        beginEditItem(item);
    }, [beginEditItem, item]);

    const handleRemoveItem = useCallback(() => {
        setIsLoading(true);
        removeItemFromCart(id);
    }, [setIsLoading, id, removeItemFromCart]);

    const mask = isLoading ? <div className={classes.mask} /> : null;
    return (
        <li className={classes.root} data-testid="cart-item">
            {productImage}
            <div className={classes.name}>{name}</div>
            <div className={classes.quantity}>
                <div className={classes.quantityRow}>
                    <span>{quantity}</span>
                    <span className={classes.quantityOperator}>{'×'}</span>
                    <span className={classes.price}>
                        <Price currencyCode={currency} value={value} />
                    </span>
                </div>
            </div>
            {mask}
            <Kebab>
                <Section text="Edit item" onClick={handleEditItem} icon="Edit2" />
                <Section text="Remove item" onClick={handleRemoveItem} icon="Trash" />
            </Kebab>
        </li>
    );
};

Product.propTypes = {
    removeItemFromCart: func.isRequired,
    beginEditItem: func.isRequired,
    item: shape({
        id: string.isRequired,
        quantity: number.isRequired,
        product: shape({
            name: string.isRequired,
            price: shape({
                regularPrice: shape({
                    amount: shape({
                        value: number.isRequired,
                        currency: string.isRequired
                    }).isRequired
                }).isRequired
            }).isRequired,
            image: object
        })
    })
};

export default Product;
