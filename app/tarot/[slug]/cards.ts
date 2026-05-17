export type TarotCard = {
  slug: string; title: string; image: string;
  imageAlt?: string; paragraphs: string[]; readMore: string[];
};

export const cards: TarotCard[] = [
  {
    slug: 'thefrog',
    title: 'The Frog',
    image: '/tarot/the_frog.png',
    paragraphs: [
      'You are exactly where you need to be.',
      'Even if it feels weird, it\'s right.',
    ],
    readMore: [
      'The Frog appears when life has placed you in an unfamiliar setting, but not by accident. You are exactly where you need to be, even if the path that brought you here feels strange, random, or hard to explain. You may feel slightly out of place, like you wandered into the wrong scene, but this card reminds you that discomfort does not always mean misalignment. Sometimes it means you are growing into a new version of yourself before you fully understand it.',
      'The Frog carries the energy of adaptation, instinct, and quiet trust. Frogs move between worlds: water and land, stillness and sudden motion, hiding and leaping. This card asks you to stop judging your current situation only by how comfortable it feels. Weirdness can be a sign that something new is forming. Confusion can be part of the transition. You do not need to have the full map right now. You only need to notice that something about this moment is asking you to stay present instead of running from it.',
      'When The Frog appears, the message is to trust the strange timing of your life. You may not yet see why this person, place, opportunity, delay, or unexpected detour matters, but it does. Let yourself be here. Look around. Listen closely. There is something in this moment that is meant for you, and the more you stop resisting how odd it feels, the more clearly you will understand why you landed here.',
    ],
  },
  {
    slug: 'thepond',
    title: 'The Pond',
    image: '/tarot/the_pond.png',
    paragraphs: [
      'Your environment is supporting your growth.',
      'Let it hold you.',
    ],
    readMore: [
      'The Pond appears when you are being supported in ways you may not fully notice yet. This card is about the environment around you: the people, places, timing, and quiet conditions that are helping you grow. You may be focused on what you still need to do, where you still need to go, or how far you still feel from becoming who you want to be. But The Pond reminds you that growth does not happen through effort alone. Sometimes the most important thing is allowing yourself to be held by the space you are already in.',
      'A pond is not rushing like a river or crashing like the ocean. It is steady, contained, and alive beneath the surface. It gives the frog a place to rest, hide, breathe, float, and transform. This card asks you to notice what is nourishing you right now, even if it feels simple or ordinary. The support may not be dramatic. It may look like a safe friendship, a quiet pause, a familiar place, a gentle routine, or a moment where you finally do not have to force anything. Let that matter.',
      'When The Pond appears, the message is to stop treating support like something you have to earn. You are allowed to receive care, stability, softness, and patience. Let your environment hold you while you become what you are becoming. Not every season asks you to leap. Some seasons ask you to float, absorb, and trust that the still water around you is doing more for you than you realize.',
    ],
  },
  {
    slug: 'thelilypad',
    title: 'The Lily Pad',
    image: '/tarot/the_lily_pad.png',
    paragraphs: [
      'Rest is part of progress.',
      'Floating is allowed.',
    ],
    readMore: [
      'The Lily Pad appears when you need permission to pause without treating it like failure. This card is about rest, recovery, and the quiet kind of progress that happens when you stop pushing for a moment. You may feel like you should be doing more, moving faster, or proving that you are still on the right path. But The Lily Pad reminds you that stillness has a purpose. Rest is not the opposite of growth. It is part of how growth becomes sustainable.',
      'A lily pad gives the frog a place to float above the water, breathe, and gather itself before the next leap. It does not demand movement. It does not rush transformation. It simply holds space. This card asks you to see rest as something active, not empty. While you are pausing, your mind is settling, your body is recovering, and your next step is becoming clearer. Floating does not mean you are lost. It means you are allowing yourself to be carried for a while.',
      'When The Lily Pad appears, the message is to stop measuring progress only by visible motion. You are allowed to rest without justifying it. You are allowed to take a softer pace. You are allowed to float, breathe, and let the water hold you until you are ready to move again. The leap will still be there when the time comes. For now, this moment of rest may be exactly what makes the next movement possible.',
    ],
  },
  {
    slug: 'thebubble',
    title: 'The Bubble',
    image: '/tarot/the_bubble.png',
    paragraphs: [
      'Joy rises when you stop overthinking.',
    ],
    readMore: [
      'The Bubble appears when joy is trying to reach you, but your mind may be making things heavier than they need to be. This card is light, playful, and a little strange in the best way. It reminds you that not every good thing needs to be analyzed, explained, or turned into a plan. Some moments are meant to be enjoyed before they pop. The Bubble asks you to loosen your grip, let the weirdness be funny, and allow delight to rise naturally.',
      'A bubble does not force its way upward. It floats, wobbles, catches the light, and moves with whatever air or water carries it. It is temporary, but that does not make it meaningless. This card points to the kind of joy that comes from small surprises, silly timing, unexpected laughter, odd little signs, and moments that feel too fun to question. You do not have to understand why something makes you happy before you let it make you happy.',
      'When The Bubble appears, the message is to stop overthinking the magic out of the moment. Play with what is in front of you. Follow the thing that makes you laugh. Let yourself be amused, curious, and unreasonably delighted. Joy does not always arrive as some grand revelation. Sometimes it rises quietly, shines for a second, and asks you to notice it before it disappears.',
    ],
  },
  {
    slug: 'thetadpole',
    title: 'The Tadpole',
    image: '/tarot/the_tadpole.png',
    paragraphs: [
      'You\'re in a phase of becoming.',
      'Trust the transformation.',
    ],
    readMore: [
      'The Tadpole appears when you are in the middle of becoming something new, even if you do not fully recognize yourself yet. This card is about transformation before it looks impressive, before it feels complete, and before anyone else can clearly understand what is changing. You may feel unfinished, awkward, uncertain, or not quite ready. But The Tadpole reminds you that being in-between is not a problem. It is the process.',
      'A tadpole does not become a frog all at once. It changes slowly, strangely, and in stages. First it swims, then it shifts, then it grows into a form it has never lived in before. This card asks you to trust the parts of yourself that are still developing. You do not need to rush into your final shape. You do not need to prove that the transformation is working before it has had time to unfold. What feels confusing now may simply be the evidence that real change is happening.',
      'When The Tadpole appears, the message is to be patient with who you are becoming. Let yourself be new at things. Let yourself be a little clumsy. Let yourself outgrow old versions of yourself without needing to explain every step. You are not behind. You are transforming. Trust the strange middle stage, because it is carrying you toward a version of yourself that could not exist without this one.',
    ],
  },
  {
    slug: 'therain',
    title: 'The Rain',
    image: '/tarot/the_rain.png',
    paragraphs: [
      'Renewal is happening.',
      'Something fresh is entering your life.',
    ],
    readMore: [
      'The Rain appears when renewal is moving into your life, even if it arrives gently, quietly, or in a way you did not expect. This card is about fresh energy entering after a dry season. You may have been feeling stuck, drained, uninspired, or like the same patterns kept repeating. The Rain reminds you that change does not always begin with a dramatic leap. Sometimes it starts as a soft shift in the air, a new feeling, a cleaner thought, or a small sign that life is beginning to move again.',
      'Rain nourishes what has been waiting beneath the surface. It softens the ground, wakes up hidden growth, and gives life to places that may have felt empty or forgotten. This card asks you to notice what is beginning to return: your curiosity, your hope, your energy, your openness, or your ability to imagine something different. You may not see the full bloom yet, but something is being restored. Something is being fed.',
      'When The Rain appears, the message is to let the fresh thing enter without resisting it. You do not need to cling to the old weather just because it is familiar. Let yourself be rinsed of what feels stale. Let the new rhythm arrive. Renewal is happening, and even if it starts small, it has the power to change the whole landscape of your life.',
    ],
  },
  {
    slug: 'themoss',
    title: 'The Moss',
    image: '/tarot/the_moss.png',
    paragraphs: [
      'Your softness is your strength.',
      'You are growing in quiet places, and it is becoming beautiful.',
    ],
    readMore: [
      'The Moss appears when your quiet growth deserves to be recognized. This card is about softness, patience, and the kind of strength that does not need to announce itself. You may be used to thinking that strength has to look bold, loud, fast, or forceful. But The Moss reminds you that softness can survive in places where harder things cannot. Your gentleness is not weakness. Your sensitivity is not a flaw. It may be one of the reasons you are still growing.',
      'Moss does not rush, compete, or demand attention. It spreads slowly, finding life in shaded corners, damp stones, old wood, and forgotten places. It turns stillness into texture. It makes overlooked spaces feel alive again. This card asks you to honor the parts of yourself that grow quietly, without applause. The healing you have done in private, the kindness you keep choosing, the tenderness you have protected, and the beauty forming beneath the surface all matter.',
      'When The Moss appears, the message is to trust your softer way of becoming. You do not need to harden yourself to be taken seriously. You do not need to grow in the open for your growth to be real. Something beautiful is forming in the quiet places of your life, and it is becoming part of who you are. Let your softness stay. It is not holding you back. It is helping you root.',
    ],
  },
  {
    slug: 'theripple',
    title: 'The Ripple',
    image: '/tarot/the_ripple.png',
    paragraphs: [
      'Your energy is affecting others positively.',
      'You matter more than you think.',
    ],
    readMore: [
      'The Ripple appears when your presence is reaching farther than you realize. This card is about the quiet effect you have on the people, spaces, and moments around you. You may think you are just passing through, saying a small thing, sharing a laugh, offering kindness, or showing up as yourself. But The Ripple reminds you that energy moves outward. What feels small to you may be landing deeply for someone else.',
      'A ripple begins with one tiny movement, but it does not stay in one place. It spreads across the surface, changing everything it touches in subtle ways. This card asks you to stop underestimating the positive impact of your existence. Your warmth, humor, attention, encouragement, weirdness, softness, or honesty may be giving someone exactly what they needed without you even knowing it. You do not have to be loud to be meaningful. You do not have to be central to be important.',
      'When The Ripple appears, the message is that you matter more than you think. Your energy is part of the atmosphere around you, and it is affecting others in ways you may never fully see. Keep being generous with the good parts of yourself. Keep showing up. Something about who you are is moving outward, and the world around you is better because of it.',
    ],
  },
  {
    slug: 'theleap',
    title: 'The Leap',
    image: '/tarot/the_leap.png',
    paragraphs: [
      'Take the chance.',
      'You\'re ready.',
    ],
    readMore: [
      'The Leap appears when the moment has come to trust yourself and move. This card is about taking the chance, saying yes, stepping forward, or choosing the path that requires courage. You may not feel completely ready, but readiness does not always feel like certainty. Sometimes it feels like nervous excitement, a pull in your chest, or the sense that staying where you are would be smaller than who you are becoming.',
      'A frog does not leap because it can see every detail of where it will land. It leaps because its body knows how to move. It trusts the timing, the distance, and the instinct that says now. This card asks you to stop waiting for perfect conditions before you act. You have gathered more strength, wisdom, and experience than you are giving yourself credit for. The next step may still feel risky, but that does not mean it is wrong.',
      'When The Leap appears, the message is simple: take the chance. Apply, ask, go, create, speak, try, begin. Whatever has been calling you forward is not asking for perfection. It is asking for movement. You are ready enough to start, and sometimes the only way to become fully ready is to leap first and learn in the air.',
    ],
  },
  {
    slug: 'theprince',
    title: 'The Prince',
    image: '/tarot/the_prince.png',
    paragraphs: [
      'You carry quiet confidence.',
      'Step into it.',
    ],
    readMore: [
      'The Prince appears when you are being asked to recognize the quiet confidence you already carry. This card is not about arrogance, performance, or needing everyone to notice you. It is about self-possession. You may be more capable, prepared, or worthy than you are letting yourself believe. The Prince reminds you that confidence does not always arrive loudly. Sometimes it is calm, steady, and waiting for you to stand inside it.',
      'A prince does not need to prove his place by demanding attention. His presence comes from knowing who he is, even before anyone else confirms it. This card asks you to stop shrinking from the parts of yourself that are ready to be seen. You do not need to become someone else to be powerful. You only need to stop hiding the strength, charm, intelligence, and grace that are already yours.',
      'When The Prince appears, the message is to step into yourself with more trust. Let your posture change. Let your voice be clear. Let yourself take up the space that belongs to you without apology. You are not pretending to be worthy. You are remembering that you already are.',
    ],
  },
  {
    slug: 'thedrop',
    title: 'The Drop',
    image: '/tarot/the_drop.png',
    paragraphs: [
      'A peak moment is coming.',
      'Be fully present for it.',
    ],
    readMore: [
      'The Drop appears when energy is building toward a moment that matters. This card is about anticipation, timing, and the feeling that something is about to open, shift, or release. You may sense momentum gathering around you, even if you cannot fully name what is coming yet. The Drop reminds you that not every important moment announces itself clearly beforehand. Sometimes you only feel the pressure rising, the rhythm changing, and the air becoming charged.',
      'In music, the drop is the point where everything that has been building finally lands. The tension breaks, the crowd moves together, and the moment becomes bigger than any one person. This card asks you to pay attention to what is building in your own life. A conversation, opportunity, connection, realization, celebration, or turning point may be closer than you think. Do not sleepwalk through it. Do not rush past it trying to get to the next thing.',
      'When The Drop appears, the message is to be fully present for what is arriving. Let yourself feel the build. Let yourself meet the moment with your whole attention. Something powerful is coming into focus, and your job is not to control it before it happens. Your job is to be there when it does.',
    ],
  },
  {
    slug: 'thedance',
    title: 'The Dance',
    image: '/tarot/the_dance.png',
    paragraphs: [
      'Express yourself freely.',
      'Your energy is magnetic.',
    ],
    readMore: [
      'The Dance appears when your energy is asking to move without apology. This card is about expression, freedom, and letting yourself be seen in a way that feels natural instead of controlled. You may have been holding back, overthinking how you come across, or waiting for permission to fully be yourself. The Dance reminds you that your presence becomes more powerful when you stop trying to manage every part of it.',
      'A dance does not need to be perfect to be magnetic. It only needs to be honest. When a frog dances, it is strange, joyful, and impossible to ignore in the best way. This card asks you to trust the rhythm that is already moving through you. Your personality, humor, weirdness, passion, softness, and spark are not things you need to hide or smooth down. They are part of what draws the right people, moments, and opportunities toward you.',
      'When The Dance appears, the message is to express yourself freely. Say the thing. Wear the outfit. Make the art. Join the moment. Let your body, voice, and spirit take up space. Your energy is magnetic when it is real, and the more honestly you move through the world, the more life can move with you.',
    ],
  },
  {
    slug: 'thespark',
    title: 'The Spark',
    image: '/tarot/the_spark.png',
    paragraphs: [
      'A meaningful connection is forming.',
      'Follow the feeling.',
    ],
    readMore: [
      'The Spark appears when a meaningful connection is beginning to form. This card is about the first flicker of recognition between you and someone, or something, that matters. It may be a person, an idea, a creative path, a new opportunity, or a moment that suddenly feels charged with possibility. You may not know where it is going yet, but something in you has noticed it. The Spark reminds you to pay attention to what feels alive.',
      'A spark is small, but it carries heat, light, and potential. It does not need to become a flame immediately to be real. This card asks you not to dismiss the feeling just because it is new, subtle, or hard to explain. Sometimes the beginning of something important feels like curiosity, nervous excitement, unexpected ease, or the sense that you want to lean closer. That feeling may be pointing you toward something worth exploring.',
      'When The Spark appears, the message is to follow the feeling without forcing the outcome. Let the connection breathe. Be open, be present, and let yourself move toward what feels meaningful. You do not need to know whether this becomes a fire, a lesson, a friendship, a romance, a collaboration, or a memory. For now, trust the spark. It is showing you where warmth is beginning.',
    ],
  },
  {
    slug: 'thecrowd',
    title: 'The Crowd',
    image: '/tarot/the_crowd.png',
    paragraphs: [
      'You belong here.',
      'You\'re part of something bigger.',
    ],
    readMore: [
      'The Crowd appears when you are being reminded that you are not as separate as you may feel. This card is about belonging, shared energy, and the strange comfort of realizing you are part of something bigger than yourself. You may have been feeling like an outsider, unsure of your place, or worried that you are somehow too different to fit. The Crowd reminds you that belonging does not always mean blending in. Sometimes it means showing up as yourself and discovering that there is room for you.',
      'A crowd is more than a collection of people. It is a living field of movement, sound, emotion, and connection. At a festival, each person brings their own weirdness, story, style, and rhythm, but together they create something that no one could make alone. This card asks you to notice the places where your energy is welcomed, reflected, or amplified. You do not need to be the center of everything to matter. Your presence adds to the whole.',
      'When The Crowd appears, the message is simple: you belong here. Let yourself be part of the moment instead of watching from the edge. Join the dance, accept the invitation, follow the laughter, and allow yourself to be included. You are not just passing through. You are part of the shared magic, and the experience is different because you are in it.',
    ],
  },
  {
    slug: 'thegift',
    title: 'The Gift',
    image: '/tarot/the_gift.png',
    paragraphs: [
      'Something unexpected and good is coming.',
      'Stay open.',
    ],
    readMore: [
      'The Gift appears when something unexpected and good is beginning to make its way toward you. This card is about surprise, generosity, and the kind of blessing that arrives without being perfectly planned. You may not know what form it will take yet. It could be an opportunity, a kind gesture, a new connection, a piece of good news, a creative idea, or a moment that restores your faith in the timing of things. The Gift reminds you that not everything meaningful has to be chased.',
      'A gift requires openness on both sides. Someone, or something, offers it, but you still have to be willing to receive it. This card asks you to notice where life may be trying to hand you something good, even if it does not look exactly how you expected. Sometimes we block good things because they arrive strangely, too soon, too quietly, or from a direction we did not predict. The Gift invites you to soften your grip on how things "should" happen.',
      'When The Gift appears, the message is to stay open. Let yourself receive without immediately questioning, minimizing, or trying to earn it. Something kind is entering your path, and you do not need to understand the whole reason before accepting it. Say yes to the small offering, the unexpected invitation, the strange little sign, or the moment of sweetness. It may be more important than it first appears.',
    ],
  },
  {
    slug: 'theglow',
    title: 'The Glow',
    image: '/tarot/the_glow.png',
    paragraphs: [
      'You\'re shining right now.',
      'Don\'t dim it.',
    ],
    readMore: [
      'The Glow appears when your light is visible, even if you are not fully aware of it. This card is about presence, radiance, and the quiet power of being in your own energy without shrinking from it. You may be attracting attention, admiration, connection, or opportunity simply by showing up as yourself. The Glow reminds you that shining does not have to mean performing. Sometimes it just means allowing what is already bright in you to be seen.',
      'A glow is different from a spotlight. It does not force itself onto the room. It spreads naturally, softly, and unmistakably. This card asks you to stop hiding the parts of yourself that feel expressive, beautiful, talented, funny, strange, or alive. You may have learned to dim yourself to make others comfortable, avoid judgment, or stay safe in the background. But right now, something in you is meant to be visible.',
      'When The Glow appears, the message is to let yourself shine without apology. Do not downplay your joy, your style, your confidence, your creativity, or your spark just because someone else may not understand it. You are allowed to be noticed. You are allowed to take up light. The right people will not ask you to dim. They will recognize your glow and move closer to it.',
    ],
  },
  {
    slug: 'thealignment',
    title: 'The Alignment',
    image: '/tarot/the_alignment.png',
    paragraphs: [
      'Things are lining up naturally.',
      'Stop forcing, start allowing.',
    ],
    readMore: [
      'The Alignment appears when things are beginning to line up without needing to be forced. This card is about timing, flow, and the quiet relief of realizing that not everything requires pressure to become real. You may have been pushing, planning, fixing, or trying to control every detail because you are afraid things will fall apart if you stop. The Alignment reminds you that some paths open more easily when you stop gripping them so tightly.',
      'When things are aligned, they do not always move fast, but they move with less resistance. The right conversation happens. The right sign appears. The right person understands. The next step becomes clearer without you having to drag it into place. This card asks you to notice where life is already cooperating with you. If something keeps softening, opening, repeating, or returning, it may be showing you the direction that wants to be followed.',
      'When The Alignment appears, the message is to stop forcing and start allowing. This does not mean doing nothing. It means acting from trust instead of panic. Move where the energy is moving. Let what fits come closer. Let what resists reveal itself honestly. Things are lining up naturally, and your role is to stay open enough to recognize the pattern as it forms.',
    ],
  },
  {
    slug: 'themoment',
    title: 'The Moment',
    image: '/tarot/the_moment.png',
    paragraphs: [
      'This right now is important.',
      'Soak it in.',
    ],
    readMore: [
      'The Moment appears when life is asking you to slow down and recognize the importance of right now. This card is about presence, awareness, and the quiet magic of realizing that you are inside something meaningful while it is still happening. You may be tempted to rush ahead, document everything, compare it to the past, or wonder what comes next. But The Moment reminds you that some experiences are meant to be felt fully before they are understood.',
      'A moment can seem ordinary while you are inside it, then become something you remember for years. A laugh, a look, a song, a strange coincidence, a feeling in the air, or the people around you may be carrying more meaning than you realize. This card asks you to stop moving through the experience like it is only a bridge to somewhere else. Look around. Listen. Let the scene reach you. Something here matters.',
      'When The Moment appears, the message is to soak it in. Do not flatten this experience by trying to control it, capture it perfectly, or explain it too quickly. Let yourself be present while it is still alive. This right now is important, even if you do not know exactly why yet. Give it your attention, and let it become part of you.',
    ],
  },
  {
    slug: 'thepass',
    title: 'The Pass',
    image: '/tarot/the_pass.png',
    paragraphs: [
      'You\'ve been granted access (literal or energetic).',
      'Say yes to what appears.',
    ],
    readMore: [
      'The Pass appears when a door is opening for you. This card is about access, permission, invitation, and the strange feeling of being allowed into a space, opportunity, connection, or version of life that once felt out of reach. This access may be literal, like an invitation, ticket, opportunity, introduction, or new path. It may also be energetic, like feeling welcomed, recognized, or suddenly ready to step into something you used to only imagine from the outside.',
      'A pass does not create the whole experience by itself. It simply lets you enter. What happens next depends on whether you are willing to walk through. This card asks you not to freeze at the threshold. Sometimes good things arrive before you feel fully prepared for them. Sometimes the door opens before you have rehearsed what to do inside. That does not mean you are in the wrong place. It means the moment is asking you to trust that you are allowed to be here.',
      'When The Pass appears, the message is to say yes to what appears. Accept the invitation. Follow the opening. Step through the entrance without shrinking or questioning whether you deserve it. You have been granted access to something meaningful, and the next part of the story begins when you let yourself go in.',
    ],
  },
  {
    slug: 'thechosen',
    title: 'The Chosen',
    image: '/tarot/the_chosen.png',
    paragraphs: [
      'You\'ve been noticed (in the best way).',
      'Something special is unfolding for you.',
    ],
    readMore: [
      'The Chosen appears when something about you has been noticed in the best way. This card is about recognition, timing, and the feeling that life is quietly pointing toward you. You may not fully understand why this moment, person, opportunity, or sign is appearing now, but something is beginning to separate itself from the ordinary. The Chosen reminds you that you are not invisible. Something about who you are, what you bring, or where you are headed is being seen.',
      'Being chosen does not always arrive as a grand announcement. Sometimes it feels like a door opening, a person remembering you, an opportunity finding its way back, or a strange coincidence that feels too specific to ignore. This card asks you to stay awake to the ways life may be singling you out for something meaningful. You do not need to chase the moment or force it to explain itself right away. Just notice that something special is beginning to unfold.',
      'When The Chosen appears, the message is to receive the attention, invitation, or opportunity without shrinking from it. Let yourself believe that good things can find you. Let yourself be seen without immediately questioning why. Something is unfolding for you, and your role is to stay open, present, and willing to step toward it when it calls.',
    ],
  },
];
