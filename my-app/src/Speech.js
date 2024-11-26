import { React, useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const Speech = (props) => {

    useEffect(() => {
        if (props.textToSpeech) {
            speak({ text: props.textToSpeech })
        }

    }, [props.directionCount]);

    useEffect(() => {
        if (props.numberToSpeech > 0) {
            speak({ text: props.numberToSpeech })
        }

    }, [props.numberToSpeech]);


    const { speak } = useSpeechSynthesis();
    return (
        <div className="speech">
        </div>
    );
};
export default Speech;