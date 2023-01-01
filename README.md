# learning-firebase

Firebaseの学習用プロジェクト。  
[前田剛さんのYouTube](https://youtu.be/JchsQRonmk8)で学習した。  

## 環境情報

| モジュール | バージョン |
| ---- | ---- |
| Windows | 11 Home |
| Firebase CLI | 11.19.0 |

## 自分用メモ

### 5つの機能

メインの機能は以下の5つ。  

| 名称 | 役割 |
| ---- | ---- |
| Hosting | Webサーバ |
| Cloud Firestore | DBサーバ |
| Storage | ストレージサーバ |
| Cloud Functions | APIサーバ |
| Authentication | 認証サーバ |

### インストール

Firebase CLIをインストールする。  
<https://firebase.google.com/docs/cli#windows-npm>  

```shell
npm install -g firebase-tools
```

### Firebaseプロジェクトの作成

<https://console.firebase.google.com/u/0/>からプロジェクトを作成。  

### CLIでログイン

以下のコマンドでログイン。  

```shell
firebase login

# 以下のコマンドでログインしているアカウントのプロジェクト一覧を表示
firebase projects:list
```

### 初期化

以下コマンドで初期化。  

````shell
firebase init
```

Q. 1  

```shell
Before we get started, keep in mind:

  * You are currently outside your home directory

? Are you ready to proceed? Yes

# -> Y
```

Q. 2  

```shell
Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)

 ( ) Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
 ( ) Firestore: Configure security rules and indexes files for Firestore
 ( ) Functions: Configure a Cloud Functions directory and its files
>(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ( ) Hosting: Set up GitHub Action deploys
 ( ) Storage: Configure a security rules file for Cloud Storage
 ( ) Emulators: Set up local emulators for Firebase products

# -> Hosting
```

Q. 3  

```shell
Please select an option: (Use arrow keys)

> Use an existing project
  Create a new project
  Add Firebase to an existing Google Cloud Platform project
  Don't set up a default project

# -> Use an existing project
```

Q. 4  

```shell
First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: simple-learning-firebase (simple-learning-firebase)
i  Using project simple-learning-firebase (simple-learning-firebase)
```

Q. 5  

```shell
Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
```

Q. 6  

```shell
Configure as a single-page app (rewrite all urls to /index.html)? No
```

Q. 7  

```shell
Set up automatic builds and deploys with GitHub? Yes
```

Q. 8  

```shell
For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) osawa-koki/learning-firebase
```

Q. 9  

```shell
Set up the workflow to run a build script before every deploy? Yes
```

Q. 10  

```shell
What script should be run before every deploy? (npm ci && npm run build) npm run build
```

Q. 11  

```shell
Set up automatic deployment to your site's live channel when a PR is merged? Yes
```

Q. 12  

```shell
What is the name of the GitHub branch associated with your site's live channel? develop
```

そのあと、プロジェクトのビルドをして、デプロイコマンドを実行する。  

```shell
yarn build && firebase deploy

# +  Deploy complete!

# Project Console: https://console.firebase.google.com/project/simple-learning-firebase/overview
# Hosting URL: https://simple-learning-firebase.web.app
```

以上でHostingは完了。  

生成されるGitHub Actionsファイルには`${{ secrets.FIREBASE_SERVICE_ACCOUNT_SIMPLE_LEARNING_FIREBASE }}`のようなシークレット変数があるが、これは「プロジェクト - settings - secrets - Actions」から登録できる。  
