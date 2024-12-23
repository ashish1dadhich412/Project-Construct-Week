class CreateAccount {
    Url(){
        cy.visit("https://luni-interface-029.vercel.app/");
    }
    Account(){
        cy.get('.fname__input').type("Ashish");
        cy.get('.lname__input ').type('Dadheech')
        cy.get('[placeholder="example@gmail.com"]').type('ashishdadheech489@gmail.com');
        cy.get('.password__input').type('Ashish@123');
        cy.get('.register__button').click();

    }
    

}
export default CreateAccount