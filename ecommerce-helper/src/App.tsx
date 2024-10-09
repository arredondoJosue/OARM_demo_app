import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [listOfProducts, setListOfProducts] = useState<{
    series: string,
    shape: string,
    width: string,
    length: string,
    color: string,
    glass_type: string,
  }[]>([])

  const proccessData = () => {
    setListOfProducts([]);
    let productsArrStr = inputValue.split(',');

    for(let i=0; i < productsArrStr.length; i++) {
      let row = productsArrStr[i].trim().split('\t');

      let product = {
        series: row[0],
        shape: row[1],
        width: row[2],
        length: row[3],
        color: row[4],
        glass_type: row[5]
      }

      setListOfProducts((prev) => {
        return [...prev, product]
      })
    };

  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1>E-commerce Helper</h1>
        <p>Helping you with your ecommerce needs</p>

        <textarea id='product_code_input' 
          placeholder='Paste your product codes here' 
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }} 
        />
        <button onClick={() => {
          proccessData();
        }}>Submit</button>

        <p>Results:</p>
        <div className='App-results'>
            <div className='table-headers'>
              <h6 className='column-header series'>Series</h6>
              <h6 className='column-header shape'>Shape</h6>
              <h6 className='column-header width'>Width</h6>
              <h6 className='column-header length'>Length</h6>
              <h6 className='column-header color'>Color</h6>
              <h6 className='column-header glass_type'>Glass Type</h6>
            </div>
            {listOfProducts.map((product, index) => (
              <div className='row' key={index}>
                <p className='series'>{product.series}</p>
                <p className='shape'>{product.shape}</p>
                <p className='width'>{product.width}</p>
                <p className='length'>{product.length}</p>
                <p className='color'>{product.color}</p>
                <p className='glass_type'>{product.glass_type}</p>
              </div>
            ))}
        </div>

      </header>
    </div>
  );
}

export default App;
