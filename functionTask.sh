function launchTask(){
	data=$(task export);
	echo "${data}" > "$HOME/.config/waybar/scriptWaybarJS/data.js";
	echo $(node $HOME/.config/waybar/scriptWaybarJS/cssTask.js) > $HOME/.config/waybar/style.css;
	echo $(node $HOME/.config/waybar/scriptWaybarJS/formatTask.js) > $HOME/.config/waybar/config.jsonc;
	sleep 5;
	$HOME/.config/waybar/launch.sh
}


