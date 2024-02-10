### Converting Web Components into React Components

In the modern web development landscape, React has emerged as a dominant library for building user interfaces, thanks to its component-based architecture. This assignment focuses on bridging the gap between traditional web components and React components. You'll be tasked with converting a web component into a React component, leveraging React's declarative syntax and state management capabilities to recreate the functionality and structure of the original component.

#### The Web Component in Picture:

Before diving into the conversion process, let's examine the web component you'll be converting:

```html
<div class="movie-card">
  <div
    class="movie-header"
    style="background: url('imageUrl'); background-size: cover;"
  >
    <div class="header-icon-container">
      <a href="#">
        <i class="material-icons header-icon"></i>
      </a>
    </div>
  </div>
  <div class="movie-content">
    <div class="movie-content-header">
      <a href="#">
        <h3 class="movie-title">Title</h3>
      </a>
      <div class="imax-logo"></div>
    </div>
    <div class="movie-info">
      <div class="info-section">
        <label>Date & Time</label>
        <span>Show Time</span>
      </div>
      <div class="info-section">
        <label>Screen</label>
        <span>Screen</span>
      </div>
      <div class="info-section">
        <label>Row</label>
        <span>Row</span>
      </div>
      <div class="info-section">
        <label>Seat</label>
        <span>Seat</span>
      </div>
    </div>
  </div>
</div>
```

This web component, defined as `<nexttech-movie>`, dynamically renders a movie card displaying various details such as the movie title, showtime, screen, row, seat, and an image background. Your objective is to recreate this functionality within a React component, utilizing props to pass data and JSX for templating.

#### Goals of the Assignment:

- Understand the structure and functionality of the provided web component.
- Convert the web component into a React component, preserving its dynamic data rendering and styling.
- Implement React's component-based architecture to enhance reusability and maintainability.

By completing this assignment, you'll gain valuable experience in translating between different component paradigms and further your understanding of React's powerful UI composition model.
