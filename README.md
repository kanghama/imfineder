
# I'm Fineder

온라인 채팅 웹앱 프로젝트입니다.

## 실행 방법

- `npm install`
- `npm run dev`

## 아이콘 적용 방법

앱 아이콘을 프로젝트에 적용하려면 `public/icons/` 폴더에 아이콘 파일을 넣어주세요. 권장 파일:

- `icon-192.png` — 192x192 PNG
- `icon-512.png` — 512x512 PNG
- `icon-maskable-512.png` — 512x512 PNG (maskable 목적)
- `apple-touch-icon.png` — iOS 홈스크린용 (권장 180x180)

`manifest.webmanifest`와 `index.html` 헤더는 이미 해당 경로를 참조하도록 설정되어 있습니다.

주의: 아이콘은 가능한 한 원본 이미지의 여백을 유지하지 않고, 전체 영역을 채우는 방식으로 준비해 주세요 (테두리가 없고 아이콘이 중앙에 꽉 차도록). 운영체제/브라우저가 아이콘을 마스크하거나 라운딩 처리하더라도 중요한 부분이 잘리지 않도록 중심에 중요한 요소를 배치하세요.

## Firebase 빠른 통합 가이드

1. Firebase 콘솔에서 새 프로젝트 생성
2. 'Web' 앱을 추가하고 구성에서 아래 값을 확인
3. 프로젝트 루트에 `.env` 파일을 만들고 `.env.example`의 키들을 채워 넣기

	예:
	```
	VITE_FIREBASE_API_KEY=your_api_key
	VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
	VITE_FIREBASE_PROJECT_ID=your-project-id
	VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
	VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
	VITE_FIREBASE_APP_ID=1:123:web:abcdefg
	```

4. 개발 서버 시작:
	```bash
	npm install
	npm run dev
	```

5. 사용 예시
	- `src/lib/firebase.ts`에 기본 초기화와 `uploadFile`, `sendMessage`, `subscribeMessages` 헬퍼를 추가했습니다.
	- 채팅 로직에서 해당 헬퍼를 호출하면 Firestore에 메시지가 저장되고, 파일은 Firebase Storage로 업로드됩니다.

필요하시면 제가 `Auth` UI(익명 로그인/이메일 로그인)와 채팅 메시지 업로드 흐름을 `src/app` 쪽에 통합해 드리겠습니다.

## 배포 — Firebase Hosting (권장)

1. Firebase CLI 설치:

```bash
npm install -g firebase-tools
firebase login
```

2. Firebase 프로젝트 생성 후 `.firebaserc`의 `YOUR_FIREBASE_PROJECT_ID`를 실제 프로젝트 ID로 바꾸거나 다음 명령어로 설정:

```bash
firebase use --add
```

3. GitHub 자동 배포 설정 (옵션)

- 레포지토리의 `Settings > Secrets`에 `FIREBASE_TOKEN`과 `FIREBASE_PROJECT_ID`를 추가하세요.
- `FIREBASE_TOKEN`은 `firebase login:ci` 명령어로 발급받습니다.

### GitHub 시크릿 설정 방법

1. 터미널에서 토큰 발급:

```bash
npm install -g firebase-tools
firebase login
firebase login:ci
```

2. 위 명령으로 출력되는 토큰 값을 복사해 GitHub 저장소의 `Settings > Secrets > Actions`에 `FIREBASE_TOKEN` 이름으로 추가하세요.

3. `FIREBASE_PROJECT_ID` 시크릿에는 `i-m-fineder`를 넣으세요 (이미 `.firebaserc`에 기본값으로 설정되어 있습니다).

4. 이후 `main` 브랜치에 커밋·푸시하면 자동으로 빌드 및 Firebase Hosting 배포가 실행됩니다.

4. 수동 배포:

```bash
npm run build
firebase deploy --only hosting
```

자동 배포를 설정하시면 `main` 브랜치에 푸시될 때마다 `dist`가 빌드되어 Firebase Hosting으로 배포됩니다. 배포가 완료되면 Firebase Hosting에서 제공하는 도메인(예: `https://your-project-id.web.app`)을 통해 서비스에 접근할 수 있습니다.
  