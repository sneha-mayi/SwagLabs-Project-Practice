import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
describe("Test suite",function()
{
    const hpp=new HomePage()
    const hp=new LoginPage()

    const pp=new ProductPage()
    beforeEach(function ()
    {
        cy.launchApplication();
        cy.fixture('TestDat').then( function(data) {
            this.data=data
            })
        })

    it('ProductPageTC',function()
    {
   
    pp.selectProductOne().first().click()
    pp.selectProductTwo().last().click()
    })

    }
    )
