// Interview Prep Questions
// Each question is tagged with a recommended framework:
//   "star" = Situation, Task, Action, Result (behavioral "tell me about a time..." questions)
//   "prep" = Point, Reason, Example, Point (opinion/value questions)
//   "ppf"  = Past, Present, Future (narrative/trajectory questions)
//   "mece" = Mutually Exclusive, Collectively Exhaustive (consulting case study questions)

var interviewQuestions = [
    // --- STAR questions (~30) ---
    { q: "Tell me about a time you led a team through a difficult project", f: "star" },
    { q: "Describe a situation where you had to deal with a difficult coworker", f: "star" },
    { q: "Tell me about a time you failed and what you learned from it", f: "star" },
    { q: "Give an example of when you had to make a decision with incomplete information", f: "star" },
    { q: "Describe a time you went above and beyond for a customer or client", f: "star" },
    { q: "Tell me about a time you had to manage competing priorities", f: "star" },
    { q: "Describe a situation where you had to persuade someone to see things your way", f: "star" },
    { q: "Tell me about a time you received constructive criticism and how you responded", f: "star" },
    { q: "Give an example of a goal you set and how you achieved it", f: "star" },
    { q: "Describe a time you had to adapt to a major change at work", f: "star" },
    { q: "Tell me about a time you resolved a conflict between team members", f: "star" },
    { q: "Describe a situation where you had to learn something new quickly", f: "star" },
    { q: "Tell me about a time you identified a problem before anyone else noticed", f: "star" },
    { q: "Give an example of when you had to work under a tight deadline", f: "star" },
    { q: "Describe a time you took initiative on a project without being asked", f: "star" },
    { q: "Tell me about a time you had to deliver bad news to a stakeholder", f: "star" },
    { q: "Describe a situation where you had to collaborate with a cross-functional team", f: "star" },
    { q: "Tell me about a time you improved a process or workflow", f: "star" },
    { q: "Give an example of when you had to handle an unhappy customer", f: "star" },
    { q: "Describe a time you mentored or coached someone", f: "star" },
    { q: "Tell me about a time you had to make an unpopular decision", f: "star" },
    { q: "Describe a situation where you had to deal with ambiguity", f: "star" },
    { q: "Tell me about a time you successfully managed a project from start to finish", f: "star" },
    { q: "Give an example of when you had to prioritize quality over speed", f: "star" },
    { q: "Describe a time you used data to make a decision", f: "star" },
    { q: "Tell me about a time you had to work with someone whose style was different from yours", f: "star" },
    { q: "Describe a situation where you had to overcome a significant obstacle", f: "star" },
    { q: "Tell me about a time you took ownership of a mistake", f: "star" },
    { q: "Give an example of when you motivated a team during a challenging period", f: "star" },
    { q: "Describe a time you had to balance short-term needs with long-term goals", f: "star" },

    // --- PREP questions (~14) ---
    { q: "What is your greatest strength?", f: "prep" },
    { q: "What is your biggest weakness?", f: "prep" },
    { q: "Why do you want to work here?", f: "prep" },
    { q: "What motivates you in your career?", f: "prep" },
    { q: "How do you handle stress and pressure?", f: "prep" },
    { q: "What does leadership mean to you?", f: "prep" },
    { q: "How do you approach work-life balance?", f: "prep" },
    { q: "What makes you a good team player?", f: "prep" },
    { q: "How do you stay current in your field?", f: "prep" },
    { q: "What is your management style?", f: "prep" },
    { q: "How do you handle disagreements with your manager?", f: "prep" },
    { q: "What qualities do you look for in a company?", f: "prep" },
    { q: "How do you define success?", f: "prep" },
    { q: "Why should we hire you over other candidates?", f: "prep" },

    // --- PPF questions (~6) ---
    { q: "Tell me about yourself", f: "ppf" },
    { q: "Walk me through your resume", f: "ppf" },
    { q: "Where do you see yourself in five years?", f: "ppf" },
    { q: "Why are you leaving your current role?", f: "ppf" },
    { q: "How has your career path led you to this position?", f: "ppf" },
    { q: "What are your long-term career goals?", f: "ppf" }
];

