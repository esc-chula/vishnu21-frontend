# Vishnu 21st Frontend

The frontend mono-repo for Vishnu 21st camp.

## What's Inside?

### Apps

| Name  | Description                                      |
| ----- | ------------------------------------------------ |
| web   | Main website for Vishnu 21st                     |
| admin | Admin panel for managing group homepage and etc. |
| liff  | LINE Front-end Framework for junior LINE OA      |

### Packages

| Name                 | Description                    |
| -------------------- | ------------------------------ |
| eslint-config-custom | eslint global configuration    |
| tailwind-config      | tailwind global configuration  |
| tsconfig             | tsconfig global configuration  |
| ui                   | a stub React component library |

## Getting Started

### Downloading dependencies

To download all dependencies required to run the application, run the following command:

```
pnpm install
```

### Adding dependencies

To add a new dependency to the entire workspace, run the following command substituting `pacakge-name` with a specific package.

```
pnpm add -w pacakge-name
```

To add a new dependency to a specific app or package, run the following command substituting `app-name` with a specific app and `pacakge-name` with a specific package.

```
pnpm add --filter app-name pacakge-name
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

To only run develop command for some apps, run the following command substituting `app-name` with a specific app.

```
pnpm run --filter app-name dev
```

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

To only build some apps, run the following command substituting `app-name` with a specific app.

```
pnpm run --filter app-name build
```
