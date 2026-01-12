export interface PlanetsTableProps {
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  terrain: string;
}

export interface PeopleTableProps {
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
}

export interface StarShipsTableProps {
  name: string;
  crew: string;
  cargo_capacity: string;
  manufacturer: string;
  max_atmosphering_speed: string;
}

export interface GetPeopleProps {
  term: string;
  page: number;
}

export interface GetPlanetsProps {
  term: string;
  page: number;
}

export interface GetStarShipsProps {
  term: string;
  page: number;
}
