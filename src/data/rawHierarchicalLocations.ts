import { andhraPradeshLocations } from './andhraPradeshLocations';
import { telanganaLocations } from './telanganaLocations';

export interface RawStateData {
  name: string;
  districts: Record<string, RawDistrictData>;
}

export interface RawMandalData {
  name: string;
  isUrbanCenter: boolean;
  neighbourhoods: string[];
  localities: string[];
}

export interface RawCityData {
  name: string;
  neighbourhoods: string[];
  neighbourhoodSlugs?: string[];
  localities: string[];
}

export interface RawDistrictData {
  name: string;
  mandals: Record<string, RawMandalData>;
  cities?: Record<string, RawCityData>;
}

export const rawHierarchicalLocations: Record<string, RawStateData> = {
  "andhra-pradesh": andhraPradeshLocations,
  "telangana": telanganaLocations
};
