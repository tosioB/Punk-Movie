# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Punk-Movie

이재원 강사님(판다코딩) 코드리뷰

완 - pages -> Detail, Search 등등.. 폴더명 안의 파일 이름을 index.jsx로 설정(관습)
완 - components -> NewPlaying을 NowPlaying으로 수정
완 - components -> Nowplaying/Upcoming/Popular 컴포넌트는 pages->Home폴더의 컴포넌트로 재배치
완 - components -> PopularMovie.jsx의 queryKey에 오타(pouplar-movie)있음
완 - components -> 바깥의 컴포넌트 폴더는 공용의 컴포넌트로 사용
완 - alias알아보기(상대경로는 사용하지 않기)

- 무한스크롤 만들때 사용했던 쿼리 사용해서 다른 컴포넌트도 fetch 생성
- swiper-slide 컴포넌트로 빼기
- 무비박스 컴포넌트로 빼기
- 무한스크롤의 로딩에 대한 useState를 쿼리의 isLoading으로 사용해도 됨.
- 받아온 영화 리스트를 맵 함수를 돌릴 때 data?. -> data && 추천
- useInview의 값이 루트마진이나 딜레이 넣어서 api중복 부르지 않게 하기
- useEffect를 사용해 fetch한 작업을 useQuery로 바꾸기
- 애플티비 따라한 애니메이션 자동스크롤 마우스오버 이벤트 만들기
- 애플티비 따라한 애니메이션 자동스크롤 무한(클론) 만들기

참고 - pages -> Search.jsx 하다 말았음.
