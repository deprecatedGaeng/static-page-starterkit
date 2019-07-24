# 🛠 STATIC PAGE STARTER KIT Ver.1.1.0


닭잡는데 소잡는칼을 쓸 수 없어서 만들었습니다.(React,Vue 등등..)

정적 페이지를 빨리 구축하기 위한 스타터킷입니다.

배포용은 아니지만 누구나 자유롭게 사용, 변조 가능합니다.

## ❗️ TIP

- ES6 문법을 사용할 수 있습니다.
- SASS(SCSS)를 사용할 수 있습니다.
- 로컬서버 사용 및 브라우저 자동갱신을 사용할 수 있습니다.(새로고침 안녕👋)
- `ejs`를 이용한 html include 문법을 사용할 수 있습니다.

## 📃 USAGE

### 1. 해당 패키지 다운로드 후, 루트 디렉토리📁에서 의존성 모듈을 설치합니다.

```
npm install
```


### 2. Folder structure (📁src)
- views : `ejs` 확장자를 사용합니다.
    - html include를 사용할 수 있습니다.
    - `a`태그 사용시 링크에는 `.html` 확장자를 사용합니다.
    ```
        ❌ <a href="./test.ejs">
        ⭕️ <a href="./test.html">
    ```
- styles : `scss`를 사용할 수 있습니다. sass,scss를 사용하지 않으시면 확장자만 scss로 사용해주세요.
- js : js파일을 생성해주세요. es6문법 사용가능합니다.
- inc : include로 사용할 html 컴포넌트를 생성하여 사용합니다. `ejs` 확장자를 사용합니다.
- lib : 외부 라이브러리 js 파일
- assets : 이미지,동영상 등등


### 3. `npm run gaeng` 혹은 `gulp` 명령어로 로컬서버를 실행합니다.

```
//NPM
npm run gaeng

//YARN
yarn gaeng

//gulp
gulp
```


### 4. 빌드 명령어는 따로 없습니다. 작업 후 `dist` 폴더의 파일들을 배포에 사용해주세요.


## HISTORY

| Date | history | Version |
|------------|-----------|-----------|
| 2019-07-19 | 최초 배포 | Ver 1.0.0 |
| 2019-07-24 | 1. ejs 추가| Ver 1.1.0 |
|            | 2. ejs,scss 컴파일 에러시 notify 추가|    |

**Copyright 2019 . Kyeonggeun Cho All rights reserved**