import React from 'react';
import { Link } from 'react-router-dom';

const templates = [
  { id: 1, name: 'Template 1', img: 'path/to/template1.jpg' },
  { id: 2, name: 'Template 2', img: 'path/to/template2.jpg' },
  // Add more templates as needed
];

const TemplateSelector = () => {
  return (
    <div>
      <h2>Select a Template</h2>
      <div className="template-selector">
        {templates.map(template => (
          <div key={template.id}>
            <img src={template.img} alt={template.name} />
            <p>{template.name}</p>
            <Link to={`/edit/${template.id}`}>Choose</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
