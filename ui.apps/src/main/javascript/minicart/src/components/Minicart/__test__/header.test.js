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
import { render, fireEvent } from '@testing-library/react';

import Header from '../header';

describe('<Header>', () => {
    it('renders the component', () => {
        const { asFragment } = render(<Header handleCloseCart={jest.fn()} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('calls the handler method when the close button is clicked', () => {
        const mockFn = jest.fn();

        const { getByRole } = render(<Header handleCloseCart={mockFn} />);

        fireEvent.click(getByRole('button'));

        expect(mockFn.mock.calls.length).toEqual(1);
    });
});
