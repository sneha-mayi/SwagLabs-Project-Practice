class ProductPage
{
selectProductOne()

{
        // return cy.get('.inventory_list').each($e1,index,listofelements)
        // {

        //     cy.wrap($e1)

    return cy.get('.inventory_item_name')
}
selectProductTwo()
{
    // return cy.get('#inventory_container').find('.inventory_item_name').eq(1)
    return cy.get('.inventory_item_name')

}
selectProduct()
{
    cy.get('inventory_item_name').each(($e1,index,listofelements)=>
      {
        const textProduct=$e1.find(div.inventory_item_name).text()
        if(textProduct=="Sauce Labs Backpack")
        textProduct.click()
    })

    
}
}
export default ProductPage;