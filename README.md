# 🧠 react-state

A lightweight React state management library designed for React 19.

---

## 🚀 Features

- Zero-dependency global state
- Works seamlessly with concurrent rendering
- Built for modern React (19+)

---

## ⚙️ Local Development Setup

To set up and build the project locally:

### 1. ✅ Node Version Requirement

Make sure you're using a supported Node.js version:

```
^20.19.0 || >=22.12.0
```

You can use [nvm](https://github.com/nvm-sh/nvm) to install and switch between Node versions easily.

### 2. 📦 Install Dependencies

```bash
npm install
```

### 3. 🛠️ Build the Package

```bash
npm run build
```

This will generate the output in the `dist/` directory as both ESM and CJS modules.

---

## 📂 Output

After running the build, you'll get:

- `dist/index.esm.js` — ES Module build
- `dist/index.cjs.js` — CommonJS build

---

## 📝 License

## MIT © [Sajal Mahapatra]

---

## 🧪 Local Testing with `example-app`

You can test the `react-state` package locally using an internal test application (`example-app`).

### 1. 📁 Folder Structure

```
react-state/
├── src/
├── dist/
├── example-app/        # your test React app (inside this package)
│   └── src/
│       └── App.jsx
```

### 2. ✅ Node Version Requirement

Make sure you're using a supported Node.js version:

```
^20.19.0 || >=22.12.0
```

Use [nvm](https://github.com/nvm-sh/nvm) to manage and switch Node versions easily.

### 3. 📦 Install Example App Dependencies

Navigate into the `example-app` directory and install dependencies:

```bash
cd example-app
npm install
```

### 4. 🔗 Link the Package Locally

Still inside `example-app`, run:

```bash
npm link react-state
```

This sets up a symlink so that `example-app` uses the local version of `react-state` directly.

### 5. 💡 Usage

Now, inside `example-app`, you can import from your package like this:

```js
import { useStore } from "react-state";
```

### 6. ♻️ Rebuild on Changes

Back in the root (`react-state/`) folder, rebuild the package:

```bash
npm run build
```

Or run in watch mode to auto-compile on file changes:

```bash
npm run start
```

### 7. ❌ Unlink When Done

To undo the link and restore default behavior:

```bash
cd example-app
npm unlink react-state

cd ..
npm unlink
```
