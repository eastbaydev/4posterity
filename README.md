# 4 Posterity

This is a simple landing page that provides a brief history of East Bay Development and its role as the seed for [Kalamuna](https://www.kalamuna.com/), [Lando](https://lando.dev) and [Permission Granted](https://www.facebook.com/permission.granted.events).

## Development

* Requires [Node 14+](https://nodejs.org/dist/latest-v14.x/)
* Prefers [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
* Alternatively you can also use Lando

```bash
git clone https://github.com/eastbaydev/4posterity.git && cd 4posterity
```

### Using Node/Yarn

```bash
# Install deps
yarn | npm install

# Launch dev site
yarn dev

# Lint
yarn lint

# Build site
yarn build
```

### Using Lando

```bash
# Install deps
lando start

# Launch dev site
lando dev

# Lint
lando yarn lint

# Build site
lando yarn build
```

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/eastbaydev/4posterity/blob/main/CHANGELOG.md) and the [release notes](https://github.com/eastbaydev/4posterity/releases).

## Releasing

All commits to `main` are deployed via Netlify to [eastbaywebshop.com](https://eastbaywebshop.com). That said, you can ONLY commit to `main` via an approved [Pull Request](https://docs.github.com/en/get-started/quickstart/github-flow).

You can also utilize the `yarn release` command to help with version bumping and tagging however this does not trigger a release.

## Contributors

<a href="https://github.com/eastbaydev/4posterity/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eastbaydev/4posterity" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## Other Resources

* [Important advice](https://www.youtube.com/watch?v=WA4iX5D9Z64)
