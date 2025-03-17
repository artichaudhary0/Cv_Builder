import type { Project } from '../../../types/index';

interface CVProjectsProps {
  projects: Project[];
}

export function CVProjects({ projects }: CVProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="cv-section">
      <h2 className="text-lg font-bold mb-3 text-gray-800">Projects</h2>
      <div className="space-y-3">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-50 p-3 rounded">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-indigo-600">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
            </div>
            <p className="text-gray-600 mt-1 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tech => (
                <span key={tech} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}