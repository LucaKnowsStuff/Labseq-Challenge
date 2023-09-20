import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import React, { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  
  const equation = 'l(n) = 0 \\ \\ if \\ \\ n = 0,2  ';
  const equation2 = 'l(n) = 1 \\ \\ if \\ \\ n = 1,3  ';
  const equation3 = 'l(n) = l(n-3) + l(n-4) \\ \\ if \\ \\  n  \\ge 4  \\in \\mathbb{N}';

  const handleCalculate = () => {
    const parsedValue = parseInt(inputValue, 10); 

    if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 40000) {
      setResult('Invalid');
      return;
    }

    fetch(`http://localhost:8080/labseq/${inputValue}`)
      .then((response) => response.text())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  if(result) {
    console.log(typeof result);

  }


  return (
    <div className="App">       
      <h1>Labseq Algorithm</h1>
      <BlockMath math={equation} />
      <BlockMath math={equation2} />
      <BlockMath math={equation3} />
      
      <TextField
          id="outlined-basic"
          label="0 to 40000"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            style: {
              color: '#ffffff',
              borderColor: '#ffffff',
            },
          }}
          InputLabelProps={{
            style: {
              color: 'rgba(255, 255, 255, 0.6)',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffffff',
              },
            },
          }}
        />
      <Button sx={{color:"white" , borderColor:"white", marginTop:"2%"}} variant="outlined" onClick={handleCalculate}>Calculate</Button>
      {result !== '' && !isNaN(parseInt(result)) && (
        <div className='result' style={{ width: '70%', overflowWrap: 'break-word', wordBreak: 'break-word', textAlign: 'center' }}>
          {result}
        </div>
      )}
      {result === 'Invalid' && (
        <div className='result' style={{ width: '70%', overflowWrap: 'break-word', wordBreak: 'break-word', textAlign: 'center' }}>
          Input must be a integer between 0 and 40000!
        </div>
      )}
    </div>
  );
}

export default App;
