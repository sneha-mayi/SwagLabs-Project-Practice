


class HomePage {
    validateHomepage() {
        return cy.get('.app_logo')
    }

    selectProduct() {

        cy.get('div.inventory_item_label').each(($e1, index, listofelements) => {
            console.log($e1.text)
            if ($e1.text().includes('Sauce Labs Backpack')) {
                cy.get('#add-to-cart-sauce-labs-backpack').click()
            }
            if ($e1.text().includes('Sauce Labs Bike Light')) {
                cy.get('#add-to-cart-sauce-labs-bike-light').click()
            }

        })
    }

    validateCart() {
        return cy.get('.shopping_cart_link')
    }

}

export default HomePage;