// Building a network inventory system.

export interface Network {
  networkID: string; // Primary Key
  name: string;
}

export interface Cabinet {
  cabinetID: string; // Primary Key
  networkID: string; // Foreign Key
}

export interface Rack {
  rackID: number; // Primary Key
  cabinetID: number; // Foreign Key and part of the Primary Key
  // kinda want a string of cabinet id and rack id ex.
  bottomMostRackUnit: number;
  numberOfRackUnits: number;
}

export interface Device {
  deviceID: number; // Primary Key
  rackID: number; // Foreign Key
  name: string;
}

// export interface NetworkPort {
//   portID: number; // Primary Key
//   deviceID: number; // Foreign Key
//   portNumber: number;
// }
