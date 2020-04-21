import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SpeechSynthesisService {
    private speechSynthesis: any = window.speechSynthesis;

    //get voice from speechSynthesis API to speech in EN
    getVoice () {
        return new Promise((resolve, reject) => {
            let getCounter = 0;
            const getVoicesInterval = setInterval(() => {
                getCounter++;

                if (this.speechSynthesis.getVoices().length) {
                    resolve(this.speechSynthesis.getVoices().find(voice => 
                        voice.lang == 'en',
                    ));

                    clearInterval(getVoicesInterval);
                } else if (getCounter > 50) {
                    //(getCounter > 50) means requested several times to speechSynthesis API for 10 seconds but voices are still empty
                    reject('speechSynthesis API voices are still not available after 10 seconds');
                }
            }, 200)
        })
    }

    async speak (textToSpeech) {
        let utterance: any = new window.SpeechSynthesisUtterance(textToSpeech);
        const voice = await this.getVoice();

        utterance.voice = voice;
        this.speechSynthesis.speak(utterance);
    } 
}