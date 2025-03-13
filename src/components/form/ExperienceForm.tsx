import React from 'react';
import { Plus, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface ExperienceFormProps {
  experience: FormData['experience'];
  onChange: (experience: FormData['experience']) => void;
  theme?: 'light' | 'dark' | 'grey';
}

export function ExperienceForm({ experience, onChange, theme = 'light' }: ExperienceFormProps) {
  const addExperience = () => {
    onChange([
      ...experience,
      { 
        id: crypto.randomUUID(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]);
  };

  const removeExperience = (id: string) => {
    onChange(experience.filter(e => e.id !== id));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onChange(experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const validateAndUpdateDate = (id: string, field: string, date: Date | null) => {
    const exp = experience.find(e => e.id === id);
    if (!exp) return;

    const startDate = field === 'startDate' ? date : exp.startDate ? new Date(exp.startDate) : null;
    const endDate = field === 'endDate' ? date : exp.endDate ? new Date(exp.endDate) : null;

    // If end date is selected and it's before start date, clear end date
    if (endDate && startDate && endDate < startDate) {
      alert('End date cannot be before start date');
      return;
    }

    updateExperience(id, field, date ? date.toISOString().split('T')[0] : '');
  };

  const getInputClasses = () => {
    switch(theme) {
      case 'dark':
        return 'bg-gray-800 border-gray-700 text-white';
      case 'grey':
        return 'bg-gray-100 border-gray-300';
      default:
        return 'bg-white border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </button>
      </div>

      {experience.map((exp) => (
        <div key={exp.id} className={`relative p-6 rounded-lg shadow-sm ${theme === 'dark' ? 'bg-gray-800' : theme === 'grey' ? 'bg-gray-200' : 'bg-white'}`}>
          <button
            onClick={() => removeExperience(exp.id)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Company
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${getInputClasses()}`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Position
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${getInputClasses()}`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Start Date
              </label>
              <DatePicker
                selected={exp.startDate ? new Date(exp.startDate) : null}
                onChange={(date) => validateAndUpdateDate(exp.id, 'startDate', date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${getInputClasses()}`}
                maxDate={new Date()}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                End Date
              </label>
              <DatePicker
                selected={exp.endDate ? new Date(exp.endDate) : null}
                onChange={(date) => validateAndUpdateDate(exp.id, 'endDate', date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                isClearable
                placeholderText="Present"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${getInputClasses()}`}
                maxDate={new Date()}
                minDate={exp.startDate ? new Date(exp.startDate) : undefined}
              />
            </div>

            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Description
              </label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${getInputClasses()}`}
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}