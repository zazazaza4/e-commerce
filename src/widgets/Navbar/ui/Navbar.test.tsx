import { fireEvent } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { createMatchMedia } from 'shared/lib/tests/createMediaQuery/createMediaQuery';

import { Navbar } from './Navbar';

import '@testing-library/jest-dom';

describe('Navbar component', () => {
  createMatchMedia(700);

  test('renders Navbar component with menu button', () => {
    const { getByTestId } = componentRender(<Navbar />);

    const menuButton = getByTestId('menu-button');
    expect(menuButton).toBeInTheDocument();
  });

  test('opens and closes drawer on menu button click', () => {
    const { getByTestId } = componentRender(<Navbar />);

    const menuButton = getByTestId('menu-button');
    fireEvent.click(menuButton);

    const drawer = getByTestId('my-drawer');
    expect(drawer).not.toHaveClass('MuiDrawer-paperAnchorTop');

    fireEvent.click(menuButton);
    expect(drawer).not.toHaveClass('MuiDrawer-paperAnchorTop');
  });
});
