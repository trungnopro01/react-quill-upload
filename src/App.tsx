import React, { useState } from 'react';
import EditorQuill from './components/EditorQuill';

function App() {

  const [data, setData] = useState<string>("")
  const onChangeData = (value: string) => {
    setData(value)
  }
  return (
    <div className="App">
      <div>
        <EditorQuill data={data} onChangeData={onChangeData} />
      </div>
      <div>
        {data}
      </div>
    </div>
  );
}

export default App;
