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
    /* autocomplete="off"으로 인해 필요 없는 코드 */ 
    // searchInput.value = '';
    // searchInput.style.color = '#fff';
  }
});

// 검색창에 입력했으면 커서 위치 이동해도 사라지지 않게 코드 업데이트 필요