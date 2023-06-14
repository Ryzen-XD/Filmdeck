// const commentForm = document.getElementById("comment-form");
// const commentList = document.getElementById("comment-list");

// commentForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nameInput = document.getElementById("name");
//   const commentInput = document.getElementById("comment");
//   const name = nameInput.value;
//   const comment = commentInput.value;

//   // create new comment element
//   const newComment = document.createElement("div");
//   newComment.classList.add("comment");
//   const commentHTML = `
//     <h4>${name}</h4>
//     <p>${comment}</p>
//   `;
//   newComment.innerHTML = commentHTML;
//   commentList.appendChild(newComment);

//   // clear form inputs
//   nameInput.value = "";
//   commentInput.value = "";
// });


const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");
  const name = nameInput.value;
  const comment = commentInput.value;

  // create new comment element
  const newComment = createCommentElement(name, comment);
  commentList.appendChild(newComment);

  // clear form inputs
  nameInput.value = "";
  commentInput.value = "";
});

// helper function to create new comment element
function createCommentElement(name, comment) {
  const commentWrapper = document.createElement("div");
  commentWrapper.classList.add("comment");

  const commentBody = document.createElement("div");
  commentBody.classList.add("comment-body");

  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");
  const nameElement = document.createElement("h4");
  nameElement.textContent = name;
  commentHeader.appendChild(nameElement);

  const replyButton = document.createElement("button");
  replyButton.classList.add("reply-button");
  replyButton.textContent = "Reply";
  replyButton.addEventListener("click", () => {
    const replyForm = createReplyFormElement(name);
    commentBody.appendChild(replyForm);
    replyButton.style.display = "none";
  });
  commentHeader.appendChild(replyButton);

  commentBody.appendChild(commentHeader);

  const commentText = document.createElement("p");
  commentText.textContent = comment;
  commentBody.appendChild(commentText);

  commentWrapper.appendChild(commentBody);

  return commentWrapper;
}

// helper function to create reply form element
function createReplyFormElement(name) {
  const replyForm = document.createElement("form");
  replyForm.classList.add("reply-form");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Your Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.required = true;
  nameInput.classList.add("reply-name-input");
  nameInput.value = name;
  nameLabel.appendChild(nameInput);
  replyForm.appendChild(nameLabel);

  const replyLabel = document.createElement("label");
  replyLabel.textContent = "Reply:";
  const replyInput = document.createElement("textarea");
  replyInput.required = true;
  replyInput.classList.add("reply-text-input");
  replyLabel.appendChild(replyInput);
  replyForm.appendChild(replyLabel);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("reply-submit-button");
  replyForm.appendChild(submitButton);

  replyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const replyName = nameInput.value;
    const replyText = replyInput.value;
    const replyElement = createCommentElement(replyName, replyText);
    replyForm.parentElement.insertBefore(replyElement, replyForm.nextSibling);
    replyForm.remove();
  });

  return replyForm;
}


// Rating
const stars = document.querySelectorAll('.star');
const ratingDisplay = document.querySelector('.rating-display');

let rating = 0;

stars.forEach(star => {
  star.addEventListener('click', function() {
    rating = stars.indexOf(this) + 1;
    updateRatingDisplay();
  });
});

function updateRatingDisplay() {
  ratingDisplay.innerHTML = `You rated this movie ${rating} stars.`;
  
  // Remove active class from all stars
  stars.forEach(star => {
    star.classList.remove('active');
  });
  
  // Add active class to selected stars
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add('active');
  }
}


