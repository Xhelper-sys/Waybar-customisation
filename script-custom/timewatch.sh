function watchtime(){
  hours=$(uptime -p | cut -d ' ' -f 2); minutes=$(uptime -p | cut -d ' ' -f 4);
  minutes=${minutes//" "};

  if (( hours < 10 )); then 
    hours=$(echo "0${hours}");
  fi

  if (( minutes < 10 )); then 
    minutes=$(echo "0${minutes}");
  fi


  echo "${hours}:${minutes}";
}

watchtime;
