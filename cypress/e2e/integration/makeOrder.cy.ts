import { selectByTestId } from '../../helpers/selectByTestId';

describe('Make Order', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should add products to the cart and make an order successfully', () => {
    cy.get(selectByTestId('ProductItem')).each(($product) => {
      cy.wrap($product).find(selectByTestId('addToCartButton')).click();
      cy.get('[role="alert"]').should('exist');
    });

    cy.get(selectByTestId('CartIcon')).click();
    cy.get(selectByTestId('ProceedToCheckout')).click();

    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phone"]').type('+123456789');

    cy.get('form').submit();

    cy.get(selectByTestId('OrderMessageSuccess')).should('exist');
  });

  it('should handle order processing error', () => {
    cy.get(selectByTestId('ProductItem')).each(($product) => {
      cy.wrap($product).find(selectByTestId('addToCartButton')).click();
      cy.get('[role="alert"]').should('exist');
    });

    cy.get(selectByTestId('CartIcon')).click();
    cy.get(selectByTestId('ProceedToCheckout')).click();

    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phone"]').type('+123456789');

    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', (req) => {
      req.reply({ statusCode: 500, body: 'Internal Server Error' });
    }).as('emailSendRequest');

    cy.get('form').submit();

    cy.get(selectByTestId('OrderMessageError')).should('exist');
  });
});
