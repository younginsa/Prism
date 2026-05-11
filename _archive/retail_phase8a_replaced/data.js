// ============================================================
// LENS Intelligence Layer — Zestly
// data.js: Fictional data for Zestly, a consumer food delivery
// platform (like DoorDash / Coupang Eats).
//
// How chat works on Zestly:
//   Customer orders food → Zestly dispatches a driver →
//   Customer ↔ Driver chat (real-time delivery coordination)
//   Customer ↔ Zestly CS agent chat (when something goes wrong)
//   All chat infrastructure powered by Sendbird.
//
// What LENs analyzes:
//   Zestly's CS chat patterns — surfacing product and operational
//   insights for Zestly's Product and Market Growth teams.
//   Zestly is not selling a chat feature to restaurants.
//   Restaurants are supply-side partners listed on the platform.
//
// Q1 2026 OKR: Increase pilot-to-live market launch rate by 40%
// ============================================================

// ----------------------------------------------------------
// MARKETS
// Cities where Zestly operates or is evaluating.
// Stages: "evaluating" | "pilot" | "live"
//
// evaluating — Zestly is assessing the city for launch feasibility
// pilot      — Soft launch: limited restaurant coverage, limited
//              driver pool. CS ticket patterns here reflect
//              product reliability gaps before scale.
// live       — Full launch. All neighborhoods, full driver pool.
// ----------------------------------------------------------

const markets = [
  // --- EVALUATING (3) ---
  {
    id: "M001",
    name: "Portland",
    state: "OR",
    region: "Pacific Northwest",
    stage: "evaluating",
    startDate: "2026-03-10",
    assignedRep: "Alex Kim",
    notes: "Strong restaurant density. High delivery adoption rate vs. comparable cities. Competitor presence moderate. Launch assessment underway."
  },
  {
    id: "M002",
    name: "Detroit",
    state: "MI",
    region: "Midwest",
    stage: "evaluating",
    startDate: "2026-03-22",
    assignedRep: "Marcus Webb",
    notes: "Referred by Chicago launch team. Price-sensitive market — need to validate unit economics before committing to pilot."
  },
  {
    id: "M003",
    name: "Tampa",
    state: "FL",
    region: "Southeast",
    stage: "evaluating",
    startDate: "2026-04-05",
    assignedRep: "Priya Nair",
    notes: "High tourist volume adds delivery complexity. Seasonal demand patterns under review. Decision expected Q2."
  },

  // --- PILOT (8) ---
  {
    id: "M004",
    name: "Denver",
    state: "CO",
    region: "Mountain West",
    stage: "pilot",
    startDate: "2025-08-15",
    assignedRep: "Alex Kim",
    notes: "Longest active pilot at 8+ months. CS ticket rate increasing month-over-month. Peak-hour driver chat failures are the dominant CS pattern. Launch manager entered last QBR unaware of active ticket cluster."
  },
  {
    id: "M005",
    name: "Nashville",
    state: "TN",
    region: "Southeast",
    stage: "pilot",
    startDate: "2025-09-22",
    assignedRep: "Priya Nair",
    notes: "High lunch volume around the downtown core. 'Did the driver get my message?' queries are the #1 CS category for this market. Read receipt feature not enabled."
  },
  {
    id: "M006",
    name: "San Diego",
    state: "CA",
    region: "California",
    stage: "pilot",
    startDate: "2025-10-08",
    assignedRep: "Priya Nair",
    notes: "Best-performing pilot market overall. High chat engagement, improving ticket trend. Strong Q2 live-launch candidate."
  },
  {
    id: "M007",
    name: "Minneapolis",
    state: "MN",
    region: "Midwest",
    stage: "pilot",
    startDate: "2025-11-14",
    assignedRep: "Marcus Webb",
    notes: "3 CS tickets in last 30 days — all peak-hour message delivery delays during evening rush. Ops team has flagged it informally but no structured escalation."
  },
  {
    id: "M008",
    name: "Phoenix",
    state: "AZ",
    region: "Southwest",
    stage: "pilot",
    startDate: "2025-12-03",
    assignedRep: "Marcus Webb",
    notes: "High weekend order volume. Low ticket rate so far but bot escalation rate is emerging as a concern on weekend evening orders."
  },
  {
    id: "M009",
    name: "Salt Lake City",
    state: "UT",
    region: "Mountain West",
    stage: "pilot",
    startDate: "2026-01-11",
    assignedRep: "Alex Kim",
    notes: "Highest chat engagement rate of any pilot market — customers use driver chat heavily. One unresolved push notification failure. Otherwise clean pilot."
  },
  {
    id: "M010",
    name: "Baltimore",
    state: "MD",
    region: "East Coast",
    stage: "pilot",
    startDate: "2026-01-25",
    assignedRep: "Priya Nair",
    notes: "Clean pilot with fast CS resolution. Operations team requested mid-pilot review in Q2. Positive early momentum."
  },
  {
    id: "M011",
    name: "New Orleans",
    state: "LA",
    region: "Southeast",
    stage: "pilot",
    startDate: "2026-02-19",
    assignedRep: "Marcus Webb",
    notes: "Complex event-driven order patterns (festivals, hotel deliveries). Cross-device session conflict filed last week — resolved via CS workaround."
  },

  // --- LIVE (5) ---
  {
    id: "M012",
    name: "New York",
    state: "NY",
    region: "Northeast",
    stage: "live",
    startDate: "2024-05-20",
    assignedRep: "Alex Kim",
    notes: "Anchor market. Highest order volume in fleet. Infrastructure contract renewal due Q3 2026. Chat engagement consistently above 78%."
  },
  {
    id: "M013",
    name: "Los Angeles",
    state: "CA",
    region: "California",
    stage: "live",
    startDate: "2024-08-14",
    assignedRep: "Marcus Webb",
    notes: "Second-largest market. Highest chat engagement rate at 84%. Near-zero tolerance for delivery surprises — benchmark for CS performance."
  },
  {
    id: "M014",
    name: "Chicago",
    state: "IL",
    region: "Midwest",
    stage: "live",
    startDate: "2024-10-30",
    assignedRep: "Marcus Webb",
    notes: "Marcus's first live launch. Reference market for Midwest expansion pitch."
  },
  {
    id: "M015",
    name: "San Francisco",
    state: "CA",
    region: "California",
    stage: "live",
    startDate: "2025-02-18",
    assignedRep: "Priya Nair",
    notes: "Strong NPS. Tech-savvy customer base engages heavily with in-app chat. Used as benchmark in product roadmap decisions."
  },
  {
    id: "M016",
    name: "Austin",
    state: "TX",
    region: "South",
    stage: "live",
    startDate: "2025-06-04",
    assignedRep: "Alex Kim",
    notes: "Alex's only live launch. Multi-neighborhood rollout ongoing. First Southern market."
  }
];

// ----------------------------------------------------------
// CS TICKET SUMMARY — Last 30 days
// Support tickets from customers using Zestly's Sendbird-powered
// chat. These are customer ↔ Zestly CS agent interactions.
// ----------------------------------------------------------

const csTicketSummary = {
  periodLabel: "Last 30 Days",
  totalTickets: 52,
  avgResolutionDays: 2.8,
  openTickets: 7,
  escalatedTickets: 3,

  // Resolved via CS workaround (manual call, relay note, etc.)
  // instead of an in-app fix
  manualWorkaroundCount: 16,
  manualWorkaroundRate: 0.308,

  topCategories: [
    {
      rank: 1,
      category: "Message Delivery Delay — Peak Hours",
      count: 18,
      pctOfTotal: 34.6,
      commonResolution: "CS manually confirmed delivery note with driver via internal comms. Customer credited.",
      manualWorkaroundRate: 0.72
    },
    {
      rank: 2,
      category: "Driver Chat Disconnect",
      count: 10,
      pctOfTotal: 19.2,
      commonResolution: "CS extended session timeout manually or reopened chat channel after delivery",
      manualWorkaroundRate: 0.40
    },
    {
      rank: 3,
      category: "Push Notification Failure",
      count: 8,
      pctOfTotal: 15.4,
      commonResolution: "CS triggered manual push retry or contacted driver via internal channel",
      manualWorkaroundRate: 0.38
    },
    {
      rank: 4,
      category: "AI Bot Escalation Failure",
      count: 7,
      pctOfTotal: 13.5,
      commonResolution: "Human CS agent handled; bot intent flagged for retraining",
      manualWorkaroundRate: 1.00
    },
    {
      rank: 5,
      category: "Cross-Device Session Conflict",
      count: 5,
      pctOfTotal: 9.6,
      commonResolution: "CS cleared session and re-authenticated customer",
      manualWorkaroundRate: 0.60
    }
  ],

  // Individual ticket examples with verbatim customer quotes
  // Market field = the Zestly city market, not a restaurant
  ticketExamples: [
    {
      ticketId: "CS-1247",
      date: "2026-03-12",
      market: "Denver",
      marketId: "M004",
      stage: "pilot",
      category: "Message Delivery Delay — Peak Hours",
      customerQuote: "I sent the driver my apartment number and he still buzzed the wrong unit. I thought my message went through.",
      description: "Customer sent in-app chat to driver at 12:34pm. Driver received the message 8 minutes after delivery was marked complete. Customer left a 1-star review.",
      resolution: "CS issued $5 credit. Delivery note manually confirmed with driver post-delivery. Message queue delay during lunch peak not addressed at system level.",
      manualWorkaround: true,
      resolutionDays: 0.3,
      teamNotified: false
    },
    {
      ticketId: "CS-1251",
      date: "2026-03-15",
      market: "Nashville",
      marketId: "M005",
      stage: "pilot",
      category: "Message Delivery Delay — Peak Hours",
      customerQuote: "I messaged the driver to leave my food at the door but I can't tell if he saw it. Can someone just confirm?",
      description: "Customer requested confirmation that driver received a delivery instruction. No read receipt visible in chat UI. CS manually contacted driver via internal comms.",
      resolution: "CS confirmed driver received note and delivery completed as requested. Read receipt feature available in Sendbird SDK but not enabled in Zestly's implementation.",
      manualWorkaround: true,
      resolutionDays: 0.5,
      teamNotified: true
    },
    {
      ticketId: "CS-1263",
      date: "2026-03-20",
      market: "Minneapolis",
      marketId: "M007",
      stage: "pilot",
      category: "Driver Chat Disconnect",
      customerQuote: "The chat just stopped working for 8 minutes while my food was out for delivery. I had no way to reach my driver.",
      description: "Chat session expired mid-delivery due to inactivity timeout. Customer unable to send updated drop-off location. Driver arrived at original address.",
      resolution: "CS reopened chat session after delivery already complete. Session timeout for active deliveries flagged as known issue. No fix deployed.",
      manualWorkaround: false,
      resolutionDays: 1.1,
      teamNotified: false
    },
    {
      ticketId: "CS-1271",
      date: "2026-03-24",
      market: "New York",
      marketId: "M012",
      stage: "live",
      category: "Push Notification Failure",
      customerQuote: "I waited by the door for 20 minutes. The app never told me my food was outside. My order was sitting there getting cold.",
      description: "Push notification not delivered when driver marked order 'arrived'. Customer not notified. Food left outside 21 minutes. Live market — high brand sensitivity.",
      resolution: "CS issued full refund and credit. Push notification retry logic triggered. Engineering flagged for investigation.",
      manualWorkaround: true,
      resolutionDays: 0.2,
      teamNotified: true
    },
    {
      ticketId: "CS-1278",
      date: "2026-03-29",
      market: "Salt Lake City",
      marketId: "M009",
      stage: "pilot",
      category: "AI Bot Escalation Failure",
      customerQuote: "Your bot kept asking me to repeat myself. I said 'wrong order' three times and just gave up and called.",
      description: "Customer received incorrect items. Attempted resolution via AI support chat. Bot failed to recognize 'wrong order' intent after 3 attempts. Customer abandoned and called.",
      resolution: "Human CS agent processed replacement order. Bot training data flagged for 'wrong order' and 'missing item' intent improvement.",
      manualWorkaround: true,
      resolutionDays: 0.8,
      teamNotified: false
    },
    {
      ticketId: "CS-1284",
      date: "2026-04-04",
      market: "New Orleans",
      marketId: "M011",
      stage: "pilot",
      category: "Cross-Device Session Conflict",
      customerQuote: "I ordered on my laptop but when I switched to my phone to message the driver, my messages from the laptop never showed up.",
      description: "Customer initiated order on web browser, switched to mobile app mid-delivery. Cross-device session conflict caused message history not to sync. Driver received no messages.",
      resolution: "CS cleared session and re-authenticated customer. Delivery already complete by time resolved. Cross-device sync flagged as known pilot-stage issue.",
      manualWorkaround: true,
      resolutionDays: 1.0,
      teamNotified: false
    }
  ]
};

// ----------------------------------------------------------
// MARKET CHAT METRICS — Per market
// Sendbird-powered chat data per city.
// Includes: daily chat volume, CS ticket rate, delivery speed.
// ----------------------------------------------------------

