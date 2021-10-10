describe('Registration', function (){
    it('tc-1', function(){
        cy.visit('https://hacklab.rocks/')
        cy.get('#name').click().type('Jody maulana')
        cy.get('#phone_number').click().type('08987614213133')
        cy.get('#email').click().type('jody.maulana21@gmail.com')
        cy.get('#password').click().type('Jody1996!')
        cy.get('.btn').click()
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})
})