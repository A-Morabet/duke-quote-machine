import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const dukeQuotes = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Come-Get-Some',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/Come-get-Some.mp3?raw=true'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Gotta-Hurt',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/Gotta-Hurt.mp3?raw=true'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Gun-Bigger',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/Gun-Bigger.mp3?raw=true'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'King-Baby',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/King-Baby.mp3?raw=true'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Make-my-day',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/Make-my-day.mp3?raw=true'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'My-Name',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/My-Name.mp3?raw=true'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Really-Pissed",
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/Really-Pissed.mp3?raw=true'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Wasted',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/Wasted.mp3?raw=true'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'You-Guys',
      url: 'https://github.com/A-Morabet/MyRepo/blob/main/SoundFiles/You-Guys.mp3?raw=true'
    }
  ];

const KeyboardKey = ({ play, sound: {key, url, keyCode, id} }) => {
  
  const handleKeydown = (event) => {
    if(event.keyCode === keyCode){
      play(key, id)
    }
  }
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
  }, [])
  
  return (
    <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
      <audio className="clip" src={url} id={key} />
      {key}
    </button>
  );
}

const Keyboard = ({play}) => {
  return dukeQuotes.map((sound) => <KeyboardKey play={play} sound={sound} />)
}


const App = () => {
  const [soundName, setSoundName] = React.useState("");
  const play = (key, sound) => {
    setSoundName(sound)
    const audio = document.getElementById(key)
    audio.currentTime = 0;
    audio.play();
  }
  return (
    <div className="wrap">
    <div id="drum-machine">
    <h1>Duke Nukem Quote Machine!</h1>
      <h2 id="display">{soundName}</h2>
      <div className ="nukeDiv"><img className="nukeImg" src="https://github.com/A-Morabet/MyRepo/blob/main/Images/Nuke.png?raw=true"></img></div>
      <Keyboard play={play}/>
    </div>
      </div>
          )
}

ReactDOM.render(<App />, document.getElementById("app"))