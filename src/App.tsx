import { useState } from 'react'
import Square from "./components/Square.jsx"

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState("Player's X turn")

    function handleReset() {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
        setStatus(`Player's ${xIsNext ? "X" : "O"} turn`)
    }

    function Board() {
        let grid = []
        for(let i = 0; i < 9; i++) {
            grid.push(<Square key={i} value={squares[i]} onSquareClick={() => handleSquareClick(i)}/>)
        }
        return grid
    }

    function handleSquareClick(id:number) {
        if(squares[id] || calculateWinner(squares)) return
        const newSquares = [...squares]
        xIsNext ? newSquares[id] = "X" : newSquares[id] = "O"
        setXIsNext(!xIsNext)
        setSquares(newSquares)
        const winner = calculateWinner(newSquares)
        console.log(winner)
        winner ? setStatus(`Player ${winner} won!`) : setStatus(`Player's ${xIsNext ? "X" : "O"} turn`)
    }

    function calculateWinner(squares:string[]) {
        console.log(squares)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
            }
        }
        return null;
    }

    return (
        <div className="App">
            <div className="grid">
                {Board()}
            </div>
            <p className='status'>{status}</p>
            <button className='reset' onClick={handleReset}>Restart the game</button>
        </div>
    )
}

export default App
