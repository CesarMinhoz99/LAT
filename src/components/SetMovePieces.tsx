
export default function setMovePieces(atualMove: string, nextMove: string) {
    let squareAtual = document.getElementById(atualMove)!.childNodes[0] as HTMLAreaElement;
    let squareNext = document.getElementById(nextMove)!.childNodes[0] as HTMLAreaElement;
    let auxSquareAtualHTML = squareAtual.innerHTML;
    squareAtual.innerHTML = "";
    squareNext.innerHTML = auxSquareAtualHTML
}