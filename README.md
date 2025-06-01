## 🧘‍♀️ Breathe Yoga Website

A responsive, accessible, and user-centered static website for a fictional yoga studio. The site highlights a community-based approach to yoga, including an introduction, retreat details, and a sign-up section (currently disabled).

---

## 🌐 Live Preview

👉 [Visit Breathe Yoga](https://breathe-yoga-retreat.netlify.app)  

---

## 🎯 Project Purpose

This project was built to demonstrate best practices in:

- Responsive web design
- Semantic HTML structure
- Accessibility (W3C and Section 508 compliant)
- UX/UI principles
- CSS layout strategies using Flexbox and media queries
- Clean, maintainable code for front-end interfaces

---

## 🖼️ Design Highlights

- **Color palette**: Earthy greens, warm neutrals, and golden accents for a calming effect
- **Typography**: Clean, legible fonts with accessible sizing and spacing
- **Layout**: Flexible sections using Flexbox and responsive units
- **Sections**:
  - Navigation bar with scroll-to links
  - Welcome header with intro content and background
  - Retreat info section
  - Email form (placeholder/disabled)
  - Footer with portfolio and scroll-to-top link

---

## 🎨 Colors

| Section / Element                    | Color Value                 | Usage                                |
|--------------------------------------|-----------------------------|--------------------------------------|
| Body background                      | `#424242`                   | Base dark background                 |
| Navbar links                         | `#6FA38E`                   | Primary navigation color             |
| Navbar links (hover)                 | `#E5D49F`                   | Interaction feedback                 |
| Horizontal rule                      | `#CCAA40`                   | Section divider accent               |
| Welcome box background               | `rgba(66, 66, 66, 0.7)`   | Overlay readability over image       |
| Welcome heading                      | `#CCAA40`                   | Highlighted section title            |
| Welcome rule                         | `rgba(62, 140, 132, 0.7)` | Subtle highlight bar                 |
| Welcome paragraph text               | `#E5D49F`                   | Light-text-on-dark background        |
| Retreat/Join sections background     | `#6FA38E`                   | Primary section highlight            |
| Form input/button background         | `#DFD8C4`                   | Soft, earthy contrast                |
| Form input/button text & placeholder | `rgba(62, 140, 132)`        | Aligns with primary green accent     |
| Footer text and links                | `#6FA38E`                   | Consistent with nav color            |

---

## 🖋️ Typography

| Element                 | Font Size  | Notes                                   |
|-------------------------|------------|-----------------------------------------|
| Body                    | `16px`     | Base font size                          |
| Nav links               | `20px`     | Emphasized navigation                   |
| Welcome paragraph       | `16–18px`  | Adjusted via media queries              |
| Section headings (`h2`) | ~`24px`    | Implicit via browser default styling    |

---

## 📱 Responsive Design

Media queries are used to ensure readability and usability across devices:

- **340px–480px:** Mobile-first layout; stacked nav; header image scales
- **481px–767px:** Tablet layout; wider welcome section
- **768px–1023px:** Larger tablets/small laptops
- **1024px+:** Full layout, refined spacing, and typography

---

## ♿ Accessibility & UX Features

- Uses semantic HTML (`<nav>`, `<section>`, `<header>`, `<footer>`, etc.)
- Clear color contrast that passes WCAG AA contrast checks, for readability
- Responsive design with `flex-wrap`, `max-width`, and `media queries`
- Form controls are styled accessibly with `:disabled` states visible
- Links use descriptive text for screen reader clarity
- Layout avoids horizontal scrolling (`overflow-x: hidden`)

---

## 🧠 Key Principles Followed

- **User-centered design**: Layout and copy tailored to visitor needs and clarity
- **Minimalism**: Clean design with focused content and intentional whitespace
- **Performance-first**: Lightweight with no external dependencies

---

## 🔧 Future Improvements

- Enable functional form submission using JavaScript or backend service
- Add a testimonials or schedule section
- Integrate animations or transitions for user interaction
- Enhance accessibility with ARIA roles
- Optimize for SEO (meta descriptions, structured data)

---

## 📁 File Structure

breathe/
├── index.html
├── styles.css
├── script.js
├── breathe-yogaLogo.png
└── river-torrent.jpg

---

## 🧑‍💻 Author

Created by [Marki Lyons](https://mlyons-portfolio.netlify.app)  
&copy; <span id="copyright-year">

---

## 📝 License

This project is for educational and demonstration purposes only.