document.addEventListener("DOMContentLoaded", () => {
  const bookmarkInput = document.getElementById("bookmarkInput");
  const addBookmarkBtn = document.getElementById("addBookmarkBtn");
  const bookmarkList = document.getElementById("bookmarkList");

  function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarkList.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = bookmark;
      link.textContent = bookmark;
      link.target = "_blank";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Видалити";
      deleteBtn.classList.add("delete");
      deleteBtn.addEventListener("click", () => deleteBookmark(index));

      li.appendChild(link);
      li.appendChild(deleteBtn);
      bookmarkList.appendChild(li);
    });
  }

  function addBookmark() {
    const url = bookmarkInput.value.trim();
    if (url) {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      bookmarks.push(url);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      bookmarkInput.value = "";
      loadBookmarks();
    }
  }

  function deleteBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    loadBookmarks();
  }

  addBookmarkBtn.addEventListener("click", addBookmark);
  loadBookmarks();
});

document.addEventListener("DOMContentLoaded", () => {
  const bookmarkInput = document.getElementById("bookmarkInput");
  const addBookmarkBtn = document.getElementById("addBookmarkBtn");
  const bookmarkList = document.getElementById("bookmarkList");

  function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarkList.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = bookmark;
      link.textContent = bookmark;
      link.target = "_blank";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Видалити";
      deleteBtn.classList.add("delete");
      deleteBtn.addEventListener("click", () => deleteBookmark(index));

      li.appendChild(link);
      li.appendChild(deleteBtn);
      bookmarkList.appendChild(li);
    });
  }

  function addBookmark() {
    const url = bookmarkInput.value.trim();
    if (url) {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      bookmarks.push(url);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      bookmarkInput.value = "";
      loadBookmarks();
    }
  }

  function deleteBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    loadBookmarks();
  }

  if (addBookmarkBtn && bookmarkInput && bookmarkList) {
    addBookmarkBtn.addEventListener("click", addBookmark);
    loadBookmarks();
  }

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const saveBtn = document.getElementById("saveBtn");

  function loadFormData() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername) usernameInput.value = savedUsername;
    if (savedPassword) passwordInput.value = savedPassword;
  }

  function saveFormData() {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
  }

  if (saveBtn && usernameInput && passwordInput) {
    saveBtn.addEventListener("click", saveFormData);
    loadFormData();
  }
});
