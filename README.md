# nzq-web-interaction

マイクロインタラクションを触りながら試すための、Next.js製ショーケースです。

## 起動

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルドとデプロイ

Next.jsの静的書き出しを使用し、生成された `out/` をCloudflare Pagesへ配信します。

デプロイは必ずGitHub連携を経由します。feature / fixブランチへのpushでPreview Deploy、承認済みPRの`main`へのmergeでProduction Deployが自動実行されます。

```bash
npm run build
```

`wrangler pages deploy`やCloudflare Direct Uploadによる手動デプロイは行いません。

Cloudflare Pagesのプロジェクト名は `nzq-web-interaction` です。

- 公開URL: [https://nzq-web-interaction.pages.dev](https://nzq-web-interaction.pages.dev)
- GitHub: [nozaqix/nzq-web-interaction](https://github.com/nozaqix/nzq-web-interaction)（Public）

## 実験内容

- Magnetic pull / カーソル追従
- Elastic toggle / 弾性トグル
- Morphing action / 状態遷移ボタン
- Kinetic range / 入力と波形の同期
- Ripple origin / クリック位置フィードバック
- Tiny feedback / カウンター
- Smart input / 入力・送信フィードバック
- Reaction burst / パーティクルリアクション
- Living toast / 通知スタック

`prefers-reduced-motion` が有効な環境では、アニメーションを最小化します。

## 詳細ページ

一覧カード左下の `VIEW` から、各実験を大きく表示する個別ページへ移動できます。URLは `/experiments/{slug}` 形式です。個別ページには前後ナビゲーションがあり、インタラクション単体の確認や動画撮影に使用できます。

## アニメーションライブラリ

- `motion`: DOM UIのgesture、layout、enter / exit
- `gsap` / `@gsap/react`: timelineと複雑な連続モーション
- `@react-spring/web`: spring physicsの比較実験
- `gpu-curtains`: DOMを維持したWebGPU装飾レイヤー
