// ============================================================
// Prism — Nimbus Pay coordination layer
// data.js: Nimbus Pay workspace -> platform context -> issue
//
// The live runtime is intentionally focused on one customer account
// (Nimbus Pay), three installed platform contexts (Cafe24, Shopify
// Korea, Smartstore), and issue-first coordination views.
//
// Busan / Pax A920 remains a useful archived scenario, but it is no
// longer part of the live Prism runtime.
// ============================================================

const customer = {
  name: "Nimbus Pay",
  segment: "Mid-market payments platform",
  region: "SEA / EMEA",
  deployedFor: "Nimbus Pay",
  sendbirdProducts: ["Chat", "Desk"],
  trustOSDeployed: true,
  prismGoLive: "2026-02-01",
};

const personas = {
  users: {
    cs: {
      id: "cs",
      name: "Minseo",
      role: "CS operator",
      pod: "Korean e-commerce support",
      note: "Owns the first safe customer-facing response when new payment issues emerge.",
    },
    pm: {
      id: "pm",
      name: "Eunji",
      role: "PM",
      pod: "Cafe24 checkout",
      note: "Owns coordination, prioritization, and internal task state across the issue.",
    },
    engineer: {
      id: "engineer",
      name: "Min-ho",
      role: "Engineer",
      pod: "Payments platform",
      note: "Owns technical evidence, root cause confirmation, and ship-state updates.",
    },
  },
  downstreamRoles: ["Product", "Engineering"],
};

const platforms = [
  {
    id: "PLT-C24",
    short: "C24",
    name: "Cafe24",
    type: "Live launch",
    issueIds: ["ISS-C24-004", "ISS-C24-005", "ISS-C24-006", "ISS-C24-002", "ISS-C24-003", "ISS-C24-001", "ISS-C24-007", "ISS-C24-008", "ISS-C24-009"],
    memoryId: "MEM-C24",
    status: "active",
  },
  {
    id: "PLT-SHP",
    short: "SHP",
    name: "Shopify Korea",
    type: "Prior launch",
    issueIds: ["ISS-SHP-001"],
    memoryId: "MEM-SHP",
    status: "reference",
  },
  {
    id: "PLT-SMT",
    short: "SMT",
    name: "Smartstore",
    type: "Prior launch",
    issueIds: ["ISS-SMT-001"],
    memoryId: "MEM-SMT",
    status: "reference",
  },
];

