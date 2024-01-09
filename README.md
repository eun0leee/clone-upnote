# Upnote 클론

## 🔗 배포 링크

- clone-upnote.vercel.app

## 🐢 실행 방법

개발환경 실행을 위해 클론을 받습니다.

```
git clone https://github.com/eun0leee/clone-upnote.git
```

프로젝트 디렉토리로 이동합니다.

```
cd clone-upnote
```

프로젝트가 의존하는 패키지들을 설치합니다.

```
npm install
```

개발 서버를 실행합니다.

```
npm start
```

## 🛠 기술 스택

<img alt="React" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img alt="Typescript" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img  alt="TailwindCSS" src="https://img.shields.io/badge/tailwindCSS-06B6D4?style=for-the-badge&logo=tailwindCSS&logoColor=white"> <img  alt="Recoil" src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"> <img  alt="Lexical" src="https://img.shields.io/badge/Lexical-75B5FF?style=for-the-badge&logoColor=white"> <br/>

<img alt="eslint" src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black"> <img alt="Husky" src="https://img.shields.io/badge/Husky-46B980?style=for-the-badge&logo=Husky&logoColor=black"> <img alt="Lint-Staged" src="https://img.shields.io/badge/Lint Staged-2E86FF?style=for-the-badge&logo=Lint-Staged&logoColor=black">

## ✅ 요구 구현 사항

- [x] UI는 ‘Upnote’를 기반으로 합니다.
- [x] 최소 가로 길이는 '1400px' 이고, 최대 가로 길이는 '1920px' 입니다.
- [x] 최초의 화면에서 NOTEBOOKS는 하나도 없는 상태이어야 합니다.
- [x] 백엔드를 구현하지 않습니다. 모두 프론트 단에서만 처리될수 있어야 합니다. (그러므로 데이터는 LocalStorage에 저장하여 구현합니다.)
- [x] NOTEBOOKS의 목록을 확인 할 수 있어야합니다.
- [x] NOTEBOOKS를 추가하거나 삭제 할 수 있어야 합니다.
- [x] NOTEBOOKS에 메모를 추가하거나 삭제 할 수 있어야 합니다.
- [x] NOTEBOOKS 안에 NOTEBOOKS를 추가 할 수 없습니다.
- [x] NOTEBOOKS를 선택하여 해당 NOTEBOOKS에 있는 메모 목록을 확인 할 수 있어야 합니다.
- [ ] 메모 목록에서 메모를 선택하여 메모 내용을 확인하고 수정 할 수 있어야 합니다.
- [x] 텍스트 편집기는 ‘lexical text editor’를 이용하여 구현되어야 합니다.
- [x] 텍스트 편집 영역의 위, 아래 버튼은 구현하지 않습니다.(Checklist, Insert Image, Heading, Bold 등)
- [x] 텍스트 입력 후 즉시 혹은 일정 시간 후에 입력 사항이 저장 되어야 합니다.
- [x] 메모 목록에서 메모 내용의 첫번째 줄이 메모의 제목으로 표시 되어야 합니다.
- [x] 메모의 제목이 메모 목록의 가로 길이를 넘어가는 경우, 말줄임표(...) 처리되어야 합니다.

## 📂 폴더 구조

```
┣ 📂.husky
┣ 📂src
┃ ┣ 📂assets
┃ ┣ 📂components
┃ ┣ 📂constants
┃ ┣ 📂hooks
┃ ┣ 📂pages
┃ ┣ 📂recoil
┃ ┣ 📂storage
┃ ┣ 📂types
┃ ┣ 📂utils
┗ 📜etc (setting files)
```
