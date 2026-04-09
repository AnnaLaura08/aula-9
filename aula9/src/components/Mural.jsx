import { useState } from 'react';

export default function Mural() {
const [tweets, setTweets] = useState(["Estudando muito!"]);
const [novoTweet, setNovoTweet] = useState("React é show");

const enviarTweet = () => {
  setTweets([...tweets, novoTweet]);
  setNovoTweet("");
};
return <button onClick={enviarTweet}>Enviar Tweet</button>;
}