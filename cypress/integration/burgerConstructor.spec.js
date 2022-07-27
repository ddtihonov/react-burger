const servUrl = 'http://localhost:3000/react-burger';

describe('BurgerConstructor', () => {
    it('Сервер запускается на localhost:3000/react-burger', function() {
        cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", { fixture: "ingredients.json" });
        cy.visit(servUrl);    
    });
});