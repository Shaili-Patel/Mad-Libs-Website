let userName = prompt('What is your name?')
let userFriend = prompt('What is your friends name?')
let userFavColor = prompt('What is your favorite color?')
let userAttire = prompt('Will you be wearing a gown or a suit?')
let userFlower = prompt('What are your favorite flowers?')
let userMusic = prompt('What is your favorite music genre?')
let userVerb = prompt('Name a verb (action)?')

let myStory = ` <h2> Dear ${userName},</h2>

<p>You are cordially invited to the Bridgerton's Ball, along with your cherished acquaintance ${userFriend}! Don your finest attire in the color ${userFavColor}, 
and let the stars above guide you through a night filled with music, magic, and wonder. Let the shimmer of your ${userAttire} conquer the stars, and allow the evening to unfold 
perfectly. The Bridgerton House stands awaiting, its walls dressed in glimmering lights and beautiful ${userFlower},
its full halls echoing with the sound of ${userMusic} carried by the winds of magic. You may wish to ${userVerb} until the stars fade,
or perhaps steal a quiet moment beneath the moonlit archway, where secrets of the ton can be whispered without a sound. RSVP to the Bridgerton household,
where a messenger will deliver your response by the finest means.
We await your presence with great anticipation,
for no gathering would be complete without you, dearest ${userName} and ${userFriend}.</p>
`

console.log(myStory)

document.getElementById('story').innerHTML = myStory

