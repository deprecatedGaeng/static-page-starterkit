# 🛠 STATIC PAGE STARTER KIT Ver.1.2.1

정적 페이지를 빨리 구축하기 위한 스타터킷입니다.

누구나 자유롭게 사용, 변조 가능합니다.

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
- styles : `scss`를 사용할 수 있습니다. sass,scss를 사용하지 않으시면 css로 사용해주세요.
- js : js파일을 생성해주세요. es6문법 사용가능합니다.
- inc : include로 사용할 html 컴포넌트를 생성하여 사용합니다. `ejs` 확장자를 사용합니다.
- lib : 외부 라이브러리 js 파일
- assets : 이미지,동영상 등등

### 3. ejs
- html include를 사용할 수 있습니다.
- `a`태그 사용시 링크에는 `.html` 확장자를 사용합니다.
```
    ❌ <a href="./test.ejs">
    ⭕️ <a href="./test.html">
```
- ⚠️ html과 ejs의 파일명이 같지 않게 주의해주세요!

### 4. `npm run gaeng` 혹은 `gulp` 명령어로 로컬서버를 실행합니다. 

```
//NPM
npm run gaeng

//YARN
yarn gaeng

//gulp
gulp
```

### 5. 단일 파일 압축 지원
- 빌드 전 js 파일의 단일js파일을 위한 압축(bundling)을 원하시는 분은 `npm run bundle:js` or `yarn bundle:js`을 사용해주세요.
- js 라이브러리의 단일 파일 압축은 `npm run bundle:lib` or `yarn bundle:lib`을 사용해주세요.
- `bundle.js`// `bundle.lib.js`의 이름으로 압축됩니다.
- 압축 후 footer에 추가하는것을 권장합니다.

### 6. 자동 컴파일로 빌드가 따로 필요없지만 `src`와 `dist`의 파일싱크를 위해 배포전에 `npm run build` or `yarn build`를 실행해주세요.


## HISTORY

| Date | history | Version |
|------------|-----------|-----------|
| 2019-07-19 | 최초 배포 | Ver 1.0.0 |
| 2019-07-24 | 1. ejs 추가| Ver 1.1.0 |
|            | 2. ejs,scss 컴파일 에러시 notify 추가|    |
| 2019-09-30 | 1 .프로젝트 root 이하 모든 폴더에서 ejs 사용가능| Ver 1.2.0    |
|            | 2 .inc 폴더 수정시 자동 반영 |    |
|            | 3 .`src/assets` 수정 시 `dist/assets` Sync 에러 수정|    |
|            | 4 .stylesheet `css`,`sass` 사용가능|    |
| 2019-10-01 | build 추가 |   Ver 1.2.1   |

**Copyright 2019 . Kyeonggeun Cho All rights reserved**