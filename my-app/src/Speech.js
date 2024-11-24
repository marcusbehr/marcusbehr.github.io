import {React, useEffect, useState} from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const Speech = (props) => {

   useEffect(() => {
    if (props.textToSpeech){
        speak({ text: props.textToSpeech})
    }
    
   }, [props.directionCount]);


    const { speak } = useSpeechSynthesis();
    return (
        <div className="speech">
        </div>
    );
};
export default Speech;