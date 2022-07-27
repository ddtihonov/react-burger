describe('BurgerConstructor', () => {

    it('Сервер запускается на localhost:3000/react-burger', function() {
        cy.visit('http://localhost:3000/react-burger');
    });

    it('открытие модального окна с описанием ингредиента', function () {
        cy.get('[data-test="burger-ingredient"]').click();
    });
});