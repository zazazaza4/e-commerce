import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routings', () => {
  it('Main', () => {
    cy.visit('/');
    cy.get(selectByTestId('MainPage')).should('exist');
  });

  it('About', () => {
    cy.visit('/about');
    cy.get(selectByTestId('ComingSoonPage')).should('exist');
  });

  it('NotFoundPage', () => {
    cy.visit('/dadaadda');
    cy.get(selectByTestId('NotFoundPage')).should('exist');
  });

  it('Checkout', () => {
    cy.visit('/checkout');
    cy.get(selectByTestId('CheckoutPage')).should('exist');
  });

  it('ProductDetailsPage', () => {
    cy.visit('/products/1');
    cy.get(selectByTestId('ProductDetailsPage')).should('exist');
  });

  it('ProductsPage', () => {
    cy.visit('/products');
    cy.get(selectByTestId('ProductsPage')).should('exist');
  });
});
