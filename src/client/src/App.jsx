import "./App.css";
import {BrowserRouter as Router, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";

function FlashcardList({flashcards}) {
  return <div>
    {
      flashcards.map(flashcard => (
        <div className="flashcard"
             key={flashcard.id}>
          {flashcard.term}
          :
          {flashcard.definition}
        </div>
      ))
    }
  </div>
}

function AddFlashcard({fetchList}) {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const navigate = useNavigate();

  const addFlashcard = useCallback(() => {
    const data = {
      term,
      definition,
    };
    fetch('/api/flashcards', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(() => fetchList())
      .then(() => {
        navigate('/');
      })
      .catch(console.error);
  }, [term, definition]);

  return <div>
    <input type="text"
           value={term}
           onChange={e => setTerm(e.target.value)} />
    <input type="text"
           value={definition}
           onChange={e => setDefinition(e.target.value)} />
    <button onClick={addFlashcard}>Add</button>
  </div>;
}

function Exam({flashcards, correctMap, setCorrectMap}) {
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [definition, setDefinition] = useState('');

  const flashcard = flashcards[flashcardIndex];

  const handleClickNext = useCallback(() => {
    const correct = definition === flashcard.definition;
    const newCorrectMap = new Map(correctMap);
    newCorrectMap.set(flashcard.id, correct);
    setCorrectMap(newCorrectMap);
    setDefinition('');
    setFlashcardIndex(flashcardIndex + 1);
  }, [flashcardIndex, correctMap, setCorrectMap, definition]);

  if (flashcardIndex === flashcards.length) {
    return <Navigate to="/results" />;
  }

  return <div>
    Term: {flashcard.term}
    <input type="text"
           value={definition}
           onChange={e => setDefinition(e.target.value)} />
    <button onClick={handleClickNext}>Next</button>
  </div>;
}

function Results({flashcards, correctMap}) {
  return <div>
    {
      flashcards.map(flashcard => {
        const correct = correctMap.get(flashcard.id);
        return (
          <div className="flashcard"
               key={flashcard.id}>
            {flashcard.term}
            :
            {flashcard.definition}

            ({correct ? 'Correct' : 'Incorrect'})
          </div>
        );
      })
    }
  </div>;
}

const initialCorrectMap = new Map();

function App() {
  const [flashcards, setFlashcards] = useState(null);
  const [correctMap, setCorrectMap] = useState(initialCorrectMap);

  const fetchList = useCallback(() => {
    return fetch('/api/flashcards')
      .then((flashcard) => flashcard.json())
      .then(response => setFlashcards(Object.values(response)[0]))
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetchList().catch(console.error);
  }, []);

  return (
    <div className="App">
      {
        flashcards === null ? 'Loading ...' : <Router>
          <Routes>
            <Route path="/"
                   element={<FlashcardList flashcards={flashcards} />} />
            <Route path="/add"
                   element={<AddFlashcard fetchList={fetchList} />} />
            <Route path="/exam"
                   element={<Exam flashcards={flashcards}
                                  correctMap={correctMap}
                                  setCorrectMap={setCorrectMap} />} />
            <Route path="/results"
                   element={<Results flashcards={flashcards}
                                     correctMap={correctMap} />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
