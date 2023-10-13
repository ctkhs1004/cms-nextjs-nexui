## プロジェクトの構成

### ディレクトリ構造
```
.
├── public
└── src
    ├── app
    │   ├── page.tsx               # UIコンポーネントを定義するファイル(ルーティング対象 URL PATH: 「/」)
    │   ├── sample.tsx             # ルーティング対象にはならない（app配下のpage.tsxのみがルーティング対象になる Next.js 13.4以降の仕様）
    │   └── layout.tsx             # すべてのページに適用
    │
    ├── someroute
    │   └── page.tsx               # ルーティング対象（URL PATH: 「/someroute」）
    │
    ├── api
    │   └── apiroute
    │       └── route.ts           # apiのエンドポイント定義
    │
    ├── Auth
    │   └── ...                    # Next Authのライブラリファイル 一般的にpagesの配下に配置する
    │
    ├── components                 # コンポーネントフォルダ
    │   ├── ComponentA
    │   │   └── sample.tsx
    │   │
    │   └── Buttons
    │       └── sample.tsx
    │
    ├── features                   # 機能やビジネスロジック
    │   ├── auth                  # 認証系のロジック
    │   │   └── xxxxx.tsx
    │   │
    │   └── user                  # user登録・変更等のロジック
    │       ├── xxxxx.tsx
    │       ├── xxxxx.tsx
    │       └── xxxxx.tsx
    │
    ├── utils                      # APIやユーティリティ関数を配置（DB接続系も配置？）
    │   ├── api.ts                 # apiへのリクエスト処理等
    │   └── utils.ts
    │
    ├── hooks
    ├── types                      # 型定義を配置
    └── tests                      # テスト用フォルダ

├── pages
├── .env                           # 環境ファイル
├── .env.local                     # ローカルの環境ファイル
├── .env.development               # 開発用の環境ファイル
├── .env.production                # 本番用の環境ファイル
├── next.config.js                 # next.jsの設定ファイル
├── package.json                   # 依存関係、スクリプト、バージョン管理ファイル
├── tailwind.config.tsx            # Tailwind CSSの設定をカスタマイズするためのファイル
└── .eslintrc.json                  # ESLint（JavaScriptの静的解析ツール）の設定ファイル

```
#### 参考サイト
-https://www.nitaking.dev/react-directory-structure-2021
-https://zenn.dev/necscat/articles/d5d9b7a3f859d7
-https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472
### 使用技術・ツール
- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).