export interface Skill {
  id: number;
  name: string;
  SkillItems: SkillItem[];
}
export interface SkillItem {
  id: number;
  name: string;
}