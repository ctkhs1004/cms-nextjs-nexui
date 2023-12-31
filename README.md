## プロジェクトの構成

### ディレクトリ構造
```
.
├── public
├── app
│   ├── page.tsx               # UIコンポーネントを定義するファイル(ルーティング対象 URL PATH: 「/」)
│   ├── sample.tsx             # ルーティング対象にはならない（app配下のpage.tsxのみがルーティング対象になる Next.js 13.4以降の仕様）
│   ├── layout.tsx             # すべてのページに適用
│   ├── Home                   # 他ページ
│   │    ├── page.tsx 
│   ├──  └── layout.tsx
│   └── api
│        ├── apiroute
│        │    └── route.ts     # apiのエンドポイント定義
│        └── Auth
│             └── ...          # Next Authのライブラリファイル 一般的にpagesの配下に配置する
├── components                 # コンポーネントフォルダ
│   ├── ComponentA
│   │   └── sample.tsx
│   └── Buttons
│       └── sample.tsx
├── utils                      # APIやユーティリティ関数を配置（DB接続系も配置？）
│   ├── httpRequest.ts                 # apiへのリクエスト処理等
│   └── utils.ts
├── style
│    └── globals.css
├── config
├── hooks
├── types                      # 型定義を配置
├── mock                       # API Mock  
└── tests                      # テスト用フォルダ
├── .env                       # 環境ファイル
├── .env.local                 # ローカルの環境ファイル
├── .env.development           # 開発用の環境ファイル
├── .env.production            # 本番用の環境ファイル
├── next.config.js             # next.jsの設定ファイル
├── package.json               # 依存関係、スクリプト、バージョン管理ファイル
├── tailwind.config.tsx        # Tailwind CSSの設定をカスタマイズするためのファイル
└── .eslintrc.json             # ESLint（JavaScriptの静的解析ツール）の設定ファイル

```
#### 参考サイト
- https://www.nitaking.dev/react-directory-structure-2021
- https://zenn.dev/necscat/articles/d5d9b7a3f859d7
- https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472
- https://nerdcave.com/tailwind-cheat-sheet
### 使用技術・ツール
- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

