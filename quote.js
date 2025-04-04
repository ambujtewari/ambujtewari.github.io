var quotes = new Array (
"Science without religion is lame, religion without science is blind.",
"If we could change ourselves, the tendencies in the world would also change.<br>As a man changes his own nature, so does the attitude of the world change towards him.",
"God exists since mathematics is consistent,<br>and the Devil exists since we cannot prove it.",
"Courage is resistance to fear, mastery of fear - not absence of fear.",
"Of all the animals, man is the only one that is cruel.<br>He is the only one that inflicts pain for the pleasure of doing it.",
"Where prejudice exists it always discolors our thoughts.",
"A life spent making mistakes is not only more honorable<br>but more useful than a life spent doing nothing.",
"If I were to select a research problem without regard to scientific feasibility,<br>it would be ... how to persuade human beings to design and play games that all can win.",
"In a stupid nation the man of genius becomes a god:<br>everybody worships him and nobody does his will.",
"The goal may be distant, but arise, awake and stop not till the goal is reached.",
"Complex models are rarely useful (unless for those writing their dissertations).",
"Our doubts are traitors,<br>And make us lose the good we oft might win<br>By fearing to attempt.",
"Life is a thing you do<br>Now or never -- which do you?",
"It is not knowledge, but the act of learning, not possession but the act of getting there,<br>which grants the greatest enjoyment.",
"Let me not pray to be sheltered from dangers but to be fearless in facing them.<br>Let me not beg for the stilling of my pain but for the heart to conquer it.",
"I tell you one thing my child -- if you want peace, do not find fault with others. Rather, see your own faults.",
"Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
"The human mind in its progress marches from knowledge to knowledge,<br>or it renews and enlarges previous knowledge that has been obscured and overlaid,<br>or it seizes on old imperfect clues and is led by them to new discoveries.",
"It is the desire to learn continually that makes one a teacher, and not the desire to become a teacher.",
"We take up something — we know it is finite;<br>but as soon as we begin to analyse it, it leads us beyond our reason,<br>and we never find an end to all its qualities, its possibilities, its powers, its relations.<br>It has become infinite.",
"I think that it is a relatively good approximation to truth <br>— which is much too complicated to allow anything but approximations —<br> that mathematical ideas originate in empirics.",
"We only get one home. We only get one planet. There is no plan B.",
"No, when the fight begins within himself,<br>A man's worth something.",
"Ever tried. Ever failed. No matter.<br>Try again. Fail again. Fail better.",
"We can be humble and live a good life with the aid of the machines, or we can be arrogant and die.",
"A teacher can never truly teach unless he is still learning himself. <br> A lamp can never light another lamp unless it continues to burn its own flame.",
"Shall I tell you the secret of the true scholar? <br> It is this: Every man I meet is my master in some point, <br> and in that I learn of him.",
"All life is problem solving.",
"Bhakti in religion may be a road to the salvation of the soul. But in politics,<br>Bhakti or hero-worship is a sure road to degradation and eventual dictatorship."
);

var authors = new Array (
"Albert Einstein",
"Mahatma Gandhi",
"Andre Weil",
"Mark Twain",
"Mark Twain",
"Mark Twain",
"George Bernard Shaw",
"Herbert Simon",
"George Bernard Shaw",
"Swami Vivekananda",
"Vladimir Arnold",
"William Shakespeare",
"Piet Hein",
"Carl Friedrich Gauss",
"Rabindranath Tagore",
"Sri Sarada Devi",
"Loius Pasteur",
"Sri Aurobindo",
"Hazrat Inayat Khan",
"Swami Vivekananda",
"John von Neumann",
"Barack Obama",
"Robert Browning",
"Samuel Beckett",
"Norbert Wiener",
"Rabindranath Tagore",
"Ralph Waldo Emerson",
"Karl Popper",
"Bhimrao Ramji Ambedkar"
);

var index = Math.floor(Math.random()*quotes.length);
// var index = quotes.length-1;
document.writeln("<center><table>");
document.writeln("<tr><td width=\"100%\">");
document.writeln("<i>"+quotes[index]+"</i>");
document.writeln("</td></tr><tr><td width=\"100%\" align=\"right\">");
document.writeln("--&nbsp;"+authors[index]);
document.writeln("</td></tr></table></center>");
