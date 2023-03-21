const searchContainer = document.querySelector('.inputBox');
const searchInput = document.getElementById("searchInput");

searchContainer.addEventListener("mouseover", () => {
  searchInput.style.display = "block";
});

searchContainer.addEventListener("mouseout", () => {
  searchInput.style.display = "none";
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") { // Enter 누를 경우 동작
    const query = searchInput.value; // 검색창에 입력한 내용 저장
    const url = `https://www.google.com/search?q=${query}`; // 구글로 이동하여 검색 결과 보여줌

    window.location.href = url;
    searchInput.value = '';
    searchInput.style.color = '#fff';
  }
});