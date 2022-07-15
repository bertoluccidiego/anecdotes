import { useState } from 'react';

function AnecdoteOfDay({ anecdotes, votes, selected, voteAnecdote, randomAnecdote }) {
  return (
      <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={voteAnecdote}>
        vote
      </button>
      <button onClick={randomAnecdote}>
        next anecdote
      </button>
    </div>
  );
}

function AnecdoteMostVoted({ anecdotes, votes }) {
  const mostVoted = votes.reduce((p, c, i) => (votes[p] < c) ? i : p, 0);
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </div>
  );
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function randomAnecdote() {
    setSelected(Math.round(Math.random() * (anecdotes.length-1)));
  }

  function voteAnecdote() {
    const updatedVotes = votes.map((v, i) => (i === selected) ? v+1 : v);
    setVotes(updatedVotes);
  }

  return (
    <div>
      <AnecdoteOfDay
        anecdotes={anecdotes}
        votes={votes}
        selected={selected}
        randomAnecdote={randomAnecdote}
        voteAnecdote={voteAnecdote}
      />
      <AnecdoteMostVoted
        anecdotes={anecdotes}
        votes={votes}
      />
    </div>
  );
}

export default App;
