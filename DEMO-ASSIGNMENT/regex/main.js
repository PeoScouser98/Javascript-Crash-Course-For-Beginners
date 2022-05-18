const $ = (cssSelector) => {
	const nodeList = document.querySelectorAll(cssSelector);
	return nodeList.length == 1 ? nodeList[0] : nodeList;
};

// hàm bind trong javascript => gán 1 function của 1 object  cho 1 biến
const player = {
	name: "SAS",
	team: "Counter Terrorist",
	gun: "M4A1",
	throwGrenade: function () {
		alert(`Fire in the hole!`);
		// bind nút 4 => ném bom
	},
};
const pressKeyNum4 = player.throwGrenade.bind(player);
pressKeyNum4();
