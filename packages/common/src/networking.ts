// Building a network inventory system.

export interface Network {
  Location: string;
}

export interface Cabinet {
  CabinetID: string;
}

export interface Rack {
  RackID: number; // Primary Key
  CabinetID: number; // Foreign Key and part of the Primary Key
  // kinda want a string of cabinet id and rack id ex.
  NumberOfRackUnits: number;
}

export interface Device {
  DeviceID: number; // Primary Key
  RackID: number; // Foreign Key
  CabinetID: number;

  DeviceType: string;
  DeviceMake: string;
  DeviceModel: string;
  DeviceSerial: string;
  DeviceAsset: string;
  DeviceLocation: string;
  DeviceOwner: string;
  DeviceStatus: string;
}
