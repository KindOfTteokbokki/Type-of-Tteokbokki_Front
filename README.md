# 어떡(어떤 떡볶이)

### www.utteok.com

![1_표지](https://github.com/Utteok/Utteok_Front/assets/110962765/14bb88eb-36da-407b-ade8-0c5381e65077)
![Group 1437255724](https://github.com/Utteok/Utteok_Front/assets/110962765/24d47b40-d087-4357-bb7d-f32659c17c48)

## 프로젝트 소개

### 서비스 소개서 (서비스 기획의도와 자세한 소개를 보고 싶다면 확인해주세요. 1차 릴리즈 내용만 포함하고 있어요.)

### [어떡 서비스소개서.pdf](https://github.com/Utteok/Utteok_Front/files/14552592/_.pdf)

![2_overview](https://github.com/Utteok/Utteok_Front/assets/110962765/01bb0d33-1ead-40ec-ad83-9cdab8bc2a4f)

![13_main features](https://github.com/Utteok/Utteok_Front/assets/110962765/b7205aff-56e9-46e2-8738-4977fd1e07c9)

## 📚 Stacks

![9_infra](https://github.com/Utteok/Utteok_Front/assets/110962765/6fc29389-3646-498b-a0ec-09fbee4e6d33)

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

![8_IA](https://github.com/Utteok/Utteok_Front/assets/110962765/fb59e5c0-7dcf-47fe-b384-ced46571e938)

## 트러블 슈팅

### 1

https://coding-frog.tistory.com/36

- **[문제 상황]** 코드의 비즈니스 로직과 UI가 섞여 가독성이 떨어진다.
- **[해결 방법]** VAC 패턴을 적용하여 비즈니스 로직을 분리하였고 가독성을 향상시켰다.

### 2

https://coding-frog.tistory.com/38

- **[문제 상황]** 테스팅 라이브러리 사용 시 theme를 읽지 못해 에러가 발생한다.
- **[해결 방법]** customJestRender.js 를 생성하여 테스팅 라이브러리의 render 함수를 커스텀하여 테스트 안에서 렌더링하는 컴포넌트를 ThemeProvider로 감싸서 theme를 인식할 수 있도록 하였다.

### 3

- **[문제 상황]** 비로그인 유저의 접근 불가능 페이지에서 토큰의 존재 여부를 판단하는 동일한 코드의 중복이 발생한다.
- **[해결 방법]** useMoveLogin 이라는 `custom hook`을 만들어 로그인 유저만 접근 가능한 페이지에 토큰이 없을 시 로그인 페이지로 넘어가게 하였다.

## 기능 종류

### Version 1.0 초기 릴리즈

- 스플래시 페이지
- 내 입맛 고르기 페이지

  - 취향 선택
  - 추천 결과 보기
  - 칭호 받기

- 홈 화면

  - 직전 받은 내 입맛 보기
  - 나도 추천할래 최근 글 4개 보기
  - 운영진이 추천하는 꿀조합 확인

- 나도 추천할래 페이지
  - 추천 후기 글 보기
  - 글 쓰기

### Version 2.0 서비스 고도화

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

## 프로젝트를 마치며

<details>
 <summary>소감</summary>

- 여러 직군과의 협업을 통해 소통하는 방법에 대해 배웠다. 특히 백엔드 개발자와 협업하는 방식을 많이 익혔다. 그동안 이미 여러 검증을 거친 안정적인 api나 오픈 api만을 통해 개발해왔었기에 api 호출 시 문제가 발생하면 당연히 내 코드의 문제였다. 하지만 이번에는 백엔드 개발자와의 협업으로 프론트 쪽 문제일 수도 있고 서버 문제일 수도 있었다.

  따라서 처음에는 에러 발생 시 프론트 쪽의 코드 오류인지 백엔드의 문제인지 파악하는 데 시간이 많이 소요되었다.
  에러의 원인을 파악하고 서버 문제라고 판단되면 수정을 요청해야했기 때문에 서버에 대한 지식이 어느정도 필요함을 느꼈고 개발자도구의 네트워크 탭과 더욱 친숙해졌다. 개발 중 만난 CORS 에러, api GET방식에서 data를 보낼 수 없어 발생한 에러, DB table이 연결되지 않아 데이터가 나오지 않은 에러 등을 해결하는 과정에서 서버와 DB에 대한 이해를 높일 수 있었다.

- 커뮤니케이션의 중요성을 느꼈다. 기획과 디자인 단에서의 시각과 개발 단에서의 시각이 달라 기능이 모호하게 정의될 때가 있었다.

  예를 들자면 닉네임 유효성 검사에서 기획이나 디자인에서는 중복된 입력인지 유효한 입력인지 여부의 에러를 하나로 보고 에러메세지를 동일하게 기획한 반면, 개발단의 경우 중복 여부인지 유효한 입력인지를 서로 다른 api를 통해 검증하였기 때문에 자연스럽게 다른 에러메세지로 구분지을 수 있었다.
  또한 api에서 받아오는 사진이 문제가 있을 때는 어떤 대체 이미지를 넣을지 등에 대한 세세한 부분까지는 미리 제공되지 않아 개발 단에서 직접적으로 이슈를 파악하는 경우가 많았기 때문에 처음부터 비즈니스 로직에 대한 더 구체적인 논의가 필요함을 느꼈다.

- TDD 개발방식을 일부 도입했는데 로컬 서버에서 눈으로 확인하지 않고도 UI나 기능이 잘 동작한다는 것을 알 수 있다는 점에서 효율적임을 느꼈다. 또한 불필요한 코드를 작성할 일이 없기에 클린 코드에 가까워질 수 있었다.

- 실서비스화 하는 프로젝트이기에 유저 입장을 더욱 고려하며 개발할 수 있었다. 첫 릴리즈 이후 기능을 고도화 하는 과정에서도 유저 입장에서 필요한 기능을 고려하였다.
</details>

![14_next steps](https://github.com/Utteok/Utteok_Front/assets/110962765/febc3ace-1b47-41c1-8bd2-6eb400b9275c)
![15_thankyou](https://github.com/Utteok/Utteok_Front/assets/110962765/d7f1ec39-4017-4139-b296-9e66f340083e)
