class CheckoutOverviewPage
{
    clickFinish()
    {
      return  cy.get('#finish')
    }
    verifyCheckoutcomplte()
    {
       return cy.get('h2[class=complete-header]')
    }
}
export default CheckoutOverviewPage;