// --- Consulting Case Study Questions (50, all MECE) ---
var consultingQuestions = [
    { q: "Our client is a coffee chain whose profits dropped 20%. How would you diagnose the problem?", f: "mece" },
    { q: "A national airline is considering entering the Asian market. Should they?", f: "mece" },
    { q: "A retail client's same-store sales have been flat for two years. What's going on?", f: "mece" },
    { q: "How would you turn around a struggling hospital system?", f: "mece" },
    { q: "A tech company wants to double revenue in three years. How should they approach this?", f: "mece" },
    { q: "Our client is a grocery chain losing market share. What would you investigate?", f: "mece" },
    { q: "A bank is seeing declining customer satisfaction scores. How would you analyze this?", f: "mece" },
    { q: "Should a luxury car manufacturer launch an affordable vehicle line?", f: "mece" },
    { q: "A streaming service is experiencing high subscriber churn. What are the potential causes?", f: "mece" },
    { q: "How would you help a university increase enrollment by 15%?", f: "mece" },
    { q: "A pharmaceutical company wants to enter the generic drug market. What should they consider?", f: "mece" },
    { q: "Our client runs a hotel chain and wants to improve profitability. Where would you start?", f: "mece" },
    { q: "A food delivery startup is burning cash. How would you make it profitable?", f: "mece" },
    { q: "Should a major newspaper launch a paid digital subscription model?", f: "mece" },
    { q: "A telecom company is losing customers to competitors. How would you stop the bleeding?", f: "mece" },
    { q: "How would you evaluate whether a private equity firm should acquire a restaurant chain?", f: "mece" },
    { q: "A government wants to reduce traffic congestion in a major city. What are the options?", f: "mece" },
    { q: "Our client is an insurance company with rising claims costs. What would you analyze?", f: "mece" },
    { q: "A consumer electronics company wants to launch in India. How should they approach market entry?", f: "mece" },
    { q: "How would you help a nonprofit double its fundraising within two years?", f: "mece" },
    { q: "A fast-food chain is considering adding healthy menu options. Should they?", f: "mece" },
    { q: "Our client is a logistics company with declining margins. What are the likely drivers?", f: "mece" },
    { q: "Should a brick-and-mortar bookstore invest heavily in e-commerce?", f: "mece" },
    { q: "A sports league wants to expand internationally. How would you evaluate which markets to enter?", f: "mece" },
    { q: "How would you help an auto manufacturer transition to electric vehicles?", f: "mece" },
    { q: "A SaaS company's growth has stalled. What framework would you use to reignite it?", f: "mece" },
    { q: "Our client wants to consolidate three acquired companies into one. How should they approach integration?", f: "mece" },
    { q: "A city wants to attract more tech companies to relocate there. What strategy would you recommend?", f: "mece" },
    { q: "Should a premium fashion brand start selling on Amazon?", f: "mece" },
    { q: "A mining company's operating costs have increased 30%. What would you investigate?", f: "mece" },
    { q: "How would you help a ride-sharing company expand into package delivery?", f: "mece" },
    { q: "Our client is a regional bank considering a merger. How would you evaluate the deal?", f: "mece" },
    { q: "A large retailer wants to reduce supply chain costs by 20%. Where would you look?", f: "mece" },
    { q: "Should a major gym chain launch an at-home fitness product?", f: "mece" },
    { q: "A theme park is seeing declining attendance. How would you analyze the problem?", f: "mece" },
    { q: "How would you price a new cancer drug for a pharmaceutical client?", f: "mece" },
    { q: "Our client is a media company deciding between building or buying a streaming platform. What do you recommend?", f: "mece" },
    { q: "A global manufacturer wants to nearshore its supply chain. How should they decide what to move?", f: "mece" },
    { q: "How would you help a traditional taxi company compete with ride-sharing apps?", f: "mece" },
    { q: "A consumer goods company wants to reduce packaging costs without hurting brand perception. How?", f: "mece" },
    { q: "Should a European luxury hotel chain expand into the U.S. market?", f: "mece" },
    { q: "Our client's employee attrition rate doubled in the past year. What's driving it?", f: "mece" },
    { q: "A utility company wants to invest in renewable energy. How should they prioritize investments?", f: "mece" },
    { q: "How would you help an e-commerce company reduce its return rate?", f: "mece" },
    { q: "A hospital wants to reduce patient wait times by 40%. What levers are available?", f: "mece" },
    { q: "Our client is a beverage company considering acquiring a kombucha brand. Should they?", f: "mece" },
    { q: "A coworking space company is deciding whether to expand or consolidate. What factors matter?", f: "mece" },
    { q: "How would you help an oil and gas company diversify its revenue streams?", f: "mece" },
    { q: "A subscription box company has high acquisition costs. How would you improve unit economics?", f: "mece" },
    { q: "Should a major accounting firm launch an AI-powered advisory product?", f: "mece" }
];

// Flat string arrays compatible with activeTopics
var interviewTopicStrings = [];
for (var i = 0; i < interviewQuestions.length; i++) {
    interviewTopicStrings.push(interviewQuestions[i].q);
}

var consultingTopicStrings = [];
for (var i = 0; i < consultingQuestions.length; i++) {
    consultingTopicStrings.push(consultingQuestions[i].q);
}

// Lookup: question text -> framework key (both sets combined)
var interviewFrameworkMap = {};
for (var i = 0; i < interviewQuestions.length; i++) {
    interviewFrameworkMap[interviewQuestions[i].q] = interviewQuestions[i].f;
}
for (var i = 0; i < consultingQuestions.length; i++) {
    interviewFrameworkMap[consultingQuestions[i].q] = consultingQuestions[i].f;
}
