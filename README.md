# 💼 Freelancer Portfolio - React

A modern, responsive freelancer portfolio website built with React. Showcase your skills, projects, and experience with a beautiful single-page application.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Installation

**1. Clone the repository**

```bash
git clone git@github.com:Saad05-dev/CV-app.git
```

**2. Navigate to the project folder**

```bash
cd CV-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

**5. Open your browser**

Navigate to `http://localhost:3000` to view your portfolio

---

## 📁 Project Structure

```
freelancer-portfolio/
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/
|   |   ├── LisItems.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── SectionTitle.jsx
│   │       ├── ServiceCard.jsx
│   │       ├── PortfolioCard.jsx
│   │       ├── PricingCard.jsx
│   │       ├── TestimonialCard.jsx
│   │       ├── ExperienceCard.jsx
│   │       ├── BlogCard.jsx
│   │       ├── SkillBar.jsx
│   │       ├── StatCounter.jsx
│   │       └── SocialLinks.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ✨ Features

### 🎨 Design & UI
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean and professional design inspired by top portfolio templates
- **Smooth Animations** - Scroll animations and transitions for enhanced user experience
- **Sticky Navigation** - Easy access to all sections with active link highlighting

### 📋 Sections Included
- **Hero Section** - Eye-catching introduction with profile image and CTA buttons
- **About Section** - Personal information, bio, and downloadable CV
- **Services Section** - Showcase your professional services with icon cards
- **Portfolio Section** - Filterable project gallery with hover effects
- **Skills Section** - Visual skill bars with percentage indicators
- **Pricing Section** - Service packages with detailed pricing cards
- **Statistics Section** - Animated counters displaying achievements
- **Experience Section** - Timeline view of work history and education
- **Testimonials Section** - Client reviews with carousel/slider
- **Blog Section** - Latest articles and insights
- **Contact Section** - Contact form and information

### 🔧 Technical Features
- **Component-Based Architecture** - Modular and reusable components
- **Smooth Scrolling** - Click navigation links to smoothly scroll to sections
- **Basic Form Validation** - Simple validation for contact form
- **Mobile Menu** - Responsive hamburger menu for mobile devices
- **CSS Hover Effects** - Simple hover states on cards and buttons

---

## 🛠️ Built With

- **React** - JavaScript library for building user interfaces
- **CSS3** - Styling and responsive design
- **React Hooks** - useState for simple state management (menu toggle, form inputs)

---

## 🎯 Usage

### Customizing Your Portfolio

**1. Update Personal Information**

Edit the `src/data/portfolioData.js` file to add your own:
- Personal details
- Services offered
- Portfolio projects
- Skills and expertise
- Work experience
- Testimonials
- Blog posts

**2. Replace Images**

Add your own images to `public/assets/images/`:
- Profile photo
- Project screenshots
- Client logos
- Blog post thumbnails

**3. Customize Styling**

Modify colors, fonts, and layouts in:
- `src/styles/App.css` - Main styling
- `src/styles/index.css` - Global styles
- Individual component files for specific section styles

**4. Update Contact Form**

Configure form submission in `src/components/sections/Contact.jsx`:
- Add email service integration (EmailJS, Formspree, etc.)
- Set up form validation rules
- Customize success/error messages

---

## 📦 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://your-username.github.io/freelancer-portfolio"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Design inspiration from [UIdeck Freelancer Template](https://preview.uideck.com/items/freelancer/)
- Icons by [Lucide Icons](https://lucide.dev/)
- Built while learning React ⚛️

---

## 📧 Contact

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [@your-username](https://github.com/your-username)

---

<div align="center">
  Made with ❤️ and React
</div>