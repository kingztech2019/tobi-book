import { Component, OnInit } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.page.html',
  styleUrls: ['./forward.page.scss'],
})
export class ForwardPage implements OnInit {
  playing=true;
  constructor(private tts:TextToSpeech) { }

  ngOnInit() {
  }
  speak(){
  	this.tts.speak({
      text:`Peace is a phenomenon in whom everyone takes pleasure, a language decoded by the creator himself from the ancient depths. Its absence is a turmoil brewing ecstasy, little wonder the world pants for her existence but steals her persistence in the brawl of the fall. It is of my higher good, that you know the promises of your enemy- the world in which you live in and backdrop that projection against the true peace that soothes the soul I graciously imparted in you from the beginning. Peace is your enemy is a must read for the lost and confused, exalting their simplicity as a way of life which is by far, repugnant to my very soul, far beneath the pristine purpose for which you were born. Among all that I created, you are far closer to my very heart and I can only rejoice in your total freedom from the loving enemy that has furtively battered you. Out there, there is a ridiculous cry of peace but deep within your pulse, you can tell it is beyond reach. My heart bleeds for your peace, but have you bothered to find out her ways? It is with utmost and excellent joy I share these with you through my daughter who I fondly call, my Peace of purpose- the writer of this rare work. Only few are chosen to do my works by my words.
      I AM THE LORD, THE LORD GOD, merciful and gracious, endlessly patient – so much love and abundant in truth. I delight in seeing my daughter take you through the journey many have rejected because of the darkness that looms on it, be courageous and find the enemy you so love, at the end of this journey is an illumination of your mind that brings you to the victory won for you before the division of light and darkness. The supernatural is more real than you are able to see.
     Man’s deliverance from his enemy that appear in the form of a committed friendship is a function of what he knows, this is why ignorance is not an excuse, it is a choice that can be embraced or rejected. I give you freedom in my love, freedom to choose the truth or lies. The truth is one, lies are many, the liar himself count on the dispersion of his lies with which to confuse you, a favourite game of his; which I know fully from the beginning to the end. There is a time to embrace and a time to refrain from embrace. Right here you must refrain from embracing the lies of your enemy and embrace the truth I give you, released with lavish grace in the person of my beloved son, Jesus Christ. Let the truth set you free!
     In this book, My Peace of Purpose has exposed the drug pattern of the world and the outfits it is cladded with as tailored by its prince, the liar himself. Until you know, you have no idea!  My Peace shares this knowledge with a timeless seal around it. I have taken pleasure in hiding these things from the wise and revealing it to little children as my daughter. Yes, I chose to do it this way as I so please.
     Have this book in your home and take my word, “the peace you admire is the enemy in your mire.” Digest the poetic rhema, your renewal is at hand.
      Let the journey begin now! ATRA LIBROMANJUMTA! PEACE ON EARTH!
      `,
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
