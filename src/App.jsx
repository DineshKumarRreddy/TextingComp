import { TextBox } from "./components/MessagingTextInput/TextBox";
import data from '../src/data.json'
function App() {
  return (
    <main>
      <TextBox data={data}/>
    </main>
  );
}

export default App;
