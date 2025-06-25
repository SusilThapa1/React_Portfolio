# Susil Thapa - Portfolio

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
Showcases my projects, skills, education, and contact information.

## Features

- Responsive design with Tailwind CSS
- Animated hero section and smooth navigation
- Projects gallery with images and video preview
- Skills grid with icons
- Education timeline
- Contact form with [EmailJS](https://www.emailjs.com/) integration and validation
- Social media links
- Toast notifications for user feedback

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/SusilThapa1/reactPortfolio.git
   cd reactPortfolio
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure EmailJS:**

   - Create a `.env` file in the root directory.
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Start the development server:**

   ```sh
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
├── public/
│   ├── Frontend_Developer_Resume.pdf
│   └── me.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   └── Components/
│       ├── About.jsx
│       ├── Button.jsx
│       ├── Contact.jsx
│       ├── Education.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Projects.jsx
│       └── Skills.jsx
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Susil Thapa**
