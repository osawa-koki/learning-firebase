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
