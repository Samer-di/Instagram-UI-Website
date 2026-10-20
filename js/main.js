"use strict";

const users = [
  {
    userName: "samerr_di",
    userProfile: "images/samerr_di.jpg",
    userPost: "images/samerr_di.jpg",
    like: 120,
    comment: 15,
    repost: 4,
    share: 2,
  },
  {
    userName: "mcdonaldsleb",
    userProfile: "images/macdo.jpg",
    userPost: "images/macdopost.png",
    like: 300,
    comment: 10,
    repost: 3,
    share: 10,
  },
  {
    userName: "aboudi_dannawii",
    userProfile: "images/aboudi_dannawii.jpg",
    userPost: "images/aboudipost.png",
    like: 50,
    comment: 25,
    repost: 1,
    share: 2,
  },
  {
    userName: "omar_kabbaraa",
    userProfile: "images/omar_kabbara.jpg",
    userPost: "images/kabbarapost.png",
    like: 100,
    comment: 10,
    repost: 5,
    share: 7,
  },
  {
    userName: "tamerhosny",
    userProfile: "images/tamerhosny.jpg",
    userPost: "images/tamerhosny.jpg",
    like: 2000,
    comment: 300,
    repost: 400,
    share: 700,
  },
  {
    userName: "bmw",
    userProfile: "images/bmw.jpg",
    userPost: "images/bmwpost.png",
    like: 2000,
    comment: 300,
    repost: 400,
    share: 700,
  },
  {
    userName: "cacaoo.lb",
    userProfile: "images/cacao.jpg",
    userPost: "images/cacaopost.png",
    like: 2000,
    comment: 300,
    repost: 400,
    share: 700,
  },
  {
    userName: "cristiano",
    userProfile: "images/ronaldo.jpg",
    userPost: "images/ronaldopost.png",
    like: 2000,
    comment: 300,
    repost: 400,
    share: 700,
  },
  {
    userName: "sitndip",
    userProfile: "images/sitndip.jpg",
    userPost: "images/sitpost.png",
    like: 2000,
    comment: 300,
    repost: 400,
    share: 700,
  },
  {
    userName: "sa7se7official",
    userProfile: "images/sahseh.jpg",
    userPost: "images/sahsehpost.png",
    like: 2000,
    comment: 300,
    repost: 400,
    share: 700,
  },
];

const storiesContainer = document.querySelector("#stories");
const postsContainer = document.querySelector("#posts");
const navInfo = document.querySelector(".nav-info");
const menuBtn = document.querySelector(".menu-btn");
const circle = document.querySelector(".circle");

users.forEach((user) => {
  storiesContainer.innerHTML += `
    <div class="story-section">
      <div class="prof">
        <img src="${user.userProfile}">
      </div>
      <p class="pname">${user.userName}</p>
    </div>
  `;
});

users.forEach((user, index) => {
  postsContainer.innerHTML += `
    <div class="post">
      <div class="post-user">
        <div class="d-flex align-items-center justify-content-center">
          <div class="user-photo">
            <img src="${user.userProfile}">
          </div>
        </div>
        <div class="d-flex align-items-center">
          <p class="pusername">${user.userName}</p>
        </div>
        <div class="d-flex align-items-center justify-content-center position-relative">
          <button class="ellipsis-btn">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <div class="menu">
            <div class="item fw-bold text-danger">Report</div>
            <div class="item fw-bold text-danger">Unfollow</div>
            <div class="item">Add to Favorite</div>
            <div class="item">Not Interested</div>
            <div class="item">Go to post</div>
            <div class="item">Share to...</div>
            <div class="item">Copy link</div>
            <div class="item">Embed</div>
            <div class="item">About this account</div>
            <div class="item">
              <button class="cancel bg-transparent border-0">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <div class="post-image">
        <img src="${user.userPost}" class="main-post">
      </div>
      <div class="post-details">
        <div class="action">
          <button class="like-btn">
            <i class="fa-regular fa-heart"></i>
          </button>
          <span class="num like-num">${user.like}</span>
        </div>
        <div class="action">
          <button>
            <i class="fa-regular fa-comment"></i>
          </button>
          <span class="num">${user.comment}</span>
        </div>
        <div class="action">
          <button class="repost-btn">
            <i class="fa-solid fa-retweet"></i>
          </button>
          <span class="num repost-num">${user.repost}</span>
        </div>
        <div class="action">
          <button>
            <i class="fa-regular fa-paper-plane"></i>
          </button>
          <span class="num">${user.share}</span>
        </div>
        <div></div>
        <div class="action justify-content-end">
          <button class="save-btn">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  `;
});

const ellipsisButtons = document.querySelectorAll(".ellipsis-btn");
const menus = document.querySelectorAll(".menu");
const cancelButtons = document.querySelectorAll(".cancel");

ellipsisButtons.forEach((btn, index) => {
  const menu = menus[index];
  const cancel = cancelButtons[index];
  btn.addEventListener("click", () => {
    menu.classList.add("show");
  });
  cancel.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

const posts = document.querySelectorAll(".post");

posts.forEach((post, index) => {
  const likeIcon = post.querySelector(".fa-heart");
  const likeNum = post.querySelector(".like-num");

  let liked = false;
  let count = Number(likeNum.textContent);

  likeIcon.addEventListener("click", () => {
    liked = !liked;
    likeIcon.classList.toggle("fa-regular");
    likeIcon.classList.toggle("fa-solid");
    likeIcon.classList.toggle("active-like");
    if (liked) count++;
    else count--;
    likeNum.textContent = String(count);
  });

  const image = post.querySelector(".main-post");

  image.addEventListener("dblclick", () => {
    if (!liked) {
      liked = true;
      likeIcon.classList.add("fa-solid", "active-like");
      likeIcon.classList.remove("fa-regular");
      count++;
      likeNum.textContent = String(count);
    }
  });
});

posts.forEach((post) => {
  const repostIcon = post.querySelector(".fa-retweet");
  const repostNum = post.querySelector(".repost-num");
  let reposted = false;

  let count = Number(repostNum.textContent);
  repostIcon.addEventListener("click", () => {
    reposted = !reposted;
    repostIcon.classList.toggle("text-success");
    if (reposted) count++;
    else count--;
    repostNum.textContent = String(count);
  });
});

document.querySelectorAll(".save-btn i").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("fa-regular");
    btn.classList.toggle("fa-solid");
  });
});

circle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  circle.classList.toggle("left");
  circle.classList.toggle("right");
});

menuBtn.addEventListener("click", () => {
  navInfo.classList.toggle("move");
});
