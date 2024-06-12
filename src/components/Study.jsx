import React, { useState, useEffect } from 'react';
// import { Howl } from 'howler';
// import aa from './sounds/a.mp3'

import './Study.css'

const soundFiles = {
    a: './sounds/A.wav',
    b: './sounds/B.wav',
    c: './sounds/C.wav',
    d: './sounds/D.wav',
    e: './sounds/E.wav',
    f: './sounds/F.wav',
    g: './sounds/G.wav',
    h: './sounds/H.wav',
    i: './sounds/I.wav',
    j: './sounds/J.wav',
    k: './sounds/K.wav',
    l: './sounds/L.wav',
    m: './sounds/M.wav',
    n: './sounds/N.wav',
    o: './sounds/O.wav',
    p: './sounds/P.wav',
    q: './sounds/Q.wav',
    r: './sounds/R.wav',
    s: './sounds/S.wav',
    t: './sounds/T.wav',
    u: './sounds/U.wav',
    v: './sounds/V.wav',
    w: './sounds/W.wav',
    x: './sounds/X.wav',
    y: './sounds/Y.wav',
    z: './sounds/Z.wav',
};

export const Study = () => {

    const [sounds, setSounds] = useState({});

    useEffect(() => {
        const loadSounds = async () => {
            const loadedSounds = {};
            for (const key in soundFiles) {
                if (Object.prototype.hasOwnProperty.call(soundFiles, key)) {
                    try {
                        const { default: sound } = await import(soundFiles[key]);
                        loadedSounds[key] = sound;
                    } catch (error) {
                        console.error(`Error loading sound for key '${key}':`, error);
                    }
                }
            }
            setSounds(loadedSounds);
        };

        loadSounds();
    }, []);

    const playSound = (key) => {
        const audio = new Audio(sounds[key]);
        audio.play();
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key.toLowerCase();
            if (sounds[pressedKey]) {
                playSound(pressedKey);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [sounds]);


    return (
        <div className='study-container'>
            <div className='study-title'>Learn Alphabet</div>
            {Object.keys(soundFiles).map((key) => (
                <button className='sound-button' key={key} onClick={() => playSound(key)}>
                    {key.toUpperCase()}
                </button>
            ))}
        </div>
    )
}
