import { Component, OnInit } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-pone',
  templateUrl: './pone.page.html',
  styleUrls: ['./pone.page.scss'],
})
export class PonePage implements OnInit {

  playing=true;
  constructor(private tts:TextToSpeech) { }

  ngOnInit() {
  }
  speak(){
  	this.tts.speak({
      text:`“Peace dances in the streets, with her wares calling out to the simple to buy from her, only to sow tares.”
      Peace Et
      Peace is your enemy
      Bringing her bounties with the touch of a soothing frenemy
      Looking around, all you see is the abyss
      Heart melted in grave disease
      The balm of Gilead, restore the sick
      Moses, Elijah and the last Eve, Peace
      Seek the counsel of Him who is the bliss
      The maker and giver of blessings with ease
      There is no territory he hasn’t mastered in His recipes
      Dare to climb His shoulders and experience His idea of masterpiece
      Greater in design than the devil- Mephistopheles-
      Man’s precious and impactful anopheles
      Man is a wonder to behold causing green envy
      Earthen-clad pieces used for His glory
      Your wounds are your proofs of victory
      Cracking the enemy’s melody
      Releasing you from its wily ignominy
      Meant to parade you to obscurity
      Never fall for this pseudo-entity
      The real peace is your key to knowing the wiles of your enemy
      Knee to the level of seeking and you shall find in humility,
      The only path many reject- because the peace their enemy gives is their only reality
      Never be blinded by such dexterity
      When your eye is whole, you give light its liberty
      Where no darkness retains your captivity
      Because you now know the brevity of its vanity.
      Keep steadfastly the prosperity
      Of knowledge, liberating your entirety.
      You have but one life to enjoy that royalty-
      To know that peace is your enemy,
      A course unknown by even Udemy
      Get the code cracked and see your mentality
      Race for the true sanctity
      Marked from all time to eternity.
      Cymbals threshing out dusts`,
      locale: 'en-GB',
      rate: 0.80
    })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason))
  }
  stop(){
this.tts.speak("").then((value)=>{
this.playing=false;
});
}

}
