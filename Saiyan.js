class Saiyan {
    static poblacio = 0;
    contructor(nom) {
        this.nom = nom;
    }
    crear_saiyan(nou_saiyan) {
        let nou_saiyan = console.log("Introdueix el nom del Saiyan: ");
        poblacio = poblacio + 1;
    }
}

class Frieza {
    constructor(nom) {
        this.nom = nom;
    }
    destruirPlaneta() {
        if(poblacio == 10) {
            poblacio = 0;
            console.log("Frieza ha destruit el planeta!");
        }
        
    }
}

Saiyan.crear_saiyan(nou_saiyan);
Frieza.destruirPlaneta();