const marketMetrics = [
  // --- Pilot markets ---
  {
    marketId: "M004",
    marketName: "Denver",
    stage: "pilot",
    avgDailyOrders: 2840,
    avgDailyChatSessions: 1730,
    chatEngagementRate: 0.61,
    csTicketsPer1000Orders: 4.8,
    botResolutionRate: 0.52,
    avgMessageDeliveryMs: 1840,
    peakHourTicketPct: 0.68,
    topCSCategory: "Message Delivery Delay",
    demandSignalMentions: 72,       // convenience retail mentions (SIG-001)
    topDemandSignal: "Convenience Retail",
    notes: "CS ticket rate growing 3 months in a row. 72 convenience retail mentions this month — highest of any pilot market."
  },
  {
    marketId: "M005",
    marketName: "Nashville",
    stage: "pilot",
    avgDailyOrders: 2190,
    avgDailyChatSessions: 1620,
    chatEngagementRate: 0.74,
    csTicketsPer1000Orders: 3.9,
    botResolutionRate: 0.61,
    avgMessageDeliveryMs: 1520,
    peakHourTicketPct: 0.71,
    topCSCategory: "Message Delivery Delay",
    demandSignalMentions: 54,
    topDemandSignal: "Convenience Retail",
    notes: "54 convenience retail mentions. High chat engagement means demand signals surface faster here than in lower-engagement pilots."
  },
  {
    marketId: "M006",
    marketName: "San Diego",
    stage: "pilot",
    avgDailyOrders: 2980,
    avgDailyChatSessions: 1730,
    chatEngagementRate: 0.58,
    csTicketsPer1000Orders: 2.9,
    botResolutionRate: 0.67,
    avgMessageDeliveryMs: 1280,
    peakHourTicketPct: 0.59,
    topCSCategory: "Driver Chat Disconnect",
    notes: "Best-performing pilot. Ticket trend improving. Strongest Q2 live-launch candidate."
  },
  {
    marketId: "M007",
    marketName: "Minneapolis",
    stage: "pilot",
    avgDailyOrders: 1540,
    avgDailyChatSessions: 1020,
    chatEngagementRate: 0.66,
    csTicketsPer1000Orders: 3.6,
    botResolutionRate: 0.59,
    avgMessageDeliveryMs: 1690,
    peakHourTicketPct: 0.74,
    topCSCategory: "Message Delivery Delay",
    demandSignalMentions: 34,
    topDemandSignal: "Convenience Retail",
    notes: "Friday dinner rush is the primary problem window. 34 convenience retail mentions this month — growing."
  },
  {
    marketId: "M008",
    marketName: "Phoenix",
    stage: "pilot",
    avgDailyOrders: 3120,
    avgDailyChatSessions: 1530,
    chatEngagementRate: 0.49,
    csTicketsPer1000Orders: 2.1,
    botResolutionRate: 0.72,
    avgMessageDeliveryMs: 1190,
    peakHourTicketPct: 0.62,
    topCSCategory: "AI Bot Escalation",
    demandSignalMentions: 27,
    topDemandSignal: "Convenience Retail",
    notes: "Weekend spike emerging. 27 convenience retail mentions this month, mainly weekend evenings."
  },
  {
    marketId: "M009",
    marketName: "Salt Lake City",
    stage: "pilot",
    avgDailyOrders: 890,
    avgDailyChatSessions: 700,
    chatEngagementRate: 0.79,
    csTicketsPer1000Orders: 2.8,
    botResolutionRate: 0.68,
    avgMessageDeliveryMs: 1340,
    peakHourTicketPct: 0.65,
    topCSCategory: "Push Notification Failure",
    notes: "Highest chat engagement rate of any pilot. Customers clearly value the driver chat channel."
  },
  {
    marketId: "M010",
    marketName: "Baltimore",
    stage: "pilot",
    avgDailyOrders: 1280,
    avgDailyChatSessions: 700,
    chatEngagementRate: 0.55,
    csTicketsPer1000Orders: 1.9,
    botResolutionRate: 0.74,
    avgMessageDeliveryMs: 1120,
    peakHourTicketPct: 0.51,
    topCSCategory: "Driver Chat Disconnect",
    notes: "Cleanest pilot in current cohort. Fast CS resolution on first ticket. Q2 live launch likely."
  },
  {
    marketId: "M011",
    marketName: "New Orleans",
    stage: "pilot",
    avgDailyOrders: 1050,
    avgDailyChatSessions: 660,
    chatEngagementRate: 0.63,
    csTicketsPer1000Orders: 3.2,
    botResolutionRate: 0.55,
    avgMessageDeliveryMs: 1580,
    peakHourTicketPct: 0.60,
    topCSCategory: "Cross-Device Session Conflict",
    notes: "Cross-device conflict raised by two customers in same week. Known issue with no patch scheduled."
  },

  // --- Live markets ---
  {
    marketId: "M012",
    marketName: "New York",
    stage: "live",
    avgDailyOrders: 18400,
    avgDailyChatSessions: 14350,
    chatEngagementRate: 0.78,
    csTicketsPer1000Orders: 1.4,
    botResolutionRate: 0.81,
    avgMessageDeliveryMs: 890,
    peakHourTicketPct: 0.44,
    topCSCategory: "Push Notification Failure",
    demandSignalMentions: 51,
    topDemandSignal: "Grocery & Fresh",
    notes: "Anchor market. 51 grocery add-on mentions this month — highest of any market. Customers treating Zestly as a general delivery layer."
  },
  {
    marketId: "M013",
    marketName: "Los Angeles",
    stage: "live",
    avgDailyOrders: 14200,
    avgDailyChatSessions: 11930,
    chatEngagementRate: 0.84,
    csTicketsPer1000Orders: 1.1,
    botResolutionRate: 0.86,
    avgMessageDeliveryMs: 810,
    peakHourTicketPct: 0.38,
    topCSCategory: "Driver Chat Disconnect",
    demandSignalMentions: 24,
    topDemandSignal: "Grocery & Fresh",
    notes: "Highest chat engagement in the fleet. 24 grocery mentions — concentrated in repeat customers with 8+ orders."
  },
  {
    marketId: "M014",
    marketName: "Chicago",
    stage: "live",
    avgDailyOrders: 8100,
    avgDailyChatSessions: 5750,
    chatEngagementRate: 0.71,
    csTicketsPer1000Orders: 1.8,
    botResolutionRate: 0.77,
    avgMessageDeliveryMs: 950,
    peakHourTicketPct: 0.47,
    topCSCategory: "Message Delivery Delay",
    demandSignalMentions: 9,
    topDemandSignal: "Grocery & Fresh",
    notes: "9 grocery mentions this month — emerging signal from repeat customers near the Loop."
  },
  {
    marketId: "M015",
    marketName: "San Francisco",
    stage: "live",
    avgDailyOrders: 7300,
    avgDailyChatSessions: 5040,
    chatEngagementRate: 0.69,
    csTicketsPer1000Orders: 1.3,
    botResolutionRate: 0.83,
    avgMessageDeliveryMs: 870,
    peakHourTicketPct: 0.41,
    topCSCategory: "Driver Chat Disconnect",
    demandSignalMentions: 16,
    topDemandSignal: "On-Demand Chef",
    notes: "16 on-demand chef mentions — highest of any market. Tech-savvy customer base willing to pay a premium for novel services."
  },
  {
    marketId: "M016",
    marketName: "Austin",
    stage: "live",
    avgDailyOrders: 4900,
    avgDailyChatSessions: 3230,
    chatEngagementRate: 0.66,
    csTicketsPer1000Orders: 2.2,
    botResolutionRate: 0.71,
    avgMessageDeliveryMs: 1010,
    peakHourTicketPct: 0.49,
    topCSCategory: "Push Notification Failure",
    notes: "Highest ticket rate among live markets. Multi-neighborhood rollout means some zones are at effective pilot maturity."
  }
];

// ----------------------------------------------------------
// EXPANSION PIPELINE
// Service categories LENs has identified from CS chat demand
// signals. Stages: "signal-detected" | "evaluating" | "pilot" | "live"
//
// These are not features customers asked for.
// They are patterns LENs read from millions of CS chat sessions —
// customers probing the product boundary without knowing it.
// ----------------------------------------------------------

const expansionPipeline = [
  {
    category: "Convenience Retail",
    subtitle: "On-route stops at CVS, 7-Eleven, Walgreens during active delivery",
    stage: "detected",
    signalId: "SIG-001",
    chatMentions30d: 229,
    chatMentionsTrend: "+639% from Q4 2025 (31 sessions)",
    topMarkets: ["Denver", "Nashville", "Minneapolis", "Phoenix"],
    sampleVerbatim: "Can you stop at CVS on the way and grab me some ibuprofen? I'll add $5 to the tip.",
    sampleSource: "Denver Pilot · CS-1302 · Apr 2",
    owner: "Growth Team",
    lensInsight: "214 mentions across 6 of 8 pilot cities — zero in live markets. The pattern appears early in pilots, before customers are fully committed, suggesting they test platform flexibility first. CS is logging these as 'not in scope' without routing to product or growth. This is a missed feedback loop. The operational questions around convenience stops are real, but the demand evidence is strong enough to warrant a structured 30-day pilot in Denver."
  },
  {
    category: "Grocery & Fresh",
    subtitle: "Grocery runs and fresh produce add-ons, standalone or alongside food orders",
    stage: "detected",
    signalId: "SIG-002",
    chatMentions30d: 93,
    chatMentionsTrend: "84 of 93 mentions from live markets (NY, LA, Chicago, SF)",
    topMarkets: ["New York", "Los Angeles", "San Francisco"],
    sampleVerbatim: "Could the driver grab a carton of eggs from the store on the way? I know it's not on the menu, I figured I'd ask.",
    sampleSource: "New York Live · CS-1318 · Apr 5",
    owner: "Product / Partnerships",
    lensInsight: "The live market concentration is the signal inside the signal. Customers who've ordered 10+ times start asking for grocery runs — not first-timers. This mirrors the behavioral pull that moved DoorDash and Uber Eats into grocery. The NY mention volume alone (48) exceeds the total convenience retail signal from 6 pilot cities combined. The demand case is already built."
  },
  {
    category: "On-Demand Chef",
    subtitle: "Private chef or home cook session — vetted local chefs, no restaurant, no fixed location",
    stage: "decision-logged",
    signalId: "SIG-003",
    chatMentions30d: 26,
    chatMentionsTrend: "All SF (16) + NY (10) · avg surrounding order value 2.4× market",
    topMarkets: ["San Francisco", "New York"],
    sampleVerbatim: "Do you have anything where a chef comes to your place and cooks? Like a private chef type thing?",
    sampleSource: "San Francisco Live · CS-1334 · Apr 8",
    owner: "Head of Product",
    lensInsight: "23 mentions is low but the customer profile is distinctive — average order value on surrounding orders is 2.4× the market average. These are Zestly's highest-value users asking for something no competitor currently offers as a structured product. Decision logged: monitor SF + NY signal for 90 days. If volume doubles by Q3, escalate to product roadmap evaluation."
  }
];

// Legacy growth pipeline kept for reference
const growthPipeline = [
  {
    rep: "Alex Kim",
    region: "West",
    quota: { newPilots: 2, launches: 2 },
    actual: { newPilots: 3, launches: 0, evaluating: 1 },
    pilotPortfolio: ["Denver", "Salt Lake City"],
    lastLaunchDate: "2025-06-04",   // Austin — 10 months ago
    conversionActivityLog: [
      {
        date: "2026-01-22",
        market: "Denver",
        action: "Sent live-launch readiness deck to HQ",
        outcome: "No response after 2 follow-ups. Denver pilot CS pattern not flagged in the deck."
      },
      {
        date: "2026-02-11",
        market: "Salt Lake City",
        action: "Mid-pilot review call with ops team",
        outcome: "Strong metrics noted. Alex not aware of unresolved push notification failure ticket at time of call."
      }
    ],
    notes: "Denver has been in pilot 8+ months with no formal live-launch plan since January. Longest pilot in company history."
  },
  {
    rep: "Priya Nair",
    region: "Central / South",
    quota: { newPilots: 2, launches: 2 },
    actual: { newPilots: 2, launches: 0, evaluating: 1 },
    pilotPortfolio: ["Nashville", "San Diego", "Baltimore"],
    lastLaunchDate: "2025-02-18",   // San Francisco — 14 months ago
    conversionActivityLog: [
      {
        date: "2026-02-18",
        market: "San Diego",
        action: "Mid-pilot ops review call",
        outcome: "Positive. Live launch discussed for Q2. No formal proposal submitted."
      },
      {
        date: "2026-03-14",
        market: "Nashville",
        action: "Pilot extension negotiation with HQ",
        outcome: "60-day extension approved. CS ticket trend not discussed. Driver messaging pattern not raised."
      }
    ],
    notes: "San Diego is ready for Q2 live launch. Nashville extension granted without addressing the CS pattern driving pilot hesitancy."
  },
  {
    rep: "Marcus Webb",
    region: "East / Southeast",
    quota: { newPilots: 2, launches: 2 },
    actual: { newPilots: 3, launches: 0, evaluating: 1 },
    pilotPortfolio: ["Minneapolis", "Phoenix", "New Orleans"],
    lastLaunchDate: "2024-10-30",   // Chicago — 18 months ago
    conversionActivityLog: [
      {
        date: "2026-03-20",
        market: "New Orleans",
        action: "Quarterly ops review",
        outcome: "Cross-device chat issue raised by ops team. Marcus escalated to CS but has not followed up with HQ on resolution status."
      },
      {
        date: "2026-03-27",
        market: "Minneapolis",
        action: "Live-launch readiness check",
        outcome: "Minneapolis ops lead mentioned peak-hour driver messaging issues. Marcus entered call unaware of active CS ticket cluster."
      }
    ],
    notes: "Minneapolis pilot metrics are borderline ready but active CS cluster makes live launch premature. New Orleans is the cleanest conversion candidate in portfolio."
  }
];

// ----------------------------------------------------------
// COMPANY OKR
// Q1 2026 (Jan 1 – Mar 31) | Reporting as of Apr 10, 2026
// ----------------------------------------------------------

const companyOKR = {
  objective: "Accelerate Pilot-to-Live Market Launch Rate",
  quarterLabel: "Q1 2026",
  reportingDate: "2026-04-10",
  baselineConversionRate: 0.27,
  targetConversionRate: 0.378,
  targetLabel: "37.8% (40% improvement on 27% baseline)",
  pilotMarketsEligible: 8,
  launchesThisQuarter: 0,
  currentConversionRate: 0.0,
  gapToTarget: -0.378,
  gapDirection: "below",
  trendVsPriorQuarter: "worsening",
  historicalData: [
    { quarter: "Q2 2024", pilots: 3, launches: 1, rate: 0.333 },
    { quarter: "Q3 2024", pilots: 4, launches: 1, rate: 0.250 },
    { quarter: "Q4 2024", pilots: 4, launches: 2, rate: 0.500 },
    { quarter: "Q1 2025", pilots: 5, launches: 1, rate: 0.200 },
    { quarter: "Q2 2025", pilots: 5, launches: 2, rate: 0.400 },
    { quarter: "Q3 2025", pilots: 6, launches: 1, rate: 0.167 },
    { quarter: "Q4 2025", pilots: 8, launches: 1, rate: 0.125 },
    { quarter: "Q1 2026", pilots: 8, launches: 0, rate: 0.000 }
  ]
};

// ----------------------------------------------------------
// SIGNAL EVIDENCE — Raw CS chat verbatims backing each signal
// These are the actual customer quotes LENs read to surface
// each demand signal. Shown in the right-side evidence panel.
// ----------------------------------------------------------

const signalEvidence = {
  "sig001": {
    title: "Convenience Retail Demand · SIG-001",
    meta: "214 mentions from Sendbird CS chat · last 30 days",
    quotes: [
      { text: "Can you stop at CVS on the way and grab me some ibuprofen? I'll add $5 to the tip.", market: "Denver Pilot", ticket: "CS-1302", date: "Apr 2" },
      { text: "Is there any way to pick up a RedBull from 7-Eleven while you're driving? I'll Venmo you extra.", market: "Nashville Pilot", ticket: "CS-1287", date: "Mar 28" },
      { text: "Could you swing by Walgreens? Just need some cold medicine, the store's literally on the same street.", market: "Minneapolis Pilot", ticket: "CS-1291", date: "Mar 31" },
      { text: "I ordered food but I'm also out of paper towels — is there any way to add a quick store stop?", market: "Nashville Pilot", ticket: "CS-1309", date: "Apr 5" },
      { text: "Do Zestly drivers ever pick up stuff from convenience stores? Like a bag of chips or a drink?", market: "Denver Pilot", ticket: "CS-1276", date: "Mar 25" },
      { text: "My cat knocked over her water bowl — any chance the driver could grab a bottle of water from the gas station nearby?", market: "Phoenix Pilot", ticket: "CS-1294", date: "Apr 1" },
      { text: "Can Zestly drivers do quick pharmacy stops? Asking because I need NyQuil and it's right on the route.", market: "Minneapolis Pilot", ticket: "CS-1315", date: "Apr 3" },
      { text: "I know this is probably not a thing but... can you pick up lottery tickets from the gas station lol. Worth asking!", market: "Phoenix Pilot", ticket: "CS-1283", date: "Mar 29" },
      { text: "Is there a way to add a non-restaurant stop? Even just for one item — I'd pay a small fee.", market: "Denver Pilot", ticket: "CS-1322", date: "Apr 6" },
      { text: "Just ordered dinner but realized I need Gatorade too. Can the driver grab it if I add a tip?", market: "Nashville Pilot", ticket: "CS-1298", date: "Apr 3" }
    ]
  },
  "sig002": {
    title: "Grocery & Fresh Demand · SIG-002",
    meta: "87 mentions from Sendbird CS chat · 78 from live markets",
    quotes: [
      { text: "Could the driver grab a carton of eggs from the store on the way? I know it's not on the menu, I figured I'd ask.", market: "New York Live", ticket: "CS-1318", date: "Apr 5" },
      { text: "Is there a way to add a grocery stop to my order? Just need milk and bread — I'd pay extra for it.", market: "Los Angeles Live", ticket: "CS-1304", date: "Apr 3" },
      { text: "You guys should do grocery delivery. I'd use Zestly for literally everything if you did.", market: "San Francisco Live", ticket: "CS-1326", date: "Apr 6" },
      { text: "My driver is so close to Whole Foods right now — any chance they can grab avocados? I'll tip well.", market: "New York Live", ticket: "CS-1296", date: "Apr 2" },
      { text: "Is this only for restaurant food or can I also order from grocery stores? Asking because I need produce.", market: "Chicago Live", ticket: "CS-1279", date: "Mar 30" },
      { text: "Can I attach a small grocery list alongside my food order? Even just for basics like butter or onions?", market: "Los Angeles Live", ticket: "CS-1301", date: "Apr 1" },
      { text: "I wish Zestly did groceries. I'd never use Instacart again honestly.", market: "San Francisco Live", ticket: "CS-1268", date: "Mar 28" },
      { text: "Would love if you partnered with a local grocery store. I'd order every single day.", market: "New York Live", ticket: "CS-1320", date: "Apr 4" },
      { text: "Can drivers add a quick grocery run? I already tip 20%, I'd bump it for the extra stop.", market: "New York Live", ticket: "CS-1311", date: "Apr 4" }
    ]
  },
  "sig003": {
    title: "On-Demand Chef Interest · SIG-003",
    meta: "23 mentions from Sendbird CS chat · SF (14) + NY (9)",
    quotes: [
      { text: "This is probably a weird ask but — do you have anything where a chef comes to your place and cooks? Like a private chef type thing?", market: "San Francisco Live", ticket: "CS-1334", date: "Apr 8" },
      { text: "Is there a service through Zestly where I can hire someone to cook a meal at my home? I'm hosting people Saturday.", market: "New York Live", ticket: "CS-1329", date: "Apr 6" },
      { text: "I'm throwing a dinner party — is there any way to get a chef through the app for the evening?", market: "San Francisco Live", ticket: "CS-1321", date: "Apr 4" },
      { text: "Do you guys have any premium tiers? Like a personal chef or something for special occasions?", market: "New York Live", ticket: "CS-1336", date: "Apr 7" },
      { text: "What if Zestly had a 'home cook' option where local chefs come and cook for you? I'd pay a lot for that.", market: "San Francisco Live", ticket: "CS-1313", date: "Apr 3" },
      { text: "Not sure if this is possible but — private chef booking through the app? Even just for birthdays or anniversaries.", market: "San Francisco Live", ticket: "CS-1308", date: "Apr 2" }
    ]
  }
};

