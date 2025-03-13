import type { Project } from '../../../types';

interface CVProjectsProps {
  projects: Project[];
}

export function CVProjects({ projects }: CVProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="cv-section">
      <h2 className="text-lg font-bold mb-3 text-gray-800">Projects</h2>
      <div className="cv-grid">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-50 p-3 rounded">
            <h3 className="font-medium text-indigo-600 mb-1">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tags.map(tag => (
                <span
                  key={`${project.id}-${tag}`}
                  className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}