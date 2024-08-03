export interface MenuItem {
  id: number;
  label: string;
}

export interface SkillData {
  id: string;
  name: string;
  value: string;
  class: string;
}

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  image: string;
  enlace: string;
  technologies: string[];
}

export interface TechnologiesData {
  id: string;
  name: string;
}

export interface FrameworkData {
  id: string;
  name: string;
  value: string;
  class: string;
}
