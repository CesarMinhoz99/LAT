import React from "react";
import "./ChessBoard.css";
export default class ChessBoard extends React.Component {

    render() {
        let drawChessBoard = [];
        let mapChessBoard = new Map<number, string>([
            [1, "A"],
            [2, "B"],
            [3, "C"],
            [4, "D"],
            [5, "E"],
            [6, "F"],
            [7, "G"],
            [8, "H"]
        ]);

        let mapPiecesChessBoard = new Map<string, string>([
            ['whitePawn', "https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png"],
            ['whiteRock', "https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png"],
            ['whiteBishop', "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png"],
            ['whiteKnight', "https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png"],
            ['whiteQueen', "https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png"],
            ['whiteKing', "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png"],


            ['blackPawn', "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png"],
            ['blackRock', "https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png"],
            ['blackBishop', "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png"],
            ['blackKnight', "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png"],
            ['blackQueen', "https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png"],
            ['blackKing', "https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png"],

        ]);

        function getPiecesColor(l: number) {
            if (l === 1) {
                return "white";
            }
            if (l === 8) {
                return "black";
            } else {
                return ""
            }
        }

        function putPiecesInChessBoard(l: number, c: string) {

            if (l === 2) {
                return (
                    <div>
                        <img src={mapPiecesChessBoard.get('whitePawn')} alt="pawn" />
                    </div>
                );
            }
            if (l === 7) {
                return (
                    <div>
                        <img src={mapPiecesChessBoard.get('blackPawn')} alt="pawn" />
                    </div>
                );
            }

            if (l === 1 || l === 8) {
                if (c === "A" || c === "H") {
                    return (
                        <div>
                            <img src={mapPiecesChessBoard.get(getPiecesColor(l) + "Rock")} alt="Rock" />
                        </div>
                    );
                }
                if (c === "B" || c === "G") {
                    return (
                        <div>
                            <img src={mapPiecesChessBoard.get(getPiecesColor(l) + "Knight")} alt="Knight" />
                        </div>
                    );
                }
                if (c === "C" || c === "F") {
                    return (
                        <div>
                            <img src={mapPiecesChessBoard.get(getPiecesColor(l) + "Bishop")} alt="Bishop" />
                        </div>
                    );
                }
                if (c === "D") {
                    return (
                        <div>
                            <img src={mapPiecesChessBoard.get(getPiecesColor(l) + "Queen")} alt="Queen" />
                        </div>
                    );
                }
                if (c === "E") {
                    return (
                        <div>
                            <img src={mapPiecesChessBoard.get(getPiecesColor(l) + "King")} alt="King" />
                        </div>
                    );
                }
            }
            if (l > 2 || l < 7){
                return (
                    <div>
                    </div>
                );
            }
        }


        for (let l: number = 1; l <= 8; l++) {
            for (let c: number = 1; c <= 8; c++) {
                if ((l + c) % 2 === 0) {
                    drawChessBoard.push(
                        <div>
                            <div id={mapChessBoard.get(c) + `${l}`} className="squareWhite" >
                                {putPiecesInChessBoard(l, mapChessBoard.get(c)!)}
                            </div>
                        </div>);
                } else {
                    drawChessBoard.push(
                        <div>
                            <div id={mapChessBoard.get(c) + `${l}`} className="squareBlack" >
                                {putPiecesInChessBoard(l, mapChessBoard.get(c)!)}
                            </div>
                        </div>);
                }
            }
        }
        return (
            <div className="ChessBoard">
                {drawChessBoard}
            </div>
        );
    }
}

