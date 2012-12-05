describe("TicTacToe", function(){
  var window.app = tictactoe.initialize();
  it("Should swap player markers", function(){
    expect(window.app.currentMarker()).toEqual("X");
    expect(window.app.currentMarker()).toEqual("O");
  });
});