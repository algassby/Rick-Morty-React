///////////////////// Ajout de l'item //////////////////////////////

describe("test ajout panier", () => {
  it("ajout d'une carte Rick Sanchez", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Figurine de Rick Sanchez").click({ timeout: 10000 });
    cy.contains("Ajouter au panier").click({ timeout: 10000 });
    cy.contains("Retour").click({ timeout: 10000 });
    cy.contains("Aller sur panier").click({ timeout: 10000 });
    cy.contains("Retour").click({ timeout: 10000 });
  });
});

///////////////////// Suppression de l'item //////////////////////////////

describe("test supression panier", () => {
  it("supresssion d'une carte Rick Sanchez", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Aller sur panier").click({ timeout: 10000 });
    cy.wait(5000);
    cy.contains("Supprimer du panier").click({ timeout: 10000 });
  });
});
