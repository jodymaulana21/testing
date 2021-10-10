describe('Login', function (){
    it('tc-1', function(){
        cy.visit('https://hacklab.rocks/')
        cy.get('.text-center > .hl-font-link').click()
        cy.get('#email').click().type('jody.maulana21@gmail.com')
        cy.get('#password').click().type('Jody1996!')
        cy.get('.btn').click()
        cy.get('#province').select('JAWA BARAT')
        cy.get('select').contains('JAWA BARAT')
        cy.get('#city').select('KOTA BANDUNG')
        cy.get('select').contains('KOTA BANDUNG')
        cy.get('#marital_status').select('Single')
        cy.get('select').contains('Single')
        cy.get('#about_you').click().type('testing cuy')
        cy.get(':nth-child(5) > :nth-child(3) > .w-100 > .undefined').click().type('PT APLIKASI')
        cy.get(':nth-child(5) > :nth-child(4)').click().type('Network security engineer')
        cy.get(':nth-child(5) > :nth-child(5)').click().type('bwabwabwabwabawa')
        cy.get(':nth-child(5) > .form-row > :nth-child(1) > .w-100 > .react-datepicker-wrapper > .react-datepicker__input-container > .undefined ').click().type('2010-10-21').click().type('2010-10-21')
        cy.get(':nth-child(7) > .ml-3').click()
        cy.get(':nth-child(7) > .ml-3 > .custom-control-label').click()
        cy.get(':nth-child(8) > :nth-child(3)').click().type('jody sd')
        cy.get(':nth-child(8) > :nth-child(4) ').click()
        cy.get(':nth-child(8) > :nth-child(5)').click().type('smk2')
        cy.get(':nth-child(8) > :nth-child(6)').click().type('sajshaksjkasjkajs')
        cy.get('.sc-pGacB > .text-center').click()
        //cy.get(':nth-child(8) > :nth-child(4)').click()//.select('Diploma 1')
        //cy.get('select').contains('Diploma 1')
        cy.get('.py-5 > :nth-child(2)').click()
    


    
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})
})