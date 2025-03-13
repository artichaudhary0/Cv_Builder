import type { Skill } from '../types';

export function groupSkillsByCategory(skills: Skill[]) {
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      acc[skill.category].push({
        ...skill,
        uniqueId: `${skill.category}-${skill.name}-${acc[skill.category].length}`,
      });
      return acc;
    },
    {} as Record<string, Array<Skill & { uniqueId: string }>> 
  );
}
