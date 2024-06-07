const nav = () => {
  return `   
  <header class="primary-header">
  
  <div class="logo-container">
      <img class="HElio" src="https://www.thesouledstore.com/static/img/newlogo.8dcc6cc.png" alt="Blinking Eye">
      <img class="blinking-eye" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkEwODk1MUZGNkNEMTFFNzg2QkRBQzUwNzZCN0Y0QUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkEwODk1MjBGNkNEMTFFNzg2QkRBQzUwNzZCN0Y0QUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQTA4OTUxREY2Q0QxMUU3ODZCREFDNTA3NkI3RjRBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQTA4OTUxRUY2Q0QxMUU3ODZCREFDNTA3NkI3RjRBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PivGwz8AAAMfSURBVHjatFRfSFNRGP/O3d2c06lTkQQ1zX9LTUhqRUWpD4GlghVSFPlUEPVQBj2VkvOpp/ClejQhQlIxNMEH/wRSmLoyFJelLiMR55zb7ry7u/eezjnToS7qyQ/O/XfO9zu/7/f77kEYY9ir4FWHA1SPh1MWHKek7rf3lbm5Ak16xlzU9avPdaWlXWzVFgGEAIsigCQB6HSgzMwA9vpAfNkG+ps3OHl8QtVfuQzIZCJrATiSgLDgP++3NvcF+vurlaWlHGlo8Kzv7r22QGdnPWg0/yNoQTExXf4m6xReXW0BjksOM8eBQKpgbX6qLi8buMREAFUFSEgA7HbH+J+9uM2lpdk0mZmDeGMDkMEAKDqaVcAKiYsrERoaX8lfJrOBfJdtNrMq+NJirU3XSGV+Ljhhu6BMTR9A8fEh4E0ZKBBe/HlAGhiopYm7g7AFsbX1gTxjz6a59B0lJUHgTUeNNDJSzZgHh9+XA4dCbLabq9UC9vtBmf1erMwvpGOvd5GUDXhtDahUyGgslCc+FzPZ6KDENu9ST2+VrqzsNa/Oz+dSINjdNXQzngd1xWmSR0dTyUaLmBoZDLI5Ulme6vWaduRQDGa0vSCkuSjqiQmRNlFpyELwePjgp9Eo2BABEU9YJygKnY8mLPkt/cNBsIg/sQwc6fViWOtdzBnTOKOsPWIJUIlwcAfzDQIkR1RMsIjpPgbOZWXNgt1eBHr9Tmnos6wAl5Li4o9bfhPNgWnuCmv+jTMa10iX7dshJSGkMedPM3DtmdMD0ru+mggGhCHS8aDJyfmqycz6RUFRbh5hFSKBEhKm5InxSdluP8hkor7JMtmAA11lZQ9TSFtyuFNTWDCH19chrD2VhMiAyJ+qKy9vB9LjEZYIAujr6p7w5vwfeN3D3rFzFaJqL3XpTp7oZosUhwNJHz5WuY4eE1bS92OnuQA7MzLxatEhn9jeXk/PHkyqYIMwU30+UF0udg+OjYE0NGzx3rrT4a44Ny08traobncyyyGDp1cUY+g1PHpY8dezhZb87xjFfuGiobGBnS3bmwPt5anIwR7GHwEGAC5hnE6HKVfrAAAAAElFTkSuQmCC" alt="Blinking Eye">
  </div>
  
  <nav>
      <ul>
          <li><a href="../html/index.html">Home</a></li>
          <li><a href="../html/product.html">Products</a></li>
          <li><a href="../html/login.html">Login</a></li>
          <li><a href="../html/signup.html">Signup</a></li>
          <li><a href="../html/cart.html">Cart</a></li>
          <li><a href="../html/admin.html">admin</a></li>
      </ul>
  </nav>
  
  <div class="search">
      <input type="text" placeholder="Search...">
  </div>
</header>


<header class="secondary-header" >
  <div class="scrolling-text" id="none">
       <span class="sale"> << SALE </span><span class="flat"> END OF THE SUMMER SCEASON SALE HURRY UP</span><span class="sale"> SALE      >>  </span>
  </div>
</header>
`
}

export default nav