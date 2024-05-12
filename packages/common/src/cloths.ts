// outfit (id) is used in Logged and Saved
// this interface is going to be changing with each added piece. should be fine because the IDs are nullable fields, it will be fine on the front end, might need something to accomidate it on the backend, just to not send if null
export interface Outfit {
  outfitID: number;

  shirtID: number | null;
  pantsID: number | null;
}

export interface Logged {
  outfitID: number;
  date: string; // could be changed to Date if front end is not messed up
}

export interface Saved {
  savedID: number; // primary key
  outfitID: number;
  name: string;
}

// takes pieceID from piece
export interface Hamper {
  pieceID: number;
  dateAdded: string; // could change
}

// piece is the general for all of pieces, this is a parent to many
// If changed: Make sure to also edit Outfit
export interface Piece {
  pieceID: number;
  price: number;
  wears: number;
  wearsSinceWash: number;
  lastWash: string; // this may cause issues? dont know how ts should store dates, but i think they are stored as a string in the front end code that I have seen, so this should be fine, at least for the front end aspect of the code, i think it will cause some issues when it is time for posting to the backend
  // lastWash: Date // this will be better for the back end but it could cause issues with the front
}

// Shirt interface, semi dummy, there will be many more fields for this application
export interface Shirt extends Piece {
  pieceID: number;
  size: string;
}

export interface Pants extends Piece {
  pieceID: number;
  waist: number;
}
