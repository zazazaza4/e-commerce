import { selectByTestId } from '../../helpers/selectByTestId';

describe('MainPage Component', () => {
  const mainSelector: string = selectByTestId('MainPage');

  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the main page with the title', () => {
    cy.get(mainSelector).should('exist');
    cy.get(selectByTestId('MainPageTitle')).should('exist');
  });

  it('should navigate to the products page when a banner is clicked', () => {
    cy.get(mainSelector).first().click();
    cy.url().should('include', '/products');
  });
});
