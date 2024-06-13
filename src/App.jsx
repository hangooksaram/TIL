import { marked } from "marked";
import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/all-mds");
      const text = await res.text();
      setText(text);
    })();
  }, []);

  return <div>{marked.parse(text)}</div>;
}
