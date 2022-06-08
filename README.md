## How to run

npm install 또는 yarn install<br />
npm run dev 또는 yarn dev<br />

## How to test production environment

npm run build 또는 yarn build<br />
npm run start 또는 yarn start<br />

## How to host nextjs on gabia

준비사항 : github 저장소가 필요하며 컨테이너와 미리 연결해 두셔야 합니다. <br />
다음의 명령어를 실행하시기 바랍니다.<br />
npm install<br />
npm run build<br />

## 빌드 폴더를 포함하여 프로젝트를 깃저장소에 푸쉬하십시오.

서버에 저장소를 클론하십시오.(개인 저장소를 사용하실 경우 ssh key를 추가하셔야 합니다.)<br />
다음의 명령어를 실행하시기 바랍니다.<br />
pm2 start npm --name "next-js" -- start<br />

## How to update your website

프로젝트를 컴퓨터에 빌드하고 서버에 push 그리고 pull 하십시오.<br/>
만약 pull 시 업데이트가 제대로 적용되지 않으면 pm2 stop / pm2 start를 실행해 보시기 바랍니다. <br/>

## About apis keys

모든 api key(GA, 네이버 지도, 채널톡,emailjs)는 .env 파일에 위치해 있으며 GA와 네이버 지도는 개인 계정으로 변경하셔야 합니다.<br />

Find naver map key here: https://www.ncloud.com/product/applicationService/maps<br/>
Find emailjs keys here: https://www.emailjs.com/
( emailjs 계정은 제가 생성해 두었습니다. papyrusnoreply@gmail.com / same password as gabia)<br/>

## About next.js

React와 Next.js의 주요 코딩 차이점은 서버에서의 api 호출입니다. 이번 프로젝트에는 api 호출이 없어 next.js를 이해하기 위한 특정 코드가 많지는 않습니다.<br />

### 주목할 만한 주요 차이점은 다음과 같습니다.

#### 스타일링 :

next.js에는 여러 스타일링 옵션이 있는데 next.js에서 가장 일반적인 CSS를<br />
선택하여 사용하였습니다. module.scss를 object로 ts 파일로 import하셔야 하며 스타일이 component-level scss인점 참고 부탁드립니다.<br />
Learn more: https://nextjs.org/docs/basic-features/built-in-css-support<br />

#### 라우팅 :

next.js 라우팅은 페이지 폴더 스트럭쳐에 기반을 두고 있습니다. 각각의 .ts 파일은 (front의 underscore 파일 제외) 라우트와 상응하며.<br/>
papyrus 페이지는 page/index.tsx입니다.<br/>
Learn more: https://nextjs.org/docs/routing/introduction<br/>
Special files:<br/>
\_app.tsx: react app file<br/>
\_document.tsx: React에서 public/index.html와 비슷합니다.<br/>
\_middleware.tsx: middleware가 필요하시다면 활용 가능합니다.
