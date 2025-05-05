# Davis Law Firm Website

A modern, responsive law firm website demo built with Next.js and Tailwind CSS. This website is a portfolio project showcasing a professional law firm website with Latvian language support.

## Features

- 🌐 Multi-language support (Latvian and English)
- 📱 Fully responsive design for all devices
- 📝 Appointment scheduling with Calendly integration
- 💬 Live chat support with Crisp chat widget
- 🔍 FAQ section with search functionality
- 🧮 Case calculator for estimating potential compensation
- ♿ WCAG accessibility compliance
- 🚀 SEO optimized for legal search terms

## Pages

- **Homepage**: Hero section and key practice areas
- **About Us**: Team profiles and company information
- **Practice Areas**: Detailed service descriptions
- **Contact**: Consultation booking with Calendly integration

## Technologies Used

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: Next.js App Router i18n
- **Integrations**: Calendly, Crisp Chat

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/law-firm-website.git
   cd law-firm-website
   ```

2. Install the dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Project Structure

```
/src
  /app                # App Router pages and layouts
    /en               # English pages
    /lv               # Latvian pages
  /components         # React components
    /layout           # Layout components (Navbar, Footer)
    /home             # Homepage components
    /about            # About page components
    /practice         # Practice areas components
    /contact          # Contact page components
    /shared           # Shared components (FAQ, LiveChat)
    /ui               # UI components
  /styles             # Global styles
/public               # Static assets
  /images             # Images and media files
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

## License

This project is available for use in your portfolio under the MIT License.
