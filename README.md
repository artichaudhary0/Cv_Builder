# Portfolio Builder

A modern, responsive portfolio builder for developers and tech professionals. Perfect for both experienced developers and fresh graduates to showcase their skills, projects, and experience.

## Features

- 🎨 **Beautiful Design** - Professional and modern UI with smooth animations
- 🌓 **Multiple Themes** - Choose between Light, Dark, and Grey themes
- 📱 **Fully Responsive** - Looks great on all devices
- 🚀 **Quick Setup** - Build your portfolio in minutes
- 📄 **CV Generation** - Generate a clean, professional CV from your portfolio data
- 🎯 **Fresh Graduate Friendly** - Showcase academic projects and internships
- 🔧 **Customizable** - Easy to modify and extend

## Detailed Guide

### Setting Up Your Portfolio

1. **Initial Setup**
   - Start by clicking "Get Started" on the welcome page
   - Choose your preferred theme (Light/Dark/Grey)
   - Follow the step-by-step wizard to build your portfolio

2. **Adding Projects**
   - Click "Add Project" to create a new project entry
   - Add a title, description, and relevant tags
   - Include project links (GitHub, live demo, etc.)
   - Upload or link to project screenshots
   - Arrange projects in order of importance

3. **Skills Section**
   - Group skills by category (Frontend, Backend, Tools)
   - Rate your proficiency level (1-5)
   - Add relevant technologies and frameworks
   - Include both technical and soft skills

4. **Experience Timeline**
   - Add work experience or internships
   - Include academic projects and achievements
   - Specify duration using the date picker
   - Provide detailed descriptions of responsibilities

5. **Contact Information**
   - Add professional contact details
   - Include social media links
   - Customize your email display
   - Add your location information

### Using Themes

The application offers three distinct themes:

1. **Light Theme**
   - Clean, professional look
   - White background with subtle shadows
   - Perfect for high readability
   - Recommended for standard viewing

2. **Dark Theme**
   - Modern dark interface
   - Reduced eye strain
   - Great for low-light environments
   - Professional coding-style appearance

3. **Grey Theme**
   - Neutral, sophisticated design
   - Balanced contrast levels
   - Perfect for formal presentations
   - Excellent printing results

### CV Generation

1. **Accessing the CV View**
   - Click "View CV" in the header
   - Preview your professional CV layout
   - All information is automatically formatted

2. **Customizing Your CV**
   - Information is pulled from your portfolio
   - Maintains professional formatting
   - Single-page layout for efficiency
   - Print-friendly design

3. **Sharing Options**
   - Download as PDF
   - Direct printing
   - Share via email
   - Copy link to clipboard

### For Fresh Graduates

1. **Academic Projects**
   - Highlight university/college projects
   - Include course assignments
   - Show technical implementations
   - Demonstrate problem-solving skills

2. **Educational Background**
   - List relevant coursework
   - Include GPA if applicable
   - Add academic achievements
   - Mention technical electives

3. **Internships & Training**
   - Detail internship experiences
   - Include training programs
   - Highlight skills learned
   - Show practical applications

4. **Technical Skills**
   - List programming languages
   - Include frameworks and tools
   - Show academic project tech stack
   - Demonstrate learning ability

5. **Certifications**
   - Add online course certificates
   - Include technical certifications
   - List workshop participations
   - Show continuous learning

## Development

### Project Structure
```
src/
├── components/         # React components
│   ├── CV/            # CV generation components
│   ├── form/          # Form components
│   ├── welcome/       # Welcome page components
│   └── common/        # Shared components
├── types/             # TypeScript types
├── utils/             # Utility functions
└── styles/            # Global styles
```

### Local Development

1. **Prerequisites**
   ```bash
   Node.js >= 14.0.0
   npm >= 6.0.0
   ```

2. **Installation**
   ```bash
   git clone https://github.com/yourusername/portfolio-builder.git
   cd portfolio-builder
   npm install
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```

4. **Building for Production**
   ```bash
   npm run build
   ```

### Customization

1. **Styling**
   - Tailwind CSS configuration
   - Custom theme colors
   - Component-specific styles
   - Responsive design utilities

2. **Components**
   - Modular architecture
   - Easy to extend
   - Reusable patterns
   - TypeScript support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you need help or have questions:
1. Check the documentation
2. Open an issue
3. Contact via email
4. Join our community discussions

## License

This project is licensed under the MIT License - see the LICENSE file for details.