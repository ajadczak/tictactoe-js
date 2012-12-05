module('TicTacToe', {
  setup: function() {
  	/*:DOC += 
  		<div>
			<span id="Xwins">X wins</span>
			<span id="Owins">O wins</span>
			<span id="Draw">Game is a draw</span>
		</div>
		<div id="s0" class="square"></div><div id="s1" class="square"></div><div id="s2" class="square"></div>
		<br/>
		<div id="s3" class="square"></div><div id="s4" class="square"></div><div id="s5" class="square"></div>
		<br/>
		<div id="s6" class="square"></div><div id="s7" class="square"></div><div id="s8" class="square"></div> */
	  window.app = tictactoe.initialize();
  },
  teardown: function() {
	  window.app = undefined;
  }});
test('PlayerMarkers', 2, function() {
  	// Querying for currentMarker toggles between X and O
	window.app.setCurrentMarker("O");
  	equal(window.app.getCurrentMarker(), "X", "The first player to make a move is X");
  	equal(window.app.getCurrentMarker(), "O", "The second player to make a move is O");
  });
test('Reset', 18, function()
{
	var allSquares = $(".square");
	for (var i = allSquares.length - 1; i >= 0; i--) {
		equal($(allSquares[i]).hasClass("X"), false, "Is not marked by X");
		equal($(allSquares[i]).hasClass("O"), false, "Is not marked by O");
	};
});
test('DrawCondition', 9, function() {
	window.app.setCurrentMarker("O");
	var event = {};
	event.srcElement = {};
	event.srcElement.id = "s4";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s0";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s1";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s2";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s3";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s7";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s6";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s8";
	equal(window.app.addMarker(event), "", "No winner yet");
	event.srcElement.id = "s5";
	equal(window.app.addMarker(event), "D", "Should be a draw game");
});
test('WinConditions', 1, function() {
	// Simulate a game to check win conditions
	window.app.setCurrentMarker("X");
	var event = {};
	event.srcElement = {};
	event.srcElement.id = "s3";
	equal(window.app.addMarker(event), "", "No winner yet");
});