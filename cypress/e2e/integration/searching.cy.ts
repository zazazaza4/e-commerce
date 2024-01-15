import { selectByTestId } from '../../helpers/selectByTestId';

describe('Search functionality', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should search for a product and display the results', () => {
    const searchTerm = 'e';

    cy.get(selectByTestId('SearchInput')).type(searchTerm);

    cy.get(selectByTestId('SearchButton')).click();

    cy.get(selectByTestId('ProductItem')).should('exist');
  });

  it('should handle empty search results', () => {
    const searchTerm = 'nonexistentproduct';

    cy.get(selectByTestId('SearchInput')).type(searchTerm);
    cy.get(selectByTestId('SearchButton')).click();
    cy.get(selectByTestId('NoSearchResultsMessage')).should('exist');
  });
});
