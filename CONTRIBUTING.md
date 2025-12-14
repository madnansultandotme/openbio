# Contributing to OpenBio

Thank you for your interest in contributing to OpenBio! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Supabase account (for database)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/madnansultandotme/openbio.git
   cd openbio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Set up the database**
   - Create a Supabase project
   - Run the schema from `database/schema.sql`
   - Update `.env.local` with your credentials

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🎯 How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/openbio/openbio/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node.js version)

### Suggesting Features

1. Check existing [Issues](https://github.com/openbio/openbio/issues) and [Discussions](https://github.com/openbio/openbio/discussions)
2. Create a new issue with:
   - Clear title and description
   - Use case and motivation
   - Proposed solution (if you have one)
   - Alternative solutions considered

### Code Contributions

#### 🔰 Beginner-Friendly Issues

Look for issues labeled with:
- `good first issue` - Perfect for newcomers
- `help wanted` - We need community help
- `documentation` - Improve docs and guides
- `ui/ux` - Frontend improvements
- `bug` - Fix existing issues

#### 🛠️ Development Workflow

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update types if needed
   - Test your changes locally

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```
   
   Use conventional commit format:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your code
- [ ] Comments added for hard-to-understand areas
- [ ] Documentation updated if needed
- [ ] No console.log statements left in code
- [ ] TypeScript types are properly defined

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added/updated tests (if applicable)

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed the code
- [ ] Added comments where needed
- [ ] Updated documentation
- [ ] No breaking changes (or documented)
```

## 🎨 Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow existing naming conventions
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer functional components with hooks

### React Components

- Use functional components
- Extract reusable logic into custom hooks
- Keep components small and focused
- Use proper TypeScript interfaces for props

### CSS/Styling

- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use semantic HTML elements

### File Organization

- Group related files in appropriate directories
- Use descriptive file names
- Export components from index files when appropriate
- Keep API routes organized by feature

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run type checking
npm run type-check
```

### Writing Tests

- Add tests for new features
- Test edge cases and error conditions
- Use descriptive test names
- Mock external dependencies

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions and classes
- Document complex algorithms or business logic
- Keep README and other docs up to date

### API Documentation

- Document new API endpoints
- Include request/response examples
- Document error responses

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `documentation` - Improvements or additions to documentation
- `duplicate` - This issue or pull request already exists
- `invalid` - This doesn't seem right
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different opinions and approaches

### Communication

- Use clear and concise language
- Be patient with questions and reviews
- Provide helpful feedback on PRs
- Celebrate contributions from others

## 🎉 Recognition

Contributors will be:
- Listed in the README contributors section
- Mentioned in release notes for significant contributions
- Invited to join the core team for outstanding contributions

## ❓ Questions?

- 📧 Email us at info.adnansultan@gmail.com
- 🐛 Open an issue for technical questions

Thank you for contributing to OpenBio! 🚀