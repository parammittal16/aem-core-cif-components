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
import React, { Fragment } from 'react';
import { bool, shape, string } from 'prop-types';

const ShippingMethodSummary = props => {
    const { classes, hasShippingMethod, shippingMethod } = props;

    if (!hasShippingMethod) {
        return <span className={classes.informationPrompt}>Specify Shipping Method</span>;
    }

    return (
        <Fragment>
            <strong>{shippingMethod.carrier_title}</strong>
        </Fragment>
    );
};

ShippingMethodSummary.propTypes = {
    classes: shape({
        informationPrompt: string
    }),
    hasShippingMethod: bool,
    shippingMethod: shape({
        title: string
    }).isRequired
};

export default ShippingMethodSummary;
