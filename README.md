# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](https://drive.google.com/uc?export=view&id=1lqU1dtj65KzEQn7ASF3qvr9c5hTQ3vaq)

![Mobile](https://drive.google.com/uc?export=view&id=1T6YE_f7dty8pQQGW0qDP5iB29-vlKay5)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/Notifications-page.git)
- Live Site URL: [Live](https://demarcus11.github.io/Notifications-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

Using a grid-template-rows to create an accordian:

```css
.message-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;
  margin-top: 1rem;
  margin-left: 3rem;
}

.message-content[aria-hidden="false"] {
  grid-template-rows: 1fr;
}

.message-content[aria-hidden="true"] > div {
  padding: 0;
  border: 0;
  margin-bottom: 0;
}

.message-trigger {
  background: transparent;
  border: 0;
  width: 100%;
  cursor: pointer;
}
```

Create an accordian by using grid and a button for each panel to trigger when its clicked

```html
<div class="post">
  <div class="messages">
    <div class="message">
      <button
        class="message-trigger"
        aria-expanded="false"
        aria-controls="message"
      >
        <div class="post-details | flex-group">
          <div class="post-pfp">
            <img
              src="assets/images/avatar-rizky-hasanuddin.webp"
              alt="Rizky Hasanuddin Profile Picture"
            />
          </div>

          <div>
            <div class="flex-group">
              <p>
                <strong
                  ><a href="#" class="name">Rizky Hasanuddin</a>
                  <span class="post-details"
                    >sent you a private message</span
                  ></strong
                >
              </p>
              <svg
                class="arrow-down"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <p class="time">5 days ago</p>
          </div>
        </div>
      </button>
      <div class="message-content" role="region" aria-hidden="true">
        <div tabindex="0">
          <p>
            Hello, thanks for setting up the
            <a href="#" class="activity">Chess Club</a> . I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

Using attributes on HTML elements to grab elements in JS such as:

```html
data-read="false" aria-expanded="false" aria-hidden="true"
```

```css
/* This is saying on large screens choose the max-width because 50rem < 100% vw - padding and when container is less than max-width, choose 100% vw - padding on sides for small screens because 100% vw - padding < 50rem when vw is small */
width: min(var(--max-width), 100% - (var(--padding) * 2));
```

```css
animation: pulse 1s infinite;

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
```

Since the parent element .post-details is using display: flex, you need a display propety to see the ::after, inline-block will put element on the same line, display: block will put it on a new line

```css
.post[data-read="false"] .post-details::after {
  content: "";
  width: 8px;
  aspect-ratio: 1 / 1;
  display: inline-block;
  border-radius: 50%;
  background-color: red;
  margin-left: 0.5rem;
  animation: pulse 1s infinite;
}
```

```js
// closest method used to find to child element that triggered the event
const readPost = e.target.closest(".post");
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus)
