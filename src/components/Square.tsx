interface Props {
    value: string,
    onSquareClick: any
}

export default function Square({value, onSquareClick}:Props) {
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}
