import PageBlock from "../components/pages";

export default function HelloWorld() {
  return (
    <main>
      <div id="Ref">
        <h1>Here,  Reference page.</h1>
        <p>学習には以下のサイトをオススメします。</p>
        <ul>
          <li><a href="https://youtu.be/JchsQRonmk8">前田剛さんのYouTubeチャネル</a></li>
          <li><a href="https://firebase.google.com/docs?hl=ja">公式ドキュメント</a></li>
        </ul>
        <hr />
        <PageBlock />
      </div>
    </main>
  );
};
