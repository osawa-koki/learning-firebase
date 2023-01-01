import PageBlock from "../components/pages";

export default function HelloWorld() {
  return (
    <main>
      <div id="About">
        <h1>Here,  About page.</h1>
        <p>Firebase(Hosting)に入門しました。<br /><br />既存のプロジェクトに対して簡単に組み込むことができ、さらにはGitHub ActionにのせてCI/CDサイクルを実現することができます。<br /><br />とりあえず、GitHub ActionsにのせておけばOK!的な風潮ありますからね、、、<br /><br />Firebase Hostingは神機能です。</p>
        <PageBlock />
      </div>
    </main>
  );
};
