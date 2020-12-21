import { Component, OnInit } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-ptwo',
  templateUrl: './ptwo.page.html',
  styleUrls: ['./ptwo.page.scss'],
})
export class PtwoPage implements OnInit {

  playing=true;
  constructor(private tts:TextToSpeech) { }

  ngOnInit() {
  }
  speak(){
  	this.tts.speak({
      text:`The mind is likened to a log of wood; you either cause it to spread the fire or you bury it in the cold grave of idleness”
      Peace Et
      Your mind is the gateway to the treasures of your heart, ask me how and I will show you a most perfect example, God. Looking around you shows what God’s mind looks like-or at least a glimpse of it, not all- revealing the heart of the Father of all creatures. He made both perfect and imperfect for their mysteriously interdependent blend. The perfect cannot be perfect without the influence of the imperfect and the imperfect cannot be perfect without the impact of the perfect in view, this quality is what makes Him the wonder- worker. We are the treasures of His heart, His most prized possessions, the reason Jesus Christ, undoubtedly gave His life to repossess Father’s lost treasures. The greater the sacrifice, the greater the worth of the restored. What is the world without the two sides of the coin? - life and death, sorrow and joy, peace and distress, laughter and mourning. The mind of God opens the shades and weaves them into our lives to build perfection in what seems imperfect. He created evil and good to build perfection in His precious children, with the liberty to choose their path. God’s perfect mind opens up to hopes, trust and beliefs and above all, peace which is why he isn’t afraid of his vulnerability. His weakness is stronger than the strength of all generations. 
      God’s love for his creatures cause him to trust, believe and keep his hopes alive, knowing that there will be a release of his final will on all matters as it concerns him. Awaken your mind to such peace. God made peace with his thoughts and despite your imperfection, he thought and still thinks peaceful thoughts concerning you to give you a far exceeding future and hope for perfection. The world is not meant to be made perfect without the spurts of imperfection, reason he let the tares sown by the devil grow among the good seeds sown by him. God knows better because he decides the end.
      Who is peace- your enemy?
      The world accepts only perfection but can only grant imperfection, what then is the irony in its gritty appetite? The true enemy is the world in which you live that promises you her peace, as long as you yield to her appetite-refusing your growth in sufferings of all kinds. It always brings an escape route before you even ask, romanticizing darkness as realism. Grow cold on the appetite it brings you and you are on your way to taking your dominion. Its words to you are- “You are free to be enslaved by me.” You can change the tide by the wave-maker- God, the one that changed the destiny of man, which man brought upon himself and finalized the results from the beginning.
      Your enemy has a master- the archenemy of your soul
      The world is your enemy- yes- you read it, then who is her master? The world hails the prince of the power of air, a faster penetrator in all spaces and ages but does have his limits. God decides that and so do we, I will be coming to that soon.
      The world, sin, your flesh and Satan cry out prophesying to you, “peace, peace, peace”, where there is none. Turn deaf ears to them, this is a strategic declaration to rid you of the zeal to fight when you have to. Hold your peace before God’s presence and He shall teach you how to war, so that you can destroy the brazen wiles of your enemies (Exodus 14:14, 2Samuel 22:35). Most times, you talk too much that you don’t give God the chance to speak to your haunted soul. Deliberately stay with him and listen as He speaks to you in that still small voice- “wrestle and I shall be your peace." The only fight you have to fight is a good fight of faith in the one who has helped you overcome your enemies by his sacrifice. Becoming the child of God is dependent on receiving the truth that sets us free from the prides of the enemies, the sons of God overcomes the world by the truth and faith in the testimony of his death, without which mankind would have been lost forever.
      Satan entices you with the attractions of this world in a peaceful and friendly aura, tickling the fancy of your flesh which leads you to commit sin. This is a strategic quadripartite built against your very soul. The separation from God caused by this influences makes your dominion impossible. The world, your flesh and their instigator don’t like you, the earlier you know this truth, the better you are ready to overcome the wiles of these enemies formulated to steal your crown. The Devil is staggering in drunkenness; a wild party is roused in his kingdom. The blood of ignorant men fills each cup and every unclean spirit is binge drinking. The destinies of souls are tied, exposed to the greatest form of oppression ever imagined. Who can enter these gates and liberate men? The truth you submit to determines your emancipation. Oh man, set your soul free! All you need is decree your deliverance with the overpowering truth. Let the truth comfort you that you might clinch your crown of victory from the thief who adores self. `,
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
