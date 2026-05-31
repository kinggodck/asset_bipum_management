# Google Drive 쓰기 권한 승인 요청

관리자님께,

Codex에서 Google Drive, Google Docs, Google Sheets, Google Slides 파일을 생성하고 수정하기 위해 Google Drive 커넥터의 쓰기 권한 승인이 필요합니다.

현재 상태:

- Google 계정 프로필 조회는 정상 동작합니다.
- Google Drive 파일 생성 또는 수정 시 다음 오류가 발생합니다.

```text
missing permissions or scopes required for this action
```

요청 사항:

- Codex/OpenAI Google Drive connector가 Google Drive 및 Google Workspace 파일 생성/수정 권한을 사용할 수 있도록 OAuth 앱 접근을 승인해 주세요.
- Google Workspace 관리자 콘솔에서 서드파티 앱 접근 제어 또는 API controls 설정을 확인해 주세요.

관리 콘솔에서 확인할 가능성이 높은 위치:

- Security
- Access and data control
- API controls
- App access control

필요 권한 범위:

- Google Drive 파일 생성 및 수정
- Google Docs 문서 생성 및 수정
- Google Sheets 스프레드시트 생성 및 수정
- Google Slides 프레젠테이션 생성 및 수정

참고:

읽기 또는 프로필 조회 권한만 허용된 경우에도 연결 자체는 성공한 것처럼 보일 수 있습니다. 하지만 파일 생성, 문서 편집, 스프레드시트 수정 같은 작업은 별도의 쓰기 권한 scope가 필요합니다.
