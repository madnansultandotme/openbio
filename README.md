# OpenBio

Your open-source link-in-bio builder.

## 🚀 Features

- **Lightning Fast**: Pages load in under 200ms
- **Customizable Themes**: Choose from beautiful themes or customize colors
- **Built-in Analytics**: Track page views and link clicks
- **Open Source**: MIT licensed and community-driven
- **Privacy First**: Your data stays yours
- **Easy Deployment**: Deploy anywhere with Docker or Vercel

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Custom JWT-based auth
- **Deployment**: Vercel, Docker

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**
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
   Fill in your Supabase credentials and other configuration.

4. **Set up the database**
   - Create a new Supabase project
   - Run the SQL schema from `database/schema.sql`
   - Update your `.env.local` with Supabase credentials

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── [username]/        # Public profile pages
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard-specific components
│   └── profile/          # Public profile components
├── lib/                  # Utility functions and configurations
├── types/                # TypeScript type definitions
└── styles/               # Global styles
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Database Management

The database schema is located in `database/schema.sql`. To update the database:

1. Make changes to the schema file
2. Run the updated SQL in your Supabase dashboard
3. Update TypeScript types in `src/types/database.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Fork this repository
2. Connect your fork to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Docker

```bash
# Build the image
docker build -t openbio .

# Run the container
docker run -p 3000:3000 --env-file .env.local openbio
```

### Self-Hosting

OpenBio can be deployed on any platform that supports Node.js:

- Vercel
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Your own server with PM2

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

## 📞 Support

- 📧 Email: support@openbio.app
- 💬 Discord: [Join our community](https://discord.gg/openbio)
- 🐛 Issues: [GitHub Issues](https://github.com/madnansultandotme/openbio/issues)
- 📖 Documentation: [docs.openbio.app](https://docs.openbio.app)

---

Made with ❤️ by the OpenBio community