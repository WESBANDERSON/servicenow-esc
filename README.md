# ServiceNow ESC - Employee Service Center

A modern, high-fidelity Employee Service Center prototype built with Next.js, TypeScript, and ShadCN/UI components. This project demonstrates advanced styling capabilities that can be adapted for ServiceNow ESC widgets.

## 🚀 Features

- **Modern UI**: Built with ShadCN/UI and Radix UI primitives
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode Support**: Automatic dark/light theme switching
- **Service Catalog**: Browse and request services
- **Knowledge Base**: Search and browse articles
- **Request Management**: Track submitted requests
- **User Profile**: Manage personal information and preferences
- **Real-time Updates**: Live status updates and notifications

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/servicenow-esc.git
cd servicenow-esc
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/servicenow-esc`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` directory
3. Deploy the `out` directory to your hosting provider

## 🎨 Customization

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Key customization points:

- **Colors**: Defined in `src/app/globals.css`
- **Components**: Located in `src/components/ui/`
- **Custom Styles**: Added in the `@layer components` section

### ESC Compliance

This prototype is designed to be ServiceNow ESC compatible:

- **Widget Structure**: Components can be easily adapted to ServiceNow widgets
- **API Integration**: Ready for ServiceNow REST API integration
- **Security**: Follows ServiceNow security best practices
- **Accessibility**: WCAG 2.1 AA compliant

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles and themes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # ShadCN/UI components
│   └── esc-dashboard.tsx # Main ESC dashboard
└── lib/               # Utility functions
    └── utils.ts       # Tailwind utilities
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. Use the ShadCN CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

2. Import and use in your components:
```tsx
import { Button } from "@/components/ui/button";
```

## 🌟 Key Features

### Dashboard
- Quick stats and metrics
- Recent activity feed
- Quick action buttons
- Service status overview

### Service Catalog
- Browse available services
- Filter by category
- Request services with one click
- Service descriptions and details

### Knowledge Base
- Search articles
- Browse by category
- View counts and popularity
- Article previews

### Request Management
- Track all submitted requests
- Status updates
- Priority indicators
- Action buttons

### User Profile
- Personal information management
- Preference settings
- Request statistics
- Account settings

## 🎯 ServiceNow Integration

This prototype is designed to integrate with ServiceNow:

1. **REST API**: Ready for ServiceNow REST API calls
2. **Widget Development**: Components can be converted to ServiceNow widgets
3. **Security**: Follows ServiceNow security model
4. **Theming**: Compatible with ServiceNow theme system

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the GitHub repository.