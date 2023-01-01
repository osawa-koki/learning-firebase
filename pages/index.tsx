import PageBlock from "../components/pages";

export default function Home() {
  return (
    <>
      <div id='Index'>
        <h1>Hello Firebase 💓💓💓</h1>
        <img id='Logo' src="tako.png" alt="Logo" />
        <PageBlock />
        <p>以下のリストは更新が反映されているかを確認するためのものです。</p>
        <ul>
          <li>りんご 🍎</li>
          <li>ごりら 🦍</li>
          <li>らっぱ 📯</li>
        </ul>
      </div>
    </>
  );
};
