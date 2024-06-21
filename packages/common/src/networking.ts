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
  rackNumber: number;
  cabinetID: string; // Foreign Key and part of the Primary Key
  numberOfRackUnits: number;
}

export interface Device {
  deviceID: number; // Primary Key
  rackID: number; // Foreign Key
  name: string;
  URacksUsed: number;
  bottomURack: number;
}

// export interface NetworkPort {
//   portID: number; // Primary Key
//   deviceID: number; // Foreign Key
//   portNumber: number;
// }
