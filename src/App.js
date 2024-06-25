// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//           新・日本一わかりやすいReact入門シリーズで環境構築しました。
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//2
// import Article from "./components/Article";
// import BadArticle from "./components/BadArticle";

// function App() {
//   return (
//     <div>
//       <Article
//         title={"新・日本一わかりやすいReact入門基礎編4"}
//         content={"今日のトピックはpropsのデータの受け渡しについて。"}
//       />
//       <Article
//         title={"新・日本一わかりやすいReact入門基礎編5"}
//         content={"今日のトピックはuseStateについて。"}
//       />
//       <Article
//         title={"新・日本一わかりやすいReact入門基礎編6"}
//         content={"今日のトピックはuseEffectについて。"}
//       />

//       <BadArticle
//         title={"新・日本一わかりやすいReact入門"}
//         content={"アイコンをタイトルと一緒に表示する"}
//       />
//     </div>
//   );
// }

//3
// import {BadCounter, Counter, TextInput, ToggleButton} from "./components";

// function App() {
//   return (
//     <div>
//       {/* <TextInput /> */}
//       {/* <BadCounter /> */}
//       {/* <Counter /> */}
//       <ToggleButton />
//     </div>
//   );
// }

//4
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('deatiger')
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div>
      <p>{id}の、Github上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
}

export default App;
