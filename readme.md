# s-cli

[![CircleCI](https://circleci.com/gh/george-aidonidis/s-cli/tree/master.svg?style=svg)](https://circleci.com/gh/george-aidonidis/s-cli/tree/master) [![codecov](https://codecov.io/gh/george-aidonidis/s-cli/badge.svg?branch=master)](https://codecov.io/gh/george-aidonidis/s-cli?branch=master) [![NPM version](https://img.shields.io/npm/v/@george-aidonidis/s-cli.svg?style=flat)](https://www.npmjs.com/package/@george-aidonidis/s-cli)

Super cli 🦸

A node js tool to help you parse 💩 from bash/sh

## Usage

After installing the module:

```sh
yarn global add @george-aidonidis/s-cli
# or with npm
npm install -g @george-aidonidis/s-cli
```

You can use like this:

```sh
s-cli # outputs help instructions

s-cli -b # outputs the remaining battery by sending a notification
```

## Battery module

Parses info from acpi and sends them a notification through `notify-send` command

![gif](https://i.imgur.com/gJhRoGo.gif)

- Dependencies
  - acpi
  - acpitool

## Contributing

1. Fork it (<https://github.com/George-Aidonidis/s-cli/fork>)
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. Create a new Pull Request

## License

[MIT](./license) ©
