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

package com.adobe.cq.commerce.core.components.models.productcarousel;

import java.util.List;

import javax.annotation.Nonnull;

import org.osgi.annotation.versioning.ProviderType;

import com.adobe.cq.commerce.core.components.models.productlist.ProductListItem;

@ProviderType
public interface ProductCarousel {

    /**
     * returns the product list for Product Carousel
     * 
     * @return {@link List} of {@link ProductListItem}s
     */
    @Nonnull
    default List<ProductListItem> getProducts() {
        throw new UnsupportedOperationException();
    }
}
