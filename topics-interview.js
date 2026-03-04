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

// Example answers for each behavioral/opinion/narrative question
// STAR keys: s, t, a, r | PREP keys: p1, r, e, p2 | PPF keys: past, present, future
var interviewExamples = {
    // ===== STAR QUESTIONS (30) =====
    "Tell me about a time you led a team through a difficult project": {
        s: "Our e-commerce platform needed a payment system migration from Stripe to Adyen within 8 weeks, affecting 12,000 daily transactions with a team that had never used Adyen's API.",
        t: "As tech lead, I was responsible for delivering a zero-downtime migration on schedule while maintaining PCI compliance.",
        a: "I broke the project into three two-week sprints, paired junior engineers with seniors, and set up shadow-traffic testing. When we hit a blocker with Adyen's webhook logic, I negotiated a direct support channel to resolve it in 48 hours.",
        r: "We finished two days early with zero failed transactions. Processing speed improved 15% and the company saved $340K annually in fees."
    },
    "Describe a situation where you had to deal with a difficult coworker": {
        s: "A senior designer consistently dismissed engineering constraints during planning, presenting infeasible mockups and becoming frustrated when engineers raised concerns.",
        t: "I needed to build a productive relationship with him so our team could ship a product redesign on time.",
        a: "I invited him for a 1-on-1 coffee chat to understand his vision, then proposed a 'Design Spike' process where engineers would prototype his ideas before ruling them out.",
        r: "Within three weeks he started proactively asking about constraints early. We shipped on schedule and NPS rose 18 points."
    },
    "Tell me about a time you failed and what you learned from it": {
        s: "I pushed to skip beta testing for a new onboarding flow to hit an aggressive launch date, confident the design was solid.",
        t: "I was responsible for improving our 30-day retention rate from 45% to 60% with the new flow.",
        a: "We launched directly to 8,000 monthly signups and discovered within 72 hours that users with non-Latin characters couldn't complete step three, affecting 22% of international users.",
        r: "Retention dropped to 38% that month. I implemented a mandatory staged-rollout policy — 5%, 25%, then 100% — that the team still uses, and the next launch hit 62%."
    },
    "Give an example of when you had to make a decision with incomplete information": {
        s: "Our analytics vendor announced a 300% price increase with only 30 days' notice, and our team needed six weeks for a proper vendor comparison.",
        t: "I had to choose a replacement within two weeks to leave time for migration before the contract expired.",
        a: "I identified the three most critical criteria, assigned each to a different engineer for focused four-day benchmarks, and negotiated a 15-day extension as a safety net.",
        r: "We selected ClickHouse, migrated in 11 days, and reduced analytics costs by 40%."
    },
    "Describe a time you went above and beyond for a customer or client": {
        s: "A $2.1M enterprise client discovered our data export produced corrupted CSVs for large datasets, and their compliance audit was in five days.",
        t: "The bug had a two-sprint estimate, but I needed to get them clean data within the audit deadline.",
        a: "I built a temporary Python script over the weekend that chunked data into validated batches, then walked their compliance team through the verification process.",
        r: "They passed the audit with zero findings and expanded their contract by $800K the next quarter."
    },
    "Tell me about a time you had to manage competing priorities": {
        s: "I was simultaneously handling a 48-hour security patch SLA, a feature launch for a trade show in two weeks, and onboarding two new hires.",
        t: "I needed to deliver all three without compromising security, the demo, or the onboarding experience.",
        a: "I handled the patch personally in two days, descoped the feature to three must-have screens, and created a self-guided onboarding curriculum with daily check-ins.",
        r: "The patch met SLA, the demo generated 45 leads, and both new hires rated onboarding 9/10."
    },
    "Describe a situation where you had to persuade someone to see things your way": {
        s: "Our VP of Sales wanted to build a custom CRM integration in-house, estimating four weeks. I believed it would take four months and pull three engineers off our roadmap.",
        t: "I needed to convince the VP to use a third-party connector without damaging the engineering-sales relationship.",
        a: "I built a one-page cost comparison and demoed the third-party solution with our actual sales data, then proposed a 30-day trial with a go/no-go checklist.",
        r: "The VP agreed, and within two weeks said it exceeded expectations — saving $260K versus the in-house estimate."
    },
    "Tell me about a time you received constructive criticism and how you responded": {
        s: "My manager told me my code reviews were perceived as harsh, with two junior developers feeling discouraged by my blunt, correction-only comments.",
        t: "I needed to maintain high review standards while being more encouraging and effective as a mentor.",
        a: "I adopted a new pattern: lead with something positive, frame suggestions as questions with explanations, and link to relevant docs.",
        r: "Review turnaround dropped from 3 days to 1 day, and I was asked to lead a company-wide workshop on effective code reviews."
    },
    "Give an example of a goal you set and how you achieved it": {
        s: "Our API response times averaged 1.2 seconds — well above the 200ms industry standard. I set a goal to bring P95 latency below 300ms by end of Q2.",
        t: "I needed to fix bottlenecks incrementally alongside regular feature work, with no dedicated performance sprint.",
        a: "I built a dashboard tracking our slowest 20 endpoints and optimized one per week, focusing on indexing, caching, and eliminating N+1 queries.",
        r: "By May — a month early — P95 latency was 240ms, an 80% improvement, and user engagement increased 12%."
    },
    "Describe a time you had to adapt to a major change at work": {
        s: "After an acquisition, the parent company mandated migrating our entire Python/Django stack to Java/Spring within six months. I had never written production Java.",
        t: "I needed to learn Java myself and help my team of four Python developers make the transition.",
        a: "I built a small internal tool in Spring Boot to learn hands-on, created a 'Python-to-Java Rosetta Stone' doc, and ran weekly group coding sessions to rewrite services together.",
        r: "We finished a month early. The Rosetta Stone doc was shared across four other acquired teams."
    },
    "Tell me about a time you resolved a conflict between team members": {
        s: "A backend and frontend engineer had a recurring disagreement about API design that got personal, with three endpoints stuck in review for two weeks.",
        t: "I needed to resolve the technical dispute and repair the relationship before it impacted quarterly delivery.",
        a: "I held separate 1-on-1s to understand each perspective, then facilitated a session reframing the question around user and system needs instead of individual preferences.",
        r: "They agreed on a transformation layer approach, shipped the blocked endpoints in four days, and co-authored our API design guidelines."
    },
    "Describe a situation where you had to learn something new quickly": {
        s: "Our lead mobile developer was hospitalized two days before a client demo. I had zero React Native experience but needed three screens working on an iOS device for a $1.5M prospect.",
        t: "I needed to get the demo screens functional within 48 hours.",
        a: "I studied our existing codebase patterns, wired data into two mostly-complete screens, and built the third using existing components as templates.",
        r: "The demo went smoothly and the client signed. Our lead developer later said she only needed to refactor one component."
    },
    "Tell me about a time you identified a problem before anyone else noticed": {
        s: "I noticed our S3 storage costs jumped 18% month-over-month even though user growth was only 3%. No one had flagged it since we were still within quarterly budget.",
        t: "I needed to find the root cause and fix it before it became a serious budget issue.",
        a: "I traced it to a logging pipeline with a debug flag left enabled, writing uncompressed files at 10x expected volume. I disabled the flag and added a cost anomaly alert.",
        r: "The fix saved $14K/month, and the alert caught two more misconfigurations over the next six months."
    },
    "Give an example of when you had to work under a tight deadline": {
        s: "A critical security vulnerability was disclosed in a library used across 23 of our microservices. We had 36 hours to patch everything for SOC 2 compliance.",
        t: "I was responsible for coordinating the patch across all services owned by different teams in three time zones.",
        a: "I wrote a universal patch script that reduced each service's update time from 2 hours to 20 minutes, and personally handled the five most complex upgrades.",
        r: "All 23 services were patched in 28 hours with zero downtime. The script was added to our incident response toolkit."
    },
    "Describe a time you took initiative on a project without being asked": {
        s: "Our support team spent 15 hours per week manually generating usage reports for enterprise clients because the admin dashboard lacked an export feature.",
        t: "No one had requested a fix, but I saw an opportunity to eliminate repetitive manual work.",
        a: "I built a self-service report generator over a weekend with date pickers, client selectors, and CSV/PDF export, then iterated based on the support team's feedback.",
        r: "It saved 15 hours per week — roughly $45K annually — and became one of our most-used admin tools."
    },
    "Tell me about a time you had to deliver bad news to a stakeholder": {
        s: "Three weeks before launch, I found a race condition that could double-charge customers under high load. Fixing it required a 3-week delay the CEO had already announced to investors.",
        t: "I needed to inform the CEO while presenting a clear path forward and maintaining confidence in engineering.",
        a: "I prepared a one-page brief covering the risk, chargeback costs, and remediation timeline, and proposed a soft launch to 5% of traffic as a middle ground.",
        r: "The CEO approved the soft launch. The full launch had zero payment errors across 50,000 transactions in the first week."
    },
    "Describe a situation where you had to collaborate with a cross-functional team": {
        s: "We were launching a HIPAA-compliant product requiring engineering, legal, design, and sales to deliver a 10-week project with heavy cross-team dependencies.",
        t: "As project lead, I needed to coordinate four teams with different working styles and priorities.",
        a: "I created a shared workspace organized by workflow, held standups three times a week, and built a dependency map showing which deliverables blocked others.",
        r: "We launched on schedule. Within three months it generated $1.8M in new healthcare revenue."
    },
    "Tell me about a time you improved a process or workflow": {
        s: "Our deployment process required seven manual terminal commands and took 45 minutes, with at least one failed deploy per week from human error.",
        t: "I wanted to automate the pipeline to reduce time and errors without disrupting our release cadence.",
        a: "I built a GitHub Actions pipeline automating all steps with auto-rollback triggers and a deploy queue to prevent simultaneous deploys.",
        r: "Deploy time dropped from 45 minutes to 8 minutes, and we went three months with zero failed deploys."
    },
    "Give an example of when you had to handle an unhappy customer": {
        s: "An enterprise client emailed our CEO threatening to cancel their $450K contract because a data export bug had gone unfixed for two weeks.",
        t: "I was asked to personally fix the issue, restore the client's confidence, and prevent future escalations.",
        a: "I called the client within an hour, gave a 48-hour fix timeline, diagnosed the bug, deployed the fix in 28 hours, and verified it with them via screen-share.",
        r: "They renewed for two more years with a $120K expansion. I used the incident to advocate for an enterprise SLA-tracking system."
    },
    "Describe a time you mentored or coached someone": {
        s: "A junior developer from a bootcamp consistently underestimated tasks — committing to two days for work that took a week — leading to missed sprints and self-doubt.",
        t: "I volunteered to mentor her with the goal of improving her estimation skills within 90 days.",
        a: "We decomposed upcoming tasks together to surface hidden work, and I had her track estimated-vs-actual time with weekly 20-minute calibration sessions.",
        r: "Within six weeks her estimates were within 15% accuracy, and by her six-month review she was leading her own features."
    },
    "Tell me about a time you had to make an unpopular decision": {
        s: "Our team spent four months building a custom notification system, but post-launch it needed 20 hours/week of maintenance and only 11% of users had it enabled.",
        t: "I had to decide whether to keep investing or deprecate the work in favor of a $200/month third-party service.",
        a: "I presented the cost and engagement data transparently, let each engineer voice concerns, and proposed that the most invested engineers lead the vendor transition.",
        r: "The freed-up 20 hours per week went into building our most-requested search feature. The CTO cited it as an example of good resource stewardship."
    },
    "Describe a situation where you had to deal with ambiguity": {
        s: "Our CEO said 'we need to do something with AI' after a conference — no budget, no use case, no timeline — and three stakeholders had three different visions.",
        t: "I needed to turn a vague mandate into a concrete, scoped initiative.",
        a: "I ran a one-week discovery sprint interviewing customers and auditing our product, then proposed a 6-week pilot to auto-categorize 800 daily support tickets using our existing labeled data.",
        r: "We hit 91% accuracy in five weeks, reducing manual categorization by 55%, and secured a $500K AI budget for the following year."
    },
    "Tell me about a time you successfully managed a project from start to finish": {
        s: "We needed to rebuild our customer dashboard from legacy jQuery to React while serving 15,000 daily active users with no disruption.",
        t: "I was project lead responsible for delivery within one quarter, including five new features blocked by the legacy architecture.",
        a: "I set up the React app inside the existing jQuery shell for page-by-page migration, used feature flags for staged rollouts, and broke the work into 12 modules assigned to developer pairs.",
        r: "We finished in 11 weeks. Bugs dropped 65%, engagement rose 23%, and the feature-flag approach became our standard."
    },
    "Give an example of when you had to prioritize quality over speed": {
        s: "Sales wanted an SSO integration in two weeks for an $800K prospect, but meeting the deadline meant hardcoding one client's SAML config instead of building a flexible system.",
        t: "I needed to balance the immediate opportunity against creating technical debt for every future SSO client.",
        a: "I proposed a compromise: deliver a working demo in two weeks for sales while building the production multi-tenant system in four weeks.",
        r: "The client signed off the demo. Over the next year we onboarded 14 SSO clients in 3-5 hours each, saving an estimated 500 engineering hours."
    },
    "Describe a time you used data to make a decision": {
        s: "Our team was debating mobile improvements versus desktop dark mode for the next sprint. Both sides had strong opinions but no data.",
        t: "I committed to delivering a data-driven recommendation within 48 hours.",
        a: "I pulled usage analytics showing 62% mobile sessions with 34% higher bounce rate, reviewed support tickets, and surveyed 500 users — 71% prioritized mobile over dark mode.",
        r: "We invested in mobile. Bounce rate dropped from 34% to 19%, and session duration increased 42% within a month."
    },
    "Tell me about a time you had to work with someone whose style was different from yours": {
        s: "I was paired with a PM who thrived on spontaneous brainstorming while I preferred written specs and async communication. Our first two weeks were frustrating for both of us.",
        t: "We needed to ship an analytics feature in six weeks, so I had to find a cadence that worked for both styles.",
        a: "I proposed a hybrid: two scheduled brainstorming sessions per week, with me converting outcomes into written specs within 24 hours, plus a shared doc for async Q&A.",
        r: "We delivered a week early. She called it her best engineering partnership, and our approach became a template for PM-engineer pairings."
    },
    "Describe a situation where you had to overcome a significant obstacle": {
        s: "Our payment processor unexpectedly revoked our API access mid-project due to a legal dispute, putting 10,000 daily transactions and $180K in daily revenue at risk.",
        t: "I needed an alternative processor integrated and live within 72 hours.",
        a: "I evaluated three backup processors for integration speed, scoped down to credit-card-only initially, and pair-programmed the core integration while a teammate set up testing in parallel.",
        r: "We went live in 68 hours with zero lost transactions. The multi-processor architecture became a permanent reliability improvement."
    },
    "Tell me about a time you took ownership of a mistake": {
        s: "I accidentally deployed a database migration to production instead of staging, causing 500 errors across all write operations for 12 minutes.",
        t: "I needed to fix the outage immediately, own it transparently, and prevent it from happening again.",
        a: "I rolled back within 12 minutes, then messaged the team taking full responsibility and wrote a postmortem with three preventive measures including color-coded terminals and a staging-first pipeline.",
        r: "All three safeguards were implemented in two weeks. We had zero accidental production deploys in the six months following."
    },
    "Give an example of when you motivated a team during a challenging period": {
        s: "After layoffs reduced our team from 18 to 11 engineers, morale was low and several people were updating resumes — with a major launch six weeks out.",
        t: "I needed to rebuild morale, retain key talent, and still deliver the product launch.",
        a: "I held 1-on-1s with all 11 engineers within 48 hours, secured retention bonuses from leadership, descoped the launch by 30%, and introduced weekly celebrations of small wins.",
        r: "We retained 10 of 11 engineers, launched on time, and team satisfaction actually increased from pre-layoff levels."
    },
    "Describe a time you had to balance short-term needs with long-term goals": {
        s: "Our biggest client threatened to leave without a custom dashboard in four weeks, while we were mid-way through a Kubernetes migration that would save $400K annually.",
        t: "I needed to retain the $600K client without derailing the infrastructure migration.",
        a: "I split the team into two squads — one for the dashboard using our existing data API, one continuing the migration — and personally took over a blocked migration task.",
        r: "The client got their dashboard in three weeks and renewed with a 15% increase. The migration finished just two weeks behind schedule."
    },

    // ===== PREP QUESTIONS (14) =====
    "What is your greatest strength?": {
        p1: "My greatest strength is translating complex technical concepts into clear plans that non-technical stakeholders can act on.",
        r: "The biggest bottleneck in most organizations isn't technology — it's communication between technical and business teams.",
        e: "I presented a $2M infrastructure modernization to our board by framing it in revenue terms — 'faster page loads increase conversion by 20%.' They approved it in one meeting instead of the expected three.",
        p2: "This ability to bridge the technical-business gap has consistently helped me drive alignment, and I believe it would be especially valuable in this role."
    },
    "What is your biggest weakness?": {
        p1: "I tend to underestimate task timelines because I get excited and jump in without fully scoping the work.",
        r: "Consistent underestimation erodes stakeholder trust. I recognized the pattern two years ago after missing three consecutive sprint commitments.",
        e: "I now break every task into subtasks, add a 25% buffer, and track estimates versus actuals. Last quarter my accuracy improved from 60% to 88%.",
        p2: "I still actively manage this tendency, but the systems I've built have made me much more reliable and a better planner overall."
    },
    "Why do you want to work here?": {
        p1: "Your team is solving a problem I care about — making developer tools that respect developers' time — at a scale with genuinely interesting engineering challenges.",
        r: "I've spent three years building internal tools and seen firsthand how bad tooling slows entire organizations. Your approach aligns with what I believe the industry needs.",
        e: "I've followed your open-source projects for a year and even contributed a PR fixing a pagination bug. I also spoke with two of your engineers at DevTools conference and their enthusiasm was contagious.",
        p2: "This is the most exciting opportunity I've found to combine my backend experience with my passion for developer experience."
    },
    "What motivates you in your career?": {
        p1: "I'm motivated by building things that make a measurable difference in how people work — seeing someone use a tool I built and save real time.",
        r: "This keeps me focused on user impact rather than technical novelty. I gravitate toward work that moves metrics.",
        e: "I once chose building a mundane CSV import tool over leading a microservices migration because 200 ops team members needed it. It saved them 30 hours per week — more rewarding than any architectural accomplishment.",
        p2: "That drive to create tangible impact energizes me daily, and I'm looking for a team that measures success by user outcomes."
    },
    "How do you handle stress and pressure?": {
        p1: "I break overwhelming situations into small, concrete actions and focus on what I can control.",
        r: "Engineers who try to hold the entire problem in their head at once struggle the most. A systematic approach turns pressure into focus.",
        e: "During a database corruption affecting 3,000 accounts, I spent the first 10 minutes writing a numbered action list, delegated half the items, and we restored full service in 4 hours.",
        p2: "Preparation and process are my stress management strategy. I also make sure to decompress after intense periods so it doesn't accumulate."
    },
    "What does leadership mean to you?": {
        p1: "Leadership means creating conditions for your team to do their best work — removing obstacles, providing clarity, and taking accountability.",
        r: "The best outcomes I've seen happen when leaders trust the team's expertise and focus on alignment rather than directing every decision.",
        e: "I shifted from giving my team solutions to giving them problem statements. For a search rebuild, they proposed a contextual suggestion system I'd never have thought of — it shipped 10 days early.",
        p2: "A leader's job is to make themselves less necessary over time by developing the team's confidence and capabilities."
    },
    "How do you approach work-life balance?": {
        p1: "I treat work-life balance as a discipline — sustainable performance requires deliberate boundaries, just like athletic training.",
        r: "I burned out early in my career from six months of 60-hour weeks and learned that overwork is a performance liability, not a badge of honor.",
        e: "I now block focus time, don't check messages after 7 PM, and take full vacation. Last year I noticed two teammates working weekends, renegotiated the timeline, and one later told me the conversation prevented her from quitting.",
        p2: "Well-rested engineers write fewer bugs, are more creative, and stay longer. Sustainable pace is a competitive advantage."
    },
    "What makes you a good team player?": {
        p1: "I consistently put team outcomes above individual preferences and actively look for ways to help others succeed.",
        r: "The small things — timely code reviews, jumping in when someone's stuck — compound into major team performance gains.",
        e: "I spent three hours helping a teammate debug a memory leak blocking her release, even though it wasn't my codebase. I also maintain the fastest code review turnaround on my team at under 4 hours.",
        p2: "I'd rather be known as someone who makes teammates better than as the person who writes the cleverest code."
    },
    "How do you stay current in your field?": {
        p1: "I combine hands-on experimentation, curated reading, and community participation — learning is only real when you build something with it.",
        r: "You can't learn everything, so I focus on technologies that solve problems I actually face rather than chasing every trend.",
        e: "Each quarter I learn one technology by building a project. Last quarter I built a WebAssembly image processor that we ended up deploying at work.",
        p2: "Consistent small investments mean I can adopt new technologies confidently when opportunities arise instead of scrambling to catch up."
    },
    "What is your management style?": {
        p1: "Context-driven: I give experienced team members autonomy and provide more hands-on guidance for newer members until they build confidence.",
        r: "One-size-fits-all management fails because people have different experience levels and motivations. Micromanaging seniors kills motivation; leaving juniors without guidance sets them up for failure.",
        e: "My senior engineer gets weekly strategy 1-on-1s, my mid-level gets collaborative design sessions, and my bootcamp grad gets structured mentoring three times a week. All three report feeling appropriately supported.",
        p2: "My goal is helping each person grow toward more autonomy over time."
    },
    "How do you handle disagreements with your manager?": {
        p1: "I raise disagreements directly but respectfully — presenting my perspective with data, listening to theirs, and committing to the final direction.",
        r: "Healthy disagreement means the relationship is working. A team member who never pushes back isn't doing their job.",
        e: "When my manager chose GraphQL over REST, I proposed a two-day spike building one endpoint in both. After the spike, we both agreed REST was the right call for our use case.",
        p2: "I bring data, stay professional, and execute fully once aligned — regardless of whether the decision matches my initial position."
    },
    "What qualities do you look for in a company?": {
        p1: "A clear mission I believe in, a culture that values engineering quality, and leaders who welcome feedback.",
        r: "I've worked at companies with great pay but no mission, and mission-driven ones that cut corners technically. Neither was sustainable.",
        e: "My best experience was at a company where the CEO attended engineering demos, tech debt had dedicated sprint time, and my skip-level always asked 'what should we do differently?' I stayed four years.",
        p2: "When mission, quality, and culture align, everything else — retention, innovation, execution — follows naturally."
    },
    "How do you define success?": {
        p1: "Consistently delivering meaningful impact while growing as a professional and helping others grow alongside me.",
        r: "The engineers I most admire aren't just prolific — they elevate everyone around them and build things that last beyond their tenure.",
        e: "My proudest achievement is leading a testing culture shift: I modeled writing tests, ran workshops, and celebrated teammates' first tests. Coverage went from 0% to 68% in a year and persisted after I left.",
        p2: "True success is when your work creates compounding positive effects that continue even after you move on."
    },
    "Why should we hire you over other candidates?": {
        p1: "I bring a rare combination of strong technical execution, proven team leadership, and a genuine obsession with user impact.",
        r: "Most candidates are strong individual contributors or strong leaders, but rarely both. I've consistently delivered as a hands-on builder and a team multiplier.",
        e: "I led our largest client migration — 2M records, zero downtime — while mentoring three junior engineers, one of whom was promoted within eight months. I also found a $120K annual cost savings that wasn't on any roadmap.",
        p2: "Within 90 days, I'll have shipped meaningful features, improved at least one process, and helped every teammate level up."
    },

    // ===== PPF QUESTIONS (6) =====
    "Tell me about yourself": {
        past: "I started as a junior developer at a healthcare startup building patient scheduling systems, where I discovered my passion for backend architecture after redesigning an algorithm that reduced scheduling conflicts by 70%.",
        present: "I'm now a senior engineer at a fintech company leading a five-person team on our payment platform, handling $2M in daily transactions. I brought uptime from 99.5% to 99.97% this past year.",
        future: "I'm looking for a role with broader technical influence while staying close to the code, and this position's blend of leadership and developer tooling aligns perfectly with where I want to grow."
    },
    "Walk me through your resume": {
        past: "I spent two years as a full-stack developer at a startup building their recommendation engine, then three years at DataFlow Systems going deep on distributed data pipelines processing 500M events daily.",
        present: "For the last two and a half years at CloudScale, I've led backend architecture for a team of five, designing multi-region infrastructure that cut international latency by 60% and unlocked $4M in new contracts.",
        future: "I'm seeking a principal or staff engineer role driving technical strategy across teams, and your challenges scaling a real-time platform align with exactly the problems I want to tackle."
    },
    "Where do you see yourself in five years?": {
        past: "I've progressed from individual contributor to technical leader by consistently seeking challenges that stretched my abilities — production code, systems design, then team leadership.",
        present: "I'm confident in my technical depth and leadership ability, and I'm ready for my impact to extend beyond my immediate team.",
        future: "In five years I see myself as a staff or principal engineer shaping technical strategy, mentoring the next generation of tech leads, and building systems that scale."
    },
    "Why are you leaving your current role?": {
        past: "I've had a great three years — joined at 12 engineers, grew to 40, led three major initiatives, and mentored four engineers into senior roles.",
        present: "The company has shifted focus from B2B platform work to consumer mobile apps, which isn't where my expertise or passion lies. I've also hit a scope ceiling.",
        future: "I'm looking for a role where I can apply my platform engineering expertise at larger scale, and this position's infrastructure challenges are exactly what I want to tackle next."
    },
    "How has your career path led you to this position?": {
        past: "I started at a small startup wearing many hats, then spent four years specializing in backend systems — database optimization, API design, and migrating a monolith to microservices.",
        present: "As a senior engineer and tech lead, I've combined that technical depth with leadership, serving as the bridge between engineering and product strategy.",
        future: "This role is the natural next step — it requires both deep systems thinking and cross-team influence, which is exactly where my experience has been building."
    },
    "What are your long-term career goals?": {
        past: "I initially wanted to become a CTO, but learned that what I actually love is staying close to technical work while having strategic influence.",
        present: "I'm focused on mastering technical leadership — architectural decisions, communicating vision to stakeholders, and building high-performing teams.",
        future: "Long-term, I want to be a distinguished engineer known for building systems that last, making other engineers better, and contributing back through open-source work and writing."
    }
};
