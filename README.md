# 东高地科技馆 (Next)

![Screenshot of 东高地科技馆](./public/img/og/misskey-hub-screenshot-dr.png)

Website for Misskey, built with [Nuxt](https://nuxt.com/).

## お知らせの文言のいじり方

`app.config.ts` から指定できます。

## Docsの書き方

**必ず [`/content/.README.md`](./content/.README.md) をご覧ください**

## NuxtLinkについて

内部リンク・外部リンクに関する処理を強化した[`<GNuxtLink>`](./components/g/NuxtLink.vue)を使用していますので、**リンクを追加する際は`<NuxtLink>`ではなく`<GNuxtLink>`を使用してください。**

また、Nuxtのルーティングストラテジに、ホスティング環境に適した設定を適用するため、動的リンクの作成に使用する`useLocalePath`をラップしたコンポーサブル関数`useGLocalePath`を使うようにしています。

### Misskey Webへのリンクについて

GNuxtLinkおよび各種Docsで、アドレスに `x-mi-web://` から始め、続けてMisskeyの相対パスを入力すると、Misskey Webへのリンクに置き換えられます。

例: `/play` → `x-mi-web://play`

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## (おまけ) デプロイ時のオートメーションプログラム

`/__misc/gas/` に、Digiforgeデプロイ時に自動実行しているプログラムを同梱しています。

Google Apps Scriptで動作します。

## License

GNU Affero General Public License v3.0

(c) 2023-2024 syuilo, kakkokari-gtyih and Misskey Project
# MinervaEduWeb
# MinervaEduWeb
