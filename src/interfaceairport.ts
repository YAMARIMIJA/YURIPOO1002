// Interfaz IFlyingTransport
interface IFlyingTransport {
    fly: () => void;
  }
  
  // Clase Airport
  class Airport {
    accept(vehicle: IFlyingTransport) {
      // console.log(`${vehicle.fly()}`);
      vehicle.fly();
    }
  }
  
  // Clase Helicopter que implementa la interfaz IFlyingTransport
  class Helicopter implements IFlyingTransport {
    constructor(
      public origin: string,
      public destination: string,
      public passengers: number
    ) {}
  
    fly(): void {
      console.log(
        `Helicóptero volando desde ${this.origin} a ${this.destination} con ${this.passengers} pasajeros.`
      );
    }
  }
  
  // Clase Airplane que implementa la interfaz IFlyingTransport
  class Airplane implements IFlyingTransport {
    constructor(
      public origin: string,
      public destination: string,
      public passengers: number
    ) {}
  
    fly(): void {
      console.log(
        `Avión volando desde ${this.origin} a ${this.destination} con ${this.passengers} pasajeros.`
      );
    }
  }
  
  // Clase DomesticatedGryphon que implementa la interfaz IFlyingTransport
  class DomesticatedGryphon implements IFlyingTransport {
    constructor(
      public origin: string,
      public destination: string,
      public passengers: number
    ) {}
  
    fly(): void {
      console.log(
        `Grifo domesticado volando desde ${this.origin} a ${this.destination} con ${this.passengers} pasajeros.`
      );
    }
  }
  
  // Ejemplo de uso
  const heli = new Helicopter("Ciudad A", "Ciudad B", 4);
  const plane = new Airplane("Ciudad A", "Ciudad C", 100);
  const gryphon = new DomesticatedGryphon("Ciudad D", "Ciudad E", 2);
  
  const handlerFlys = (flyingTransportList: IFlyingTransport[]) => {
    flyingTransportList.forEach((flyingTranspor) => {
      flyingTranspor.fly();
    });
  };
  
  handlerFlys([heli, plane, gryphon]);