function getWeatherData(lat, lon) { // 위도, 경도 좌표를 가져와 해당 위치 날씨 정보를 가져옴
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang={en}`;

  fetch(API_URL) // URL을 사용하여 API에 가져오기 요청
    .then(response => response.json()) // JSON 형식으로 변경
    .then(data => {
      const { main: { temp }, weather: [{ icon }] } = data; // JSON에서 필요한 날씨 데이터 추출
      const temperature = parseInt(temp); // 온도를 정수로 바꿈
      // const { name, main: { temp }, weather: [{ icon }], sys: { country, sunrise, sunset } } = data;
      const weatherIcon = `https://openweathermap.org/img/wn/${icon}.png`; // 아이콘 이미지
      const regionCodes = data.name; // 도시 이름..(오차가 있음)
      // const regionCodes = [country]; // 지역 코드 배열로 만듦
      const weatherDataDiv = document.getElementById('weather-data');
      weatherDataDiv.innerHTML = `
        <div class="weather-info"> 
          <img src="${weatherIcon}" alt="Weather icon" style="width: 3rem; height: 3rem;">
          <div class="temp">${temperature}°</div>
        </div>
        <div class="class-city">${regionCodes}</div>
      `; // HTML Code 추가 
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function getLocation() { // 현재 좌표 찾는 함수
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => { // 사용자의 현재 위치 좌표를 검색하여 getWeatherData()로 전달
      const { latitude, longitude } = position.coords;
      getWeatherData(latitude, longitude);
    }, error => {
      console.error('Error getting current position:', error); // 오류 발생시 에러 메시지 출력
    });
  } else {
    console.error('Geolocation not supported by this browser');
  }
}

getLocation(); // getLocation() 함수를 실행하여 사용자의 현재 위치를 검색하고 날씨 데이터 표시
