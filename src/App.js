import './App.css';
import { useState, useEffect } from 'react'
import { projectFirestore } from './firebase/config';


function App() {
  {/* data will receive the array from Firebase, and will use setData to update the array*/}
  const [data, setData] = useState(null)
  {/* inputString will receive the string from user input, and will use setInputString to update the string*/}
  const [inputString, setInputString] = useState("sale")
  {/* words will receive the array from Firebase */}
  let words = []
  
  {/* Read data from Firebase */}
  useEffect(() => {
    projectFirestore.collection('data').onSnapshot(snapshot => {
      let array = []
      snapshot.docs.forEach(doc => {
        array.push({ ...doc.data(), id: doc.id })
      })
      setData(array)
    })
  }, [])

  {/* Function to check anagram with words in Firebase */}
  function checkAnagram() {
    if (data != null) {
      words = data.map((item) => (item.string))
      console.log(words)
      const matchedWords = words.filter((item) => {
        return (item.split('').sort().join('') == inputString.split('').sort().join(''))
      })
      console.log(matchedWords.length)
      return matchedWords.length
    }
  }

  return (
    <div className="App">
      {/* Header set-up */}
      <div><header><h1>Check Anagram</h1><h2>Developed by Jason Xu (jinzxu@ucalgary.ca)</h2></header></div>
      {/* Form set-up */}
      <div className='note'>
        <label>
          <h1>Please type in a word:</h1>
          <input type='text' onChange={(e) => setInputString(e.target.value)} value={inputString} />
          <p>{checkAnagram()} anagrams found.</p>
        </label>
      </div>
    </div>
  );
}

export default App;
