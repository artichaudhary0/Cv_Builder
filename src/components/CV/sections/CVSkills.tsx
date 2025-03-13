import React from 'react';
import { groupSkillsByCategory } from '../../../utils/skillsUtil';
import type { Skill } from '../../../types';

interface CVSkillsProps {
  skills: Skill[];
}

export function CVSkills({ skills }: CVSkillsProps) {
  if (skills.length === 0) return null;

  const skillsByCategory = groupSkillsByCategory(skills);

  return (
    <div className="cv-section">
      <h2 className="text-lg font-bold mb-3 text-gray-800">Skills</h2>
      <div className="cv-grid">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={`cv-category-${category}`} className="bg-gray-50 p-3 rounded">
            <h3 className="font-medium mb-2 capitalize text-indigo-600">{category}</h3>
            <div className="space-y-2">
              {skills.map(skill => (
                <div key={skill.uniqueId} className="flex items-center justify-between">
                  <span>{skill.name}</span>
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}