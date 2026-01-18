# 老若男女未来学園ホームページ
# Ronyakunannyo Mirai Gakuen Official Website

演劇を中心とした幅広い芸術分野での活動を画策するクリエイティブ団体、老若男女未来学園のウェブサイトです。

**URL: [https://ronyaku.com](https://ronyaku.com)**

---

## 📌 コンセプト：編集的エンジニアリング
単なる情報掲載サイトではなく、**「観劇体験をWebから始める」**をコンセプトに設計しています。
- **ターゲット層への最適化**: 観劇層の8割以上がスマートフォン利用であることを踏まえ、完全モバイルファーストな設計。
- **運用の持続性**: 専門知識のない劇団員でも、数分で公演情報の更新や残席状況の変更ができる仕組みを構築しました。

## 🛠 使用技術
### Frontend
- **Framework**: Next.js (TypeScript)
- **Styling**: Tailwind CSS, Headless UI
- **Deployment**: Vercel

### Backend / Infrastructure
- **CMS**: microCMS (スキーマ設計、API連携)
- **Monitoring**: Google Search Console, Lighthouse

## ✨ こだわった実装ポイント
| 機能 | 内容 | 導入のメリット |
| :--- | :--- | :--- |
| **ISR (Incremental Static Regeneration)** | 公演情報の即時更新と高速なページ表示を両立。 | 予約状況の変更を即座に反映可能に。 |
| **microCMS API連携** | ニュース、過去公演、メンバー紹介を外部管理。 | コードを触らずに全情報の更新が可能。 |
| **SEO & アクセシビリティ** | Semantic HTMLの徹底とメタタグの動的生成。 | 劇団名検索での上位表示、SNSシェア時の視認性向上。 |

## 📂 プロジェクト構造

### 核心的なロジック
- `libs/` : 情報をテーブルごとに分割し、microCMSからのデータ取得・加工ロジックをカプセル化。

### ページ（Routing）
- `src/app/` : Next.js App Routerを採用。
  - `(pages)/` : 一般公開される主要コンテンツをグループ化して管理。

### UIコンポーネント
- `src/components/` : 役割に応じたコンポーネント管理。
  - `common/` : ヘッダー、フッター、ナビゲーションなど全ページ共通のパーツ。
  - `views/` : 特定のドメイン（News, Works等）に特化した、ページ単位のレイアウト構築用コンポーネント。
  - `svg/` : ロゴやアイコンをReactコンポーネントとして扱い、CSSでの制御を容易に。

### その他
- `src/styles/` : Tailwind CSSをベースとしたグローバルスタイルの定義。
- `public/` : ロゴやOGP画像など、劇団のブランディングに必要な静的資産。

## 📸 スクリーンショット
> [!TIP]
> ここにサイトのキャプチャ画像を貼ると、視覚的なインパクトが強まります。
> `![メインビジュアル](./public/screenshot.png)` のように記述します。

## 🚀 開発環境のセットアップ

### 1. リポジトリのクローン
```bash
git clone [https://github.com/あなたのユーザー名/リポジトリ名.git](https://github.com/あなたのユーザー名/リポジトリ名.git)
cd リポジトリ名