describe('Home', function (){
    it('tc-1', function(){
        cy.visit('https://hacklab.rocks/')
        cy.get('.text-center > .hl-font-link').click()
        cy.get('#email').click().type('jody.maulana21@gmail.com')
        cy.get('#password').click().type('Jody1996!')
        cy.get('.btn').click()
        cy.get('.infinite-scroll-component > :nth-child(1) > .card-body').click()
        cy.get('.align-content-between > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .normal-font').click()
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})
})