# Activate! - AI-Powered Career Matching Platform

A modern, AI-driven platform that connects job seekers directly with hiring managers, built with Next.js 15 and Tailwind CSS.

![Activate Platform](public/activate-preview.png)

## Features

- **AI-Powered Matching**: Connects candidates with hiring managers based on skills and preferences
- **Direct Messaging**: Chat directly with hiring managers and recruiters
- **Interactive Onboarding**: Personalized onboarding flow for candidates
- **Modern UI/UX**: Responsive design with glassmorphism and gradient effects
- **Candidate Search**: Search and filter through candidate profiles
- **Recruiter Profiles**: Detailed profiles for recruiters with open roles
- **Referral System**: Request and manage referrals to companies

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **State Management**: React's Context API and Hooks
- **Routing**: Next.js App Router
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/scottie1013/Full-Stack-Job-Matching-Site.git
   cd Full-Stack-Job-Matching-Site
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
.
├── app/                      # Next.js application
│   ├── (dashboard)/          # Dashboard routes
│   ├── (marketing)/          # Landing page and marketing routes
│   ├── components/           # Shared components
│   ├── lib/                  # Utility functions
│   ├── messages/             # Messaging functionality
│   ├── onboarding/           # Onboarding flow
│   ├── profile/              # Profile pages
│   ├── search/               # Search functionality
│   ├── ui/                   # UI components
├── public/                   # Static assets
├── styles/                   # Global styles
├── .gitignore                # Git ignore file
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Deployment

The application is optimized for deployment on Vercel. To deploy to Vercel:

1. Push to GitHub
2. Import the project in Vercel dashboard
3. Vercel will automatically detect Next.js and set up the optimal build settings

Alternatively, use the Vercel CLI:
```bash
pnpm global add vercel
vercel
```

## Key Pages

- **Landing Page**: Introduces the platform features
- **Onboarding**: Multi-step process for new candidates
- **Search**: Find and filter candidates
- **Profile**: View detailed profiles of hiring managers and candidates
- **Dashboard**: Monitor connections, applications, and referrals
- **Messages**: Chat with hiring managers and recruiters

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Shadcn UI for component library
- Lucide React for beautiful icons
- All the contributors to the project 