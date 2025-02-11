"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
//  Single responsability => Principio Aplicado
class TimeSheetReport {
    printTimeSheetReport(employe) {
        console.log(`Generando informe de la hoja de tiempo para ${employe.getName()}...`);
    }
}
// Ejemplo de uso
const empleado = new Employee("Juan Pérez");
console.log(empleado.getName()); // Salida: Juan Pérez
//empleado.printTimeSheetReport(); // Salida: Generando informe de la hoja de tiempo para Juan Pérez...
const timeSheetReport = new TimeSheetReport();
timeSheetReport.printTimeSheetReport(empleado);
