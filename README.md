# 어떡(어떤 떡볶이)

## www.utteok.com

![1_표지](https://github.com/Utteok/Utteok_Front/assets/110962765/14bb88eb-36da-407b-ade8-0c5381e65077)

## 프로젝트 소개

## 📚 Stacks

### Environment

![visualstudiocode](https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white")&nbsp;![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

### config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development (Front)

![typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)&nbsp;![styled-components](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black)&nbsp;![redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)

![jest](https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white)&nbsp;![testinglibrary](https://img.shields.io/badge/testinglibrary-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)&nbsp;![babel](https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)

## 시작 가이드

### Requirements

안정적인 구동을 위해 추천하는 버전입니다.

```
NPM 9.6.7
```

### Installation

```
git clone https://github.com/Utteok/Utteok_Front.git
cd Utteok_Front
```

### Frontend

```
cd src
npm install
npm start
```

## 화면 구성

## 트러블 슈팅

## 프로젝트를 마치며

<details>
  <summary>소감</summary>
  여러 직군과의 협업을 통해 소통하는 방법에 대해 배웠다.
특히 그동안 이미 여러 테스트를 거친 안정적인 api와 오픈 api만을 통해 개발해왔었기에 그동안 api 호출 시 문제가 발생하면 당연히 내 코드의 문제였다. 하지만 이번에는 백엔드와의 협업으로 인해 내 문제일 수도 있고 서버의 문제일 수도 있었다.
백엔드 쪽에서 문제가 생겼을 때 프론트 쪽의 코드 오류인지 백엔드의 문제인지 파악하는 데 시간이 많이 소요되었다.
따라서 백엔드와의 협업하는 방식을 익히게 되었다. 따라서 서버에 대한 지식이 어느정도 필요함을 느꼈다. 서버에 대한 지식, api에 대한 지식이 없으면 에러 원인을 파악하기 어려웠다.
개발 중 만난 CORS 에러, api GET방식에서 data를 보낼 수 없어 발생한 에러, DB table이 연결되지 않아 데이터가 나오지 않은 에러 등 모두 서버와 DB에 대한 이해가 없으면 이해하기 어려웠다. 자연스럽게 이번 기회에 개발자도구의 네트워크 탭과 친숙해졌다.

또한 커뮤니케이션의 중요성도 느꼈는데 기획과 디자인 단에서의 시각과 개발 단에서의 시각이 달라 모호한 기능이 있었다.
닉네임 유효성 검사의 경우도 기획, 디자인에서는 중복 여부와 유효한 입력인지 여부의 에러 메세지를 동일하게 작성하는 반면 개발단의 경우 중복 여부인지 유효한 입력인지 다른 api를 통해 검증하였기 때문에 자연스럽게 다른 에러메세지로 구분지을 수 있었다.
또한 내 입맛의 사진이 문제가 있을 때는 어떤 대체 이미지를 넣을지도 개발 단에서 더욱 직접적으로 느낄 수 있기 때문에 세세한 부분까지 소통이 필요했다.

TDD 개발방식을 일부 도입했는데

</details>

# Version 1.0 초기 릴리즈

## 프로젝트 소개

# Version 2.0 서비스 고도화

## 추가된 기능

- 스플래시 페이지

  - 소셜 로그인 기능 추가
  - 로그인/비로그인 사용자 구분 및 접근권한 설정

- 내 입맛 기록 추가

- 받은 칭호 페이지

  - 칭호 갯수 확인

- 못받은 칭호 페이지

  - 못받은 칭호 갯수 확인

- 내정보 페이지
  - 닉네임 변경
  - 후기 수정/삭제
