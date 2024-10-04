import { useRef, useState } from "react";
import getGitIgnore from "./lib/langchain/getGitIgnore";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

function App() {
  const [data, setData] = useState<string | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (inputRef.current?.value) {
      const gitIgnoreContent = await getGitIgnore(inputRef.current?.value);
      setData(gitIgnoreContent);
    }
  }

  return (
    <>
      <header className="m-4">
        <h1 className="text-center text-2xl bold text-green-500">IgnoreGit</h1>
        <h3 className="text-center text-lg text-gray-500">
          Generate .gitignore files effortlessly for any projects.
        </h3>
      </header>

      <main>
        <form className="flex flex-row gap-4 justify-center items-center mt-14">
          <Input
            placeholder="Let’s generate your .gitignore!"
            id="userInput"
            type="text"
            name="userInput"
            ref={inputRef}
            className="w-56"
          />
          <Button onClick={handleClick}>Get GitIgnore</Button>
        </form>

        <Card className="m-4 p-4">
          {data && (
            <>
              <h2 className="text-center text-green-400">
                Generated .gitignore:
              </h2>
              <pre className="whitespace-pre-wrap overflow-auto">{data}</pre>
            </>
          )}
        </Card>
      </main>
    </>
  );
}

export default App;
