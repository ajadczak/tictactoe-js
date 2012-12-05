/*global $*/
(function () {
	"use strict";
	window.tictactoe = {
		playing: true,
		currentMarker: "O",
		initialize: function () {
			return this;
		},
		setCurrentMarker: function (value) {
			this.currentMarker = value;
		},
		getCurrentMarker: function () {
			if (this.currentMarker === "X") {
				this.currentMarker = "O";
			} else if (this.currentMarker === "O") {
				this.currentMarker = "X";
			}

			return this.currentMarker;
		},
		addMarker: function (event) {
			if (this.playing !== true) {
				return;
			}
			var square = $("#" + event.srcElement.id),
				result = "";
			if (square.hasClass("X") || square.hasClass("O")) {
				return;
			}
			$(square).addClass(this.getCurrentMarker());
			result = this.updateState();
			switch (result) {
			case "X":
				$("#Xwins").show();
				break;
			case "O":
				$("Owins").show();
				break;
			case "D":
				$("#Draw").show();
				break;
			default:
				break;
			}
			return result;
		},
		updateState: function () {
			var allSquares = $(".square"),
				markers = [],
				i,
				j,
				k,
				token,
				moves = 9,
				x,
				y,
				z,
				tokens = ["X", "O"],
				winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
			for (i = 0; i < allSquares.length; i += 1) {
				if ($(allSquares[i]).hasClass("X")) {
					markers.push("X");
				} else if ($(allSquares[i]).hasClass("O")) {
					markers.push("O");
				} else {
					markers.push("_");
					moves -= 1;
				}
			}
			// Early escape for condition where not enough markers on board to win
			if (moves < 5) {
				return "";
			}
			// Check Diagonals
			if ((markers[0] === "X" && markers[4] === "X" && markers[8] === "X") ||
					(markers[0] === "Y" && markers[4] === "Y" && markers[8] === "Y")) {
				return markers[0];
			}
			if ((markers[2] === "X" && markers[4] === "X" && markers[6] === "X") ||
					(markers[2] === "Y" && markers[4] === "Y" && markers[6] === "Y")) {
				return markers[2];
			}
			// Start check for 3 in a row
			for (k = 0; k < tokens.length; k += 1) {
				for (j = 0; j < winConditions.length; j += 1) {
					x = winConditions[j][0];
					y = winConditions[j][1];
					z = winConditions[j][2];
					if (markers[x] === tokens[k] && markers[y] === tokens[k] && markers[z] === tokens[k]) {
						return markers[x];
					}
				}
			}
			// Stalemate
			if (moves === 0) {
				return "D";
			}

			return "";
		},
		reset: function () {
			var squares = $(".square"), i = 0;
			for (i = squares.length - 1; i >= 0; i -= 1) {
				$(squares[i]).removeClass("X").removeClass("O");
			}
		}
	};
}());