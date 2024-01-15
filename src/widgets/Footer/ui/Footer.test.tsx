import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Footer } from './Footer';

describe('Footer component', () => {
  test('renders Footer component with correct content', () => {
    const { getByText } = componentRender(<Footer />);

    const helpSectionTitle = getByText(/footer\.help\.title/i);
    expect(helpSectionTitle).toBeInTheDocument();

    const aboutSectionTitle = getByText(/footer\.about\.title/i);
    expect(aboutSectionTitle).toBeInTheDocument();

    const infoSectionTitle = getByText(/footer\.info\.title/i);
    expect(infoSectionTitle).toBeInTheDocument();
  });
});
