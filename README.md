# Instagram-hashtag

과제 테스트용 해시태그 데이터 분석 리액트 웹앱

## 실행 순서
- src/data 폴더 안에 'hashtag_trend.json'파일과 'hashtag_info'폴더를 넣어주세요.
- 다음 명령어를 입력해 실행해주세요.
```
npm run start
```

## 목차


- [폴더구조](#폴더구조)
- [사용된 pakage 버전](#사용된-pakage-버전)
- [프로젝트 내용](#프로젝트-내용)
- [프로젝트 구성](#프로젝트-구성)


## 폴더구조

```bash
├─client
│  ├─public
│  ├─src
│  │  ├─components
│  │  │  ├─DataTable
│  │  │  ├─DetailPage
│  │  │  ├─LandingPage
│  │  ├─data
│  │  │  ├─hashtag_trend.json
│  │  │  ├─hashtag_info

```


## 사용된 pakage 버전
```
npm -version 6.14.4

"dependencies": {
    "@devexpress/dx-react-chart": "^2.7.4",
    "@devexpress/dx-react-chart-material-ui": "^2.7.4",
    "@devexpress/dx-react-core": "^2.7.4",
    "@material-ui/core": "^4.11.2",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  }

```

## 프로젝트 내용

###### 화면 기획 의도

인스타그램 해시태그 데이터를 이용해 해당 해시태그에 대한 분석 정보, 현재 트렌드 정보를 알 수 있습니다. 사용자 입장에서 간단하게 정보를 파악하고 데이터를 사용할 수 있도록 화면을 구성했습니다.

###### 사용한 라이브러리

- DevExtremeREACTIVE : 데이터를 차트형식으로 보여주기 위해 사용
- Material-UI : UI 구성을 위해 사용했으며, 간단하게 스타일링과 레이아웃을 잡을 수 있어 사용
- React-Router : 리액트 페이지 이동, 라우팅을 위해 사용


## 프로젝트 구성

###### 메인 화면
<p align="center"><img width="600px" height="300px" src="https://user-images.githubusercontent.com/60888056/105674275-951e7b00-5f2a-11eb-92f7-3ec1c7190ac7.png"/></p>

메인 화면으로 hashtag_trend 데이터 파일을 이용해 1일, 7일, 30일, 60일 그리고 증가량, 증가율순으로 데이터를 정렬해서 보여주도록 구성되어 있습니다. 
새로운 분석 대상이 된 해시태그 정보들을 같이 보여주게 구성되어 있습니다. 해시태그를 선택하면 해당 태그의 분석 페이지로 이동하게 됩니다.

<br/>
<br/>

###### 해시태그 분석 화면
<p align="center">
<span align="center"><img width="400px" height="300px" src="https://user-images.githubusercontent.com/60888056/105674289-98196b80-5f2a-11eb-9ec7-c7935b98e2f1.png"/></span>
<span align="center"><img width="400px" height="300px" src="https://user-images.githubusercontent.com/60888056/105674297-9bacf280-5f2a-11eb-8e7e-289ce8a3ae4f.png"/></span>
<span align="center"><img width="400px" height="300px" src="https://user-images.githubusercontent.com/60888056/105674301-9d76b600-5f2a-11eb-87ba-d160876914c2.png"/></span>
</p>



해시태그 하나를 클릭하면 해당 태그를 분석한 데이터를 시각화 해서 보여주는 상세 화면입니다. 여러 기준에 따라 데이터를 보여주며, 만약 선택한 태그의 상데 데이터가 없을 경우 알림창과 함께 랜딩페이지로 가도록 구현했습니다.



