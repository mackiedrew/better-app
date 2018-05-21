# Setting Up For Development

To work on the App on both Android and iOS you'll need I'm afraid you'll
need OSX installed. If you want to just work with Android, Linux is
(thankfully) fine!

0. Ensure you have [Homebrew](https://brew.sh/) installed:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

0. Ensure you have [yarn](https://yarnpkg.com/) installed,
[npm](https://www.npmjs.com/) works too, but yarn is recommended.

```bash
brew install yarn
```

0. Also install [Watchman](https://facebook.github.io/watchman/docs/install.html):

```bash
brew install watchman
```

0. Install Cocoapods:

```bash
sudo gem install cocoapods
```