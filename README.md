
$$\color{transparent}\fbox{\Large \color{white}{RHYTHM SHOW PROJECT}}$$  
---

![image](https://github.com/Ju-jh/project-rhythm-show-nextjs14/assets/121030294/28865257-af3d-4bc8-a7ae-55398bb95a24)

<br>

## 0. Index
1. [Team Member](#1-Team-Member)
2. [Wireframe](#2-Wireframe)
3. [Stack](#3-Stack)
4. [Architecture](#4-Architecture)
5. [Execution Method](#5-Execution-Method)
6. [Work Rules](#6-Work-Rules)

<br>




## 1. Team Member

- CEO : Chief Executive Officer <br/>
- PM : Project Manager <br/>

<div align="center">


### CEO & PM

| <a href=https://github.com/ju_jh><img src="https://avatars.githubusercontent.com/u/121030294?v=4" width=100px/><br/><sub><b>@ju_jh</b></sub></a><br/> | 
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | 
|                                                                           주재훈                                                                          |                                                                  
|                                                                             PM                                                                           |        

</div>

<br>




## 2. Wireframe


[Figma 바로가기](https://www.figma.com/design/T34r4Y6YxoHeRdNB6kC51A/네디플_Design-file?node-id=0-1&t=gCkRVRH3HloOqmrD-1)


<br>





## 3. Stack

<div align=center>
  <p>FE</p>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/react-00A8E1?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> 
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> 
  <img src="https://img.shields.io/badge/figma-EF2D5E?style=for-the-badge&logo=figma&logoColor=black">
  <img src="https://img.shields.io/badge/prettier-FF4F8B?style=for-the-badge&logo=prettier&logoColor=white">
  <br>

  <img src="https://img.shields.io/badge/redux-66459B?style=for-the-badge&logo=redux&logoColor=white">

  <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
  
  <br>
</div>
<br>





## 4. Architecture

  <br>
  <br>
  <br>
Project Architecture 작성 요망.
  <br>
  <br>
  <br>

<br>



## 5. Execution Method
 - **yarn 설치 방법**

   1. Homebrew를 사용하는 설치
      
       `$ brew install yarn`

       -> Homebrew가 없다면?
      
        `$ /usr/bin/ruby -e "$(crul -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

    2. NPM을 사용하는 설치
       
        `$ npm install -g yarn`

- **yarn 버전 확인**
  
   `$ yarn --version`

- **프로젝트 실행**
  
   `$ yarn install`
  
  이후
  
   `$ yarn run dev`

<br>



## 6. Work Rules

### Workflow
> 1. Milestone 생성 (기한 기입 필수)
> 2. Projects 에서 Draft 생성 후 issue화 (issue number 등록 및 issue milestone 연동)
> 3. milestone 과 관련된 브랜치 생성 후 작업
> 4. 작업 완료 후 issue 종료
> 5. milestone 내의 모든 issue 종료 후 관련된 브랜치 develop merge

### Branch Strategy
> - main / develop 브랜치 기본 생성
> - 브랜치명은 feature-기능명 으로 제작
> - 브랜치명은 영어(소문자)만 허용
> - main으로 PR 하는 것은 개발이 완료된 상황에만 PR
> - 개발 중에는 devolop branch에만 PR
> - PR 전 최소 1인 이상 승인 필수

### Git Convention
> 1. 적절한 커밋 접두사 작성 (영문 소문자)
> 2. 커밋 메시지 내용 작성 (한글로 작성하되 간결하게)
> 3. 내용 뒤에 이슈 (#이슈 번호)와 같이 작성하여 이슈 연결

> | 접두사        | 설명                           |
> | ------------- | ------------------------------ |
> | feat :     | 새로운 기능 구현               |
> | add :      | 에셋 파일 추가                 |
> | fix :      | 버그 수정                      |
> | docs :     | 프로젝트 내 문서 추가 및 수정              |
> | spreadSheet :| 스프레드 시트 추가 및 수정              |
> | style :    | 스타일링 작업                  |
> | refactor : | 코드 리팩토링 (동작 변경 없음) |
> | test :     | 테스트                         |
> | deploy :   | 배포                           |
> | conf :     | 빌드, 환경 설정                |
> | chore :    | 기타 작업                      |

### Pull Request
> ### Title
> * 제목은 '[Feat] 홈 페이지 구현'과 같이 작성합니다.

> ### PR Type
  > - [FEAT] : 새로운 기능 구현
  > - [ADD]  : 에셋 파일 추가
  > - [FIX] : 버그 수정
  > - [DOCS] : 프로젝트 내 문서 추가 및 수정
  > - [SPREADSHEET] : 스프레드 시트 추가 및 수정
  > - [STYLE] : 포맷팅 변경
  > - [REFACTOR] : 코드 리팩토링
  > - [TEST] : 테스트 관련
  > - [DEPLOY] : 배포 관련
  > - [CONF] : 빌드, 환경 설정
  > - [CHORE] : 기타 작업

### Code Convention

> FE
> - Event handler 사용 (ex. handle ~)
> - export방식 (ex. export default ~)
> - 화살표 함수 사용
> - 반응형 웹 개발 지향

### Communication Rules
> - Discord 활용
> - 정기 회의 ( 주간, 일간 )
> - 주간 회의 매주 월요일 10시에 진행하는걸로 대체 하고 만약 월요일이 공휴일 일 경우 익일로 대체.
> - 일간 회의 매일 오전 10시 (필수), 오후 16시 진행 (선택).
> - 일간 회의 (오전 10시) - 어제까지 무엇을 했고, 금일 무엇을 계획하고 있으며, 할 예정인지 복기하는 시간.
> - 일간 회의 (오후 16시) - 금일 오전 10시부터 진행한 사항에대해 복기를 하고, 16시 이후부터 진행할 사항 복기하는 시간.

### Error Handling Rules
> - 각 팀의 팀장에게 우선 보고하고, 상의 후 1:1 Direct 방식으로 해당 문제와 관련된 사람과 Small Error handling.
> - 1:1 Direct 방식으로 해결이 되지 않을 시, Error로 판단 후, Issue를 먼저 생성하고 팀:팀 방식으로 해결.

1:1 Direct 방식으로 해결하는 문제 => Small Error
팀:팀 방식으로 해결하는 문제 => Error (사건화하여 issue 생성.)

<br>

---
