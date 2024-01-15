import { selectByTestId } from '../../helpers/selectByTestId';

describe('cart', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should add products to the cart', () => {
    cy.get(selectByTestId('ProductItem')).each(($product) => {
      cy.wrap($product).find(selectByTestId('addToCartButton')).click();

      cy.get('[role="alert"]').should('exist');
    });

    cy.get(selectByTestId('CartIcon')).click();

    cy.get(selectByTestId('SelectedProductItem')).should('have.length.greaterThan', 0);

    cy.get(selectByTestId('SelectedProductItem')).each(($selectedProduct) => {
      cy.wrap($selectedProduct).find(selectByTestId('removeFromCartButton')).click();
      cy.get('[role="alert"]').should('exist');
    });

    cy.get(selectByTestId('SelectedProductItem')).should('have.length', 0);
  });

  it('should add the same product to the cart 2 times and then remove it', () => {
    const productSelector = selectByTestId('ProductItem');

    cy.get(productSelector).first().as('product');
    cy.get('@product').find(selectByTestId('addToCartButton')).click();
    cy.get('[role="alert"]').should('exist');
    cy.get('@product').find(selectByTestId('addToCartButton')).click();
    cy.get('[role="alert"]').should('exist');

    cy.get(selectByTestId('CartIcon')).click();

    cy.get(selectByTestId('removeFromCartButton')).click({ multiple: true });
    cy.get('[role="alert"]').should('exist');

    cy.get(selectByTestId('SelectedProductItem')).should('have.length', 1);
  });
});
