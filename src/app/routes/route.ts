export interface Route {
  id: number;
  startStation: string;
  destStation: string;
  train: Train;
  trips: Array<[string, string]>;
}

export interface Train {
  name: string;
  capacity: number;
}
