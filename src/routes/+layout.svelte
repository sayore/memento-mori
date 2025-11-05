<script>
  import '../app.css';
</script>

<div class="app">
  <header class="header">
    <div class="logo">
      <svg width="250" height="100" viewBox="0 0 250 100">
        <style>
          .title {
            font-family: 'Courier New', Courier, monospace;
            font-size: 24px;
            fill: #00ffff;
            transform: skewX(-10deg) translateX(5px);
          }
          .subtitle {
            font-family: 'Courier New', Courier, monospace;
            font-size: 12px;
            fill: #ff00ff;
            transform: skewX(10deg) translateX(25px) translateY(10px);
          }
        </style>
        <text x="10" y="40" class="title">Hub of Insanity</text>
        <text x="20" y="70" class="subtitle">WHAMSYSTEM</text>
      </svg>
    </div>
    <div class="header-title">
      <h1>Welcome to the Hub</h1>
    </div>
  </header>
  <div class="main-content">
    <nav class="side-menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
    <main class="content">
      <slot />
    </main>
  </div>
</div>
