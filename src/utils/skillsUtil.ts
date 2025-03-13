// Import the Skill type from the relative path
import type { Skill } from '../types';

// Define the function to group skills by category
export function groupSkillsByCategory(skills: Skill[]) {
  // Use reduce to transform the array into a grouped object
  return skills.reduce(
    (acc, skill) => {
      // Initialize the category array if it doesn't exist
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      // Add the skill with a uniqueId to the category
      acc[skill.category].push({
        ...skill,
        uniqueId: `${skill.category}-${skill.name}-${acc[skill.category].length}`,
      });

      return acc; // Return the accumulator
    },
    {} as Record<string, Array<Skill & { uniqueId: string }>> // Type assertion for the output
  );
}
