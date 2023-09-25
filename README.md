# aspire-app

Aspire mobile application. The desktop version is not built and the mobile width supported for this project is min-width:375px and max-width: 768px.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Caveats / Improvements

1. The application uses localStorage for state management
2. There is no toast or notification on the New Card, Cancel Card or Freeze Card functionalities
3. On click of New Card, a card gets added to the list with hardcoded values for now.
