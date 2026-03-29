// ═══════════════════════════════════════════════════════════
// CORE Missions Trivia - Question Bank
// ═══════════════════════════════════════════════════════════
//
// HOW TO EDIT:
//   Each question has:
//     category  - displayed as a tag (e.g. "CORE Missions")
//     question  - the question text
//     answers   - array of 4 choices (the FIRST one is always the correct answer)
//                 They get shuffled automatically in the game!
//     fact      - fun fact shown after answering
//
// HOW TO ADD A NEW QUESTION:
//   Copy this template and paste it at the end of the array:
//
//   {
//     category: "Category Name",
//     question: "Your question here?",
//     answers: ["Correct Answer", "Wrong 1", "Wrong 2", "Wrong 3"],
//     fact: "An interesting fact related to the question."
//   },
//
// ═══════════════════════════════════════════════════════════

const QUESTIONS = [

  // ──────────────────────────────────────
  // CORE MISSIONS (30 questions)
  // ──────────────────────────────────────

  {
    category: "CORE Missions",
    question: "What does CORE stand for in CORE Missions?",
    answers: ["Centered On Remote Evangelism", "Christians Organized to Reach Everyone", "Church Outreach and Revival Everywhere", "Called Out to Reach the Earth"],
    fact: "CORE stands for Centered On Remote Evangelism — they focus on reaching remote villages with the Gospel!"
  },
  {
    category: "CORE Missions",
    question: "CORE Missions is a mission board for what type of workers?",
    answers: ["National Pastors", "American Missionaries", "Bible Translators", "Medical Workers"],
    fact: "CORE supports national pastors who already live in the countries they serve. They know the language and culture!"
  },
  {
    category: "CORE Missions",
    question: "Who founded CORE Missions?",
    answers: ["TJ Kimmel", "Ben White", "Billy Graham", "Jim Elliot"],
    fact: "TJ Kimmel and his family served as missionaries in Jamaica for 7 years and started 3 churches before founding CORE!"
  },
  {
    category: "CORE Missions",
    question: "In how many countries does CORE Missions work?",
    answers: ["15", "5", "50", "100"],
    fact: "CORE works in 15 countries around the world, partnering with foreign missionaries and national pastors!"
  },
  {
    category: "CORE Missions",
    question: "What percentage of your donation does CORE keep for processing fees?",
    answers: ["0% — Nothing!", "10%", "25%", "5%"],
    fact: "CORE doesn't take any percentage! 100% of what you give goes to the national pastor. They cover the cost to send support!"
  },
  {
    category: "CORE Missions",
    question: "On average, a CORE national pastor can live on what percentage of a foreign missionary's budget?",
    answers: ["3%", "50%", "25%", "75%"],
    fact: "National pastors can live on just 3% of what a foreign missionary needs. Your dollar goes a really long way!"
  },
  {
    category: "CORE Missions",
    question: "Where is CORE Missions headquartered?",
    answers: ["McDonough, Georgia", "New York City", "Dallas, Texas", "Nashville, Tennessee"],
    fact: "CORE is based out of Pinecrest Baptist Church in McDonough, GA. The church provides their office space!"
  },
  {
    category: "CORE Missions",
    question: "Where did founder TJ Kimmel serve as a missionary before starting CORE?",
    answers: ["Jamaica", "India", "China", "Brazil"],
    fact: "TJ Kimmel and his family spent 7 years in Jamaica, where they planted 3 churches!"
  },
  {
    category: "CORE Missions",
    question: "What must each national pastor fill out monthly to stay accountable?",
    answers: ["An Accountability Report", "A blog post", "A fundraising letter", "A research paper"],
    fact: "Each month, national pastors submit an Accountability Report showing how much money they received."
  },
  {
    category: "CORE Missions",
    question: "About how many pastors does CORE Missions currently support?",
    answers: ["Over 140", "About 10", "Exactly 1,000", "Around 50"],
    fact: "CORE supports about 142 national pastors across 15 countries!"
  },
  {
    category: "CORE Missions",
    question: "Why does CORE require each national pastor to be connected to a foreign missionary?",
    answers: ["For accountability and local knowledge", "To save on travel costs", "It's a government rule", "For language help only"],
    fact: "The foreign missionary knows the local area and can vouch for the pastor's ministry and character!"
  },
  {
    category: "CORE Missions",
    question: "What program does CORE run to help feed people in need?",
    answers: ["Feeding Centers", "Fast Food Ministry", "Meal Kits by Mail", "Restaurant Outreach"],
    fact: "CORE operates Feeding Centers to meet physical needs while sharing the Gospel!"
  },
  {
    category: "CORE Missions",
    question: "What training program does CORE Missions operate?",
    answers: ["Bible Truth Institute", "Seminary Online", "Missions University", "Pastor's Academy USA"],
    fact: "The Bible Truth Institute helps train national pastors and believers in biblical knowledge!"
  },
  {
    category: "CORE Missions",
    question: "What is Ben White's role at CORE Missions?",
    answers: ["Director of Missions Advancement", "President", "Head Pastor", "Lead Missionary"],
    fact: "Ben White serves as the Director of Missions Advancement, helping CORE grow and reach more people!"
  },
  {
    category: "CORE Missions",
    question: "How many churches did TJ Kimmel start in Jamaica?",
    answers: ["3", "1", "10", "25"],
    fact: "TJ Kimmel and his family started 3 churches during their 7 years serving in Jamaica!"
  },
  {
    category: "CORE Missions",
    question: "How often does CORE send financial support to their national pastors?",
    answers: ["Monthly", "Once a year", "Every 5 years", "Only at Christmas"],
    fact: "CORE sends support every single month — not bi-monthly or quarterly like some organizations!"
  },
  {
    category: "CORE Missions",
    question: "What church provides office space for CORE Missions?",
    answers: ["Pinecrest Baptist Church", "First Baptist Atlanta", "Saddleback Church", "Times Square Church"],
    fact: "Pinecrest Baptist Church in McDonough, GA provides CORE's office space, keeping costs low!"
  },
  {
    category: "CORE Missions",
    question: "What type of theology do all CORE-affiliated pastors share?",
    answers: ["Baptist", "Methodist", "Catholic", "Presbyterian"],
    fact: "CORE is a Baptist missions organization. All their affiliated pastors and missionaries share Baptist beliefs!"
  },
  {
    category: "CORE Missions",
    question: "Why don't CORE's national pastors travel to the US to raise their own support?",
    answers: ["Travel costs would equal years of salary", "They don't want to", "It's against the law", "They don't speak English"],
    fact: "One plane ticket to the US could support a national pastor for several years!"
  },
  {
    category: "CORE Missions",
    question: "Who is the Director of Operations at CORE Missions?",
    answers: ["Tim Carter", "Ben White", "TJ Kimmel", "Nate Beil"],
    fact: "Tim Carter serves as Director of Operations, helping keep CORE running smoothly!"
  },
  {
    category: "CORE Missions",
    question: "Who serves as the Latin America Director for CORE?",
    answers: ["Nate Beil", "Tim Carter", "Ben White", "TJ Kimmel"],
    fact: "Nate Beil oversees CORE's work across Latin American countries!"
  },
  {
    category: "CORE Missions",
    question: "What is the Accountability Director's name at CORE?",
    answers: ["Lauren Carter", "Sarah Kimmel", "Tim Carter", "Ben White"],
    fact: "Lauren Carter makes sure all national pastors submit their monthly accountability reports!"
  },
  {
    category: "CORE Missions",
    question: "How many years did TJ Kimmel serve in Jamaica before founding CORE?",
    answers: ["7 years", "2 years", "15 years", "1 year"],
    fact: "TJ and his family spent 7 faithful years in Jamaica before God led them to start CORE Missions!"
  },
  {
    category: "CORE Missions",
    question: "What is the main way CORE finds new national pastors to support?",
    answers: ["Foreign missionaries recommend them", "They apply online", "They show up at headquarters", "Pastors call from overseas"],
    fact: "Foreign missionaries on the ground recommend national pastors they trust to CORE for representation!"
  },
  {
    category: "CORE Missions",
    question: "What is CORE's tax status?",
    answers: ["501(c)(3) nonprofit", "For-profit company", "Government agency", "Private foundation"],
    fact: "CORE is a registered 501(c)(3) nonprofit, which means donations are tax-deductible!"
  },
  {
    category: "CORE Missions",
    question: "What does CORE believe about national pastors compared to foreign missionaries?",
    answers: ["Both are essential for reaching the world", "Only foreign missionaries matter", "National pastors aren't needed", "Only pastors in America count"],
    fact: "CORE believes national pastors are essential for reaching remote villages where foreign missionaries can't easily go!"
  },
  {
    category: "CORE Missions",
    question: "What activities does CORE's team do across America?",
    answers: ["Speak at churches and missions conferences", "Run pizza restaurants", "Coach sports teams", "Build houses"],
    fact: "CORE team members travel across America speaking at churches, conferences, and meeting with supporters!"
  },
  {
    category: "CORE Missions",
    question: "How does CORE's leadership stay connected to the pastors they support?",
    answers: ["They travel overseas multiple times a year", "They only send emails", "They never visit", "They use carrier pigeons"],
    fact: "CORE leadership travels overseas multiple times yearly to meet supported pastors and assess new candidates!"
  },
  {
    category: "CORE Missions",
    question: "What is special about how CORE sends money internationally?",
    answers: ["Methods vary by country for safety", "They only use one method", "They mail cash in envelopes", "They don't send money"],
    fact: "CORE uses different methods depending on the country — sometimes through mission boards, Western Union, or special arrangements to keep pastors safe!"
  },
  {
    category: "CORE Missions",
    question: "How does CORE view the national pastors they support?",
    answers: ["As God's men they are helping", "As their employees", "As their representatives", "As volunteers"],
    fact: "CORE doesn't claim pastors as 'their' representatives — they see them as God's men they're privileged to help!"
  },

  // ──────────────────────────────────────
  // WORLD MISSIONS (25 questions)
  // ──────────────────────────────────────

  {
    category: "World Missions",
    question: "What is a 'national pastor'?",
    answers: ["A pastor from the country where they serve", "A pastor who serves all of America", "A pastor on national TV", "A pastor at a national park"],
    fact: "National pastors already speak the language, know the culture, and can reach people more effectively!"
  },
  {
    category: "World Missions",
    question: "About how many languages are spoken in the world today?",
    answers: ["Over 7,000", "About 200", "Exactly 500", "Around 50"],
    fact: "There are over 7,000 languages! Missionaries work hard to share God's Word in as many as possible."
  },
  {
    category: "World Missions",
    question: "What is the most translated book in the world?",
    answers: ["The Bible", "Harry Potter", "The Dictionary", "Green Eggs and Ham"],
    fact: "The Bible has been translated into over 700 languages, with portions translated into thousands more!"
  },
  {
    category: "World Missions",
    question: "What does the word 'missionary' mean?",
    answers: ["Someone sent on a mission to share the Gospel", "A type of soldier", "A person who studies outer space", "A world traveler"],
    fact: "The word comes from the Latin 'missio' meaning 'to send.' Missionaries are sent to tell others about Jesus!"
  },
  {
    category: "World Missions",
    question: "What is an 'unreached people group'?",
    answers: ["A group with little or no access to the Gospel", "People who live on mountains", "Athletes who don't reach the finish line", "People without cell phones"],
    fact: "There are still over 7,000 unreached people groups in the world who need to hear about Jesus!"
  },
  {
    category: "World Missions",
    question: "What famous missionary to China was known as 'Cambridge Seven' member?",
    answers: ["C.T. Studd", "Abraham Lincoln", "George Washington", "Albert Einstein"],
    fact: "C.T. Studd gave up fame and fortune to be a missionary, saying 'If Jesus Christ be God and died for me, no sacrifice is too great for me to make for Him!'"
  },
  {
    category: "World Missions",
    question: "Who is known as the 'Father of Modern Missions'?",
    answers: ["William Carey", "Martin Luther", "John Calvin", "Charles Spurgeon"],
    fact: "William Carey went to India in 1793 and spent 41 years translating the Bible into many Indian languages!"
  },
  {
    category: "World Missions",
    question: "What missionary was famously killed by the Auca tribe in Ecuador?",
    answers: ["Jim Elliot", "Hudson Taylor", "David Livingstone", "Eric Liddell"],
    fact: "Jim Elliot and four friends were killed in 1956. Later, his wife Elisabeth went back and many Aucas became Christians!"
  },
  {
    category: "World Missions",
    question: "What is 'church planting'?",
    answers: ["Starting a new church in a new area", "Planting flowers at a church", "Building a garden at church", "Moving a church building"],
    fact: "Church planting means starting a brand new church where one doesn't exist yet — it's one of the main goals of missions!"
  },
  {
    category: "World Missions",
    question: "What is a 'short-term mission trip'?",
    answers: ["A mission trip lasting a few days to a few weeks", "A trip to the store", "A 50-year commitment", "A vacation to the beach"],
    fact: "Short-term mission trips help people experience missions firsthand and can change their lives forever!"
  },
  {
    category: "World Missions",
    question: "What is deputation?",
    answers: ["When missionaries travel to raise prayer and financial support", "A type of punishment", "A math problem", "A government office"],
    fact: "Before going to the mission field, many missionaries travel to churches to share their calling and raise support!"
  },
  {
    category: "World Missions",
    question: "What does it mean to be a 'tentmaker' missionary?",
    answers: ["A missionary who works a regular job to fund their ministry", "Someone who literally makes tents", "A camping missionary", "A construction worker at church"],
    fact: "Like the Apostle Paul who made tents, some missionaries work regular jobs so they can serve without needing donations!"
  },
  {
    category: "World Missions",
    question: "What continent has the fastest-growing Christian population?",
    answers: ["Africa", "North America", "Europe", "Antarctica"],
    fact: "Christianity is growing incredibly fast in Africa — millions of people are coming to know Jesus every year!"
  },
  {
    category: "World Missions",
    question: "What is a 'closed country' in missions?",
    answers: ["A country that restricts or bans missionaries", "A country with locked doors", "A country that is too small", "A country with no airports"],
    fact: "Some countries don't allow missionaries to enter openly, but creative believers still find ways to share the Gospel!"
  },
  {
    category: "World Missions",
    question: "What language has the Bible been translated into the most recently?",
    answers: ["New translations are happening all the time!", "Only English", "Ancient Greek only", "It was finished long ago"],
    fact: "Bible translators are still working to translate Scripture into every language — hundreds of projects are ongoing right now!"
  },
  {
    category: "World Missions",
    question: "What famous missionary explored Africa and said 'I am prepared to go anywhere, so long as it is forward'?",
    answers: ["David Livingstone", "Christopher Columbus", "Marco Polo", "Captain Cook"],
    fact: "David Livingstone spent 30 years in Africa exploring, preaching, and fighting against the slave trade!"
  },
  {
    category: "World Missions",
    question: "What is a 'faith mission'?",
    answers: ["A mission that trusts God to provide through donations", "A mission to find lost treasure", "A secret spy mission", "A school field trip"],
    fact: "Faith missions trust God to provide for their needs through the generous giving of churches and individuals!"
  },
  {
    category: "World Missions",
    question: "Why is learning the local language important for missionaries?",
    answers: ["To communicate the Gospel clearly", "To order food at restaurants", "To win language contests", "It's not important at all"],
    fact: "People understand the Gospel best in their own heart language — that's why language learning is so important!"
  },
  {
    category: "World Missions",
    question: "What is the '10/40 Window'?",
    answers: ["A region between 10 and 40 degrees north latitude with most unreached people", "A type of church window", "A Bible reading plan", "A time zone"],
    fact: "The 10/40 Window stretches from West Africa to East Asia and contains most of the world's unreached people groups!"
  },
  {
    category: "World Missions",
    question: "What famous missionary to India was known as 'the Father of Modern Missions'?",
    answers: ["William Carey", "Mother Teresa", "Mahatma Gandhi", "Winston Churchill"],
    fact: "William Carey was a shoemaker who became one of the greatest missionaries ever, translating the Bible into many languages!"
  },
  {
    category: "World Missions",
    question: "What does 'indigenous church' mean in missions?",
    answers: ["A church led and supported by local believers", "A church for one specific tribe only", "A church made of natural materials", "An ancient church"],
    fact: "The goal of missions is to plant churches that local believers can lead and support themselves!"
  },
  {
    category: "World Missions",
    question: "What is the Great Commission?",
    answers: ["Jesus' command to make disciples of all nations", "A large paycheck", "The name of a ship", "A math assignment"],
    fact: "The Great Commission is found in Matthew 28:19-20, where Jesus tells His followers to go into all the world!"
  },
  {
    category: "World Missions",
    question: "Who was the first missionary sent out by a church in the Bible?",
    answers: ["Paul (also called Saul)", "Peter", "Moses", "Adam"],
    fact: "The church in Antioch sent out Paul and Barnabas on the first organized missionary journey in Acts 13!"
  },
  {
    category: "World Missions",
    question: "What does 'evangelism' mean?",
    answers: ["Sharing the good news of Jesus Christ", "A type of exercise", "A music style", "A cooking technique"],
    fact: "Evangelism comes from the Greek word 'euangelion' which means 'good news' — the Gospel of Jesus!"
  },
  {
    category: "World Missions",
    question: "What is a 'sending church'?",
    answers: ["A church that supports and sends out missionaries", "A church that mails letters", "A church with a delivery service", "A church that ships Bibles"],
    fact: "Sending churches pray for, financially support, and partner with missionaries they send to the field!"
  },

  // ──────────────────────────────────────
  // BIBLE & MISSIONS (25 questions)
  // ──────────────────────────────────────

  {
    category: "Bible & Missions",
    question: "In the Bible, who did Jesus tell to 'Go into all the world and preach the gospel'?",
    answers: ["His disciples", "The Pharisees", "King Herod", "The Roman soldiers"],
    fact: "This command is in Mark 16:15 and is called the Great Commission — it's why missionaries go around the world!"
  },
  {
    category: "Bible & Missions",
    question: "What verse says 'Go ye therefore, and teach all nations'?",
    answers: ["Matthew 28:19", "John 3:16", "Genesis 1:1", "Psalm 23:1"],
    fact: "Matthew 28:19 is the Great Commission — Jesus commanding His followers to make disciples of all nations!"
  },
  {
    category: "Bible & Missions",
    question: "Who was the greatest missionary in the New Testament, traveling on 3 major journeys?",
    answers: ["Paul", "Moses", "David", "Noah"],
    fact: "The Apostle Paul traveled thousands of miles across the Roman Empire to share the Gospel and start churches!"
  },
  {
    category: "Bible & Missions",
    question: "In Acts 1:8, Jesus said believers would be witnesses in Jerusalem, Judea, Samaria, and where?",
    answers: ["The uttermost part of the earth", "The moon", "Just their own town", "Only in Israel"],
    fact: "Jesus wants His message to reach the whole earth — that's why missions to remote places is so important!"
  },
  {
    category: "Bible & Missions",
    question: "What Old Testament prophet was sent as a missionary to the city of Nineveh?",
    answers: ["Jonah", "Elijah", "Isaiah", "Daniel"],
    fact: "Jonah tried to run from God's mission, but God used him anyway! The whole city of Nineveh repented."
  },
  {
    category: "Bible & Missions",
    question: "Romans 10:14 asks, 'How shall they hear without a...'?",
    answers: ["Preacher", "Bible", "Church building", "Radio"],
    fact: "That's why supporting national pastors matters! Someone has to go and tell people about Jesus."
  },
  {
    category: "Bible & Missions",
    question: "What does the word 'Gospel' mean?",
    answers: ["Good News", "Old Story", "Holy Book", "Church Song"],
    fact: "Gospel means 'good news' — that Jesus died for our sins and rose again so we can be saved!"
  },
  {
    category: "Bible & Missions",
    question: "In the Bible, who said 'Here am I; send me' when God asked who would go?",
    answers: ["Isaiah", "Peter", "Abraham", "Timothy"],
    fact: "Isaiah 6:8 — When Isaiah heard God's call, he volunteered right away! Missionaries have that same heart."
  },
  {
    category: "Bible & Missions",
    question: "Who went with Paul on his first missionary journey?",
    answers: ["Barnabas", "Peter", "Moses", "Luke"],
    fact: "Barnabas was known as the 'Son of Encouragement' and was a great partner for Paul's first journey!"
  },
  {
    category: "Bible & Missions",
    question: "What happened at the Tower of Babel that relates to missions?",
    answers: ["God scattered people and gave them different languages", "A church was built", "Moses received the Ten Commandments", "Jesus was born"],
    fact: "God created different languages at Babel, and now missionaries work to share the Gospel in all those languages!"
  },
  {
    category: "Bible & Missions",
    question: "What did Jesus say is the greatest commandment?",
    answers: ["Love the Lord your God with all your heart", "Go to church every Sunday", "Read the Bible daily", "Be nice to everyone"],
    fact: "Jesus said to love God with all your heart, soul, and mind — and love your neighbor as yourself (Matthew 22:37-39)!"
  },
  {
    category: "Bible & Missions",
    question: "In what city did the disciples first receive the Holy Spirit and start preaching to all nations?",
    answers: ["Jerusalem", "Rome", "Athens", "Bethlehem"],
    fact: "On the Day of Pentecost in Jerusalem, the Holy Spirit came and the disciples preached in many languages! (Acts 2)"
  },
  {
    category: "Bible & Missions",
    question: "What verse says 'For God so loved the world, that he gave his only begotten Son'?",
    answers: ["John 3:16", "Matthew 1:1", "Revelation 22:21", "Psalm 119:1"],
    fact: "John 3:16 shows God's love for the WHOLE world — every nation, every people group!"
  },
  {
    category: "Bible & Missions",
    question: "Who did God send to bring the Gospel to the Ethiopian eunuch?",
    answers: ["Philip", "Paul", "James", "John"],
    fact: "In Acts 8, God sent Philip to explain the Scriptures to a man from Ethiopia — the Gospel was spreading to Africa!"
  },
  {
    category: "Bible & Missions",
    question: "What apostle had a vision that told him to share the Gospel with non-Jewish people?",
    answers: ["Peter", "Paul", "James", "Thomas"],
    fact: "In Acts 10, Peter had a vision from God showing him that the Gospel is for ALL people, not just the Jews!"
  },
  {
    category: "Bible & Missions",
    question: "What book of the Bible records the first missionary journeys?",
    answers: ["Acts", "Genesis", "Revelation", "Psalms"],
    fact: "The book of Acts tells the amazing story of the early church spreading the Gospel throughout the Roman Empire!"
  },
  {
    category: "Bible & Missions",
    question: "In Revelation, people from how many groups will worship before God's throne?",
    answers: ["Every nation, kindred, tongue, and people", "Only one country", "Just two groups", "Only English speakers"],
    fact: "Revelation 7:9 describes people from EVERY nation worshipping God — missions helps make that happen!"
  },
  {
    category: "Bible & Missions",
    question: "What psalm says 'Declare his glory among the nations'?",
    answers: ["Psalm 96", "Psalm 23", "Psalm 1", "Psalm 150"],
    fact: "Psalm 96:3 calls us to tell ALL nations about God's glory — missions is woven throughout the entire Bible!"
  },
  {
    category: "Bible & Missions",
    question: "God told Abraham that through him, what would happen to all families of the earth?",
    answers: ["They would be blessed", "They would be rich", "They would travel", "They would build cities"],
    fact: "In Genesis 12:3, God promised Abraham that ALL families of the earth would be blessed through him — ultimately through Jesus!"
  },
  {
    category: "Bible & Missions",
    question: "What missionary companion of Paul wrote the book of Acts?",
    answers: ["Luke", "Mark", "Timothy", "Barnabas"],
    fact: "Luke was a doctor who traveled with Paul and wrote both the Gospel of Luke and the book of Acts!"
  },
  {
    category: "Bible & Missions",
    question: "What did Paul say he became to 'all men' so that he might save some?",
    answers: ["All things to all men", "A ruler over all", "Rich and powerful", "A king"],
    fact: "In 1 Corinthians 9:22, Paul adapted his approach to connect with different people — a great missions principle!"
  },
  {
    category: "Bible & Missions",
    question: "Where was the first church that purposely sent out missionaries?",
    answers: ["Antioch", "Jerusalem", "Rome", "Corinth"],
    fact: "The church in Antioch fasted, prayed, and sent Paul and Barnabas out on purpose — the first sending church! (Acts 13)"
  },
  {
    category: "Bible & Missions",
    question: "How many missionary journeys did the Apostle Paul take?",
    answers: ["3 major journeys", "1 journey", "10 journeys", "He never traveled"],
    fact: "Paul took 3 major missionary journeys and later traveled to Rome — planting churches across the known world!"
  },
  {
    category: "Bible & Missions",
    question: "What did Jesus say about the harvest in Matthew 9:37?",
    answers: ["The harvest is plentiful but the workers are few", "The harvest is over", "The harvest is too small", "There is no harvest needed"],
    fact: "Jesus said there are SO many people who need to hear the Gospel, but not enough workers to go — will you pray for more?"
  },
  {
    category: "Bible & Missions",
    question: "Who was Lydia in the book of Acts?",
    answers: ["A businesswoman who became one of Paul's first European converts", "A queen of Israel", "A temple worker", "Paul's sister"],
    fact: "Lydia sold purple fabric and opened her home to Paul and his team — she was one of the first Christians in Europe! (Acts 16)"
  },

  // ──────────────────────────────────────
  // GEOGRAPHY & FUN FACTS (20 questions)
  // ──────────────────────────────────────

  {
    category: "Fun Facts",
    question: "Cape Verde, where some CORE missionaries serve, is off the coast of which continent?",
    answers: ["Africa", "South America", "Asia", "Europe"],
    fact: "Cape Verde is a beautiful island nation about 350 miles off the west coast of Africa in the Atlantic Ocean!"
  },
  {
    category: "Fun Facts",
    question: "What country in Southeast Asia is home to some CORE missionaries?",
    answers: ["Thailand", "Australia", "Canada", "Greenland"],
    fact: "CORE has missionary connections in Thailand and other parts of Southeast Asia!"
  },
  {
    category: "Fun Facts",
    question: "What continent is Togo located on?",
    answers: ["Africa", "Europe", "Asia", "South America"],
    fact: "Togo is a small country in West Africa. CORE has volunteer coordinators helping reach people there!"
  },
  {
    category: "Fun Facts",
    question: "What Caribbean country is known for CORE-connected ministries?",
    answers: ["Haiti", "Bermuda", "Jamaica", "Bahamas"],
    fact: "Haiti is one of the countries where CORE partners with missionaries and supports national pastors!"
  },
  {
    category: "Fun Facts",
    question: "Jamaica, where CORE's founder served, is located in which body of water?",
    answers: ["The Caribbean Sea", "The Pacific Ocean", "The Indian Ocean", "The Arctic Ocean"],
    fact: "Jamaica is a beautiful island in the Caribbean Sea — it's where TJ Kimmel's heart for missions grew!"
  },
  {
    category: "Fun Facts",
    question: "What is the most spoken language in the world by number of native speakers?",
    answers: ["Mandarin Chinese", "English", "Spanish", "Hindi"],
    fact: "About 920 million people speak Mandarin Chinese as their first language — that's a LOT of people who need Jesus!"
  },
  {
    category: "Fun Facts",
    question: "What percentage of the world's population lives in Asia?",
    answers: ["About 60%", "About 10%", "About 90%", "About 25%"],
    fact: "Asia is home to about 4.7 billion people — that's more than half the world! Many still need to hear the Gospel."
  },
  {
    category: "Fun Facts",
    question: "How many continents are there in the world?",
    answers: ["7", "4", "10", "15"],
    fact: "The 7 continents are Africa, Antarctica, Asia, Australia, Europe, North America, and South America!"
  },
  {
    category: "Fun Facts",
    question: "What is the largest continent in the world?",
    answers: ["Asia", "Africa", "North America", "Europe"],
    fact: "Asia covers about 17.2 million square miles — and it's full of people who need the Gospel!"
  },
  {
    category: "Fun Facts",
    question: "In what country would you find the ancient city of Antioch, where missionaries were first sent?",
    answers: ["Turkey (modern day)", "Italy", "Egypt", "Greece"],
    fact: "Ancient Antioch is in modern-day Turkey. It was the church there that first sent Paul and Barnabas as missionaries!"
  },
  {
    category: "Fun Facts",
    question: "What country in Central America does CORE have connections to?",
    answers: ["Mexico", "Canada", "Greenland", "Iceland"],
    fact: "CORE Missions has partnerships in Mexico and other Latin American countries through their Latin America Director!"
  },
  {
    category: "Fun Facts",
    question: "What South American country is part of CORE's mission field?",
    answers: ["Venezuela", "Australia", "Sweden", "Japan"],
    fact: "Venezuela is one of the countries where CORE partners with missionaries and supports national pastors!"
  },
  {
    category: "Fun Facts",
    question: "Ivory Coast (Côte d'Ivoire), where CORE works, is in what part of Africa?",
    answers: ["West Africa", "North Africa", "Southern Africa", "East Africa"],
    fact: "Ivory Coast is in West Africa and is one of the countries where CORE supports national pastors!"
  },
  {
    category: "Fun Facts",
    question: "What African country does CORE have a volunteer coordinator for?",
    answers: ["Togo", "Australia", "France", "Japan"],
    fact: "CORE has volunteer coordinators for several regions including Togo in West Africa!"
  },
  {
    category: "Fun Facts",
    question: "Myanmar, where CORE has a coordinator, is located in what part of the world?",
    answers: ["Southeast Asia", "South America", "Europe", "North America"],
    fact: "Myanmar (also called Burma) is in Southeast Asia — CORE has a volunteer coordinator helping reach people there!"
  },
  {
    category: "Fun Facts",
    question: "What ancient country did the Ethiopian eunuch in Acts come from?",
    answers: ["Ethiopia (in Africa)", "Greece", "Rome", "China"],
    fact: "The Ethiopian eunuch heard the Gospel from Philip and was baptized — the Gospel reached Africa early!"
  },
  {
    category: "Fun Facts",
    question: "What does CORE's support model show about the value of a dollar?",
    answers: ["A little money can support a pastor who reaches many for Christ", "Money isn't important in missions", "Only large donations matter", "Missionaries don't need any support"],
    fact: "Because national pastors can live on just 3% of a foreign missionary's budget, even small gifts make a huge impact!"
  },
  {
    category: "Fun Facts",
    question: "Egypt, where CORE has a coordinator, is located on which two continents?",
    answers: ["Africa and Asia", "Europe and Asia", "North and South America", "Africa and Europe"],
    fact: "Egypt sits on the northeast corner of Africa, with the Sinai Peninsula extending into Asia!"
  },
  {
    category: "Fun Facts",
    question: "Cuba, where CORE has a coordinator, is located in what region?",
    answers: ["The Caribbean", "The Middle East", "Scandinavia", "The Pacific Islands"],
    fact: "Cuba is a Caribbean island nation where CORE has a volunteer coordinator supporting ministry work!"
  },
  {
    category: "Fun Facts",
    question: "About how many people in the world have still never heard the Gospel?",
    answers: ["Over 3 billion", "About 100", "Everyone has heard it", "About 1 million"],
    fact: "Over 3 billion people still have limited or no access to the Gospel — that's why missions matters so much!"
  }
];
