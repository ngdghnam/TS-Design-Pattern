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

export class TransportFactory {
  static create(type: string) {
    if (type === "ship") {
      return new Ship();
    }
    if (type === "truck") {
      return new Truck();
    }
  }
}
