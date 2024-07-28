import { useState } from "react";

export function UpdateEmoji() {

    const [emoji, setEmoji] = useState('😊');

    //happy
    //sad
    //inLove

    const changeMood = () => {
        let newEmoji = emoji;
        if (emoji == '😊')
            newEmoji = '☹';
        else if (emoji == '☹')
            newEmoji = '😍';
        else if (emoji == '😍')
            newEmoji = '😊';

        setEmoji(newEmoji);
    }

    return (
        <div className="emojiChanger">
            <div>
            <span role="img" aria-label="happy" style={{fontSize: '50px'}}>{emoji}</span>
            </div><br></br>

            <button onClick={changeMood}>Change Mood</button>
        </div>
    )
}

//note: in react, the style attribute needs to be an object and is written slightly differently to vanilla css: style={{fontSize: '30px'}} instead of style="font-size:30px;"