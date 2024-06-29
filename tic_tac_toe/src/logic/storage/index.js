export const saveGameToStorage = ({ board, turn}) => {
    // guardar aquí la partida
      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn', turn)
}
export const resetGameStorage = () => {
    window.localStorage.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
