function brightness(){
  brightness="$(brightnessctl | grep "%" | cut -d "(" -f 2 | tr -d "%)")";
  echo "{\"text\":\" ${brightness}\", \"percentage\": $brightness, \"alt\": \"$brightness\"}"
}

brightness;
