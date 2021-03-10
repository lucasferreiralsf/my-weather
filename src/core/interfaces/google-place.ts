export interface GooglePlace {
  candidates: Candidate[];
  status: string;
}

export interface Candidate {
  geometry: Geometry;
  name: string;
  photos: Photo[];
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

/* eslint-disable camelcase */
export interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}