const issues = {
  "ISS-C24-001": {
    id: "ISS-C24-001",
    platformId: "PLT-C24",
    title: "Card option missing at checkout",
    shortTitle: "Cafe24 card-option issue",
    headline: "Ambiguous merchant inquiry turns into parallel Product + Engineering action",
    status: "Active hotfix",
    statusTone: "caution",
    openedAt: "2026-04-22 10:33 KST",
    issueType: "Bug vs config ambiguity",
    valueProp: "One ambiguous question shouldn't cost three teams an afternoon — coordinated answer, not three Slack threads",
    summary: "Cafe24 merchants are asking whether a missing card option is their own configuration issue. Prism detects a quiet cluster, surfaces Shopify Korea as precedent, and fans out Product + Engineering in parallel while CS holds the thread with the right draft.",
    owner: "Minseo · CS escalation lead",
    involvedTeams: ["CS", "Product", "Engineering"],
    dataCenter: {
      rawUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
      shortlistUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-001&sig=SIG-001",
      memoryUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
    },
    trigger: {
      datetime: "2026-04-22 10:33 KST",
      pattern: "1 Cafe24 merchant-admin inquiry + 2 similar quiet-cluster inquiries in past 11 min",
      patternClass: "Ambiguous bug-vs-config merchant inquiry at integration launch",
    },
    merchantChat: {
      id: "CH-C24-001",
      customerType: "merchant",
      merchant: "혜원 의류 (Hyewon Clothing) · Cafe24",
      verbatim: "고객님들이 결제할때 카드결제가 안뜬다고요;; 저희 설정문제일까요?? 지금 매출 영향가요 ㅠㅠ",
    },
    quietCluster: [
      {
        id: "CH-C24-Q01",
        customerType: "shopper",
        merchant: "익명 고객 #4421 · Cafe24",
        verbatim: "결제 누르려는데 카드선택이 안돼요. 다른방법밖에 없나요?? 지금 사야하는데...",
      },
      {
        id: "CH-C24-Q02",
        customerType: "shopper",
        merchant: "익명 고객 #4438 · Cafe24",
        verbatim: "지금 결제하는데 신용카드 선택이 안떠요. 오늘만 그런거에요?",
      },
    ],
    priorContext: [
      {
        id: "PC-C24-A",
        label: "Cafe24 integration go-live (yesterday)",
        date: "2026-04-21",
        datetime: "2026-04-21 10:00 KST",
        note: "Integration went live. First 24hr: ~420 merchant stores enabled Nimbus Pay checkout. No reported issues through end of Day 1.",
        link: "cafe24-launch-plan-v4.md",
      },
      {
        id: "PC-C24-B",
        label: "Shopify Korea — Day-1 config-flag bug (primary precedent)",
        date: "2026-01-14",
        datetime: "2026-01-14 10:12 KST",
        note: "Same config-flag class: payment_method_visibility.card defaulted wrong at Shopify Korea deploy pipeline. Resolution: PR #4821. Post-mortem proposed a pre-flight validator across all integration launches.",
        link: "shopify-korea-2026-01-20-post-mortem.md",
      },
      {
        id: "PC-C24-C",
        label: "Smartstore — Day-1 payment-render bug (secondary precedent)",
        date: "2025-11-03",
        datetime: "2025-11-03 11:08 KST",
        note: "Earlier instance of the same config-flag shape on Smartstore launch. Fixed same-day. The validator idea was raised but never shipped.",
        link: "smartstore-2025-11-08-post-mortem.md",
      },
    ],
    patternMatch: {
      summary: "Same config-flag class as Shopify Korea Day-1 — candidate: payment_method_visibility.card defaulted wrong at Cafe24 deploy pipeline",
      confidence: "Medium-High",
      confidenceEvidence: "3 merchant matches (1 primary + 2 quiet cluster in 11 min) + 1 strong precedent with confirmed root cause (Shopify Korea PR #4821)",
      commonShape: "Payment-method visibility flag defaults wrong at integration deploy -> some merchant checkouts render without card option -> revenue-at-risk window until override ships",
      distinctCustomers: ["Cafe24", "Shopify Korea", "Smartstore"],
    },
    roleBriefings: [
      {
        role: "CS",
        recipient: "Minseo and the Korean e-commerce support pod",
        publishedAt: "10:34",
        confidence: "Medium-High",
        confidenceEvidence: "3 merchant matches in 11 min · 1 strong precedent",
        headQuote: "고객님들이 결제할때 카드결제가 안뜬다고요;; 저희 설정문제일까요?? 지금 매출 영향가요 ㅠㅠ",
        headQuoteEn: "Some customers say card payment doesn't show up at checkout — could this be a setting issue on our side?",
        whyYoureSeeingThis: "Question class: ambiguous bug-vs-config. Prism surfaced the Shopify Korea precedent and notified Product + Engineering in parallel before human pattern-matching caught up.",
        body: {
          issueShape: "Merchant-admin asking whether the problem is on their side. Two other Cafe24 merchants raised near-identical questions in the prior 11 minutes.",
          pasteReadyDraft: "Thanks for flagging — we're checking on our side first; we'll confirm within 30 min whether this is a setting or a Nimbus Pay issue.",
          holdLine: "Do not push the merchant into admin settings yet — root cause is not confirmed.",
          liveUpdateBehavior: "This guide rewrites itself when Engineering confirms root cause and when the fix ships.",
        },
        nextAction: "Paste the draft. Hold the thread. Prism will refresh when the diagnosis changes.",
        trail: [
          {
            claim: "3 merchants flagged in 11 min",
            source: "CH-C24-001 + CH-C24-Q01 + CH-C24-Q02",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
          {
            claim: "Shopify Korea is the strongest precedent",
            source: "shopify-korea-2026-01-20-post-mortem.md",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-001&sig=SIG-001",
          },
        ],
      },
      {
        role: "Product",
        recipient: "Kim Eunji, PM, Cafe24 integration",
        publishedAt: "10:35",
        confidence: "Medium-High",
        confidenceEvidence: "3 merchant matches + revenue-at-risk computable from launch traffic",
        headQuote: "Day-1 Cafe24 launch exposure — 3 merchants asking 'bug or config?' in 11 min",
        whyYoureSeeingThis: "This issue hits your launch-hardening roadmap directly. Prism surfaced the pattern before the pod Slack thread reached the same conclusion.",
        body: {
          scaleOfImpact: "3 merchants reporting in 11 min · ~$8K revenue-at-risk/hour across affected storefronts · climbing",
          decisionPrompt: "Escalate to immediate hotfix, or hold for the next release window?",
          roadmapImplication: "The pre-flight validator proposed after Smartstore and Shopify Korea is still unshipped. This cluster makes it a P1 candidate.",
          related: ["Cafe24 launch plan v4", "Shopify Korea post-mortem", "Smartstore post-mortem"],
        },
        nextAction: "Approve hotfix severity and pin the validator as follow-up work.",
        trail: [
          {
            claim: "$8K/hr revenue-at-risk",
            source: "Cafe24 GMV dashboard · affected-storefront checkout traffic",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-001&sig=SIG-001",
          },
          {
            claim: "Same class as Shopify Korea and Smartstore",
            source: "PC-C24-B + PC-C24-C + current trigger",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
      {
        role: "Engineering",
        recipient: "Lee Min-ho, Eng lead, Payments platform",
        publishedAt: "10:35",
        confidence: "Medium-High",
        confidenceEvidence: "Candidate root cause cited directly + prior resolution in PR #4821",
        headQuote: "Cafe24 merchants reporting missing card option · candidate root cause cited",
        whyYoureSeeingThis: "The inquiry shape matches PR #4821. Prism is routing you straight to the likely config path instead of making you start in logs.",
        body: {
          reproducibility: "3 merchants in 11 min · all Cafe24 stores · all reporting missing card option at checkout",
          candidateRootCause: "Config flag defaulted wrong at Cafe24 deploy pipeline · likely cafe24_payment_config.yaml around line 87",
          pastResolution: "Same config-flag class hit Shopify Korea Day-1 launch — PR #4821. Smartstore is the older version of the same shape.",
          roughEffort: "Config fix + redeploy ~30–60 min · validator follow-up +2 dev days",
        },
        nextAction: "Open cafe24_payment_config.yaml line 87 and verify the flag state.",
        trail: [
          {
            claim: "Line 87 is the likely config entry",
            source: "Config diff between Shopify Korea (PR #4821) and Cafe24 deploys",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
          {
            claim: "Pre-flight validator still unshipped",
            source: "Shopify Korea and Smartstore post-mortems",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
          },
        ],
      },
    ],
    downstream: [
      { role: "CS", time: "10:34", action: "Minseo pastes the 'we're checking on our side' draft." },
      { role: "Product", time: "10:51", action: "Severity escalated to P0 hotfix by Eunji." },
      { role: "Engineering", time: "10:52", action: "Reproduced on staging — config flag mis-default at cafe24_payment_config.yaml:87 confirmed." },
      { role: "Engineering", time: "11:17", action: "Hotfix validated end-to-end on staging; regression suite passed, ready for rollout." },
      { role: "CS (auto)", time: "11:31", action: "Resolved draft auto-rewrites in the guide pane." },
    ],
    guidePulses: [
      {
        label: "● Initial briefing (T+0)",
        time: "10:34",
        status: "Question class: ambiguous bug-vs-config. Two other merchants asked near-identical questions in the past 11 min. Shopify Korea Jan 2026 precedent surfaced. Product and Engineering notified in parallel.",
        paste: "알려주셔서 감사합니다. 저희 쪽에서 먼저 확인 중이고, 30분 이내에 설정 문제인지 Nimbus Pay 쪽 이슈인지 안내드리겠습니다.",
      },
      {
        label: "↻ Root cause confirmed (T+18min)",
        time: "10:52",
        phase: "auto-update",
        status: "Engineering confirmed root cause. Config flag payment_method_visibility.card defaulted wrong at the Cafe24 deploy. Hotfix in review, ETA ~40 min.",
        paste: "기다려주셔서 감사합니다. 저희 쪽 문제로 확인됐고, 현재 수정사항이 검토 중입니다. 배포 시작되는 대로 다시 안내드리겠습니다.",
      },
      {
        label: "✓ Fix shipped · guide auto-rewrites (T+57min)",
        time: "11:31",
        phase: "closed",
        status: "Hotfix shipped. Card option is now rendering on Cafe24 and the CS guidance has rewritten itself in place to the resolved state.",
        paste: "저희 쪽 설정 문제로 확인되어 수정 후 배포 중입니다. 5분 이내에 결제창에서 카드 옵션이 정상 노출될 예정입니다. 빠르게 알려주셔서 감사합니다.",
      },
    ],
  },

  "ISS-C24-002": {
    id: "ISS-C24-002",
    platformId: "PLT-C24",
    title: "Face ID authentication loops on iPhone checkout",
    shortTitle: "Cafe24 Face ID auth loop",
    headline: "Resolved customer-facing checkout failure with direct payment drop-off impact",
    status: "Resolved",
    statusTone: "good",
    openedAt: "2026-04-20 14:07 KST",
    resolvedAt: "2026-04-20 15:18 KST",
    issueType: "Detected and resolved",
    valueProp: "Prism catches payment-auth friction while customers are still failing at checkout, not after merchants lose the order window.",
    summary: "Cafe24 merchants reported shoppers on iPhone being sent into a repeated Face ID / password verification loop after tapping Pay. Prism grouped the cluster, routed Product + Engineering, and the checkout-auth session bug was corrected within the hour.",
    owner: "Jiwoo · CS escalation manager",
    involvedTeams: ["CS", "Product", "Engineering"],
    dataCenter: {
      rawUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
      shortlistUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-001&sig=SIG-001",
      memoryUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
    },
    trigger: {
      datetime: "2026-04-20 14:07 KST",
      pattern: "2 Cafe24 merchants reported iPhone shoppers getting stuck in a repeated Face ID / password verification loop after tapping Pay",
      patternClass: "Customer-facing checkout authentication failure",
    },
    merchantChat: {
      id: "CH-C24-010",
      customerType: "shopper",
      merchant: "익명 고객 #5012 · Cafe24",
      verbatim: "아이폰으로 결제하는데 페이스아이디 누르면 자꾸 비번화면만 다시 떠요;; 결제가 안돼요 ㅠㅠ 카드는 멀쩡한데 이거 맞나요?",
    },
    quietCluster: [
      {
        id: "CH-C24-Q10",
        customerType: "merchant",
        merchant: "멜로우 키친 (Mellow Kitchen) · Cafe24",
        verbatim: "iPhone 고객들이 결제 안된다고 항의가 계속 들어와요. 페이스아이디 화면에서 무한루프 된다고 하시는데 ㅠㅠ 빠른 확인 부탁드려요",
      },
      {
        id: "CH-C24-Q11",
        customerType: "shopper",
        merchant: "익명 고객 #5044 · Cafe24",
        verbatim: "아이폰으로 결제하는데 인증화면만 계속 뜨고 결제는 안됨. 이거 버그?",
      },
    ],
    priorContext: [
      {
        id: "PC-C24-AUTH-A",
        label: "iOS webview auth handoff adjusted",
        date: "2026-04-20",
        datetime: "2026-04-20 02:00 KST",
        note: "The iOS checkout handoff was changed overnight to shorten return time from local device authentication back into the Cafe24 checkout webview.",
        link: "ios-auth-handoff-change-log.md",
      },
      {
        id: "PC-C24-AUTH-B",
        label: "March Safari checkout auth lag",
        date: "2026-03-11",
        datetime: "2026-03-11 17:20 KST",
        note: "A smaller Safari-specific auth lag appeared in March but resolved after a rollback. The underlying retry logic was not revisited for iPhone webview handoff.",
        link: "safari-auth-retro-2026-03-11.md",
      },
    ],
    patternMatch: {
      summary: "iPhone checkout auth session is looping after device verification and returning shoppers to the same authentication prompt",
      confidence: "High",
      confidenceEvidence: "2 matching merchant reports + deploy correlation to the overnight iOS auth handoff change",
      commonShape: "Shopper taps Pay -> Face ID / password prompt appears -> webview returns to the auth step instead of the payment confirmation state",
      distinctCustomers: ["Cafe24"],
    },
    roleBriefings: [
      {
        role: "CS",
        recipient: "Jiwoo and the checkout support queue",
        publishedAt: "14:09",
        confidence: "High",
        confidenceEvidence: "2 matching reports + overnight iOS auth handoff change",
        headQuote: "아이폰으로 결제하는데 페이스아이디 누르면 자꾸 비번화면만 다시 떠요;; 결제가 안돼요 ㅠㅠ 카드는 멀쩡한데 이거 맞나요?",
        headQuoteEn: "iPhone customers tap Pay, but they just keep getting the Face ID or password screen again and never finish payment. Orders are dropping right now.",
        whyYoureSeeingThis: "Two merchants reported the same iPhone checkout failure within minutes. Prism linked it to the overnight iOS auth handoff change and opened Product + Engineering in parallel.",
        body: {
          issueShape: "Shoppers can reach the authentication prompt but are unable to complete checkout because the verification screen loops.",
          pasteReadyDraft: "Thanks for flagging this. We're checking an iPhone authentication issue on our side now and will confirm shortly whether shoppers should retry.",
          holdLine: "Do not tell merchants to ask customers to keep retrying Face ID or password entry until Engineering confirms the auth return path.",
        },
        nextAction: "Hold merchants with the auth-loop draft and prepare to send the all-clear once checkout completes normally again.",
        trail: [
          {
            claim: "Auth loop started after the iOS handoff change",
            source: "ios-auth-handoff-change-log.md",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
      {
        role: "Product",
        recipient: "Kim Eunji, PM, Cafe24 checkout",
        publishedAt: "14:10",
        confidence: "High",
        confidenceEvidence: "Checkout auth regression + immediate order drop-off reports",
        headQuote: "iPhone shoppers are failing in the authentication step after tapping Pay.",
        whyYoureSeeingThis: "This directly hits checkout conversion and order completion. If left unresolved, merchants will see the problem as a payment-provider failure, not a device quirk.",
        body: {
          scaleOfImpact: "2 merchants in the first 10 min · iPhone checkout conversion falling on the affected storefronts",
          decisionPrompt: "Roll back the iOS auth handoff immediately or hold for more reproduction data?",
          implication: "This is a direct payment-completion issue with live revenue leakage while the auth loop remains in production.",
        },
        nextAction: "Approve rollback priority and align merchant-facing retry guidance.",
        trail: [
          {
            claim: "Issue started after the iOS auth handoff change",
            source: "Deploy window + support cluster",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-001&sig=SIG-001",
          },
        ],
      },
      {
        role: "Engineering",
        recipient: "Lee Min-ho, payments platform engineer",
        publishedAt: "14:11",
        confidence: "High",
        confidenceEvidence: "Auth-loop reports line up directly with the iOS handoff release window",
        headQuote: "iPhone authentication returns to the same prompt instead of the post-auth confirmation state.",
        whyYoureSeeingThis: "Prism correlated the support cluster to the overnight iOS auth handoff change, so you can start in the webview return path rather than reproducing all payment methods from scratch.",
        body: {
          reproducibility: "Affected on iPhone checkout after local auth prompt returns to Cafe24 webview.",
          candidateRootCause: "iOS auth handoff is reinitializing the challenge state instead of advancing the checkout session after success.",
          roughEffort: "Rollback handoff change + invalidate stuck auth sessions within 60 min.",
        },
        nextAction: "Rollback the iOS auth handoff change and verify successful post-auth return on iPhone.",
        trail: [
          {
            claim: "Auth loop began in the new iOS handoff path",
            source: "ios-auth-handoff-change-log.md + iPhone session traces",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
    ],
    downstream: [
      { role: "CS", time: "14:09", action: "Jiwoo holds both merchants with an iPhone auth-loop draft." },
      { role: "Engineering", time: "14:24", action: "iOS auth-handoff rollback verified on staging; stuck-session cleanup tested OK." },
      { role: "Product", time: "14:31", action: "Priority rollback approved with merchant retry wording aligned." },
      { role: "CS", time: "15:18", action: "Resolved notice sent after iPhone checkout completed successfully again." },
    ],
    guidePulses: [
      {
        label: "● Issue grouped from support voice",
        time: "14:09",
        status: "iPhone checkout authentication loop surfaced from two merchant threads. Product and Engineering notified immediately.",
        paste: "현재 저희 쪽에서 아이폰 인증 관련 이슈를 확인 중이며, 고객님께 재결제를 안내드려도 되는지 곧 안내드리겠습니다.",
      },
      {
        label: "✓ Resolved and merchant notice sent",
        time: "15:18",
        phase: "closed",
        status: "The iOS auth handoff was rolled back and iPhone shoppers could complete payment again. Merchants received the all-clear to resume normal retry guidance.",
        paste: "저희 쪽에서 아이폰 인증 문제를 수정 완료했습니다. 고객님들께서 다시 결제를 시도하시면 정상적으로 완료되실 수 있습니다.",
      },
    ],
  },

  "ISS-C24-003": {
    id: "ISS-C24-003",
    platformId: "PLT-C24",
    title: "Rewards balance disappears on the final Pay step",
    shortTitle: "Cafe24 rewards apply failure",
    headline: "Support has enough signal to route the issue while shoppers are still abandoning checkout",
    status: "Investigating",
    statusTone: "caution",
    openedAt: "2026-04-23 09:18 KST",
    issueType: "Ongoing investigation",
    valueProp: "Prism helps teams coordinate while the payment issue is still incomplete, not only after the answer is known.",
    summary: "Multiple merchants reported shoppers applying points or rewards during checkout, then losing the discount on the final Pay step. Prism grouped the issue and opened Product + Engineering before support started giving inconsistent retry advice.",
    owner: "Minseo · CS escalation lead",
    involvedTeams: ["CS", "Product", "Engineering"],
    dataCenter: {
      rawUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
      shortlistUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-001&sig=SIG-001",
      memoryUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
    },
    trigger: {
      datetime: "2026-04-23 09:18 KST",
      pattern: "3 Cafe24 merchants reported shoppers applying points or rewards, then seeing the discount disappear on the final Pay step",
      patternClass: "Customer-facing rewards / final charge mismatch at checkout",
    },
    merchantChat: {
      id: "CH-C24-020",
      customerType: "merchant",
      merchant: "먼데이 아카이브 (Monday Archive) · Cafe24",
      verbatim: "고객님들이 적립금 적용하시고 결제 직전에 할인이 사라진다고요 ㅠㅠ 환불요청도 들어와요. 어떻게 해야하나요??",
    },
    quietCluster: [
      {
        id: "CH-C24-Q20",
        customerType: "shopper",
        merchant: "익명 고객 #6128 · Cafe24",
        verbatim: "포인트 적용하고 결제 누르려니까 갑자기 할인 빠지고 원래 가격됨. 그냥 안샀어요...",
      },
      {
        id: "CH-C24-Q21",
        customerType: "shopper",
        merchant: "익명 고객 #6155 · Cafe24",
        verbatim: "할인쿠폰 적용했는데 결제할때 보니까 다시 정가됐어요;; 이거 사기 아니예요??",
      },
    ],
    priorContext: [
      {
        id: "PC-C24-RWD-A",
        label: "Rewards recalculation rule updated",
        date: "2026-04-22",
        datetime: "2026-04-22 22:40 KST",
        note: "The order-total recalculation rule was updated the night before to unify shipping-fee and reward deductions on the final confirmation step.",
        link: "reward-recalculation-change-log.md",
      },
      {
        id: "PC-C24-RWD-B",
        label: "February points + shipping edge case",
        date: "2026-02-11",
        datetime: "2026-02-11 15:30 KST",
        note: "A smaller issue appeared when reward points and express shipping were combined, but it self-resolved before Engineering traced the recalculation path fully.",
        link: "reward-shipping-watch-note.md",
      },
    ],
    patternMatch: {
      summary: "Reward discount may be dropped during the final order-total recalculation before payment confirmation",
      confidence: "Medium",
      confidenceEvidence: "3 matching merchant reports + recalculation rule change the prior night",
      commonShape: "Shopper applies points or rewards -> shipping/contact confirmation recalculates final amount -> reward discount is dropped before the payment confirmation state",
      distinctCustomers: ["Cafe24"],
    },
    roleBriefings: [
      {
        role: "CS",
        recipient: "Minseo and the Korean e-commerce support pod",
        publishedAt: "09:20",
        confidence: "Medium",
        confidenceEvidence: "3 merchants reporting the same final-total mismatch",
        headQuote: "고객님들이 적립금 적용하시고 결제 직전에 할인이 사라진다고요 ㅠㅠ 환불요청도 들어와요. 어떻게 해야하나요??",
        headQuoteEn: "Customers apply points or rewards, but right before payment the discount disappears and the total returns to the original amount. We're seeing checkout drop-off.",
        whyYoureSeeingThis: "Merchants need a clear hold line while Product and Engineering check whether the final order-total recalculation is dropping the rewards deduction.",
        body: {
          issueShape: "Shoppers see their points or rewards apply earlier in checkout, but the discount disappears before payment is confirmed.",
          pasteReadyDraft: "We're checking a checkout total issue on our side now. Please hold off on asking shoppers to retry until we confirm whether the reward discount is being applied correctly at the final step.",
          holdLine: "Do not tell merchants to promise that retrying the same checkout flow will preserve rewards until Engineering confirms it.",
        },
        nextAction: "Hold the thread and wait for engineering confirmation on the final-total calculation path.",
        trail: [
          {
            claim: "3 merchants reporting the same final-total mismatch",
            source: "CH-C24-020 + CH-C24-Q20 + CH-C24-Q21",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
      {
        role: "Product",
        recipient: "Kim Eunji, PM, Cafe24 integration",
        publishedAt: "09:22",
        confidence: "Medium",
        confidenceEvidence: "Current support cluster + recalculation rule change",
        headQuote: "Shoppers lose the rewards discount right before payment confirmation.",
        whyYoureSeeingThis: "This is visible to shoppers at the moment of payment commitment and directly affects checkout completion.",
        body: {
          scaleOfImpact: "3 merchants in the first hour · direct revenue leakage if shoppers abandon after the total increases unexpectedly",
          decisionPrompt: "Should support issue a broader merchant notice if the rewards mismatch expands beyond the current cluster?",
          implication: "Unexpected final-charge changes erode payment trust quickly because shoppers interpret it as a billing error.",
        },
        nextAction: "Prepare a broader notice if more merchants report rewards dropping at the final Pay step.",
        trail: [
          {
            claim: "Final-total recalculation changed the night before",
            source: "reward-recalculation-change-log.md",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
      {
        role: "Engineering",
        recipient: "Lee Min-ho, Eng lead, Payments platform",
        publishedAt: "09:23",
        confidence: "Medium",
        confidenceEvidence: "Support cluster + recent recalculation-rule change",
        headQuote: "Rewards discount may be dropped during the final order-total recalculation before payment confirmation.",
        whyYoureSeeingThis: "Prism is routing the cluster before support starts telling merchants to ask shoppers to retry or re-enter rewards manually.",
        body: {
          reproducibility: "3 merchants report the same issue when points or rewards are combined with the final shipping/contact confirmation step.",
          candidateRootCause: "Final order-total recalculation may be overwriting the reward deduction when the confirmation state rebuilds the payable amount.",
          roughEffort: "Trace recalculation path and verify discount persistence before noon.",
        },
        nextAction: "Check the final-total recalculation path and verify reward deduction persistence before noon.",
        trail: [
          {
            claim: "Recalculation rule changed last night",
            source: "reward-recalculation-change-log.md",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
    ],
    downstream: [
      { role: "CS", time: "09:20", action: "Support holds merchants with a final-total mismatch draft and pauses retry guidance." },
      { role: "Engineering", time: "09:41", action: "Reproducing the final-total reward drop on staging; no fix verified yet." },
      { role: "Product", time: "10:05", action: "Monitoring cluster size before issuing a broader rewards-impact notice." },
    ],
    guidePulses: [
      {
        label: "● Investigation opened",
        time: "09:20",
        status: "Rewards discount drop suspected at the final Pay step. Product and Engineering are checking the final-total recalculation before support sends broader guidance.",
        paste: "현재 저희 쪽에서 결제 총액 관련 이슈를 확인 중입니다. 적립금 할인이 최종 결제 단계에서 정상 적용되는지 확인되기 전까지는 고객님께 재결제 안내를 잠시 보류해주세요.",
      },
      {
        label: "↻ Still investigating",
        time: "10:05",
        phase: "auto-update",
        status: "Engineering is tracing the final-total recalculation path. Merchant retry guidance is still on hold until reward persistence is confirmed.",
        paste: "현재 저희 쪽에서 최종 결제 금액을 계속 확인 중이며, 적립금 할인이 정상 유지되는지 확인될 때까지 고객님 재결제 안내는 잠시 보류 부탁드립니다.",
      },
    ],
  },

  "ISS-SHP-001": {
    id: "ISS-SHP-001",
    platformId: "PLT-SHP",
    title: "Card visibility defaulted wrong on launch day",
    shortTitle: "Shopify Korea launch regression",
    headline: "Resolved launch-day precedent that Prism now uses as live memory",
    status: "Resolved precedent",
    statusTone: "good",
    openedAt: "2026-01-14 10:12 KST",
    resolvedAt: "2026-01-14 12:09 KST",
    issueType: "Launch regression",
    valueProp: "This is the precedent Prism should surface before the pod rediscovers it in Slack.",
    summary: "Shopify Korea is the strongest precedent for the current Cafe24 issue. It proves why installed-platform history belongs inside the Nimbus Pay workspace.",
    owner: "Resolved by Nimbus Pay launch pod",
    involvedTeams: ["CS", "Product", "Engineering"],
    dataCenter: {
      rawUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
      shortlistUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-001&sig=SIG-001",
      memoryUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
    },
    trigger: {
      datetime: "2026-01-14 10:12 KST",
      pattern: "Launch-day merchant reports of missing card option at checkout",
      patternClass: "Config-flag regression at platform launch",
    },
    merchantChat: {
      id: "CH-SHP-001",
      customerType: "shopper",
      merchant: "익명 고객 #7821 · Shopify Korea",
      verbatim: "결제하려는데 카드결제 옵션이 없어요;; 계좌이체밖에 안떠요. 저만 그런건가요? 사야하는건데...",
    },
    quietCluster: [
      {
        id: "CH-SHP-Q01",
        customerType: "merchant",
        merchant: "달라 홈 (Dalla Home) · Shopify Korea",
        verbatim: "쇼핑객들이 카드결제 옵션 안보인다고 문의옴. 어제까지는 됐었는데 오늘 갑자기 사라졌네요 ㅠㅠ",
      },
      {
        id: "CH-SHP-Q02",
        customerType: "merchant",
        merchant: "멜론 바스켓 (Melon Basket) · Shopify Korea",
        verbatim: "오늘 새로 오픈한 페이지에서 카드결제가 안보인대요. 계좌이체만 뜬다고 하시는데 확인 부탁요",
      },
    ],
    priorContext: [
      {
        id: "PC-SHP-A",
        label: "Shopify Korea go-live window",
        date: "2026-01-14",
        note: "Day-1 rollout to Korea storefronts started at 09:30 KST. First issue arrived 42 min later.",
        link: "shopify-korea-launch-plan-v2.md",
      },
      {
        id: "PC-SHP-B",
        label: "Smartstore Day-1 precedent",
        date: "2025-11-03",
        note: "Earlier launch-day payment-render issue. Same signal family, different platform.",
        link: "smartstore-2025-11-08-post-mortem.md",
      },
    ],
    patternMatch: {
      summary: "Payment-method visibility defaulted wrong during launch rollout",
      confidence: "High",
      confidenceEvidence: "3 merchants in 9 min · confirmed in PR #4821",
      commonShape: "Launch config default drifted from intended card-enabled state",
      distinctCustomers: ["Shopify Korea", "Smartstore"],
    },
    roleBriefings: [
      {
        role: "CS",
        recipient: "Korean e-commerce support pod",
        publishedAt: "10:13",
        confidence: "High",
        confidenceEvidence: "3 merchants in 9 min",
        headQuote: "결제하려는데 카드결제 옵션이 없어요;; 계좌이체밖에 안떠요. 저만 그런건가요? 사야하는건데...",
        headQuoteEn: "The card option isn't visible at checkout. Is this related to today's launch settings?",
        whyYoureSeeingThis: "Launch-day issue across multiple merchants. Hold merchants while Product + Engineering confirm the rollout state.",
        body: {
          issueShape: "Card option missing immediately after launch rollout.",
          pasteReadyDraft: "We're checking the rollout state on our side first and will confirm within 30 minutes.",
          outcome: "Resolved same day; this language later informed the Cafe24 draft pattern.",
        },
        nextAction: "Use this as precedent context, not as the live issue.",
        trail: [
          {
            claim: "Pattern later reused for Cafe24",
            source: "shopify-korea-2026-01-20-post-mortem.md",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
      {
        role: "Product",
        recipient: "Shopify Korea integration PM",
        publishedAt: "10:15",
        confidence: "High",
        confidenceEvidence: "Launch traffic showed immediate exposure",
        headQuote: "Launch-day issue with direct checkout impact",
        whyYoureSeeingThis: "This was the first signal that the launch-hardening gap was bigger than one merchant misconfiguration.",
        body: {
          scaleOfImpact: "~$6K revenue-at-risk/hour during the active window",
          decisionPrompt: "Immediate hotfix",
          roadmapImplication: "Post-mortem proposed pre-flight validator, but no cross-platform owner was assigned.",
        },
        nextAction: "Use this precedent when evaluating Cafe24 severity.",
        trail: [
          {
            claim: "Validator proposal started here",
            source: "shopify-korea-2026-01-20-post-mortem.md §7",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
          },
        ],
      },
      {
        role: "Engineering",
        recipient: "Payments platform engineering",
        publishedAt: "10:16",
        confidence: "High",
        confidenceEvidence: "Confirmed in PR #4821",
        headQuote: "payment_method_visibility.card defaulted wrong during rollout",
        whyYoureSeeingThis: "This is the concrete resolution path Prism cites in Cafe24.",
        body: {
          reproducibility: "3 merchant reports within 9 min of rollout",
          candidateRootCause: "Config default drift",
          pastResolution: "PR #4821 fixed the rollout and became the strongest precedent for Cafe24.",
        },
        nextAction: "Use PR #4821 as the closest engineering analog.",
        trail: [
          {
            claim: "PR #4821 is the fix",
            source: "GitHub PR #4821",
            dcUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
          },
        ],
      },
    ],
    downstream: [
      { role: "Product", time: "10:41", action: "Hotfix severity approved." },
      { role: "Engineering", time: "11:03", action: "Config override validated on staging." },
      { role: "Engineering", time: "12:09", action: "PR #4821 sign-off completed; post-deploy smoke tests green. Issue resolved." },
    ],
    guidePulses: [
      {
        label: "● Launch issue detected",
        time: "10:13",
        status: "Merchant reports clustered around launch-day checkout visibility.",
        paste: "저희 쪽에서 먼저 배포 상태를 확인 중이며, 30분 이내에 안내드리겠습니다.",
      },
      {
        label: "✓ Resolved precedent",
        time: "12:09",
        phase: "closed",
        status: "PR #4821 shipped. This incident later became Prism's strongest precedent for Cafe24.",
      },
    ],
  },

  "ISS-SMT-001": {
    id: "ISS-SMT-001",
    platformId: "PLT-SMT",
    title: "Smartstore Day-1 payment-render bug",
    shortTitle: "Smartstore launch issue",
    headline: "Earlier signal that should have become a systems fix",
    status: "Resolved precedent",
    statusTone: "muted",
    openedAt: "2025-11-03 09:47 KST",
    resolvedAt: "2025-11-03 14:22 KST",
    issueType: "Launch regression",
    valueProp: "Smartstore is where the systems-fix proposal first appeared and then fell through the cracks.",
    summary: "Smartstore is the oldest installed-platform precedent in the Nimbus Pay workspace. It matters less as the direct analog, but more as proof that the same problem kept recurring without ownership.",
    owner: "Closed same day · no systems fix shipped",
    involvedTeams: ["CS", "Product", "Engineering"],
    dataCenter: {
      rawUrl: "../Data Center/index.html#view=raw&sig=SIG-001",
      shortlistUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
      memoryUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
    },
    trigger: {
      datetime: "2025-11-03 09:47 KST",
      pattern: "Day-1 merchant complaints of payment-render failure",
      patternClass: "Earlier version of the same config-shape issue",
    },
    merchantChat: {
      id: "CH-SMT-001",
      customerType: "merchant",
      merchant: "올리브 에브리 (Olive Every) · Smartstore",
      verbatim: "스마트스토어 체크아웃에서 카드결제가 안떠요. 오늘 배포때문인지 확인 부탁드려요! 빠른확인 필요해요 ㅠㅠ",
    },
    quietCluster: [
      {
        id: "CH-SMT-Q01",
        customerType: "shopper",
        merchant: "익명 고객 #8203 · Smartstore",
        verbatim: "결제 누르니까 계좌이체만 뜨네요... 카드결제는 어디갔나요?",
      },
      {
        id: "CH-SMT-Q02",
        customerType: "merchant",
        merchant: "파인 노트 (Pine Note) · Smartstore",
        verbatim: "결제수단에서 카드가 빠진것 같아요. 오늘부터 그런것같은데 확인 가능할까요?",
      },
    ],
    priorContext: [
      {
        id: "PC-SMT-A",
        label: "Smartstore launch rollout",
        date: "2025-11-03",
        note: "First major Korea e-commerce rollout on this payments stack. Incident closed same day but the underlying launch-hardening gap remained.",
        link: "smartstore-launch-plan-v1.md",
      },
    ],
    patternMatch: {
      summary: "Early launch-day config-shape issue later repeated on Shopify Korea and Cafe24",
      confidence: "Medium",
      confidenceEvidence: "2 merchant reports + same-day fix + explicit retro note",
      commonShape: "Launch-day render failure tied to configuration state",
      distinctCustomers: ["Smartstore"],
    },
    roleBriefings: [
      {
        role: "CS",
        recipient: "Korean e-commerce support pod",
        publishedAt: "09:50",
        confidence: "Medium",
        confidenceEvidence: "2 merchant reports + same-day fix",
        headQuote: "스마트스토어 체크아웃에서 카드결제가 안떠요. 오늘 배포때문인지 확인 부탁드려요! 빠른확인 필요해요 ㅠㅠ",
        headQuoteEn: "Card payment isn't appearing at checkout. Please check if this is due to today's rollout.",
        whyYoureSeeingThis: "This is the earliest documented version of the issue family that later hit Shopify Korea and Cafe24.",
        body: {
          issueShape: "Launch-day payment-render failure at Smartstore.",
          pasteReadyDraft: "We're checking the rollout state on our side first and will confirm shortly.",
          outcome: "Resolved same day, but no platform-wide prevention shipped.",
        },
        nextAction: "Read this as the origin of the systems-fix story.",
        trail: [
          {
            claim: "Origin of the validator proposal",
            source: "smartstore-2025-11-08-post-mortem.md §7",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
          },
        ],
      },
      {
        role: "Product",
        recipient: "Launch PM",
        publishedAt: "10:02",
        confidence: "Medium",
        confidenceEvidence: "Issue closed same day, but post-mortem explicit",
        headQuote: "This was the first time the systems-fix was named",
        whyYoureSeeingThis: "Smartstore matters because the right follow-up was identified and then not resourced.",
        body: {
          scaleOfImpact: "Contained incident, but important because it created the unscheduled validator proposal.",
          decisionPrompt: "The tactical fix shipped; the systemic fix did not.",
          roadmapImplication: "This is why Cafe24 should not be treated as a one-off.",
        },
        nextAction: "Use this issue to defend why launch-hardening needs ownership, not another retro.",
        trail: [
          {
            claim: "Validator proposal accepted but unscheduled",
            source: "smartstore-2025-11-08-post-mortem.md",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
          },
        ],
      },
      {
        role: "Engineering",
        recipient: "Payments platform engineering",
        publishedAt: "10:05",
        confidence: "Medium",
        confidenceEvidence: "Historical issue family, not the closest technical analog",
        headQuote: "Earlier config-shape issue that should have triggered prevention work",
        whyYoureSeeingThis: "Smartstore is not the closest fix path for Cafe24, but it is the oldest warning sign in the chain.",
        body: {
          reproducibility: "2 merchant complaints during launch window",
          candidateRootCause: "Config-state mismatch in launch rollout",
          pastResolution: "Tactical same-day fix. No shared validator shipped afterward.",
        },
        nextAction: "Use Smartstore to support the preventive follow-up, not the immediate Cafe24 diagnosis.",
        trail: [
          {
            claim: "No shared validator shipped afterward",
            source: "smartstore-2025-11-08-post-mortem.md",
            dcUrl: "../Data Center/index.html#view=shortlist&drawer=open&id=SIG-003&sig=SIG-003",
          },
        ],
      },
    ],
    downstream: [
      { role: "Engineering", time: "11:21", action: "Tactical config fix validated on staging." },
      { role: "Product", time: "12:02", action: "Same-day resolution communicated to CS." },
      { role: "Post-mortem", time: "2025-11-08", action: "Validator proposal accepted, then left unscheduled." },
    ],
    guidePulses: [
      {
        label: "● Historical issue detected",
        time: "09:50",
        status: "Smartstore showed the first clear version of the launch-hardening gap.",
        paste: "저희 쪽에서 먼저 배포 상태를 확인 중이며, 곧 안내드리겠습니다.",
      },
      {
        label: "✓ Tactical fix shipped",
        time: "14:22",
        phase: "closed",
        status: "Issue resolved same day. The long-term prevention work remained unscheduled.",
      },
    ],
  },

  // ─── Lightweight C24 stubs — populate Last 7 days chart + Archived list ──────────
  // Schema is intentionally narrower than the full issues above. Enough to render
  // in: Issue list (left), Issue detail panel (right), Engineering tile aggregators,
  // and the daily traffic chart's Issue series.
  "ISS-C24-004": {
    id: "ISS-C24-004",
    platformId: "PLT-C24",
    title: "Card-option flicker on mobile checkout",
    status: "Investigating",
    statusTone: "caution",
    openedAt: "2026-05-02 09:14 KST",
    issueType: "Mobile rendering",
    owner: "Investigating · Eng pod 3",
    valueProp: "Mobile shoppers see card options vanish for ~400ms after applying coupons.",
    summary: "Two merchants reported their mobile shoppers seeing the card-option list flicker after coupon apply. Reproducible on iOS Safari only so far.",
    patternMatch: {
      summary: "Mobile-only render race after async pricing recompute",
      confidence: "Medium",
      confidenceEvidence: "2 merchant reports, reproducible on iOS Safari, not on Android",
    },
    priorContext: [
      { label: "Async pricing recompute", note: "Same recompute pipeline implicated in the Apr 22 card-option issue, different surface." },
    ],
    roleBriefings: [
      {
        role: "Product",
        recipient: "Cafe24 PM",
        publishedAt: "09:30",
        confidence: "Medium",
        body: {
          scaleOfImpact: "Two merchants so far, ~400ms flicker on iOS Safari only",
          decisionPrompt: "Should we hold the next pricing-recompute change until this is root-caused?",
        },
        nextAction: "Decide whether to gate the next pricing-recompute deploy.",
        whyYoureSeeingThis: "Same async recompute family as ISS-C24-001.",
        trail: [],
      },
      {
        role: "Engineering",
        recipient: "Payments client team",
        publishedAt: "09:35",
        confidence: "Medium",
        body: {
          reproducibility: "Reproduced 4/5 attempts on iOS Safari + coupon flow",
          candidateRootCause: "Race between pricing recompute and card-option render on slow networks",
          roughEffort: "≈1 dev day to gate, +1 day to validate",
        },
        nextAction: "Add a guard around the recompute response handler before re-rendering options.",
        whyYoureSeeingThis: "Mobile-only — desktop unaffected. Same recompute pipeline as ISS-C24-001.",
        trail: [
          { claim: "Recompute race confirmed in DevTools", source: "ios-safari-network-trace.har" },
        ],
      },
    ],
    downstream: [
      { role: "Product", time: "09:30", action: "Holding next recompute deploy pending root-cause." },
      { role: "Engineering",      time: "10:15", action: "Reproduced on iOS Safari + coupon path; opening regression case." },
    ],
  },

  "ISS-C24-005": {
    id: "ISS-C24-005",
    platformId: "PLT-C24",
    title: "Tax line shows zero on KRW orders > ₩1M",
    status: "Investigating",
    statusTone: "caution",
    openedAt: "2026-04-30 16:48 KST",
    issueType: "Tax calculation",
    owner: "Investigating · Tax engine team",
    valueProp: "High-value orders display ₩0 tax line at checkout summary.",
    summary: "Merchants flagged that KRW orders above the ₩1,000,000 threshold render the tax line as ₩0. Stored value is correct; only display is wrong.",
    patternMatch: {
      summary: "Display-only formatting bug — backend tax persists correctly",
      confidence: "Medium-High",
      confidenceEvidence: "3 merchant reports + DB inspection confirms correct stored values",
    },
    priorContext: [
      { label: "KRW formatting fix Q4 2025", note: "Similar locale-specific number formatting issue affected refund receipts." },
    ],
    roleBriefings: [
      {
        role: "Product",
        recipient: "Cafe24 PM",
        publishedAt: "17:02",
        confidence: "Medium-High",
        body: {
          scaleOfImpact: "3 merchants, ~12 affected orders per day above the threshold",
          decisionPrompt: "Should we issue a merchant-facing notice now or wait for the fix?",
        },
        nextAction: "Decide on merchant communication timing.",
        whyYoureSeeingThis: "Display-only — stored data is fine, but merchants are concerned shoppers are confused.",
        trail: [],
      },
      {
        role: "Engineering",
        recipient: "Tax engine team",
        publishedAt: "17:10",
        confidence: "Medium-High",
        body: {
          reproducibility: "Confirmed across all 3 reporting merchants on staging",
          candidateRootCause: "Locale-specific Intl.NumberFormat path dropping fraction digits above ₩1M",
          roughEffort: "<1 dev day for fix, ~1 day for regression",
        },
        nextAction: "Patch the formatter and add a regression case for high-value KRW.",
        whyYoureSeeingThis: "Same Intl.NumberFormat path as the Q4 2025 refund receipt bug.",
        trail: [],
      },
    ],
    downstream: [
      { role: "Product", time: "17:02", action: "Drafting merchant-facing notice; holding for QA confirmation." },
      { role: "Engineering",      time: "18:20", action: "Reproduced on staging across all 3 merchant accounts." },
    ],
  },

  "ISS-C24-006": {
    id: "ISS-C24-006",
    platformId: "PLT-C24",
    title: "Webhook retries dropped during 02:00 KST window",
    status: "Investigating",
    statusTone: "caution",
    openedAt: "2026-04-27 11:20 KST",
    issueType: "Webhook delivery",
    owner: "Investigating · Platform reliability",
    valueProp: "Order-confirmation webhooks fail silently during a 30-minute overnight window.",
    summary: "Two merchants reported missing order-confirmation webhooks delivered between 02:00–02:30 KST. Affects post-checkout fulfillment automations.",
    patternMatch: {
      summary: "Time-windowed webhook failure aligned with infra maintenance",
      confidence: "Medium",
      confidenceEvidence: "Pattern matches 02:00 KST infra maintenance window; 2 merchant reports",
    },
    priorContext: [
      { label: "Maintenance window webhook gap", note: "Infrastructure maintenance window historically pauses some delivery workers." },
    ],
    roleBriefings: [
      {
        role: "Product",
        recipient: "Cafe24 PM",
        publishedAt: "11:35",
        confidence: "Medium",
        body: {
          scaleOfImpact: "≈30-minute nightly window, 2 merchants confirmed, scope likely wider",
          decisionPrompt: "Should we shorten the maintenance window or add a delivery queue replay?",
        },
        nextAction: "Decide between window reduction and queue replay strategy.",
        whyYoureSeeingThis: "Aligned with the 02:00 KST infra maintenance window.",
        trail: [],
      },
      {
        role: "Engineering",
        recipient: "Platform reliability team",
        publishedAt: "11:45",
        confidence: "Medium",
        body: {
          reproducibility: "Confirmed during scheduled maintenance windows",
          candidateRootCause: "Delivery worker drains during maintenance without replay on restart",
          roughEffort: "≈3 dev days for replay queue, 1 day for monitoring",
        },
        nextAction: "Implement a replay queue for events buffered during maintenance.",
        whyYoureSeeingThis: "Time-windowed failure pattern — not a logic bug, an operational gap.",
        trail: [],
      },
    ],
    downstream: [
      { role: "Product", time: "11:35", action: "Reviewing maintenance window options with reliability." },
      { role: "Engineering",      time: "12:48", action: "Verified delivery gap during last night's window in logs." },
    ],
  },

  // ─── Archived stubs (statusTone: muted) ──────────────────────────────────────
  "ISS-C24-007": {
    id: "ISS-C24-007",
    platformId: "PLT-C24",
    title: "Korean address autofill failed for Jeju addresses",
    status: "Archived",
    statusTone: "muted",
    openedAt: "2026-02-15 10:22 KST",
    resolvedAt: "2026-02-17 16:40 KST",
    issueType: "Address validation",
    owner: "Closed · Address service team",
    valueProp: "Jeju Island addresses bypassed autofill validator and required manual entry.",
    summary: "Jeju Island postal codes were missing from the address autofill dataset. Resolved by dataset refresh; archived after 30 days with no recurrence.",
    patternMatch: {
      summary: "Stale address dataset edge case",
      confidence: "High",
      confidenceEvidence: "Dataset refresh fully resolved; no recurrence in 11 weeks",
    },
    priorContext: [
      { label: "Address dataset refresh cadence", note: "Quarterly refresh missed Jeju expansion postal codes." },
    ],
    roleBriefings: [
      {
        role: "Product",
        recipient: "Cafe24 PM",
        publishedAt: "10:30",
        confidence: "High",
        body: {
          scaleOfImpact: "Limited to Jeju shoppers; resolved by dataset refresh",
          decisionPrompt: "Move address dataset refresh to monthly cadence?",
        },
        nextAction: "No further action — refresh cadence change accepted.",
        whyYoureSeeingThis: "Archived precedent for address-dataset operational hygiene.",
        trail: [],
      },
    ],
    downstream: [
      { role: "Product", time: "10:30", action: "Confirmed dataset gap; refresh queued." },
      { role: "Engineering",      time: "16:40", action: "Validated Jeju postal codes resolve after refresh; closing." },
    ],
  },

  "ISS-C24-008": {
    id: "ISS-C24-008",
    platformId: "PLT-C24",
    title: "Coupon stacking miscount on bulk orders",
    status: "Archived",
    statusTone: "muted",
    openedAt: "2026-01-22 14:08 KST",
    resolvedAt: "2026-01-25 11:12 KST",
    issueType: "Pricing logic",
    owner: "Closed · Pricing team",
    valueProp: "Bulk orders applied coupon stacking limits incorrectly.",
    summary: "Coupon stacking limit logic miscounted unit-level coupons on bulk orders. Patched and archived after monitoring.",
    patternMatch: {
      summary: "Coupon stacking edge case on bulk SKUs",
      confidence: "High",
      confidenceEvidence: "Patched in Jan; no recurrence since",
    },
    priorContext: [
      { label: "Coupon engine refactor 2025-Q3", note: "Stacking limits introduced; bulk-order edge case missed in initial rollout." },
    ],
    roleBriefings: [
      {
        role: "Product",
        recipient: "Cafe24 PM",
        publishedAt: "14:20",
        confidence: "High",
        body: {
          scaleOfImpact: "Edge case — affected merchants with bulk-order coupon promotions only",
          decisionPrompt: "Closed — no follow-up needed.",
        },
        nextAction: "Archived precedent.",
        whyYoureSeeingThis: "Reference for future coupon-engine changes.",
        trail: [],
      },
    ],
    downstream: [
      { role: "Product", time: "14:20", action: "Triaged; pricing team owns the patch." },
      { role: "Engineering",      time: "11:12", action: "Patch validated; closing with monitoring tag." },
    ],
  },

  "ISS-C24-009": {
    id: "ISS-C24-009",
    platformId: "PLT-C24",
    title: "Receipt PDF font fallback on Windows clients",
    status: "Archived",
    statusTone: "muted",
    openedAt: "2025-12-08 09:55 KST",
    resolvedAt: "2025-12-10 13:30 KST",
    issueType: "Document rendering",
    owner: "Closed · Documents team",
    valueProp: "PDF receipts rendered with fallback fonts when opened in older Windows PDF readers.",
    summary: "Older Windows PDF viewers triggered font fallback on Korean glyphs in generated receipts. Resolved by embedding the subset font in the PDF.",
    patternMatch: {
      summary: "Font subset not embedded in receipt PDFs",
      confidence: "High",
      confidenceEvidence: "Resolved by embedding subset; no recurrence since rollout",
    },
    priorContext: [
      { label: "PDF generator rollout 2025-Q4", note: "Subset font embedding was deferred for file-size reasons; reversed after this issue." },
    ],
    roleBriefings: [
      {
        role: "Product",
        recipient: "Cafe24 PM",
        publishedAt: "10:10",
        confidence: "High",
        body: {
          scaleOfImpact: "Cosmetic but visible to merchants downloading receipts on older Windows",
          decisionPrompt: "Closed — embed subset by default for all receipt PDFs.",
        },
        nextAction: "Archived precedent.",
        whyYoureSeeingThis: "Reference for future PDF-generation decisions.",
        trail: [],
      },
    ],
    downstream: [
      { role: "Product", time: "10:10", action: "Confirmed cosmetic; doc team owns the fix." },
      { role: "Engineering",      time: "13:30", action: "Verified embedded subset renders correctly across Windows readers." },
    ],
  },
};

const memoryViews = [
  {
    id: "MEM-C24",
    platformId: "PLT-C24",
    title: "Cafe24 memory",
    subtitle: "What Prism knows about Cafe24 launch health inside Nimbus Pay",
    whatThisSurfaces: "The current issue plus the older platform precedents that Prism is using as live memory.",
    entries: [
      {
        date: "2026-04-21",
        entity: "Cafe24 go-live",
        note: "Launch went live with no reported issues through end of Day 1.",
        followup: "Day-2 issue now active. Prism linked it to older installed-platform precedents immediately.",
        status: "active",
      },
      {
        date: "2026-04-22",
        entity: "Current issue",
        note: "Card-option issue active across 3 merchants in 11 minutes.",
        followup: "Product + Engineering engaged in parallel. Guide auto-rewrites when the hotfix ships.",
        status: "active",
      },
    ],
    unfinishedWork: [
      {
        title: "Pre-flight payment-method visibility validator",
        proposedDate: "2025-11-12",
        proposedBy: "Engineering after Smartstore retro",
        status: "accepted · unscheduled",
        estimate: "+2 dev days",
        whyItKeepsNotShipping: "No dedicated owner across installed platforms.",
      },
    ],
  },
  {
    id: "MEM-SHP",
    platformId: "PLT-SHP",
    title: "Shopify Korea memory",
    subtitle: "Resolved precedent Prism should surface before humans remember it",
    whatThisSurfaces: "The strongest direct precedent for the current Cafe24 issue.",
    entries: [
      {
        date: "2026-01-14",
        entity: "Shopify Korea launch incident",
        note: "Card visibility defaulted wrong on launch day.",
        followup: "Resolved by PR #4821. This is the first precedent Prism surfaces for Cafe24.",
        status: "closed",
      },
      {
        date: "2026-01-20",
        entity: "Shopify Korea post-mortem",
        note: "Proposed validator across launches.",
        followup: "No cross-platform owner assigned, so the idea did not ship.",
        status: "closed-with-artifact",
      },
    ],
  },
  {
    id: "MEM-SMT",
    platformId: "PLT-SMT",
    title: "Smartstore memory",
    subtitle: "Oldest warning sign in the launch-hardening chain",
    whatThisSurfaces: "Why Smartstore matters less as a direct analog and more as the origin of the systems-fix proposal.",
    entries: [
      {
        date: "2025-11-03",
        entity: "Smartstore launch incident",
        note: "Earlier launch-day payment-render issue.",
        followup: "Resolved same day, but the platform-wide fix was not resourced.",
        status: "closed",
      },
      {
        date: "2025-11-08",
        entity: "Smartstore post-mortem",
        note: "Validator proposal accepted.",
        followup: "Stayed unscheduled, which is why Cafe24 is now the third signal in the chain.",
        status: "accepted-unscheduled",
      },
    ],
  },
];

window.PrismData = {
  customer,
  personas,
  platforms,
  issues,
  memoryViews,
};
