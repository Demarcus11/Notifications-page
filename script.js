const accordian = document.querySelector(".messages");
const posts = document.querySelectorAll(".post");
const markAsRead = document.querySelector(".button");
const notificationAmount = document.querySelector(".notification-number");

accordian.addEventListener("click", (e) => {
  const activeMessage = e.target.closest(".message");
  if (!activeMessage) return;
  toggleAccordian(activeMessage);
});

function toggleAccordian(messageToActivate) {
  const activeButton = messageToActivate.querySelector(".message-trigger");
  const activeMessageIsOpened = activeButton.getAttribute("aria-expanded");
  const arrow = document.querySelector(".arrow-down");

  // if message is opened then close it
  if (activeMessageIsOpened === "true") {
    messageToActivate
      .querySelector(".message-trigger")
      .setAttribute("aria-expanded", false);

    // Change aria-hidden to true for styling
    messageToActivate
      .querySelector(".message-content")
      .setAttribute("aria-hidden", true);

    // Change arrow to up
    arrow.setAttribute("aria-hidden", true);
  }
  // if message is closed then open it
  else {
    // Change aria-expanded to true for screen readers
    messageToActivate
      .querySelector(".message-trigger")
      .setAttribute("aria-expanded", true);

    // Change aria-hidden to false for styling
    messageToActivate
      .querySelector(".message-content")
      .setAttribute("aria-hidden", false);

    // Change arrow to up
    arrow.setAttribute("aria-hidden", false);
  }
}

posts.forEach((post) => {
  post.addEventListener("click", (e) => {
    // closest method used to find to child element that triggered the event
    const readPost = e.target.closest(".post");

    toggleRead(readPost);
  });
});

function toggleRead(postToRead) {
  const postStatus = postToRead.getAttribute("data-read");
  let amount = parseInt(notificationAmount.textContent);

  if (postStatus === "false") {
    postToRead.setAttribute("data-read", "true");
    notificationAmount.textContent = `${--amount}`;
  }
}

markAsRead.addEventListener("click", () => {
  posts.forEach((post) => {
    const postStatus = post.getAttribute("data-read");
    if (post.hasAttribute("data-read")) {
      if (postStatus === "false") {
        toggleRead(post);
        notificationAmount.textContent = "0";
      }
    }
  });
});
