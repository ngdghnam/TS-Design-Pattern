export interface ITransport {
  deliver(): string;
}

export class Truck implements ITransport {
  deliver(): string {
    return "Deliver by Truck";
  }
}

export class Ship implements ITransport {
  deliver(): string {
    return "Delivery by Ship";
  }
}

const ship = new Ship();
console.log("Ship method:", ship.deliver());