// ----------------------------------------------------------
// CHAT MESSAGES — Raw Sendbird CS session data
// ~1000 individual messages across ~140 sessions
// Last 30 days · All markets
// Each session = one CS or driver chat conversation
// ----------------------------------------------------------

const chatMessages = (function () {
  const out = [];
  let mid = 1, sid = 1, csn = 1350;

  const mkts = [
    { id:"M004", name:"Denver",         stage:"pilot" },
    { id:"M005", name:"Nashville",      stage:"pilot" },
    { id:"M006", name:"San Diego",      stage:"pilot" },
    { id:"M007", name:"Minneapolis",    stage:"pilot" },
    { id:"M008", name:"Phoenix",        stage:"pilot" },
    { id:"M009", name:"Salt Lake City", stage:"pilot" },
    { id:"M010", name:"Baltimore",      stage:"pilot" },
    { id:"M011", name:"New Orleans",    stage:"pilot" },
    { id:"M012", name:"New York",       stage:"live"  },
    { id:"M013", name:"Los Angeles",    stage:"live"  },
    { id:"M014", name:"Chicago",        stage:"live"  },
    { id:"M015", name:"San Francisco",  stage:"live"  },
    { id:"M016", name:"Austin",         stage:"live"  },
  ];
  const Denver=mkts[0],Nashville=mkts[1],SanDiego=mkts[2],Mpls=mkts[3],
        Phoenix=mkts[4],SLC=mkts[5],Baltimore=mkts[6],NOLA=mkts[7],
        NYC=mkts[8],LA=mkts[9],Chicago=mkts[10],SF=mkts[11],Austin=mkts[12];

  const names = [
    "Jordan T.","Maya R.","Chris L.","Aisha M.","Tyler B.","Priya K.",
    "Sam W.","Danielle F.","Marcus H.","Emily G.","Kevin P.","Sofia N.",
    "James O.","Layla A.","Noah C.","Zoe D.","Ethan V.","Chloe B.",
    "Ryan S.","Ava M.","Jackson L.","Isabella W.","Liam K.","Olivia T.",
    "Mason R.","Emma F.","Lucas G.","Mia P.","Logan H.","Ella N.",
    "Kayla J.","Brandon S.","Jasmine P.","Derek W.","Natalie C.",
    "Alex M.","Tiffany B.","Carlos R.","Stephanie H.","Anthony K.",
    "Rachel D.","Michael B.","Ashley T.","Daniel W.","Amanda P.",
    "Christopher N.","Lauren S.","Nathan K.","Hannah R.","Joshua F."
  ];
  const drivers = ["Carlos M.","Tanya W.","Ray P.","Kim S.","Jesse L.","Pat B.","Dani K.","Marco R.","Ashley H.","Brian T.","Eli W.","Sage N."];

  const dates = [];
  for (let d=new Date("2026-03-18"); d<=new Date("2026-04-16"); d.setDate(d.getDate()+1))
    dates.push(d.toISOString().split('T')[0]);

  const peakT = ["11:47","12:03","12:18","12:34","12:52","13:06","18:02","18:21","18:39","18:54","19:08","19:41"];
  const offT  = ["09:14","09:43","10:07","10:31","14:12","14:38","15:03","15:44","16:21","20:08","20:33","21:02"];

  function nextT(t0, add) {
    const [h,m] = t0.split(':').map(Number);
    const tot = h*60+m+add;
    return `${String(Math.floor(tot/60)%24).padStart(2,'0')}:${String(tot%60).padStart(2,'0')}`;
  }
  function pad(n,l=4) { return String(n).padStart(l,'0'); }
  function pick(arr) { return arr[Math.floor(Math.random()*arr.length)]; }

  function sess(mkt, cat, sig, tid, turns) {
    const id = `sess-${pad(sid++)}`;
    const date = pick(dates);
    const isPeak = cat==='message-delay';
    const t0 = isPeak ? pick(peakT) : pick(offT);
    turns.forEach((turn, i) => {
      out.push({
        id:         `msg-${pad(mid++)}`,
        sessionId:  id,
        ticketId:   tid||null,
        market:     mkt.name,
        marketId:   mkt.id,
        stage:      mkt.stage,
        date,
        time:       nextT(t0, i*2 + (i>2?1:0)),
        category:   cat,
        signalTag:  sig||null,
        role:       turn.role,
        senderName: turn.name,
        text:       turn.text,
      });
    });
  }

  const C = (n,t) => ({role:'customer',  name:n,             text:t});
  const A = (t)   => ({role:'cs_agent',  name:'CS Agent',    text:t});
  const B = (t)   => ({role:'bot',       name:'Zestly Bot',  text:t});
  const D = (n,t) => ({role:'driver',    name:n,             text:t});
  const cs = ()   => `CS-${csn++}`;

  // ── 1. MESSAGE DELIVERY DELAY — PEAK HOURS ─────────────── ~220 msgs
  sess(Denver,'message-delay',null,cs(),[
    C("Jordan T.","Hi, I sent my driver a message with my apartment number but I'm not sure it went through"),
    B("Hi! I can help look into that. Can you share your order number?"),
    C("Jordan T.","ZE-48291"),
    B("Thanks! Your order is out for delivery. Connecting you with a support agent now."),
    A("Hi Jordan! I can see a message was sent at 12:31. Let me verify driver delivery status."),
    C("Jordan T.","My apartment is 4B, second floor. The front buzzer is really hard to find."),
    A("Got it — I've relayed that directly to your driver via internal comms. They're about 3 minutes out and have unit 4B noted."),
    C("Jordan T.","Thank you so much!"),
    A("Of course! Sorry for the hassle. I've added a $5 credit to your account.")
  ]);
  sess(Nashville,'message-delay',null,cs(),[
    C("Maya R.","Can someone confirm my driver got my drop-off message? I asked them to leave it at the front desk"),
    B("Happy to help! What's your order number?"),
    C("Maya R.","ZE-51384"),
    B("Thanks! Connecting you with an agent who can verify the driver's message status."),
    A("Hi Maya! I can see your message was queued but I'm not seeing a read confirmation from the driver's side. There's a delay in the chat sync."),
    C("Maya R.","That's what I was worried about. I'm in a meeting and can't wait in the lobby."),
    A("Totally understand. I've contacted your driver via internal comms — they'll leave the order with the front desk attendant."),
    C("Maya R.","Perfect, thank you.")
  ]);
  sess(Mpls,'message-delay',null,cs(),[
    C("Chris L.","My driver has been out for delivery 30 min but hasn't responded to any of my messages"),
    B("I'm sorry to hear that! Can I get your order number?"),
    C("Chris L.","ZE-52019"),
    A("Hi! I can see 3 messages sent from your end but the driver's app is experiencing a delay receiving incoming messages — this happens during peak hours."),
    C("Chris L.","So he just... can't see what I'm sending?"),
    A("Not in real-time unfortunately. I've relayed all 3 messages directly to him through our internal system. He has your instructions."),
    C("Chris L.","This is really frustrating honestly"),
    A("Completely understandable. I'm sorry. I've added a $7 credit to your account — you shouldn't have to chase your own delivery.")
  ]);
  sess(Denver,'message-delay',null,cs(),[
    C("Aisha M.","The delivery instructions I added at checkout didn't show up in the chat with my driver??"),
    B("I'm sorry! Let me pull up your order. Order number?"),
    C("Aisha M.","ZE-49822"),
    A("Hi Aisha! The instructions were in order notes but there's a known sync issue between checkout notes and driver chat. Sending them manually now."),
    C("Aisha M.","The instructions were to use the side entrance — the front door bell doesn't work"),
    A("Got it. Sent. Your driver knows to use the side entrance. About 8 minutes out."),
    C("Aisha M.","Thank you. Please fix this bug, it's really annoying."),
    A("100% agree — I've flagged this session for our product team. Your feedback is noted.")
  ]);
  sess(Nashville,'message-delay',null,cs(),[
    C("Tyler B.","I messaged my driver to leave my food at the door but he just knocked 3 times and left???"),
    B("Oh no, so sorry! Let me get an agent. Order number?"),
    C("Tyler B.","ZE-47190"),
    A("Hi Tyler — I can see your message was sent but there was a delivery delay. Your driver's app showed it after he'd already completed the drop."),
    C("Tyler B.","So he thought I wasn't home? I was right there"),
    A("Yes — the driver acted in good faith but the system failed you. I'm processing a full refund plus a $10 credit for the experience."),
    C("Tyler B.","Thank you. I mean the food is gone so yes please"),
    A("Refund processed — 3-5 business days. Credit is already on your account.")
  ]);
  sess(Phoenix,'message-delay',null,cs(),[
    C("Priya K.","Is there a way to see if my driver read my message?"),
    B("Currently read receipts aren't displayed in order chat. I can have an agent confirm for you."),
    C("Priya K.","Yes please, order ZE-50812"),
    A("Hey! Checking now — your driver has seen your message as of 2 minutes ago."),
    C("Priya K.","Oh great! I just wanted to make sure he knew about the gate code. It's *8849"),
    A("He has it. Delivery is about 7 minutes out."),
    C("Priya K.","Thank you! Also why doesn't the app show read receipts? This would be so much easier"),
    A("Really fair feedback. Read receipts are actually available in our Sendbird setup — just not exposed in the UI yet. Flagging this for product now.")
  ]);
  sess(NYC,'message-delay',null,cs(),[
    C("Sam W.","I got a notification my food was delivered but nothing is at my door and I never got a driver message"),
    B("I'm so sorry! Let me get an agent. Order number?"),
    C("Sam W.","ZE-51790"),
    A("Hi Sam — I can see the driver marked delivery complete at 6:47pm. Did you get any notification they were nearby?"),
    C("Sam W.","No, nothing. No push, no message, nothing."),
    A("That's a push notification failure on our end. The driver arrived but the app never alerted you. I'm processing a full refund now."),
    C("Sam W.","Thank you. This is the second time this has happened to me."),
    A("I've flagged that in your account. $15 credit added in addition to the refund. You'll be on our priority support queue going forward.")
  ]);
  sess(Mpls,'message-delay',null,cs(),[
    C("Danielle F.","Hi! I need help. My food is out for delivery and I think my driver isn't seeing my messages"),
    B("I can help! What's your order number?"),
    C("Danielle F.","ZE-44929"),
    A("Hi! What were you trying to tell your driver?"),
    C("Danielle F.","My address in the app is slightly wrong — correct building is 1142 not 1124"),
    A("Got it — 1142, not 1124. I've updated your driver immediately via internal dispatch. They're rerouting now."),
    C("Danielle F.","Oh thank goodness! How much longer?"),
    A("About 5 minutes to the corrected address. I've also left a note to update your default address — you can confirm in settings.")
  ]);
  sess(Nashville,'message-delay',null,cs(),[
    C("Marcus H.","Why isn't my driver responding? I've sent 4 messages"),
    B("So sorry! Order number?"),
    C("Marcus H.","ZE-48019"),
    A("Hi Marcus! I can see your 4 messages. The receipt confirmation isn't showing on our end during this peak window — but your driver has read 2 of them."),
    C("Marcus H.","What about the other 2?"),
    A("I've forwarded those directly. What were the remaining instructions?"),
    C("Marcus H.","Door code is #3492 and it's apartment 2A"),
    A("Door code #3492, apartment 2A — relayed. Driver is 6 minutes out.")
  ]);
  sess(Denver,'message-delay',null,cs(),[
    C("Emily G.","I sent my driver a message 20 minutes ago and still no response or delivery"),
    B("I'm sorry! Let me check. Order number?"),
    C("Emily G.","ZE-53721"),
    A("Hi Emily! Your driver is 4 minutes out. No reply likely means they're driving — drivers can't always respond in real time during rush."),
    C("Emily G.","Okay but the message had my gate code. Can you confirm they saw it?"),
    A("Yes — message was delivered and seen. Your driver has the gate code."),
    C("Emily G.","Okay thank you"),
    A("No problem! Delivery shortly. Let us know if anything else comes up.")
  ]);
  sess(SLC,'message-delay',null,cs(),[
    C("Kevin P.","My food arrived cold because it was sitting outside. App never told me the driver was there"),
    B("I'm so sorry to hear that! Let me get an agent right away."),
    C("Kevin P.","Order ZE-50041"),
    A("Hi Kevin — I can see the driver marked arrival at 7:12pm but the push notification didn't go out. This is on us entirely."),
    C("Kevin P.","I was literally watching TV with my phone next to me. Never saw anything."),
    A("That's inexcusable and I'm sorry. I'm processing a full refund and flagging this to engineering."),
    C("Kevin P.","Thank you. At least the food was good when it was warm haha"),
    A("Ha — I appreciate you being kind about it. Credit added too. Hopefully we earn back your trust.")
  ]);
  sess(Chicago,'message-delay',null,cs(),[
    C("Sofia N.","I sent a message asking for no-contact delivery but my driver rang the doorbell twice"),
    B("Sorry to hear that! Order number?"),
    C("Sofia N.","ZE-55192"),
    A("Hi Sofia! Your no-contact request was in the order notes but the driver's in-app display didn't surface it. This is a known issue we're working on."),
    C("Sofia N.","I have a sleeping baby. A doorbell ringing is a big deal."),
    A("I completely understand — I'm truly sorry. Escalating this feedback directly to product as a priority. $8 credit added to your account."),
    C("Sofia N.","Please fix it for other parents too")
  ]);
  sess(Austin,'message-delay',null,cs(),[
    C("James O.","Can you tell my driver to meet me in the parking lot instead of the front door?"),
    B("Of course! What's your order number?"),
    C("James O.","ZE-53884"),
    B("I can relay that to your driver. Which parking lot — any specific spot?"),
    C("James O.","Section B, near the blue pillars"),
    A("Hi James — I've passed that to your driver directly. Section B near the blue pillars. They confirmed."),
    C("James O.","Great, thank you!"),
    D("Jesse L.","On my way to section B now, about 4 min!")
  ]);
  sess(Baltimore,'message-delay',null,cs(),[
    C("Layla A.","I added a note to ring the side doorbell but driver rang the front one which goes nowhere"),
    B("I'm sorry! Let me pull your order up."),
    C("Layla A.","ZE-51003"),
    A("Hi Layla — I can see the note was attached to the order but there was a display issue on the driver's end. It happens when notes are added after order confirmation."),
    C("Layla A.","So it's better to add notes during checkout?"),
    A("Yes, checkout notes have the most reliable delivery path currently. I've made a note of this in your account feedback. Sorry for the inconvenience — $5 credit added."),
    C("Layla A.","Good to know, thank you")
  ]);
  sess(NOLA,'message-delay',null,cs(),[
    C("Noah C.","Hey my driver hasn't messaged me at all and my food was supposed to arrive 10 min ago"),
    B("I'm sorry! Let me check your order. Number?"),
    C("Noah C.","ZE-52774"),
    A("Hi Noah! Your driver is running about 12 minutes behind due to traffic — the app hasn't reflected the delay yet. This is a sync issue we're aware of."),
    C("Noah C.","Okay I just want to know what's happening. The app says arriving in 2 min for the last 20 min."),
    A("Totally understand — that's a frustrating experience. I've reached out to your driver and they'll be there in 9 minutes. ETA display is being corrected now."),
    C("Noah C.","Thank you for actually telling me!"),
    A("Of course. You deserve real information. $4 credit added for the wait.")
  ]);
  sess(Denver,'message-delay',null,cs(),[
    C("Zoe D.","My order says delivered but nothing is here and I can't reach my driver"),
    B("Oh no! Let me get an agent right now."),
    C("Zoe D.","ZE-54001"),
    A("Hi Zoe — I can see the delivery was marked complete 8 minutes ago. I'm calling your driver directly right now."),
    C("Zoe D.","I'm standing outside. There is literally nothing here."),
    A("I believe you completely. Your driver is saying they left it at a blue door — can you describe your entrance?"),
    C("Zoe D.","My door is red. I'm in building A."),
    A("They went to building B. I'm having them return now. So sorry — full refund processing either way plus $10 credit."),
    C("Zoe D.","Okay thank you for fixing it fast")
  ]);
  sess(Nashville,'message-delay',null,cs(),[
    C("Ethan V.","This is my third time having a message not go through to a driver this month"),
    B("I'm really sorry to hear that. Can I have your order number?"),
    C("Ethan V.","ZE-55610"),
    A("Hi Ethan — I can see your history and you're right, this has happened repeatedly. I'm flagging your account for review by our technical team."),
    C("Ethan V.","It's getting old. I love Zestly but this keeps happening and I keep having to call CS."),
    A("That's completely fair. Your account is now flagged for priority support and our tech team will investigate the pattern on your device."),
    C("Ethan V.","Thank you. I hope it gets fixed"),
    A("We'll follow up within 48 hours with an update. $10 credit applied for the recurring issue.")
  ]);
  sess(NYC,'message-delay',null,cs(),[
    C("Chloe B.","Hi! My driver just showed up at my building without me buzzing him in. How did he get the door code?"),
    B("Hi Chloe! That's a great question. Let me connect you with an agent."),
    C("Chloe B.","Order ZE-56011"),
    A("Hi! Your previous order to the same address had the door code saved. Drivers can see notes from prior orders."),
    C("Chloe B.","Oh! That makes sense. I was confused. Everything went great actually, just wasn't expecting it."),
    A("Ha! All good — that's the delivery notes feature working as intended. Anything else I can help with?"),
    C("Chloe B.","No, all good! Thanks for clarifying.")
  ]);
  sess(Mpls,'message-delay',null,cs(),[
    C("Ryan S.","I've been messaging my driver and getting no response. Is the app chat even working?"),
    B("I'm sorry for the frustration. Can I get your order number?"),
    C("Ryan S.","ZE-48831"),
    A("Hi Ryan! I can see the app is experiencing a message delivery delay in the Minneapolis area during this evening peak. Your messages are queued."),
    C("Ryan S.","So he'll get them eventually?"),
    A("Yes, and I've also sent your instructions directly via our dispatch system as a backup. You're covered."),
    C("Ryan S.","Okay good. Just needed him to know to use the back entrance"),
    A("Back entrance — noted and sent. He's aware. Delivery in about 6 minutes.")
  ]);
  sess(Phoenix,'message-delay',null,cs(),[
    C("Ava M.","Driver is here but standing at the wrong building. My messages aren't going through!"),
    B("Oh no! Agent connecting now. Order number?"),
    C("Ava M.","ZE-57203"),
    A("Hi Ava — on it right now. Which building are you in?"),
    C("Ava M.","Building 3, not Building 1. They look similar."),
    A("Contacting your driver right now. One moment."),
    A("Driver is heading to Building 3. About 2 minutes."),
    C("Ava M.","I can see them turning around! Thank you!"),
    A("So glad we caught it in time. So sorry for the confusion.")
  ]);
  sess(Denver,'message-delay',null,cs(),[
    C("Jackson L.","How do I message my driver? I can't find the chat button"),
    B("Happy to help! Tap on your active order, then look for the 'Chat with Driver' button near the map."),
    C("Jackson L.","Oh found it! Thanks. I wanted to tell them the elevator is broken and they'll need stairs"),
    B("Got it — you can send that directly. Do you want me to also relay it via our system to make sure it gets through?"),
    C("Jackson L.","Yes please, order ZE-58120"),
    A("Hi Jackson! I've sent 'elevator out of service — please use stairs' to your driver directly. They confirmed."),
    C("Jackson L.","Perfect, thank you!")
  ]);
  sess(LA,'message-delay',null,cs(),[
    C("Isabella W.","My food has been marked 'out for delivery' for 45 minutes. Driver not responding to messages."),
    B("I'm sorry about the wait! Let me get an agent to check."),
    C("Isabella W.","Order ZE-59084"),
    A("Hi Isabella — your driver hit unexpected traffic and had a routing issue. They're now 12 minutes out. I should have flagged this to you earlier."),
    C("Isabella W.","45 minutes and nobody told me anything. I was about to just order somewhere else."),
    A("That's completely understandable and I'm sorry. I'm applying a $12 credit for the wait and the lack of communication."),
    C("Isabella W.","Thank you. I'll wait the 12 min then.")
  ]);
  sess(SF,'message-delay',null,cs(),[
    C("Liam K.","Quick question — if I message my driver mid-delivery, do they get a sound notification?"),
    B("Great question! Drivers receive in-app sound notifications for new messages. Is there something you'd like us to relay?"),
    C("Liam K.","I just want to make sure they know it's a contactless drop. I have COVID."),
    B("Understood — that's important. I'll flag this for an agent to confirm delivery."),
    A("Hi Liam! I've personally confirmed contactless drop with your driver. They'll leave the order at the door with no knock. Feel better soon!"),
    C("Liam K.","Thank you so much, really appreciate that.")
  ]);
  sess(Chicago,'message-delay',null,cs(),[
    C("Olivia T.","I sent my driver a message and they just replied with 'k' and nothing else. Did they get my full instructions?"),
    B("Ha! Let me verify that for you. Order number?"),
    C("Olivia T.","ZE-61002"),
    A("Hi Olivia! I can see the driver read your message and their 'k' was in response. Drivers sometimes reply briefly while driving. The instructions are visible to them."),
    C("Olivia T.","Okay haha as long as they have it. I asked them to call the unit not the building buzzer"),
    A("Confirmed — 'call unit directly' is noted. Your driver has it."),
    C("Olivia T.","Great, thank you!")
  ]);
  sess(Denver,'message-delay',null,cs(),[
    C("Mason R.","This is the second delivery this week where my message didn't reach the driver until after they left"),
    B("I'm really sorry to hear this is recurring. Let me connect you with an agent."),
    C("Mason R.","Order ZE-61490"),
    A("Hi Mason — I can see two prior instances flagged in your account. This is a real pattern and I'm escalating your case to our technical team today."),
    C("Mason R.","I just want the chat to actually work"),
    A("That's completely reasonable. Engineering will review your account's message delivery logs. In the meantime, adding $15 credit and flagging you for priority dispatch with direct CS line."),
    C("Mason R.","I appreciate that. Thank you.")
  ]);

  // ── 2. DRIVER CHAT DISCONNECT ─────────────────────────── ~80 msgs
  sess(Mpls,'driver-disconnect',null,cs(),[
    C("Emma F.","The chat just stopped working for 8 minutes while my food was out for delivery"),
    B("I'm so sorry! Let me check. Order number?"),
    C("Emma F.","ZE-63002"),
    A("Hi Emma — your chat session timed out due to an inactivity threshold while your driver was en route. This is a known issue we're working to fix."),
    C("Emma F.","So I had literally no way to reach my driver for 8 minutes?"),
    A("That's correct and it shouldn't happen during active deliveries. We're working on extending the session timeout. $6 credit added."),
    C("Emma F.","Please fix it — what if I needed to give updated directions?")
  ]);
  sess(Denver,'driver-disconnect',null,cs(),[
    C("Lucas G.","The chat with my driver just disappeared from the app"),
    B("I'm sorry! Let me look into this. Order number?"),
    C("Lucas G.","ZE-63744"),
    A("Hi Lucas! Your chat session ended when the order was marked 'delivered' — but delivery appears to have been marked prematurely. Is your order not there?"),
    C("Lucas G.","The order is here but I needed to ask the driver something after the fact"),
    A("Ah — got it. Once delivery is marked complete the session closes. If you needed to flag something, you can open a CS ticket here. What did you need?"),
    C("Lucas G.","I just wanted to tip him extra in cash but didn't get to talk to him. Never mind."),
    A("That's very kind of you! The driver can see in-app tips up to 24 hours post-delivery if that helps.")
  ]);
  sess(Nashville,'driver-disconnect',null,cs(),[
    C("Mia P.","My chat with the driver disconnected and now I can't get back in"),
    B("Let me help! Order number?"),
    C("Mia P.","ZE-64100"),
    A("Hi Mia! The session expired — this can happen if there's a period of no activity in the chat during delivery. I can relay a message for you."),
    C("Mia P.","Can you tell him the door is unlocked and just leave it inside?"),
    A("Sent! Driver confirmed he'll leave it inside. Delivery in about 4 minutes."),
    C("Mia P.","Thank you!")
  ]);
  sess(NOLA,'driver-disconnect',null,cs(),[
    C("Logan H.","I ordered on my laptop but when I switched to my phone the chat was gone"),
    B("I'm sorry! That sounds like a cross-device issue. Order number?"),
    C("Logan H.","ZE-64891"),
    A("Hi Logan! This is a known cross-device session conflict — messages from one device don't always sync to another in real time during active deliveries."),
    C("Logan H.","So my driver never saw the messages I sent from my phone?"),
    A("That's likely, yes. What were the messages?"),
    C("Logan H.","I moved the delivery to a different address — 1501 Magazine St instead of 1220"),
    A("Contacting your driver now directly. Rerouting to 1501 Magazine St. This will add about 5 minutes."),
    C("Logan H.","Okay thank you. I'm sorry for the confusion")
  ]);
  sess(SLC,'driver-disconnect',null,cs(),[
    C("Ella N.","The driver chat says 'session ended' but my food hasn't arrived yet??"),
    B("That's not right! Let me get an agent. Order number?"),
    C("Ella N.","ZE-65200"),
    A("Hi Ella! The session ended prematurely — this is a bug where the session timeout fires before delivery completes. Your driver is still active and about 7 minutes away."),
    C("Ella N.","Can I still send them a message somehow?"),
    A("Not through the app in this state, but I can relay for you. What do you need to communicate?"),
    C("Ella N.","Just to leave it at the door and not ring the bell"),
    A("Sent directly to driver. They'll do a no-ring drop.")
  ]);
  sess(LA,'driver-disconnect',null,cs(),[
    C("Kayla J.","My driver's chat keeps going offline. I can see them typing but then nothing comes through"),
    B("I'm sorry! Let me check the connection. Order number?"),
    C("Kayla J.","ZE-65901"),
    A("Hi Kayla! Your driver's connection is intermittent — they're in a weak signal area but still en route."),
    C("Kayla J.","Okay that makes sense. As long as they're coming I'm fine"),
    A("They are! ETA 11 minutes. I'll monitor and can relay anything you need."),
    C("Kayla J.","No that's okay. Just good to know!")
  ]);
  sess(Baltimore,'driver-disconnect',null,cs(),[
    C("Brandon S.","Chat with driver is gone and the order still says in transit"),
    B("I'll get an agent right on this. Order number?"),
    C("Brandon S.","ZE-66240"),
    A("Hi Brandon! Chat closed due to a session error — but your delivery is active and your driver is 6 minutes out."),
    C("Brandon S.","Is this a known issue?"),
    A("Yes — session timeout logic is being updated in our next release. I've flagged your session as an example."),
    C("Brandon S.","Good. Thanks for being honest about it.")
  ]);
  sess(Denver,'driver-disconnect',null,cs(),[
    C("Jasmine P.","Hi, I'm trying to message my driver and it says 'Unable to connect to chat'"),
    B("I'm sorry! That's unusual. Let me check. Order number?"),
    C("Jasmine P.","ZE-66800"),
    A("Hi Jasmine! There's a temporary Sendbird connectivity issue in the Denver area affecting some users right now. Your driver is still en route."),
    C("Jasmine P.","How do I reach them if the chat is down?"),
    A("You can't directly, but I'm your line — what do you need them to know?"),
    C("Jasmine P.","The intercom at my building is broken. They need to call my cell: 720-555-0192"),
    A("Got it — I've relayed your cell number to the driver. They'll call upon arrival."),
    C("Jasmine P.","Thank you, you're a lifesaver")
  ]);
  sess(Chicago,'driver-disconnect',null,cs(),[
    C("Derek W.","Is the driver chat down? I've been trying to open it and it just spins"),
    B("I'm sorry for the trouble! Let me look. Order number?"),
    C("Derek W.","ZE-67120"),
    A("Hi Derek! There's a brief service interruption affecting chat in parts of Chicago right now. Your order is unaffected and your driver is on the way."),
    C("Derek W.","Okay good. Just let them know to leave it outside suite 400"),
    A("Relayed! Suite 400 drop. Driver confirmed."),
    C("Derek W.","Thanks")
  ]);
  sess(NYC,'driver-disconnect',null,cs(),[
    C("Natalie C.","My chat shows messages as 'pending' and they're not sending"),
    B("I'm sorry! Let me investigate. Order number?"),
    C("Natalie C.","ZE-67580"),
    A("Hi Natalie! I can see your messages are queued — there's a brief message routing delay. They'll deliver once resolved, but I can send them directly now as a backup."),
    C("Natalie C.","Yes please. I need the driver to use the freight elevator, not the main lobby."),
    A("Freight elevator, noted — sent to driver. They'll go that route."),
    C("Natalie C.","Thank you! The doorman gets annoyed when delivery drivers use the main entrance haha"),
    A("Ha! Completely understand. All set.")
  ]);

  // ── 3. PUSH NOTIFICATION FAILURE ─────────────────────── ~60 msgs
  sess(NYC,'push-notification',null,cs(),[
    C("Alex M.","I waited by the door for 20 minutes. The app never told me my food was outside. It was cold."),
    B("I'm so sorry! Let me get an agent immediately."),
    C("Alex M.","Order ZE-68001"),
    A("Hi Alex — push notification wasn't delivered when your driver marked arrival. This is entirely on us."),
    C("Alex M.","I would have been right there! I was literally in the hallway."),
    A("I'm so sorry. Full refund processing now plus a $15 credit for the experience."),
    C("Alex M.","Thank you for handling this quickly."),
    A("Of course. Escalating to engineering — this can't keep happening.")
  ]);
  sess(SLC,'push-notification',null,cs(),[
    C("Tiffany B.","Your app never notified me my food arrived. Driver just drove away I think."),
    B("Oh no! Let me get an agent. Order number?"),
    C("Tiffany B.","ZE-68400"),
    A("Hi Tiffany! I can confirm push notification failed on our end. Your driver marked arrival at 7:02pm. Let me check if food was left."),
    C("Tiffany B.","I went outside and it's sitting on the steps. It was cold."),
    A("I'm so sorry. Full refund and $10 credit applied. And I've flagged the notification failure to engineering."),
    C("Tiffany B.","Why does the notification even fail?"),
    A("Honestly, it's a retry logic issue that should have been caught. I can't give you a great answer on why, only that we're fixing it.")
  ]);
  sess(Denver,'push-notification',null,cs(),[
    C("Carlos R.","I got no notification my driver arrived. Food was sitting outside for who knows how long."),
    B("I'm really sorry! Agent coming. Order number?"),
    C("Carlos R.","ZE-68899"),
    A("Hi Carlos! Push notification failure on our side — the driver's status update triggered but the notification pipeline had an error."),
    C("Carlos R.","This is the kind of thing that makes me want to switch to DoorDash"),
    A("I completely understand. That's a fair response to a frustrating experience. Full refund, $12 credit, and I'm escalating this personally."),
    C("Carlos R.","Okay. Thank you for being direct.")
  ]);
  sess(Austin,'push-notification',null,cs(),[
    C("Stephanie H.","The app didn't tell me my order arrived. I just went to the door randomly and there it was."),
    B("I'm sorry to hear that! Can I get your order number?"),
    C("Stephanie H.","ZE-69100"),
    A("Hi Stephanie! Your push notification didn't fire — this is a known issue we're actively working on in Austin. I've flagged your session."),
    C("Stephanie H.","Is it an app issue or a phone issue?"),
    A("App-side — it's not your phone settings. Thank you for checking. $5 credit added for the inconvenience."),
    C("Stephanie H.","Okay. Just glad I got it. Thank you!")
  ]);
  sess(NYC,'push-notification',null,cs(),[
    C("Anthony K.","My whole order history is in the app but I got zero notification on this delivery. First time this has happened."),
    B("I'm so sorry! Order number?"),
    C("Anthony K.","ZE-69430"),
    A("Hi Anthony! I can see your notification history and this is the first time. The push retry failed once and didn't cycle again, which is the bug."),
    C("Anthony K.","My phone settings are correct I assume?"),
    A("Yes — checked and your notification permissions are all enabled. This was our failure. $8 credit added."),
    C("Anthony K.","Thank you. Hopefully a one-time thing.")
  ]);
  sess(LA,'push-notification',null,cs(),[
    C("Rachel D.","Hi — I think I missed my delivery because the app didn't notify me? Can you check?"),
    B("Of course! Let me look. Order number?"),
    C("Rachel D.","ZE-69800"),
    A("Hi Rachel! Yes — your driver marked arrival at 6:22pm, no notification was sent to your device. Food is still on your doorstep per driver notes."),
    C("Rachel D.","Oh! I'll go check right now"),
    A("Yes, please do! Driver noted it's behind the planter by your front door."),
    C("Rachel D.","Got it! It's there! Thank you!"),
    A("So relieved! I'm still applying a $5 credit for the notification failure — you shouldn't have had to ask.")
  ]);
  sess(Chicago,'push-notification',null,cs(),[
    C("Michael B.","I never got a 'food arriving soon' notification or a 'delivered' notification. The food just appeared."),
    B("I'm sorry for the silent delivery! Let me check. Order number?"),
    C("Michael B.","ZE-70100"),
    A("Hi Michael! Both the ETA and arrival notifications failed. This is a double failure and it shouldn't happen."),
    C("Michael B.","I'd actually love a notification that says my driver is close, not just arrived. Do you have that?"),
    A("We do — it's called 'driver nearby' and it should have fired at the 5-minute mark. Neither that nor arrival fired. Escalating both. $6 credit applied."),
    C("Michael B.","Cool, thanks for explaining it clearly")
  ]);
  sess(SF,'push-notification',null,cs(),[
    C("Ashley T.","Zero push notifications for this entire order. Not 'driver assigned', not 'arriving', nothing."),
    B("That's very unusual! Let me escalate this. Order number?"),
    C("Ashley T.","ZE-70600"),
    A("Hi Ashley — I can see your notification settings are fine, but our system shows a push token error on our end. This is a backend failure."),
    C("Ashley T.","I have app notifications enabled for Zestly, checked twice."),
    A("Yes — this is not your settings. I'm escalating with engineering ticket ID. Full credit of $10 applied."),
    C("Ashley T.","Thank you. I hope you fix it for others too")
  ]);

  // ── 4. AI BOT ESCALATION FAILURE ─────────────────────── ~90 msgs
  sess(SLC,'bot-escalation',null,cs(),[
    C("Daniel W.","Your bot kept asking me to repeat myself. I said 'wrong order' three times and gave up."),
    B("I'm really sorry to hear that! Let me connect you with a live agent."),
    C("Daniel W.","Order ZE-71200"),
    A("Hi Daniel — I'm so sorry the bot couldn't resolve this. Can you tell me what you received vs. what you ordered?"),
    C("Daniel W.","I ordered pad thai and got some kind of fried rice. Completely different."),
    A("Got it. I'm processing a replacement order now and it will be expedited."),
    C("Daniel W.","And the bot asking me to 'rephrase' my request 3 times was really annoying"),
    A("100% fair feedback. Flagging 'wrong order' intent for bot retraining. You shouldn't have to fight to get help.")
  ]);
  sess(Phoenix,'bot-escalation',null,cs(),[
    C("Amanda P.","Your chatbot is useless. I've been talking to it for 10 minutes and it hasn't helped."),
    B("I'm so sorry! Connecting you to a live agent right now."),
    C("Amanda P.","Finally. Order ZE-71800"),
    A("Hi Amanda! I'm here. What's going on?"),
    C("Amanda P.","My order is missing the entire drink I ordered. The bot kept offering me a coupon instead of actually fixing it."),
    A("That's not the right resolution. I'm refunding the drink cost now and sending a free drink credit on your next order."),
    C("Amanda P.","Thank you. The bot needs serious work."),
    A("I completely agree. Logging this conversation for the bot team.")
  ]);
  sess(Denver,'bot-escalation',null,cs(),[
    C("Christopher N.","The bot couldn't understand what I meant by 'my food hasn't shown up'"),
    B("Oh no! Let me connect you with a person right away."),
    C("Christopher N.","ZE-72100"),
    A("Hi Christopher! I'm on it. When was your delivery expected?"),
    C("Christopher N.","6:30pm. It's now 7:05 and nothing."),
    A("I can see your driver's GPS stopped updating at 6:48 — there may have been an issue. I'm reaching out to dispatch now."),
    C("Christopher N.","Thank you. The bot just kept asking if I wanted to 'check my order status' which told me nothing useful."),
    A("Bot limitations are real — I've flagged this intent. Dispatch is responding now.")
  ]);
  sess(Nashville,'bot-escalation',null,cs(),[
    C("Lauren S.","I asked your bot to cancel my order and it started a whole survey instead"),
    B("I'm so sorry! Escalating now."),
    C("Lauren S.","Order ZE-72500"),
    A("Hi Lauren! Can you still cancel? I can process it immediately."),
    C("Lauren S.","Please yes. I accidentally placed it at the wrong address."),
    A("Order cancelled. Full refund processing. You're all set."),
    C("Lauren S.","Thank goodness. Please fix the bot — it should know what 'cancel my order' means."),
    A("You're right — that's a basic intent. I've flagged it with the bot team.")
  ]);
  sess(Phoenix,'bot-escalation',null,cs(),[
    C("Nathan K.","Bot couldn't help with a missing item. Just kept asking me to 'rate my experience'"),
    B("Connecting you with a live agent immediately."),
    C("Nathan K.","Order ZE-72900. The fries were missing."),
    A("Hi Nathan! Fries missing — I'll refund those now. Side items missing from bag is something the restaurant should flag, but I'll handle it."),
    C("Nathan K.","The bot thing is really bad. It's so frustrating when you just want help."),
    A("I hear you. It's a real pain point. Refund of $3.49 processed. Anything else?"),
    C("Nathan K.","No that's it. Thank you")
  ]);
  sess(Denver,'bot-escalation',null,cs(),[
    C("Hannah R.","I tried to tell the bot my order was really late and it offered me tips on 'how to track my order'"),
    B("I'm so sorry about that. Getting a live agent for you now."),
    C("Hannah R.","Order ZE-73200"),
    A("Hi Hannah! Your order is running about 28 minutes late due to a restaurant delay. I should have been connected to you sooner."),
    C("Hannah R.","The bot could have just told me that. Or anything useful."),
    A("You're right — context-aware delay messaging is something the bot should handle. I've flagged it. $5 credit for the wait."),
    C("Hannah R.","Thank you for actually explaining what happened")
  ]);
  sess(Mpls,'bot-escalation',null,cs(),[
    C("Joshua F.","The bot asked me if I wanted to 'start a new order' when I was trying to get help with my current one"),
    B("I'm really sorry! That's a clear bot routing failure. Live agent now."),
    C("Joshua F.","Order ZE-73600. My food arrived but completely wrong."),
    A("Hi Joshua — completely wrong order, from same restaurant? Let me look at what you got vs. ordered."),
    C("Joshua F.","I ordered a veggie burger. Got a beef burger. I don't eat meat."),
    A("I'm so sorry. This is serious — I'm sending a correct replacement order immediately at no charge. The restaurant will be flagged."),
    C("Joshua F.","Thank you. And please fix the bot. It wasted 8 minutes of my time."),
    A("Noted — 8 minutes. That's too long. Logged for bot team.")
  ]);
  sess(LA,'bot-escalation',null,cs(),[
    C("Kayla J.","Hi I need a refund. The bot said it would process it but nothing happened."),
    B("Let me get a live agent to confirm. Order number?"),
    C("Kayla J.","ZE-74000"),
    A("Hi! I can see the bot initiated a refund flow but it didn't complete. Processing it now manually."),
    C("Kayla J.","What was the issue?"),
    A("The bot's refund pathway has a timeout error that we're patching this week. Your refund will show in 3-5 business days."),
    C("Kayla J.","Okay. That's annoying but thank you for fixing it.")
  ]);
  sess(NYC,'bot-escalation',null,cs(),[
    C("Brandon S.","Your bot said 'I don't understand' 4 times in a row. This is embarrassing."),
    B("I am so sorry. Connecting you immediately."),
    C("Brandon S.","Order ZE-74300. I had a driver safety concern I wanted to report."),
    A("Hi Brandon — driver safety concerns should never hit the bot wall. This is a priority. What happened?"),
    C("Brandon S.","My driver was driving erratically and seemed to be on their phone the whole time."),
    A("Thank you for reporting this. I'm flagging the driver's ID right now and this will be reviewed by our safety team within 24 hours."),
    C("Brandon S.","Good. That's all I wanted. Please route safety issues straight to humans."),
    A("Completely agree. Escalating this as a routing failure today.")
  ]);

  // ── 5. CROSS-DEVICE SESSION CONFLICT ─────────────────── ~40 msgs
  sess(NOLA,'cross-device',null,cs(),[
    C("Jasmine P.","I ordered on my laptop but when I switched to my phone the messages I sent aren't there"),
    B("I'm sorry! That's a cross-device sync issue. Let me connect you with an agent."),
    C("Jasmine P.","Order ZE-75000"),
    A("Hi Jasmine! Yes — this is a known issue where messages don't sync across devices in real time during active deliveries."),
    C("Jasmine P.","So my driver never saw my messages from my phone?"),
    A("Not automatically, no. What did you send? I can relay them directly."),
    C("Jasmine P.","I told them to go to the side gate, not the front."),
    A("Relayed to driver directly. They confirmed — going to side gate now."),
    C("Jasmine P.","Thank you! That was stressful.")
  ]);
  sess(LA,'cross-device',null,cs(),[
    C("Derek W.","I'm seeing two different chat histories on my phone vs my tablet. Which one is the driver seeing?"),
    B("That's a syncing issue! Let me get an agent."),
    C("Derek W.","Order ZE-75300"),
    A("Hi Derek! Both histories are partial — your driver is seeing a combined server-side view, but it might not match either of what you're seeing."),
    C("Derek W.","That's... not great. Will they get my delivery instructions?"),
    A("I've just sent your instructions directly from our side. What are they?"),
    C("Derek W.","Apartment 8, call cell not buzzer. My number is 310-555-0847"),
    A("Got it — apartment 8, call 310-555-0847. Sent and confirmed by driver."),
    C("Derek W.","Thank you. Please fix the sync issue, it's confusing.")
  ]);
  sess(NOLA,'cross-device',null,cs(),[
    C("Natalie C.","My app glitched when I switched from safari to the app. Now there's no chat with my driver."),
    B("I'm sorry! Agent connecting now."),
    C("Natalie C.","ZE-75600"),
    A("Hi Natalie! A browser-to-app switch can sometimes drop the session. Your order is still active and your driver is 9 minutes out."),
    C("Natalie C.","Can I still reach them?"),
    A("I can relay for you. Anything they need to know?"),
    C("Natalie C.","To knock, not ring. The bell is broken."),
    A("Sent! Driver confirmed — they'll knock.")
  ]);
  sess(Chicago,'cross-device',null,cs(),[
    C("Christopher N.","I logged in on a different phone and now all my delivery messages are gone"),
    B("I'm sorry! That's a session issue. Agent connecting."),
    C("Christopher N.","ZE-75900. Is my order still coming?"),
    A("Hi! Yes, your order is active and 7 minutes out. The message history doesn't transfer between devices mid-delivery right now."),
    C("Christopher N.","I sent instructions and I don't know if they went through"),
    A("Tell me what you sent and I'll verify and relay."),
    C("Christopher N.","Leave at door, building entrance code is 1204#"),
    A("Relayed — building code 1204#, leave at door. Driver confirmed."),
    C("Christopher N.","Perfect. Thanks")
  ]);
  sess(SF,'cross-device',null,cs(),[
    C("Lauren S.","My messages are showing as 'sent' but when I check on my laptop they're not there"),
    B("That's a device sync issue. Can I get your order number?"),
    C("Lauren S.","ZE-76200"),
    A("Hi Lauren! Device sync during live orders is inconsistent — messages are on one device's local queue but may not have uploaded yet."),
    C("Lauren S.","Is my driver getting them?"),
    A("Checking... they received 2 messages. The 3rd is queued. What did message 3 say?"),
    C("Lauren S.","I need the driver to use the elevator to the 4th floor, not the stairs"),
    A("Sent directly to driver. 4th floor elevator. Confirmed.")
  ]);
  sess(NYC,'cross-device',null,cs(),[
    C("Hannah R.","I was chatting with my driver on the app and then my phone died. Charged and came back and the session is gone."),
    B("I'm sorry! That's tough timing. Agent connecting."),
    C("Hannah R.","Order ZE-76500"),
    A("Hi Hannah! When the app closed mid-session it didn't reconnect cleanly. Your delivery is still active — driver is 3 minutes out."),
    C("Hannah R.","Okay I just need them to know it's a white house with a red door"),
    A("Sent! White house, red door. Driver says they can see it from the street."),
    C("Hannah R.","Haha perfect. Thank you!")
  ]);

  // ── 6. CONVENIENCE RETAIL — DEMAND SIGNAL ────────────── ~150 msgs
  const convRetailConvos = [
    ["Can you stop at CVS on the way and grab me some ibuprofen? I'll add $5 to the tip.",
     "I appreciate you asking! Unfortunately Zestly drivers are only able to pick up orders from our restaurant partners right now. Is there anything else I can help with?",
     "That's a shame. This would be such a useful feature.",
     "Totally hear you — I'm flagging your feedback for our product team. A lot of customers have been asking for similar things!"],
    ["Is there any way to pick up a RedBull from 7-Eleven while you're driving? I'll Venmo you extra.",
     "Hey! That's a creative ask but unfortunately we can't add stops outside restaurant orders right now.",
     "Dang. DoorDash does this. Just saying.",
     "Noted — and honestly good point. I'll flag this for the team."],
    ["Could you swing by Walgreens? Just need some cold medicine, the store's literally on the same street.",
     "Hi! Unfortunately drivers can only fulfill the order as placed — no additional stops at this time.",
     "Okay understood. Worth asking though!",
     "Of course! These requests help us understand what to build next."],
    ["I ordered food but I'm also out of paper towels — is there any way to add a quick store stop?",
     "I wish! We don't support additional stops during delivery yet. Just the restaurant order.",
     "You should add that feature. I'd pay for it.",
     "Noted — adding your vote to the convenience stop feature request!"],
    ["Do Zestly drivers pick up stuff from convenience stores? Like a bag of chips or a drink?",
     "Not currently! We're a restaurant delivery platform right now, but we hear this a lot.",
     "You're missing out. I'd use it all the time.",
     "Appreciate the feedback — truly. Our product team reviews these."],
    ["Can Zestly drivers do quick pharmacy stops? Asking because I need NyQuil and it's right on the route.",
     "Hi! Unfortunately we can't do pharmacy stops at the moment — only restaurant orders.",
     "That would be SO useful. Like I literally cannot leave my house.",
     "I completely understand — and that's exactly the kind of use case we want to serve. Flagging this."],
    ["Is there a way to add a non-restaurant stop? I'd pay a small fee.",
     "Not yet, but you're not the first to ask! We're tracking this type of request.",
     "Seems like something you should just build honestly",
     "We hear you! Your feedback goes directly to the product team."],
    ["Can the driver grab a bottle of Gatorade from the gas station? I'll tip extra.",
     "I appreciate the tip offer! We can't add gas station stops right now unfortunately.",
     "Okay. A Gatorade delivery service would be legendary though",
     "Ha! I'm noting that down. Legendary indeed."],
    ["Could your driver pick up lottery tickets from the gas station? Worth asking lol",
     "Ha! Unfortunately no gas station stops — but I love the spirit of the ask.",
     "You only live once right",
     "Exactly. Flagging this as an enthusiastic feature request."],
    ["I need some cold medicine before my food arrives. Can driver make a stop?",
     "Unfortunately drivers can't make additional stops at this time. Just the restaurant order.",
     "This is 2026 why can't I get Tylenol delivered with my food lol",
     "Ha — fair point. Logging this one for the team."],
    ["Can driver grab some allergy meds from CVS? It's literally one block away.",
     "I hear you! We can't support add-on stops yet. One-stop delivery is something many customers want.",
     "Okay. Feel free to launch that ASAP.",
     "I'll pass that urgency along!"],
    ["Just ordered dinner but realized I need Gatorade too. Any chance of a store stop?",
     "Unfortunately not right now — drivers can only handle the restaurant order.",
     "Got it. Would 100% pay for that feature.",
     "Noted! Convenience add-ons are definitely on the product radar."],
    ["Is there a premium tier where the driver can pick up other stuff too?",
     "Not currently, but this is a really common request! No premium option exists yet.",
     "You should make one. I'd subscribe.",
     "That's really helpful to hear. Logged for the product team."],
    ["My cat needs food and I forgot to order from a pet store. Could the driver pick something up?",
     "Aw! Unfortunately no pet store stops for now — just restaurant orders.",
     "Poor timing. Can you add pet stores to the app?",
     "Pet store delivery — noted! It's a great add to the feature request list."],
    ["Can drivers do errands? Like a convenience store run?",
     "Not at the moment — but we get this question a lot! Errands/convenience is definitely something the team is looking at.",
     "Good. Because that would be amazing.",
     "Agreed. I'll make sure this feedback is on record."],
  ];

  const convRetailMkts = [Denver,Denver,Denver,Nashville,Nashville,Mpls,Phoenix,Phoenix,SLC,Baltimore,NOLA,NYC,LA,Chicago,SF];
  convRetailConvos.forEach((lines, i) => {
    const mkt = convRetailMkts[i % convRetailMkts.length];
    const name = pick(names);
    sess(mkt,'demand-signal','convenience-retail',null,[
      C(name, lines[0]),
      B(lines[1]),
      C(name, lines[2]),
      A(lines[3])
    ]);
  });
  // Additional shorter signal sessions to round up volume
  const crShort = [
    ["Is there any way a driver can grab me a bottle of wine from Total Wine on the way?","Not currently — we only pick up from restaurant orders!","Ugh. That would be so useful.","Logging this one for the product team."],
    ["Can the driver do a quick CVS run? Just need band-aids.","No additional stops at the moment, but I hear this a lot.","Okay noted. Just asking!","Totally worth asking — helps us know what to build."],
    ["Do you guys offer any convenience item delivery?","Not yet! But convenience delivery is one of our most-requested features.","Please build it soon.","On the list!"],
    ["I need deodorant lol. Can the driver grab it at Walgreens?","Haha! Unfortunately no Walgreens stops right now.","Worth a shot!","Always worth asking. Noted!"],
    ["Can driver add a gas station stop for drinks?","No gas station stops currently — just restaurant orders.","Got it. Add it to the features list.","Already there!"],
    ["I'd pay like $3 extra for the driver to pick up something small at a store.","That's a great model — not available yet but a common request!","Get on it :)","Ha! Passed along to the product team."],
    ["Asking for a friend: can Zestly drivers do convenience pickups?","Not yet! But convenience stops are something many customers want.","Cool okay. The friend will survive.","Ha! Logging the ask."],
    ["Is there a way to request a non-food item through the app?","Not currently — just restaurant menu items.","Bummer. Would be useful.","Flagged for our product team!"],
    ["Can driver grab some ibuprofen from Dollar General on the route?","Unfortunately we can't support add-on stops right now.","Okay. Just thought I'd try.","Good call — these requests do get reviewed."],
    ["Random: any chance driver could grab ice from a nearby store?","Ha! Not available but that's a fun one. No stops outside the restaurant.","Dang. The ice was clutch.","Noted for the feature log!"],
    ["I'll tip $10 extra if the driver grabs me a Celsius energy drink from a 7-Eleven","That's very generous! We can't authorize those stops right now though.","Fine fine. Worth the shot.","It was worth it — and we noted the request."],
    ["Could driver get me some Tums? My food is going to wreck me lol","Ha! No pharmacy stops unfortunately.","Haha fair. Noted!","Noted with a laugh."],
    ["Do any drivers do convenience delivery on the side?","Hm — drivers are contracted through Zestly so we can't coordinate side arrangements.","Makes sense. Just thought I'd ask.","Appreciated! Keeps us honest about what customers want."],
    ["I would pay a monthly fee for a Zestly plan that includes convenience stops","That's a fascinating model — not available yet but super helpful framing for the product team.","Just build it and take my money honestly","Ha! Message received and logged."],
    ["Adding to the list of people who want convenience stop delivery","Ha! Your name is on the list. Officially.","Good. Make it happen.","We're trying!"],
  ];
  const crMkts2 = [Denver,Nashville,Denver,Mpls,Phoenix,NYC,LA,Chicago,SF,Austin,Denver,Nashville,Baltimore,NOLA,SLC];
  crShort.forEach((lines, i) => {
    const mkt = crMkts2[i % crMkts2.length];
    const name = pick(names);
    sess(mkt,'demand-signal','convenience-retail',null,[
      C(name, lines[0]),
      B(lines[1]),
      C(name, lines[2]),
      A(lines[3])
    ]);
  });

  // ── 7. GROCERY & FRESH — DEMAND SIGNAL ───────────────── ~75 msgs
  const groceryConvos = [
    ["Could the driver grab a carton of eggs from the store on the way? I figured I'd ask.","Hi! Unfortunately we only pick up from restaurant partners — no grocery stops.","Fair enough. You guys should add grocery though.","Totally noted — grocery is one of our top feature requests."],
    ["Is there a way to add a grocery stop? Just need milk and bread.","Not currently — we're restaurant delivery only right now.","I'd use Zestly for everything if you did groceries.","That's the goal someday! Flagging your interest."],
    ["You guys should do grocery delivery. I'd switch from Instacart immediately.","Ha! Not there yet but that's great to hear. Flagging this for the team.","I'm serious. Please build it.","Message received and logged."],
    ["My driver is near Whole Foods — any chance they can grab avocados?","I love the initiative! No grocery stops at the moment though.","You're missing a massive opportunity.","You might be right — logging this seriously."],
    ["Can I attach a small grocery list alongside my food order?","Not yet — just restaurant menus for now.","Even just a few staples would be great.","Completely hear you. Product team gets this feedback."],
    ["Can driver add a quick grocery run? I already tip 20%.","Super generous! We can't support grocery runs yet unfortunately.","I'd tip 30% for that tbh","Ha! Flagged with the tip offer included."],
    ["I wish Zestly did groceries. I'd never use Instacart again.","We hear that a lot! Grocery is a very common request.","Then please do something about it.","Working on it — your feedback helps."],
    ["Would love it if you partnered with a local grocery store.","That's a great idea — local grocery partnerships are something the team thinks about.","Make it happen!","On it — or trying to be."],
    ["Is this only for restaurant food or can I order produce too?","Just restaurants for now — but produce delivery is a common ask.","DoorDash does it. Just saying.","Noted, with the competitive context."],
    ["Could you add Trader Joe's or Whole Foods to the app?","We don't have grocery store partners yet — just restaurants.","Please do this. I would order every day.","Every day! That's noted."],
    ["Can I order fresh fruit alongside my lunch order?","Not through Zestly currently — restaurant menus only.","So inefficient. Fix it.","Working on it!"],
    ["Do you guys plan to do grocery? Asking before I sign up for Instacart.","Grocery isn't live yet, but it's something many customers ask about.","Okay. Depends how long 'yet' means.","Fair. I'll flag that urgency."],
    ["I ordered Thai food and I'm also out of rice at home. Could driver grab some?","Ha! No grocery stops yet unfortunately.","Please solve this problem for me","Consider it noted!"],
    ["Can driver pick up butter from the corner store? It's literally on the way.","No additional stops from our side unfortunately.","This is a solvable problem, Zestly.","Ha! You're right. Flagging it."],
    ["I want to order groceries from you. When will that be available?","No timeline I can share yet — but demand is clearly there!","Sooner than later please.","Noted with urgency!"],
  ];
  const grMkts = [NYC,NYC,LA,NYC,LA,NYC,SF,NYC,Chicago,LA,SF,Chicago,Austin,NYC,LA];
  groceryConvos.forEach((lines, i) => {
    const mkt = grMkts[i % grMkts.length];
    const name = pick(names);
    sess(mkt,'demand-signal','grocery-fresh',null,[
      C(name, lines[0]),
      B(lines[1]),
      C(name, lines[2]),
      A(lines[3])
    ]);
  });

  // ── 8. ON-DEMAND CHEF — DEMAND SIGNAL ────────────────── ~30 msgs
  const chefConvos = [
    ["This is probably a weird ask but — do you have anything where a chef comes to your place and cooks? Like a private chef?","Ha, not a weird ask at all! We don't offer that yet but it's an interesting idea.","I'd pay a lot for that honestly. Especially for dinner parties.","Noted — and the dinner party context is really helpful framing."],
    ["Is there a service through Zestly where I can hire someone to cook at my home? I'm hosting people Saturday.","We don't have that yet unfortunately! Home chef booking isn't on the app.","Okay. I'll use a different service but you should consider it.","Definitely passing this along. Saturday dinner party use case — logged."],
    ["I'm throwing a dinner party — is there any way to get a chef through the app?","Not yet! But private chef experiences are actually something we've heard interest in.","Good. Make it a thing.","Working on understanding the demand for it. Your input helps!"],
    ["Do you have any premium tiers? Like a personal chef or something for special occasions?","No premium chef tier yet — just restaurant delivery.","You should. People would pay.","Noted — and high-value customers asking is important signal for the team."],
    ["What if Zestly had a 'home cook' option? Local chefs, you come cook for me.","That's a really interesting model — we don't have it but it's a creative vision.","I'd genuinely use that every week.","Every week! That's helpful to hear."],
    ["Not sure if this is possible — private chef booking through the app? Even just for birthdays.","Not available yet but birthday/event chef booking is an interesting use case.","I'd pay $200+ for a dinner party chef. Just saying.","$200+ — that's useful framing. Logging this."],
  ];
  const chefMkts = [SF,NYC,SF,NYC,SF,SF];
  chefConvos.forEach((lines, i) => {
    const mkt = chefMkts[i % chefMkts.length];
    const name = pick(names);
    sess(mkt,'demand-signal','on-demand-chef',null,[
      C(name, lines[0]),
      B(lines[1]),
      C(name, lines[2]),
      A(lines[3])
    ]);
  });

  // ── 9. GENERAL / SMOOTH SESSIONS ──────────────────────── ~200 msgs
  const smoothSessions = [
    [Denver,  [C("Tyler B.","Where's my driver?"), B("Your driver is 4 minutes away!"), C("Tyler B.","Great thanks"), D("Ray P.","Almost there!"), C("Tyler B.","👍")]],
    [Nashville,[C("Maya R.","Can I change my order?"), B("Once the restaurant confirms it may not be possible — let me check."), A("Hi! Restaurant confirmed, changes aren't possible at this stage. I can cancel if needed."), C("Maya R.","No it's okay, I'll deal. Thanks!")]],
    [NYC,     [C("Sam W.","How long does delivery usually take in my area?"), B("In New York we typically see 25-35 minutes for most orders. Your current order shows 22 min remaining!"), C("Sam W.","Perfect, thanks")]],
    [LA,      [C("Ava M.","Can I add a note to tip my driver in cash?"), B("Absolutely! You can add a delivery note for your driver. I'll add it now."), C("Ava M.","Please say 'cash tip in envelope at door'"), A("Note added! Your driver will see it."), C("Ava M.","Thank you!")]],
    [SF,      [C("Liam K.","My food arrived hot and perfect. Just wanted to say something nice for once lol"), A("Ha! Thank you so much — this genuinely made my day. I'll pass it to your driver too."), C("Liam K.","Please do!")]],
    [Chicago, [C("Olivia T.","Is there a way to track my driver on a map?"), B("Yes! Open your active order and tap 'Track Driver' to see live GPS."), C("Olivia T.","Oh I see it! Cool, thanks")]],
    [Austin,  [C("James O.","My driver just texted me through the app! First time that's happened. Very smooth."), A("Love to hear it! Driver-customer chat is one of our favorite features."), C("James O.","It really makes a difference.")]],
    [Denver,  [C("Ryan S.","Food just arrived, driver was super friendly. 5 stars."), A("That's wonderful to hear! I'll make sure that gets passed back."), C("Ryan S.","10/10 experience")]],
    [Nashville,[C("Emma F.","Hi, quick question — can I leave a tip after the order is delivered?"), B("Yes! You can tip up to 24 hours after delivery in the app."), C("Emma F.","Oh perfect. I didn't have cash on me.")]],
    [NYC,     [C("Mason R.","Driver just arrived but I'm in a meeting. Can they wait 3 minutes?"), A("Hi! Let me reach out to them."), D("Carlos M.","No problem, I'll wait!"), C("Mason R.","Thank you so much")]],
    [SLC,     [C("Ella N.","My food arrived exactly when they said it would. Impressive."), A("We love hearing that! Your driver really delivered — literally!"), C("Ella N.","Haha yes they did. Really happy with Zestly.")]],
    [Phoenix, [C("Priya K.","Can I request the same driver I had last time? He was great."), B("You can favorite a restaurant but we don't support driver preference yet. I'll note this as a feature request!"), C("Priya K.","Please add it! I gave him 5 stars.")]],
    [Baltimore,[C("Brandon S.","The estimated time was accurate to the minute. How?"), A("Ha! Great logistics + great driver. Not always this precise but glad it worked out!"), C("Brandon S.","Seriously impressed.")]],
    [LA,      [C("Kayla J.","I accidentally closed the app — is my order still coming?"), B("Yes! Closing the app doesn't affect your order. It's still on the way."), C("Kayla J.","Oh good, panicked for a second. Thanks!")]],
    [Chicago, [C("Derek W.","Is there a subscription service?"), B("Yes! Zestly Pass gives you free delivery and other perks. Check the app under 'Account'."), C("Derek W.","Oh nice, didn't know about that. Will check it out.")]],
    [SF,      [C("Natalie C.","My driver messaged me unprompted to say they're running 5 minutes late. That's really good."), A("We train our drivers to communicate proactively! Sounds like yours is great."), C("Natalie C.","Appreciated. Really makes a difference.")]],
    [Denver,  [C("Logan H.","Just a quick thanks — the CS team has been really helpful today."), A("Thank you so much for saying that! Truly means a lot. Enjoy your meal!"), C("Logan H.","Will do!")]],
    [Nashville,[C("Jackson L.","Can I change the delivery address?"), A("Yes, if the restaurant hasn't started preparing. Your order just went in — I can update it now. New address?"), C("Jackson L.","2201 Belmont Blvd Nashville"), A("Updated! Driver will head to 2201 Belmont Blvd."), C("Jackson L.","Thank you!")]],
    [NYC,     [C("Isabella W.","Can I order for someone else at a different address?"), B("Yes! Just enter their address at checkout instead of yours."), C("Isabella W.","Easy, thank you"), B("Enjoy gifting!")]],
    [Austin,  [C("Lucas G.","How do I get a receipt?"), B("Receipts are emailed automatically. Check your inbox — or the 'Order History' tab in the app."), C("Lucas G.","Found it in the app! Thanks")]],
    [NOLA,   [C("Christopher N.","Driver just left a hand-written thank you note with my food. That is so sweet."), A("Oh wow — that's going above and beyond! I love hearing this. Thank you for sharing."), C("Christopher N.","Give that driver a raise honestly")]],
    [Mpls,   [C("Mia P.","I've been using Zestly for 6 months and I finally just discovered the driver chat. Game changer!"), A("Ha! Yes — it's one of our best features. Better late than never!"), C("Mia P.","Why isn't it more prominent in the UI??"), A("Noted — we'll pass that to the design team!")]],
    [SanDiego,[C("Emily G.","Just placed my first order! Anything I should know?"), B("Welcome! Your driver will be assigned shortly. You can chat with them through the order screen. Enjoy!"), C("Emily G.","Thanks! Excited to try it.")]],
    [LA,     [C("Anthony K.","My usual restaurant isn't on Zestly. Can I suggest it?"), B("Yes! Use 'Suggest a Restaurant' in the app menu. The team reviews all suggestions."), C("Anthony K.","Just submitted. Hope it works!")]],
    [NYC,    [C("Rachel D.","Order just arrived and the driver was amazing. Navigated our complex building perfectly."), A("That's so great to hear! Building navigation is one of the harder parts of the job. Your driver did great."), C("Rachel D.","5 stars without hesitation.")]],
    [Denver, [C("Jordan T.","My order arrived early! That never happens."), A("Ha! Great driver + clear roads. Don't expect it every time ;)"), C("Jordan T.","I'll take it!")]],
    [SF,     [C("Ashley T.","How do I know when my driver is assigned?"), B("You'll get a push notification + the map in your order screen will show the driver pin. Usually within 2-3 minutes of ordering!"), C("Ashley T.","Got the notification just now! Great timing haha")]],
    [Chicago,[C("Daniel W.","My delivery came with extra sauce packets I didn't ask for. Driver is a saint."), A("Ha! Sounds like a keeper. Extra sauce is always the right call."), C("Daniel W.","Truly. 5 stars.")]],
    [Austin, [C("Amanda P.","I love that I can track my driver in real time. Other apps don't do this as well."), A("Thank you! Our Sendbird-powered tracking is one of our favorite features."), C("Amanda P.","Keep doing that.")]],
    [Nashville,[C("Michael B.","Food arrived hot, good time, friendly driver. Nothing to complain about!"), A("Music to our ears. Thank you!"), C("Michael B.","Keep it up!")]],
  ];
  smoothSessions.forEach(([mkt, turns]) => {
    sess(mkt,'general',null,null,turns);
  });

  // ── 10. ADDITIONAL DEMAND SIGNAL SESSIONS (grocery + chef) ── ~60 msgs
  const groceryExtra = [
    ["Can I order from Whole Foods through Zestly?","Just restaurants currently — no grocery stores yet.","Come on, you're literally in NYC. Partner with someone.","Ha — fair challenge. Logging it."],
    ["I'd order groceries from Zestly every single day if you offered it.","Every day!! Flagging this with that exact quote for the product team.","I'm serious. Every. Day.","I believe you. Noted."],
    ["Any chance of a grocery add-on at checkout? Even just essentials.","Not yet but 'essentials add-on' is a great framing — flagging it.","Even like bread and eggs. That's all I need.","Bread and eggs. Got it. On the list."],
    ["Can driver swing by Trader Joe's on the way? I need flowers.","Aw! No grocery stops currently though.","For a date. Very time-sensitive.","Ha! I understand the urgency. No stops sadly. Good luck on the date!"],
    ["I just want someone to bring me produce. Is that so much to ask.","It really isn't! Not available yet but this is a top request.","Please make it happen before summer.","Before summer — noted with deadline."],
    ["Does Zestly do grocery? Or just restaurants?","Just restaurants right now, but grocery is a very common ask.","Okay. I'll keep checking back.","Please do — things may change!"],
    ["I'd drop Instacart tomorrow if you did groceries.","That's high praise. Logging it for the team.","I'm not joking.","Noted with full seriousness."],
    ["Add a grocery option please. I beg.","Ha! Begging noted and logged.","I mean it.","We know you do."],
    ["Can you add a 'grab some groceries' option to delivery?","Not yet — but product team hears this a lot.","It seems so simple.","It does! More complex on the ops side but demand is clearly there."],
    ["I ordered food but realized I need eggs for breakfast tomorrow. Any way to add them?","No grocery add-ons yet unfortunately!","Sad. Okay.","Soon hopefully!"],
  ];
  const grMkts2 = [NYC,LA,NYC,SF,Chicago,NYC,LA,SF,Chicago,NYC];
  groceryExtra.forEach((lines, i) => {
    const name = pick(names);
    sess(grMkts2[i],'demand-signal','grocery-fresh',null,[
      C(name, lines[0]), B(lines[1]), C(name, lines[2]), A(lines[3])
    ]);
  });

  const chefExtra = [
    ["Totally random ask: do you have anything where a chef comes and cooks for you at home?","Not random at all — we get this! No home chef option yet.","I'd pay a lot for that. Like a lot.","'A lot' — noted. What occasion were you thinking?","Anniversary dinner. I wanted to surprise my partner.","That's so sweet. Flagging this use case for the product team."],
    ["Does Zestly have any premium experiences? Like a chef or something?","No premium experiences yet — just restaurant delivery.","I feel like there's a market there.","There really is. Logging your feedback."],
    ["I want to hire a chef through an app for my birthday. Is that something Zestly does?","Not currently! But home chef booking is an interesting product idea.","If you built it I'd use it for every birthday.","Every birthday! Noted."],
    ["Can I get someone to come cook at my apartment? Like a pop-up chef thing?","We don't offer that yet — interesting framing though!","SF seems like the right market for it.","You might be right. Flagging that insight."],
    ["Is there a Zestly for private chefs?","Not yet — but you're describing something the team has thought about.","Please think faster lol","Ha! Message received."],
    ["I want a personal chef not a delivery driver. Does Zestly do that?","Not yet! Restaurant delivery is our current core.","Expand! I'd pay premium.","Premium home chef — logged."],
    ["Any plans to add personal chef services?","Nothing I can confirm yet — but it's a real topic.","Soon I hope. I'd use it weekly.","Weekly! Very helpful signal. Thank you."],
  ];
  const chefMkts2 = [SF,NYC,SF,SF,SF,NYC,SF];
  chefExtra.forEach((lines, i) => {
    const name = pick(names);
    const turns = lines.length === 6
      ? [C(name,lines[0]),B(lines[1]),C(name,lines[2]),A(lines[3]),C(name,lines[4]),A(lines[5])]
      : [C(name,lines[0]),B(lines[1]),C(name,lines[2]),A(lines[3])];
    sess(chefMkts2[i],'demand-signal','on-demand-chef',null,turns);
  });

  // ── 11b. EXTRA PUSH + BOT + DISCONNECT SESSIONS ───────────── ~50 msgs
  sess(SanDiego,'push-notification',null,cs(),[
    C("Emily G.","My order shows delivered but I never got a notification. Food was cold on the step."),
    B("I'm so sorry! Getting an agent for you."),
    C("Emily G.","ZE-80100"),
    A("Hi Emily — push notification failed on our end at the delivery mark. Full refund + $8 credit processing now."),
    C("Emily G.","Thank you. First time this happened."),
    A("Glad it's rare — but one time is too many. Escalated to eng.")
  ]);
  sess(SanDiego,'message-delay',null,cs(),[
    C("Jordan T.","Driver isn't responding to my messages about the gate code"),
    B("I'll get an agent to relay it directly."),
    C("Jordan T.","ZE-80200. Gate code is #5521"),
    A("Hi! I've sent gate code #5521 to your driver directly. They're 5 minutes out."),
    C("Jordan T.","Great, thank you!")
  ]);
  sess(SanDiego,'general',null,null,[
    C("Maya R.","Love how fast delivery is in San Diego. 20 minutes every time."),
    A("San Diego is one of our best-performing markets! Glad it shows."),
    C("Maya R.","Keep it up!")
  ]);
  sess(SanDiego,'driver-disconnect',null,cs(),[
    C("Chris L.","Chat with driver dropped during delivery"),
    B("I'm sorry! Agent connecting."),
    C("Chris L.","ZE-80300. Just need them to know to buzz unit 7."),
    A("Hi! Relayed — buzz unit 7. Driver confirmed."),
    C("Chris L.","Thank you!")
  ]);
  sess(Baltimore,'message-delay',null,cs(),[
    C("Layla A.","Sent 2 messages to my driver and neither delivered during peak"),
    B("I'm sorry! Getting an agent."),
    C("Layla A.","ZE-80400. My instructions: side door, leave on mat"),
    A("Hi Layla! Side door, leave on mat — sent and confirmed. Driver is 4 minutes out."),
    C("Layla A.","Thank you!")
  ]);
  sess(Baltimore,'push-notification',null,cs(),[
    C("Brandon S.","No notification when driver arrived. Food was lukewarm."),
    B("I'm really sorry! Agent connecting."),
    C("Brandon S.","ZE-80500"),
    A("Hi Brandon — push notification failure on our end. $7 credit applied and escalated to engineering."),
    C("Brandon S.","Appreciate it. Happens more than it should.")
  ]);
  sess(Austin,'bot-escalation',null,cs(),[
    C("James O.","Bot couldn't understand 'I got the wrong food'"),
    B("Connecting you to a human right away."),
    C("James O.","ZE-80600. I got someone else's order entirely."),
    A("Hi James! Wrong order entirely — I'm sending a replacement now at no charge."),
    C("James O.","Thank you! The bot was useless."),
    A("Noted. 'Wrong order' intent flagged for retraining today.")
  ]);
  sess(Austin,'driver-disconnect',null,cs(),[
    C("Stephanie H.","Driver chat disappeared mid-delivery"),
    B("Agent on the way!"),
    C("Stephanie H.","ZE-80700. Just tell them to leave at the front office."),
    A("Hi! Front office drop — relayed and confirmed by driver."),
    C("Stephanie H.","Thanks, quick response!")
  ]);
  sess(SLC,'bot-escalation',null,cs(),[
    C("Tiffany B.","The bot couldn't understand 'missing item' after 3 tries"),
    B("I'm so sorry! Live agent now."),
    C("Tiffany B.","ZE-80800. My cookies were missing."),
    A("Hi Tiffany — refunding the cookies now. And 'missing item' bot failure flagged."),
    C("Tiffany B.","Thank you. The bot thing is a real problem.")
  ]);
  sess(NOLA,'message-delay',null,cs(),[
    C("Anthony K.","Peak hour message delay again. Third time this week."),
    B("I'm sorry — getting an agent immediately."),
    C("Anthony K.","ZE-80900. Just need driver to use the rear entrance."),
    A("Hi Anthony — rear entrance relayed and confirmed. And third time in a week is flagged for your account. $10 credit added."),
    C("Anthony K.","Thank you. Please look into this.")
  ]);

  // ── 11. MORE GENERAL SMOOTH SESSIONS ─────────────────────── ~80 msgs
  const more = [
    [Denver, [C("Zoe D.","My driver just arrived and waved at me through the window. That was adorable."),A("Ha! Sounds like a great driver. 5 stars incoming?"),C("Zoe D.","Already submitted them!")]],
    [NYC,    [C("Ethan V.","Is there a way to favorite a restaurant so I can order faster next time?"),B("Yes! Tap the heart icon on any restaurant page to save it."),C("Ethan V.","Done. Thanks!")]],
    [LA,     [C("Chloe B.","How do I apply a promo code?"),B("Enter it at checkout in the 'Promo Code' field. Any specific code you're trying?"),C("Chloe B.","ZESTLY20 — it worked! Thanks")]],
    [SF,     [C("Ryan S.","I accidentally tipped $0. Can I change it after the fact?"),A("Yes! You can adjust the tip up to 24 hours post-delivery in Order History."),C("Ryan S.","Just did it. I felt terrible haha"),A("Ha! Your driver will appreciate it.")]],
    [Chicago,[C("Ava M.","What happens if the restaurant is closed when I order?"),B("Great question! We verify restaurant hours before accepting orders. If they close unexpectedly, we'll notify you and refund immediately."),C("Ava M.","Good to know. Placed my order — here's hoping!")]],
    [Austin, [C("Jackson L.","Driver just sent me a photo of my food at the door. That's a nice touch."),A("Love that! Some drivers do that proactively. It's a good practice."),C("Jackson L.","Made me feel good. 5 stars.")]],
    [Denver, [C("Isabella W.","I can see my driver on the map and they're almost here!"),B("So exciting! Enjoy your meal when it arrives."),C("Isabella W.","Thank you! Love the live tracking.")]],
    [Nashville,[C("Liam K.","Your app is so much cleaner than DoorDash. Just saying."),A("Thank you so much — we really appreciate that! Anything in particular?"),C("Liam K.","The driver chat and the map. Both are better."),A("That means a lot. Enjoy your order!")]],
    [NYC,    [C("Olivia T.","I forgot to add my apartment number at checkout. Can I add it now?"),A("Yes! I can add a delivery note for you. What's the apartment number?"),C("Olivia T.","Unit 12D, 4th floor"),A("Added! Your driver has unit 12D, 4th floor."),C("Olivia T.","Thank you, you're fast!")]],
    [LA,     [C("Mason R.","My food arrived in one of those insulated bags. First time I've seen that."),A("Yes — we rolled out insulated bags for all drivers this quarter! Keeps food warm longer."),C("Mason R.","Noticeable difference. Thank you.")]],
    [SF,     [C("Emma F.","Is there an ETA for my order?"),B("Yes! Check your active order — there's a countdown timer and live driver map."),C("Emma F.","22 minutes! Perfect, thanks")]],
    [Chicago,[C("Lucas G.","Can I split an order with someone else?"),B("Currently orders are one payment per order, but group ordering is on the feature roadmap!"),C("Lucas G.","Good! My office needs that badly."),A("Ha! Office use case — noted.")]],
    [Austin, [C("Mia P.","How do I know which items are popular at a restaurant?"),B("Look for the 'Popular' tag on menu items — it's based on order frequency!"),C("Mia P.","Oh perfect! Never noticed that. Ordering the popular ones then.")]],
    [Denver, [C("Logan H.","Driver was super fast. 18 minutes for a pizza. Incredible."),A("That is fast! Great execution from driver and restaurant. Glad it landed well."),C("Logan H.","Best delivery I've had. Period.")]],
    [NYC,    [C("Ella N.","I've recommended Zestly to like 10 people this month."),A("You're incredible! Thank you so much. Is there anything we can do to say thanks?"),C("Ella N.","Just keep being good!"),A("Deal.")]],
    [Nashville,[C("Kayla J.","What's the biggest order you've ever delivered?"),A("Ha! I don't have access to records like that — but I'm guessing it was impressive."),C("Kayla J.","I was just curious lol. My order is 6 items which felt like a lot."),A("Ha! 6 items is a solid order. Enjoy!")]],
    [Baltimore,[C("Brandon S.","ETA said 30 min and it came in 24. Love the under-promise over-deliver."),A("That's the goal! Glad it landed early."),C("Brandon S.","Sets the right expectations.")]],
    [SLC,    [C("Jasmine P.","I've never had a bad experience with Zestly. Just wanted to log that."),A("This made my day. Genuinely. Thank you for taking the time to say it."),C("Jasmine P.","I hope someone reads these feedback chats."),A("I'm real and I read every one!")]],
    [NOLA,   [C("Derek W.","Driver left my food at exactly the spot I described. Impressive."),A("Love hearing that! Clear communication makes everything work."),C("Derek W.","5 stars and a solid tip.")]],
    [Mpls,   [C("Natalie C.","Just ordered for the first time in Minneapolis! Excited."),B("Welcome to Zestly Minneapolis! Hope you love it."),C("Natalie C.","Food just arrived. This city needed this app."),A("Ha! Welcome! We'll be here.")]],
  ];
  more.forEach(([mkt, turns]) => {
    sess(mkt,'general',null,null,turns);
  });

  // ── 12. FINAL ROUND — CONVENIENCE RETAIL PILOTS ──────────── ~70 msgs
  const finalCR = [
    [Denver,   "Can driver grab me a phone charger from CVS? I'll tip $10 extra.", "No stops beyond restaurant orders unfortunately!","Worth asking. The need was real.","It always is — logged."],
    [Nashville,"Quick stop at 7-Eleven? I need a lighter.","No convenience stops yet — just restaurants.","Okay. Not urgent.","Still noted!"],
    [Mpls,     "I'd pay a convenience fee for a store stop. Do you have that?","Not yet, but that pricing model is exactly what the team is exploring.","Good. Make it happen.","On the radar!"],
    [Phoenix,  "Can driver add a water bottle from a gas station? I'm sick.","No gas station stops — so sorry! Hope you feel better.","Haha okay. Worth a try.","Always worth it."],
    [Denver,   "Can someone grab me Pedialyte from Walgreens? Very hungover.","Ha! No stops unfortunately.","You're killing me.","I know. For what it's worth, I flagged this."],
    [Nashville,"I need birthday candles. Is there any way to grab them en route?","No stops on delivery routes — just the restaurant.","It's for a surprise. Time-sensitive!","I feel the urgency — flagging this scenario for the product team."],
    [Denver,   "Could driver grab AA batteries from the dollar store? 2 mins tops.","No convenience stops yet.","This seems like the most obvious feature ever.","You're not wrong. Flagging it."],
    [Mpls,     "Can drivers pick up small items? Like aspirin?","Not yet — drivers are restaurant-only pickups right now.","Please build this.","Message received."],
    [Phoenix,  "Is there a way to add a convenience item to my order?","Not through the app currently — restaurant menus only.","I'd use it constantly.","Constantly! Noted."],
    [Denver,   "I'll pay a $5 convenience fee for a store stop. Seriously.","We can't accept it yet — but the model is something we've been thinking about.","Think faster!","Ha! Passing that urgency along."],
    [Nashville,"Driver is passing right by Walgreens. Please let them make a stop.","I wish I could authorize it! No stops at the moment.","That's painful. So close.","I know. I feel it too."],
    [Mpls,     "Can you grab snacks from a convenience store? I have people coming over.","No store stops — just the restaurant.","Booo. Fine.","Ha. Flagged."],
    [Phoenix,  "Do you think Zestly will ever do convenience delivery?","Based on how often I hear this request? I'd guess yes.","Good answer.","Ha! No promises but the demand is clearly there."],
    [Denver,   "I need sunscreen. Driver is 10 minutes away from Walgreens.","No stops on the route unfortunately!","So close yet so far.","The eternal struggle. Noted."],
    [Nashville,"Add a 7-Eleven to the app. Do it.","Ha! Not my call but I'll pass the demand along.","Please.","Done."],
    [Mpls,     "Can I request a non-restaurant delivery?","Not yet — but it's one of our most requested features.","Then make it happen!","Working on it!"],
    [Phoenix,  "Is there a Zestly for errands?","Not yet! But many customers ask. Flagging.","Good. Because the demand is there.","Clearly!"],
  ];
  finalCR.forEach(([mkt, cust, bot, cust2, agent]) => {
    const name = pick(names);
    sess(mkt,'demand-signal','convenience-retail',null,[
      C(name,cust), B(bot), C(name,cust2), A(agent)
    ]);
  });

  // ── 13. APR-21 DRIFT — CURRENT-WEEK DEMAND SIGNAL APPENDS ──── ~95 msgs
  // Scheduled-task generated. Last 5 days (2026-04-16..2026-04-20).
  const recentDates = ["2026-04-16","2026-04-17","2026-04-18","2026-04-19","2026-04-20"];
  function sessOn(mkt, cat, sig, tid, turns) {
    const id = `sess-${pad(sid++)}`;
    const date = pick(recentDates);
    const isPeak = cat==='message-delay';
    const t0 = isPeak ? pick(peakT) : pick(offT);
    turns.forEach((turn, i) => {
      out.push({
        id:         `msg-${pad(mid++)}`,
        sessionId:  id,
        ticketId:   tid||null,
        market:     mkt.name,
        marketId:   mkt.id,
        stage:      mkt.stage,
        date,
        time:       nextT(t0, i*2 + (i>2?1:0)),
        category:   cat,
        signalTag:  sig||null,
        role:       turn.role,
        senderName: turn.name,
        text:       turn.text,
      });
    });
  }

  // SIG-001 Convenience Retail — strongest growth weighting
  sessOn(Denver,'demand-signal','convenience-retail',cs(),[
    C("Aisha M.","Can driver swing into CVS and grab me Advil? I'll add $5 to the tip."),
    B("No convenience stops yet — just restaurants."),
    C("Aisha M.","Third time I've asked this month lol. Please build it."),
    A("I hear you. Flagged — this exact ask is showing up in our pattern tracking.")
  ]);
  sessOn(Denver,'demand-signal','convenience-retail',cs(),[
    C("Marcus H.","Is there a way to add a 7-Eleven stop? I need cough drops."),
    B("No store stops on delivery routes currently."),
    C("Marcus H.","Would use this constantly."),
    A("Noted. Feel better!")
  ]);
  sessOn(Denver,'demand-signal','convenience-retail',cs(),[
    C("Zoe D.","Driver is passing Walgreens. Quick grab? I'll tip $15."),
    B("No convenience stops unfortunately."),
    C("Zoe D.","The tip offers should tell you something."),
    A("They do. Genuinely tracking these.")
  ]);
  sessOn(Denver,'demand-signal','convenience-retail',cs(),[
    C("Kevin P.","CVS stop for Tylenol? Migraine."),
    B("Not yet! So sorry — hope the headache passes."),
    C("Kevin P.","Would be such an easy feature.")
  ]);
  sessOn(Nashville,'demand-signal','convenience-retail',cs(),[
    C("Priya K.","Could driver grab a phone charger from Walgreens? Tip $10 extra."),
    B("Ha — not yet. We're hearing this a lot."),
    C("Priya K.","You should be. The need is real."),
    A("Logged. Passing it along.")
  ]);
  sessOn(Nashville,'demand-signal','convenience-retail',cs(),[
    C("Ella N.","Random ask: can I add a pack of AA batteries to my order?"),
    B("Not through the app — restaurant menus only."),
    C("Ella N.","Cool. Figured I'd try."),
    A("Appreciate the ask — flagged for product.")
  ]);
  sessOn(Nashville,'demand-signal','convenience-retail',cs(),[
    C("Liam K.","Third time asking for a CVS stop this month. Just noting."),
    A("Tracking it. Pattern is loud and clear.")
  ]);
  sessOn(Mpls,'demand-signal','convenience-retail',cs(),[
    C("Chris L.","Driver is literally passing a 7-Eleven. Can he grab a Gatorade?"),
    B("No stops beyond restaurant order currently!"),
    C("Chris L.","Feels so obvious though."),
    A("Demand pattern confirmed on our side.")
  ]);
  sessOn(Mpls,'demand-signal','convenience-retail',cs(),[
    C("Natalie C.","Can we add a pharmacy pickup option? Short errand add-on."),
    B("Not yet — drivers are restaurant-only right now."),
    C("Natalie C.","Put me on the beta list whenever.")
  ]);
  sessOn(Mpls,'demand-signal','convenience-retail',cs(),[
    C("Daniel W.","Quick 7-Eleven stop en route? Need an energy drink for a late shift."),
    B("Not yet. So sorry!"),
    C("Daniel W.","Hope it comes soon.")
  ]);
  sessOn(Phoenix,'demand-signal','convenience-retail',cs(),[
    C("Logan H.","Driver passing CVS — can they grab ibuprofen? Sick here."),
    B("So sorry — no convenience stops. Hope you feel better."),
    C("Logan H.","Thanks. Would be such an easy win."),
    A("It would. Flagging.")
  ]);
  sessOn(Phoenix,'demand-signal','convenience-retail',cs(),[
    C("Mia P.","Any way driver can grab sunscreen from a gas station? 105 today."),
    B("No gas station stops — so sorry!"),
    C("Mia P.","Ha okay. Phoenix needs this."),
    A("Agreed. Logged.")
  ]);
  sessOn(Phoenix,'demand-signal','convenience-retail',cs(),[
    C("Kayla J.","Diapers run alongside dinner? Dream scenario."),
    B("Not yet — restaurant menus only."),
    C("Kayla J.","Will keep asking.")
  ]);
  sessOn(SLC,'demand-signal','convenience-retail',cs(),[
    C("Jasmine P.","Would love to add a convenience fee and have driver grab toothpaste."),
    B("Not yet! But exactly the kind of model product is exploring."),
    C("Jasmine P.","Make it happen.")
  ]);
  sessOn(Baltimore,'demand-signal','convenience-retail',cs(),[
    C("Brandon S.","Can driver swing through CVS? Need allergy meds."),
    B("Restaurant pickups only right now."),
    C("Brandon S.","Bummer. Worth asking.")
  ]);

  // SIG-002 Grocery & Fresh — moderate growth, still live-market heavy
  sessOn(NYC,'demand-signal','grocery-fresh',cs(),[
    C("Olivia T.","Could driver grab a carton of milk on the way? I know it's a stretch."),
    B("Not currently — restaurant orders only."),
    C("Olivia T.","Worth asking. I'd pay the premium."),
    A("Logged. This is the exact pattern we track in repeat customers.")
  ]);
  sessOn(NYC,'demand-signal','grocery-fresh',cs(),[
    C("Ethan V.","Any chance of a produce add-on? Bananas, bread, basics?"),
    B("Not yet — restaurant menus only."),
    C("Ethan V.","I order 3x/week — would happily use this.")
  ]);
  sessOn(NYC,'demand-signal','grocery-fresh',cs(),[
    C("Hannah R.","Would Zestly ever deliver from Trader Joe's?"),
    B("Great question. Not today — but customers ask often."),
    C("Hannah R.","NYC would use this constantly.")
  ]);
  sessOn(LA,'demand-signal','grocery-fresh',cs(),[
    C("Mason R.","Can drivers grab me a dozen eggs? Not picky on store."),
    B("Not today — restaurant menus only."),
    C("Mason R.","I'll wait for it.")
  ]);
  sessOn(LA,'demand-signal','grocery-fresh',cs(),[
    C("Isabella W.","Grocery add-on would be huge. Repeat customer here."),
    A("Heard. 10+ order customers are exactly who surfaces this.")
  ]);
  sessOn(Chicago,'demand-signal','grocery-fresh',cs(),[
    C("Ava M.","Is there a way to order groceries alongside dinner?"),
    B("Currently restaurant-only. Flagged as a demand signal!"),
    C("Ava M.","Please prioritize. Chicago would use it.")
  ]);

  // SIG-003 On-Demand Chef — low volume, high AOV customer base
  sessOn(SF,'demand-signal','on-demand-chef',cs(),[
    C("Ryan S.","Do you have any services where a chef cooks at your place?"),
    B("Not currently. Distinctive pattern we're tracking."),
    C("Ryan S.","Would pay a real premium. Let me know.")
  ]);
  sessOn(SF,'demand-signal','on-demand-chef',cs(),[
    C("Emma F.","Private chef through Zestly? Dinner party tomorrow."),
    B("Not a service we offer yet — so sorry."),
    C("Emma F.","If you ever do, I'm first in line.")
  ]);
  sessOn(NYC,'demand-signal','on-demand-chef',cs(),[
    C("James O.","Chef-for-hire feature? Vetted cooks coming to your apartment?"),
    B("Not yet. Distinctive ask — thank you."),
    C("James O.","Anniversary coming up. Would've booked immediately.")
  ]);

  // Emerging micro-pattern: late-night-snacks (first week this appears)
  sessOn(Austin,'demand-signal','late-night-snacks',cs(),[
    C("Jackson L.","Any late-night snack option? 2am and nothing is open."),
    B("Most restaurants close by midnight — so sorry!"),
    C("Jackson L.","Austin needs a 24/7 munchies tier. A gas station stop would do it."),
    A("Interesting. First time I've heard it phrased that way — noting.")
  ]);

  // Emerging micro-pattern: medication-pickup (distinct from general CVS asks)
  sessOn(NOLA,'demand-signal','medication-pickup',cs(),[
    C("Anthony K.","Is there a way to do a pharmacy pickup? Prescription is ready."),
    B("Not currently — restaurant deliveries only."),
    C("Anthony K.","Would pay $15 for this."),
    A("Logged. Prescription-specific ask — distinct pattern from general convenience.")
  ]);

  // General CS sessions for realism
  sessOn(SanDiego,'driver-chat-disconnect',null,cs(),[
    C("Alex M.","Driver chat froze again. Third time this week."),
    B("Sorry! Agent connecting."),
    C("Alex M.","ZE-81000. Just tell them to use the side gate."),
    A("Relayed and confirmed. $5 credit applied.")
  ]);
  sessOn(Baltimore,'bot-escalation',null,cs(),[
    C("Rachel D.","Bot kept looping 'I need to speak to a human'"),
    B("Connecting you now — sorry for the hassle."),
    C("Rachel D.","ZE-81100. Missing drink from my order."),
    A("Refunding the drink and flagging the intent for bot retraining.")
  ]);

  return out;
})();

// No ES module export — loaded as a plain <script> so variables are globally accessible
