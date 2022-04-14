///////////////////// Ajout de l'item //////////////////////////////

describe("test ajout panier", () => {
  it("ajout d'une carte Rick Sanchez", () => {
    cy.visit("http://localhost:3000");
    cy.wait(2000);
    cy.contains("Figurine de Rick Sanchez").click();
    cy.contains("Ajouter au panier").click();
    cy.contains("Retour").click();
    cy.contains("Aller sur panier").click();
    cy.contains("Retour").click();
  });
});

///////////////////// Suppression de l'item //////////////////////////////

describe("test supression panier", () => {
  it("supresssion d'une carte Rick Sanchez", () => {
    cy.visit("http://localhost:3000");
    cy.wait(2000);
    cy.contains("Aller sur panier").click();
    cy.wait(5000);
    cy.contains("Supprimer du panier").click();
  });
});
