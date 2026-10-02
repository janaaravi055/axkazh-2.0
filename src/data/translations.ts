export type Lang = "en" | "ta" | "hi" | "fr";

export const LANGUAGES: { key: Lang; label: string }[] = [
  { key: "en", label: "English" },
  { key: "ta", label: "தமிழ்" },
  { key: "hi", label: "हिन्दी" },
  { key: "fr", label: "Français" },
];

const en = {
  brand: "SMART FRAUD ALERT",
  fullBrand: "Smart Fraud Alert System",
  tagline: "Prevent · Detect · Guide · Protect",
  prototype:
    "Prototype only — simulated results; not guaranteed real-world detection.",
  privacySafe:
    "Privacy-safe demo • local storage • no automatic authority submission",

  login: "Secure Login",
  username: "Username",
  password: "Password",
  language: "Language",
  chooseApps: "Choose apps to simulate detection for",

  messaging: "Messaging",
  emailGroup: "Email",
  social: "Social Media",

  enterDashboard: "Enter Dashboard",
  demoCredentials:
    "Demo mode: any non-empty username and password work.",

  dashboard: "Dashboard",
  chatbot: "Chatbot Guidance",
  detection: "Detection Demo",
  checklist: "Security Checklist",
  userinfo: "User Information",
  police: "Police Inform",
  protectionFlow: "Protection Flow",
  logout: "Logout",

  welcome: "Welcome back",
  reports: "Reports",
  cases: "Scam / Fraud Cases",
  safeMessages: "Safe Messages",
  highRiskAlerts: "High-Risk Alerts",
  recentReports: "Recent Reports",
  selectedApps: "Selected Apps",
  appScope: "Only selected apps are simulated",

  open: "Open",
  view: "View",
  close: "Close",

  noReports:
    "No reports yet. Use Detection or User Information to create one.",

  workflow: "Complete Protection Flow",
  workflowSubtitle:
    "The alert is only the first step — the system continues until the user is guided toward safety.",
  workflowHint:
    "Tap a stage in the flow to open the matching feature.",
  detectAlertGuideProtect:
    "DETECT • ALERT • GUIDE • PROTECT",

  stageNotification: "Notification",
  stageAnalysis: "AI Analysis",
  stageThreat: "Threat Detected",
  stageAlarm: "Alarm & Warning",
  stageLogin: "User Login",
  stageChatbot: "AI Chatbot Guidance",
  stageSecurity: "Security Actions",
  stageProtection: "Protection",

  incomingAlert: "Incoming message / alert",
  patternAnalysis: "Pattern analysis",
  riskIdentified: "Risk identified",
  soundVoice: "Sound + AI voice",
  secureAccess: "Secure access",
  stepByStep: "Step-by-step help",
  checklistReport: "Checklist + report",
  safeNext: "Safe next action",

  openFlow: "Open Complete Protection Flow",

  chatbotIntro:
    "I can guide you through common digital-safety questions. Ask a question or choose a topic.",
  askSafety: "Ask the safety assistant...",
  send: "Send",
  quickQuestions: "Quick Questions",

  q2fa: "How do I enable 2FA?",
  qotp: "Someone asked for my OTP. What should I do?",
  qlink: "How do I check a suspicious link?",
  qpassword: "What makes a strong password?",
  qreport: "How can I report a scam?",

  a2fa:
    "Open the account Security settings → choose Two-Factor Authentication → select a verification method → complete the provider setup steps.",
  aotp:
    "Never share the OTP. Stop the conversation and verify the request through the service's official app or website.",
  alink:
    "Do not open it. Inspect the domain carefully, avoid shortened or misspelled domains, and navigate to the official service manually.",
  apassword:
    "Use a long, unique password or passphrase for each important account. Avoid reusing passwords.",
  areport:
    "Keep evidence, record the sender and date, use the service's official reporting channel, and prepare the demo incident report here.",

  detectionSubtitle:
    "Enter suspicious content or run a suspicious-login simulation.",
  app: "App",
  suspiciousContent: "Suspicious Content",
  pasteContent:
    "Paste a suspicious message, phishing email, URL, or login notice...",
  analyze: "Analyze Content",
  clear: "Clear",

  highSample: "High-risk sample",
  suspiciousSample: "Suspicious sample",
  safeSample: "Safe sample",

  analysisOutput: "Analysis Output",
  status: "Status",
  awaitingContent: "Awaiting content",
  pasteAndScan: "Paste content and run the scanner.",

  safe: "SAFE",
  suspicious: "SUSPICIOUS",
  high: "HIGH RISK",

  safeMsg:
    "No strong scam indicators were detected in this demo.",
  suspiciousMsg:
    "Suspicious indicators detected. Review before clicking, paying, or sharing information.",
  highMsg:
    "High-risk indicators detected. Do not interact until independently verified.",

  reasons: "Why this was flagged",

  suspiciousLoginSimulation:
    "Suspicious Login Simulation",
  simulate: "Simulate Suspicious Login",
  simulateHint:
    "Demo popup + siren + sound + AI voice using the selected language.",

  warning: "Warning",
  suspiciousLoginDetected:
    "Suspicious login detected",
  playAgain: "Play Warning Again",
  dismiss: "Dismiss Alert",

  alarmText:
    "Warning! Suspicious login detected. Please verify this activity before continuing.",

  checklistSubtitle:
    "Tick each action you have completed.",
  progress: "Progress",

  useUniquePasswords:
    "Use unique passwords for important accounts",
  enable2fa:
    "Enable two-factor authentication",
  verifySender:
    "Verify the sender before clicking links",
  checkUrls:
    "Check URLs and domains carefully",
  neverShare:
    "Never share OTPs, passwords, PINs, or CVVs",
  updateApps:
    "Keep devices and apps updated",
  reportSuspicious:
    "Report suspicious messages using official channels",
  screenLock:
    "Use a secure screen lock",

  done: "DONE",
  openStatus: "OPEN",

  incidentTitle: "Incident Information",
  incidentSubtitle:
    "Collect incident details and save the demo case locally.",

  name: "Name",
  phone: "Phone",
  email: "Email",
  dateTime: "Date / Time",
  scamType: "Scam Type",

  suspiciousMessage: "Suspicious Message",
  suspectInfo: "Suspect Information",
  suspiciousUrl: "Suspicious URL",
  description: "Description / Evidence Notes",
  screenshotEvidence: "Screenshot / Evidence",

  chooseFile: "Choose File",
  noFile: "No file selected",

  consent:
    "I understand this is a prototype and consent to storing this demo incident locally on this device.",

  saveReport: "Save Report",
  saveSuccess: "Report saved successfully.",

  confirmation: "Confirmation",
  reportSaved:
    "Your incident report has been saved locally.",
  caseId: "Case ID",
  viewPoliceReport: "Open Police Report",

  policeTitle: "Police Inform",
  policeSubtitle:
    "Generate a professional incident report. You decide whether and where to share it.",

  noIncident:
    "Save an incident first to generate a report.",
  generateReport: "Generate Report",

  download: "Download",
  exportJson: "Export JSON",
  share: "Share",
  reportPreview: "Report Preview",

  notOfficial:
    "This is a prototype report, not an official police filing. It is never auto-sent to authorities.",

  selectReport: "Select Report",
  category: "Category",
  risk: "Risk",
  reportId: "Report ID",
  reportType: "Report Type",

  typeDetection: "Detection",
  typeIncident: "Incident",

  prototypeReference: "Prototype Reference",
  interactiveFlow: "Interactive Workflow",
  actions: "Flow Actions",

  goDetection: "Go to Detection",
  goChatbot: "Go to Chatbot",
  goChecklist: "Go to Security Actions",
  goUserInfo: "Create Incident",
  goPolice: "Open Report Center",
};

export type TranslationKey = keyof typeof en;

const ta: Record<TranslationKey, string> = {
  ...en,

  brand: "ஸ்மார்ட் ஃபிராட் அலர்ட்",
  fullBrand: "ஸ்மார்ட் ஃபிராட் அலர்ட் சிஸ்டம்",
  tagline: "தடு · கண்டறி · வழிகாட்டு · பாதுகாப்பு",

  prototype:
    "இது ஒரு முன்மாதிரி; முடிவுகள் சோதனைக்காக மட்டுமே.",
  privacySafe:
    "தனியுரிமை பாதுகாப்பான டெமோ • உள்ளூர் சேமிப்பு • அதிகாரிகளுக்கு தானாக அனுப்பாது",

  login: "பாதுகாப்பான உள்நுழைவு",
  username: "பயனர் பெயர்",
  password: "கடவுச்சொல்",
  language: "மொழி",
  chooseApps:
    "சோதனை செய்ய பயன்பாடுகளை தேர்வு செய்யவும்",

  messaging: "செய்தி பயன்பாடுகள்",
  emailGroup: "மின்னஞ்சல்",
  social: "சமூக ஊடகம்",

  enterDashboard: "டாஷ்போர்டுக்கு செல்லவும்",
  demoCredentials:
    "டெமோ: காலியாக இல்லாத பயனர் பெயர் மற்றும் கடவுச்சொல் போதும்.",

  dashboard: "டாஷ்போர்டு",
  chatbot: "சாட்பாட் வழிகாட்டி",
  detection: "கண்டறிதல் சோதனை",
  checklist: "பாதுகாப்பு பட்டியல்",
  userinfo: "பயனர் தகவல்",
  police: "போலீஸ் அறிக்கை",
  protectionFlow: "பாதுகாப்பு ஓட்டம்",
  logout: "வெளியேறு",

  welcome: "மீண்டும் வரவேற்கிறோம்",
  reports: "அறிக்கைகள்",
  cases: "மோசடி வழக்குகள்",
  safeMessages: "பாதுகாப்பான செய்திகள்",
  highRiskAlerts: "அதிக ஆபத்து எச்சரிக்கைகள்",
  recentReports: "சமீபத்திய அறிக்கைகள்",
  selectedApps: "தேர்வு செய்த பயன்பாடுகள்",
  appScope:
    "தேர்ந்தெடுத்த பயன்பாடுகள் மட்டுமே சிமுலேஷன் செய்யப்படும்",

  open: "திற",
  view: "பார்க்க",
  close: "மூடு",

  noReports:
    "இன்னும் அறிக்கைகள் இல்லை. Detection அல்லது User Information மூலம் அறிக்கை உருவாக்கலாம்.",

  workflow: "முழுமையான பாதுகாப்பு ஓட்டம்",
  workflowSubtitle:
    "எச்சரிக்கை முதல் படி மட்டுமே — பயனர் பாதுகாப்பிற்கு வழிகாட்டப்படும் வரை சிஸ்டம் தொடர்கிறது.",
  workflowHint:
    "சரியான feature-ஐ திறக்க flow-வில் ஒரு கட்டத்தை தேர்வு செய்யவும்.",
  detectAlertGuideProtect:
    "கண்டறி • எச்சரி • வழிகாட்டு • பாதுகாப்பு",

  stageNotification: "அறிவிப்பு",
  stageAnalysis: "AI பகுப்பாய்வு",
  stageThreat: "அச்சுறுத்தல் கண்டறிதல்",
  stageAlarm: "அலாரம் & எச்சரிக்கை",
  stageLogin: "பயனர் உள்நுழைவு",
  stageChatbot: "AI சாட்பாட் வழிகாட்டி",
  stageSecurity: "பாதுகாப்பு செயல்கள்",
  stageProtection: "பாதுகாப்பு",

  incomingAlert: "வரும் செய்தி / எச்சரிக்கை",
  patternAnalysis: "முறை பகுப்பாய்வு",
  riskIdentified: "ஆபத்து கண்டறியப்பட்டது",
  soundVoice: "ஒலி + AI குரல்",
  secureAccess: "பாதுகாப்பான அணுகல்",
  stepByStep: "படி படியான உதவி",
  checklistReport: "பட்டியல் + அறிக்கை",
  safeNext: "அடுத்த பாதுகாப்பான செயல்",

  openFlow:
    "முழு பாதுகாப்பு ஓட்டத்தை திறக்கவும்",

  chatbotIntro:
    "டிஜிட்டல் பாதுகாப்பு கேள்விகளில் வழிகாட்ட முடியும். கேள்வி கேளுங்கள் அல்லது தலைப்பை தேர்வு செய்யுங்கள்.",
  askSafety:
    "பாதுகாப்பு உதவியாளரிடம் கேளுங்கள்...",
  send: "அனுப்பு",
  quickQuestions:
    "விரைவு கேள்விகள்",

  q2fa: "2FA எப்படி இயக்குவது?",
  qotp:
    "யாராவது OTP கேட்டால் என்ன செய்ய வேண்டும்?",
  qlink:
    "சந்தேகமான இணைப்பை எப்படி சரிபார்ப்பது?",
  qpassword:
    "வலுவான கடவுச்சொல் என்றால் என்ன?",
  qreport:
    "மோசடியை எப்படி புகாரளிப்பது?",

  a2fa:
    "கணக்கின் Security அமைப்புகள் → Two-Factor Authentication → சரிபார்ப்பு முறையைத் தேர்வு செய்து → setup முடிக்கவும்.",
  aotp:
    "OTP-ஐ ஒருபோதும் பகிர வேண்டாம். உரையாடலை நிறுத்தி அதிகாரப்பூர்வ செயலி அல்லது இணையதளம் மூலம் சரிபார்க்கவும்.",
  alink:
    "திறக்க வேண்டாம். டொமைனை கவனமாக சரிபார்த்து, அதிகாரப்பூர்வ சேவையை நீங்களே திறக்கவும்.",
  apassword:
    "ஒவ்வொரு முக்கிய கணக்கிற்கும் நீளமான, தனித்துவமான கடவுச்சொல் பயன்படுத்தவும்.",
  areport:
    "ஆதாரங்களை சேமித்து, அனுப்புநர் மற்றும் தேதியை பதிவு செய்து, அதிகாரப்பூர்வ புகார் வழியை பயன்படுத்தவும்.",

  detectionSubtitle:
    "சந்தேகமான உள்ளடக்கத்தை உள்ளிடுங்கள் அல்லது சந்தேகமான உள்நுழைவை சோதிக்கவும்.",
  app: "பயன்பாடு",
  suspiciousContent:
    "சந்தேகமான உள்ளடக்கம்",
  pasteContent:
    "சந்தேகமான செய்தி, phishing மின்னஞ்சல், URL அல்லது login அறிவிப்பை ஒட்டவும்...",
  analyze:
    "உள்ளடக்கத்தை பகுப்பாய்வு செய்",
  clear: "அழி",

  highSample:
    "அதிக ஆபத்து உதாரணம்",
  suspiciousSample:
    "சந்தேக உதாரணம்",
  safeSample:
    "பாதுகாப்பான உதாரணம்",

  analysisOutput:
    "பகுப்பாய்வு முடிவு",
  status: "நிலை",
  awaitingContent:
    "உள்ளடக்கத்திற்காக காத்திருக்கிறது",
  pasteAndScan:
    "உள்ளடக்கத்தை ஒட்டி scanner இயக்கவும்.",

  safe: "பாதுகாப்பானது",
  suspicious: "சந்தேகம்",
  high: "அதிக ஆபத்து",

  safeMsg:
    "இந்த டெமோவில் வலுவான மோசடி அறிகுறிகள் கண்டறியப்படவில்லை.",
  suspiciousMsg:
    "சந்தேகமான அறிகுறிகள் கண்டறியப்பட்டன. கிளிக் அல்லது பணம் செலுத்துவதற்கு முன் சரிபார்க்கவும்.",
  highMsg:
    "அதிக ஆபத்து அறிகுறிகள் கண்டறியப்பட்டன. தனியாக சரிபார்க்கும் வரை தொடர்பு கொள்ள வேண்டாம்.",

  reasons: "ஏன் எச்சரிக்கப்பட்டது",

  suspiciousLoginSimulation:
    "சந்தேகமான உள்நுழைவு சிமுலேஷன்",
  simulate:
    "சந்தேகமான உள்நுழைவை சோதிக்கவும்",
  simulateHint:
    "தேர்ந்தெடுத்த மொழியில் popup + siren + sound + AI voice.",

  warning: "எச்சரிக்கை",
  suspiciousLoginDetected:
    "சந்தேகமான உள்நுழைவு கண்டறியப்பட்டது",
  playAgain: "மீண்டும் எச்சரிக்கை",
  dismiss: "எச்சரிக்கையை மூடு",

  alarmText:
    "எச்சரிக்கை! சந்தேகமான உள்நுழைவு கண்டறியப்பட்டது. தொடர்வதற்கு முன் இந்த செயல்பாட்டை சரிபார்க்கவும்.",

  checklistSubtitle:
    "முடித்த செயல்களை குறிக்கவும்.",
  progress: "முன்னேற்றம்",

  useUniquePasswords:
    "முக்கிய கணக்குகளுக்கு தனித்துவமான கடவுச்சொற்களை பயன்படுத்தவும்",
  enable2fa:
    "இரு-அடுக்கு சரிபார்ப்பை இயக்கவும்",
  verifySender:
    "இணைப்பை கிளிக் செய்வதற்கு முன் அனுப்புநரை சரிபார்க்கவும்",
  checkUrls:
    "URL மற்றும் டொமைனை கவனமாக சரிபார்க்கவும்",
  neverShare:
    "OTP, கடவுச்சொல், PIN அல்லது CVV-ஐ பகிர வேண்டாம்",
  updateApps:
    "சாதனங்கள் மற்றும் பயன்பாடுகளை புதுப்பிக்கவும்",
  reportSuspicious:
    "சந்தேக செய்திகளை அதிகாரப்பூர்வ வழிகளில் புகாரளிக்கவும்",
  screenLock:
    "பாதுகாப்பான திரை பூட்டை பயன்படுத்தவும்",

  done: "முடிந்தது",
  openStatus: "திறந்தது",

  incidentTitle: "சம்பவ தகவல்",
  incidentSubtitle:
    "சம்பவ விவரங்களை சேகரித்து டெமோ வழக்கை உள்ளூரில் சேமிக்கவும்.",

  name: "பெயர்",
  phone: "தொலைபேசி",
  email: "மின்னஞ்சல்",
  dateTime: "தேதி / நேரம்",
  scamType: "மோசடி வகை",

  suspiciousMessage: "சந்தேகமான செய்தி",
  suspectInfo: "சந்தேக நபர் தகவல்",
  suspiciousUrl: "சந்தேக URL",
  description: "விளக்கம் / ஆதார குறிப்புகள்",
  screenshotEvidence: "ஸ்கிரீன்ஷாட் / ஆதாரம்",

  chooseFile: "கோப்பை தேர்வு செய்யவும்",
  noFile: "கோப்பு தேர்வு செய்யப்படவில்லை",

  consent:
    "இது ஒரு முன்மாதிரி என்பதை புரிந்து கொண்டு இந்த டெமோ சம்பவத்தை உள்ளூரில் சேமிக்க ஒப்புக்கொள்கிறேன்.",

  saveReport:
    "அறிக்கையை சேமி",
  saveSuccess:
    "அறிக்கை வெற்றிகரமாக சேமிக்கப்பட்டது.",

  confirmation: "உறுதிப்படுத்தல்",
  reportSaved:
    "உங்கள் சம்பவ அறிக்கை இந்த சாதனத்தில் சேமிக்கப்பட்டது.",
  caseId: "வழக்கு ID",
  viewPoliceReport:
    "போலீஸ் அறிக்கையை திற",

  policeTitle: "போலீஸ் அறிக்கை",
  policeSubtitle:
    "தொழில்முறை சம்பவ அறிக்கையை உருவாக்குங்கள். பகிர்வது உங்கள் முடிவு.",

  noIncident:
    "அறிக்கை உருவாக்க முதலில் ஒரு சம்பவத்தை சேமிக்கவும்.",
  generateReport:
    "அறிக்கை உருவாக்கு",

  download: "பதிவிறக்கு",
  exportJson: "JSON ஏற்றுமதி",
  share: "பகிர்",
  reportPreview:
    "அறிக்கை முன்னோட்டம்",

  notOfficial:
    "இது ஒரு முன்மாதிரி அறிக்கை; அதிகாரப்பூர்வ போலீஸ் பதிவு அல்ல. அதிகாரிகளுக்கு தானாக அனுப்பப்படாது.",

  selectReport:
    "அறிக்கையை தேர்வு செய்யவும்",
  category: "வகை",
  risk: "ஆபத்து",
  reportId: "அறிக்கை ID",
  reportType: "அறிக்கை வகை",

  typeDetection: "கண்டறிதல்",
  typeIncident: "சம்பவம்",

  prototypeReference:
    "முன்மாதிரி குறிப்பு",
  interactiveFlow:
    "இணையச்செயல்பாட்டு ஓட்டம்",
  actions:
    "ஓட்ட செயல்கள்",

  goDetection:
    "கண்டறிதலுக்கு செல்ல",
  goChatbot:
    "சாட்பாட்டுக்கு செல்ல",
  goChecklist:
    "பாதுகாப்பு செயல்களுக்கு செல்ல",
  goUserInfo:
    "சம்பவம் உருவாக்க",
  goPolice:
    "அறிக்கை மையத்தை திற",
};

const hi: Record<TranslationKey, string> = {
  ...en,

  brand: "SMART FRAUD ALERT",
  fullBrand: "स्मार्ट फ्रॉड अलर्ट सिस्टम",
  tagline: "रोकें · पहचानें · मार्गदर्शन · सुरक्षा",

  prototype:
    "यह एक प्रोटोटाइप है — परिणाम सिमुलेटेड हैं, वास्तविक दुनिया की गारंटी नहीं।",
  privacySafe:
    "प्राइवेसी-सेफ डेमो • लोकल स्टोरेज • अधिकारियों को स्वतः नहीं भेजा जाता",

  login: "सुरक्षित लॉगिन",
  username: "यूज़रनेम",
  password: "पासवर्ड",
  language: "भाषा",
  chooseApps:
    "सिमुलेशन के लिए ऐप चुनें",

  messaging: "मैसेजिंग",
  emailGroup: "ईमेल",
  social: "सोशल मीडिया",

  enterDashboard:
    "डैशबोर्ड खोलें",
  demoCredentials:
    "डेमो मोड: कोई भी गैर-खाली यूज़रनेम और पासवर्ड स्वीकार है।",

  dashboard: "डैशबोर्ड",
  chatbot: "चैटबॉट मार्गदर्शन",
  detection: "डिटेक्शन डेमो",
  checklist:
    "सिक्योरिटी चेकलिस्ट",
  userinfo: "यूज़र जानकारी",
  police: "पुलिस रिपोर्ट",
  protectionFlow:
    "प्रोटेक्शन फ्लो",
  logout: "लॉगआउट",

  welcome: "वापसी पर स्वागत है",
  reports: "रिपोर्ट",
  cases: "स्कैम / फ्रॉड केस",
  safeMessages: "सुरक्षित संदेश",
  highRiskAlerts:
    "हाई-रिस्क अलर्ट",
  recentReports:
    "हाल की रिपोर्ट",
  selectedApps:
    "चुने गए ऐप",
  appScope:
    "सिर्फ चुने गए ऐप सिमुलेट होंगे",

  open: "खोलें",
  view: "देखें",
  close: "बंद करें",

  noReports:
    "अभी कोई रिपोर्ट नहीं है। Detection या User Information से रिपोर्ट बनाएँ।",

  workflow:
    "Complete Protection Flow",
  workflowSubtitle:
    "अलर्ट केवल पहला कदम है — सिस्टम सुरक्षा तक मार्गदर्शन जारी रखता है।",
  workflowHint:
    "सही फीचर खोलने के लिए फ्लो में किसी चरण को चुनें।",

  detectAlertGuideProtect:
    "पता लगाएँ • चेतावनी • मार्गदर्शन • सुरक्षा",

  stageNotification:
    "नोटिफिकेशन",
  stageAnalysis:
    "AI विश्लेषण",
  stageThreat:
    "खतरा मिला",
  stageAlarm:
    "अलार्म और चेतावनी",
  stageLogin:
    "यूज़र लॉगिन",
  stageChatbot:
    "AI चैटबॉट मार्गदर्शन",
  stageSecurity:
    "सिक्योरिटी एक्शन",
  stageProtection:
    "सुरक्षा",

  incomingAlert:
    "आने वाला संदेश / अलर्ट",
  patternAnalysis:
    "पैटर्न विश्लेषण",
  riskIdentified:
    "जोखिम पहचाना गया",
  soundVoice:
    "साउंड + AI वॉइस",
  secureAccess:
    "सुरक्षित एक्सेस",
  stepByStep:
    "स्टेप-बाय-स्टेप मदद",
  checklistReport:
    "चेकलिस्ट + रिपोर्ट",
  safeNext:
    "अगला सुरक्षित कदम",

  openFlow:
    "Complete Protection Flow खोलें",

  chatbotIntro:
    "मैं सामान्य डिजिटल-सुरक्षा प्रश्नों में मार्गदर्शन कर सकता हूँ। प्रश्न पूछें या विषय चुनें।",
  askSafety:
    "सिक्योरिटी असिस्टेंट से पूछें...",
  send: "भेजें",
  quickQuestions:
    "त्वरित प्रश्न",

  q2fa:
    "2FA कैसे चालू करें?",
  qotp:
    "कोई OTP मांगे तो क्या करें?",
  qlink:
    "संदिग्ध लिंक कैसे जाँचें?",
  qpassword:
    "मजबूत पासवर्ड क्या है?",
  qreport:
    "स्कैम की रिपोर्ट कैसे करें?",

  a2fa:
    "अकाउंट Security settings खोलें → Two-Factor Authentication चुनें → सत्यापन विधि चुनें → सेटअप पूरा करें।",
  aotp:
    "OTP कभी साझा न करें। बातचीत रोकें और आधिकारिक ऐप या वेबसाइट से अनुरोध सत्यापित करें।",
  alink:
    "इसे न खोलें। डोमेन ध्यान से जाँचें और आधिकारिक सेवा स्वयं खोलें।",
  apassword:
    "हर महत्वपूर्ण अकाउंट के लिए लंबा और अलग पासवर्ड रखें। पासवर्ड दोबारा उपयोग न करें।",
  areport:
    "सबूत सुरक्षित रखें, प्रेषक और तारीख नोट करें, आधिकारिक रिपोर्ट चैनल उपयोग करें और यहाँ डेमो रिपोर्ट बनाएँ।",

  detectionSubtitle:
    "संदिग्ध कंटेंट डालें या संदिग्ध लॉगिन सिमुलेशन चलाएँ.",
  app: "ऐप",
  suspiciousContent:
    "संदिग्ध कंटेंट",
  pasteContent:
    "संदिग्ध संदेश, phishing ईमेल, URL या लॉगिन नोटिस पेस्ट करें...",

  analyze:
    "कंटेंट विश्लेषण",
  clear:
    "साफ़ करें",

  highSample:
    "हाई-रिस्क उदाहरण",
  suspiciousSample:
    "संदिग्ध उदाहरण",
  safeSample:
    "सुरक्षित उदाहरण",

  analysisOutput:
    "विश्लेषण आउटपुट",
  status:
    "स्थिति",
  awaitingContent:
    "कंटेंट की प्रतीक्षा",
  pasteAndScan:
    "कंटेंट पेस्ट करके स्कैन चलाएँ।",

  safe:
    "सुरक्षित",
  suspicious:
    "संदिग्ध",
  high:
    "उच्च जोखिम",

  safeMsg:
    "इस डेमो में मजबूत स्कैम संकेत नहीं मिले।",
  suspiciousMsg:
    "संदिग्ध संकेत मिले। क्लिक, भुगतान या जानकारी साझा करने से पहले जाँच करें।",
  highMsg:
    "उच्च जोखिम संकेत मिले। स्वतंत्र सत्यापन तक संपर्क न करें.",

  reasons:
    "क्यों फ्लैग किया गया",

  suspiciousLoginSimulation:
    "संदिग्ध लॉगिन सिमुलेशन",
  simulate:
    "संदिग्ध लॉगिन चलाएँ",
  simulateHint:
    "चयनित भाषा में popup + siren + sound + AI voice।",

  warning:
    "चेतावनी",
  suspiciousLoginDetected:
    "संदिग्ध लॉगिन मिला",
  playAgain:
    "चेतावनी फिर चलाएँ",
  dismiss:
    "अलर्ट बंद करें",

  alarmText:
    "चेतावनी! संदिग्ध लॉगिन का पता चला। जारी रखने से पहले इस गतिविधि को सत्यापित करें।",

  checklistSubtitle:
    "पूरे किए कार्यों पर टिक करें।",
  progress:
    "प्रगति",

  useUniquePasswords:
    "महत्वपूर्ण खातों के लिए अलग पासवर्ड रखें",
  enable2fa:
    "टू-फैक्टर ऑथेंटिकेशन चालू करें",
  verifySender:
    "लिंक पर क्लिक करने से पहले प्रेषक सत्यापित करें",
  checkUrls:
    "URL और डोमेन ध्यान से जाँचें",
  neverShare:
    "OTP, पासवर्ड, PIN या CVV साझा न करें",
  updateApps:
    "डिवाइस और ऐप अपडेट रखें",
  reportSuspicious:
    "संदिग्ध संदेश आधिकारिक चैनल से रिपोर्ट करें",
  screenLock:
    "सुरक्षित स्क्रीन लॉक रखें",

  done:
    "पूर्ण",
  openStatus:
    "खुला",

  incidentTitle:
    "घटना की जानकारी",
  incidentSubtitle:
    "घटना विवरण एकत्र करें और डेमो केस स्थानीय रूप से सेव करें।",

  name: "नाम",
  phone: "फोन",
  email: "ईमेल",
  dateTime: "तारीख / समय",
  scamType: "स्कैम प्रकार",

  suspiciousMessage:
    "संदिग्ध संदेश",
  suspectInfo:
    "संदिग्ध जानकारी",
  suspiciousUrl:
    "संदिग्ध URL",
  description:
    "विवरण / सबूत नोट्स",
  screenshotEvidence:
    "स्क्रीनशॉट / सबूत",

  chooseFile:
    "फाइल चुनें",
  noFile:
    "कोई फाइल नहीं चुनी",

  consent:
    "मैं समझता/समझती हूँ कि यह प्रोटोटाइप है और इस डेमो घटना को डिवाइस पर स्थानीय रूप से सेव करने की सहमति देता/देती हूँ।",

  saveReport:
    "रिपोर्ट सेव करें",
  saveSuccess:
    "रिपोर्ट सफलतापूर्वक सेव हुई।",

  confirmation:
    "पुष्टि",
  reportSaved:
    "आपकी घटना रिपोर्ट स्थानीय रूप से सेव हुई।",
  caseId:
    "केस ID",
  viewPoliceReport:
    "पुलिस रिपोर्ट खोलें",

  policeTitle:
    "पुलिस रिपोर्ट",
  policeSubtitle:
    "पेशेवर घटना रिपोर्ट बनाएँ। साझा करना आपका निर्णय है।",

  noIncident:
    "रिपोर्ट बनाने के लिए पहले एक घटना सेव करें।",
  generateReport:
    "रिपोर्ट बनाएँ",

  download:
    "डाउनलोड",
  exportJson:
    "JSON एक्सपोर्ट",
  share:
    "शेयर",
  reportPreview:
    "रिपोर्ट प्रीव्यू",

  notOfficial:
    "यह प्रोटोटाइप रिपोर्ट है, आधिकारिक पुलिस फाइलिंग नहीं। यह अपने आप अधिकारियों को नहीं भेजी जाती।",

  selectReport:
    "रिपोर्ट चुनें",
  category:
    "श्रेणी",
  risk:
    "जोखिम",
  reportId:
    "रिपोर्ट ID",
  reportType:
    "रिपोर्ट प्रकार",

  typeDetection:
    "डिटेक्शन",
  typeIncident:
    "घटना",

  prototypeReference:
    "प्रोटोटाइप संदर्भ",
  interactiveFlow:
    "इंटरैक्टिव फ्लो",
  actions:
    "फ्लो एक्शन",

  goDetection:
    "डिटेक्शन खोलें",
  goChatbot:
    "चैटबॉट खोलें",
  goChecklist:
    "सिक्योरिटी एक्शन खोलें",
  goUserInfo:
    "घटना बनाएँ",
  goPolice:
    "रिपोर्ट सेंटर खोलें",
};

const fr: Record<TranslationKey, string> = {
  ...en,

  brand: "SMART FRAUD ALERT",
  fullBrand: "Smart Fraud Alert System",
  tagline: "Prévenir · Détecter · Guider · Protéger",

  prototype:
    "Prototype uniquement — résultats simulés, sans garantie de détection réelle.",
  privacySafe:
    "Démo respectueuse de la vie privée • stockage local • aucun envoi automatique aux autorités",

  login:
    "Connexion sécurisée",
  username:
    "Nom d'utilisateur",
  password:
    "Mot de passe",
  language:
    "Langue",
  chooseApps:
    "Choisir les apps à simuler",

  messaging:
    "Messagerie",
  emailGroup:
    "E-mail",
  social:
    "Réseaux sociaux",

  enterDashboard:
    "Ouvrir le tableau de bord",
  demoCredentials:
    "Démo : tout identifiant et mot de passe non vides sont acceptés.",

  dashboard:
    "Tableau de bord",
  chatbot:
    "Guide chatbot",
  detection:
    "Détection",
  checklist:
    "Checklist sécurité",
  userinfo:
    "Informations utilisateur",
  police:
    "Rapport police",
  protectionFlow:
    "Flux de protection",
  logout:
    "Déconnexion",

  welcome:
    "Bon retour",
  reports:
    "Rapports",
  cases:
    "Cas de fraude",
  safeMessages:
    "Messages sûrs",
  highRiskAlerts:
    "Alertes à haut risque",
  recentReports:
    "Rapports récents",
  selectedApps:
    "Apps sélectionnées",
  appScope:
    "Seules les apps sélectionnées sont simulées",

  open:
    "Ouvrir",
  view:
    "Voir",
  close:
    "Fermer",

  noReports:
    "Aucun rapport pour le moment. Utilisez Détection ou Informations utilisateur.",

  workflow:
    "Flux de protection complet",
  workflowSubtitle:
    "L'alerte n'est que la première étape — le système guide ensuite l'utilisateur vers la sécurité.",
  workflowHint:
    "Sélectionnez une étape pour ouvrir la fonction correspondante.",

  detectAlertGuideProtect:
    "DÉTECTER • ALERTER • GUIDER • PROTÉGER",

  stageNotification:
    "Notification",
  stageAnalysis:
    "Analyse IA",
  stageThreat:
    "Menace détectée",
  stageAlarm:
    "Alarme & avertissement",
  stageLogin:
    "Connexion utilisateur",
  stageChatbot:
    "Guide chatbot IA",
  stageSecurity:
    "Actions sécurité",
  stageProtection:
    "Protection",

  incomingAlert:
    "Message / alerte entrant",
  patternAnalysis:
    "Analyse des modèles",
  riskIdentified:
    "Risque identifié",
  soundVoice:
    "Son + voix IA",
  secureAccess:
    "Accès sécurisé",
  stepByStep:
    "Aide étape par étape",
  checklistReport:
    "Checklist + rapport",
  safeNext:
    "Prochaine action sûre",

  openFlow:
    "Ouvrir le flux complet",

  chatbotIntro:
    "Je peux guider vos questions de sécurité numérique. Posez une question ou choisissez un sujet.",
  askSafety:
    "Posez une question à l'assistant...",
  send:
    "Envoyer",
  quickQuestions:
    "Questions rapides",

  q2fa:
    "Comment activer la 2FA ?",
  qotp:
    "Quelqu'un demande mon OTP : que faire ?",
  qlink:
    "Comment vérifier un lien suspect ?",
  qpassword:
    "Qu'est-ce qu'un mot de passe fort ?",
  qreport:
    "Comment signaler une arnaque ?",

  a2fa:
    "Ouvrez les réglages de sécurité → choisissez l'authentification à deux facteurs → sélectionnez une méthode → terminez la configuration.",
  aotp:
    "Ne partagez jamais l'OTP. Arrêtez la conversation et vérifiez la demande via l'application ou le site officiel.",
  alink:
    "Ne l'ouvrez pas. Vérifiez attentivement le domaine et ouvrez vous-même le service officiel.",
  apassword:
    "Utilisez un mot de passe long et unique pour chaque compte important.",
  areport:
    "Conservez les preuves, notez l'expéditeur et la date, utilisez le canal officiel et préparez ici le rapport de démonstration.",

  detectionSubtitle:
    "Entrez un contenu suspect ou lancez une simulation de connexion suspecte.",
  app:
    "App",
  suspiciousContent:
    "Contenu suspect",
  pasteContent:
    "Collez un message, e-mail de phishing, URL ou avis de connexion suspect...",
  analyze:
    "Analyser",
  clear:
    "Effacer",

  highSample:
    "Exemple haut risque",
  suspiciousSample:
    "Exemple suspect",
  safeSample:
    "Exemple sûr",

  analysisOutput:
    "Résultat d'analyse",
  status:
    "Statut",
  awaitingContent:
    "En attente",
  pasteAndScan:
    "Collez du contenu et lancez l'analyse.",

  safe:
    "SÛR",
  suspicious:
    "SUSPECT",
  high:
    "HAUT RISQUE",

  safeMsg:
    "Aucun indicateur fort de fraude détecté dans cette démo.",
  suspiciousMsg:
    "Des indicateurs suspects ont été détectés. Vérifiez avant de cliquer, payer ou partager des informations.",
  highMsg:
    "Des indicateurs à haut risque ont été détectés. N'interagissez pas avant vérification.",

  reasons:
    "Pourquoi le contenu est signalé",

  suspiciousLoginSimulation:
    "Simulation de connexion suspecte",
  simulate:
    "Simuler une connexion suspecte",
  simulateHint:
    "Popup + sirène + son + voix IA dans la langue sélectionnée.",

  warning:
    "Alerte",
  suspiciousLoginDetected:
    "Connexion suspecte détectée",
  playAgain:
    "Rejouer l'alerte",
  dismiss:
    "Fermer l'alerte",

  alarmText:
    "Alerte ! Une connexion suspecte a été détectée. Vérifiez cette activité avant de continuer.",

  checklistSubtitle:
    "Cochez chaque action terminée.",
  progress:
    "Progression",

  useUniquePasswords:
    "Utiliser des mots de passe uniques pour les comptes importants",
  enable2fa:
    "Activer l'authentification à deux facteurs",
  verifySender:
    "Vérifier l'expéditeur avant de cliquer",
  checkUrls:
    "Vérifier attentivement les URL et domaines",
  neverShare:
    "Ne jamais partager OTP, mots de passe, PIN ou CVV",
  updateApps:
    "Maintenir les appareils et apps à jour",
  reportSuspicious:
    "Signaler les messages suspects via les canaux officiels",
  screenLock:
    "Utiliser un verrouillage d'écran sécurisé",

  done:
    "FAIT",
  openStatus:
    "OUVERT",

  incidentTitle:
    "Informations d'incident",
  incidentSubtitle:
    "Collectez les détails et enregistrez le cas de démonstration localement.",

  name:
    "Nom",
  phone:
    "Téléphone",
  email:
    "E-mail",
  dateTime:
    "Date / heure",
  scamType:
    "Type d'arnaque",

  suspiciousMessage:
    "Message suspect",
  suspectInfo:
    "Informations sur le suspect",
  suspiciousUrl:
    "URL suspecte",
  description:
    "Description / notes de preuve",
  screenshotEvidence:
    "Capture / preuve",

  chooseFile:
    "Choisir un fichier",
  noFile:
    "Aucun fichier sélectionné",

  consent:
    "Je comprends qu'il s'agit d'un prototype et j'accepte de stocker cet incident de démonstration localement.",

  saveReport:
    "Enregistrer",
  saveSuccess:
    "Rapport enregistré.",

  confirmation:
    "Confirmation",
  reportSaved:
    "Votre rapport d'incident a été enregistré localement.",
  caseId:
    "ID du cas",
  viewPoliceReport:
    "Ouvrir le rapport police",

  policeTitle:
    "Rapport police",
  policeSubtitle:
    "Générez un rapport professionnel. Vous décidez de le partager.",

  noIncident:
    "Enregistrez d'abord un incident.",
  generateReport:
    "Générer le rapport",

  download:
    "Télécharger",
  exportJson:
    "Exporter JSON",
  share:
    "Partager",
  reportPreview:
    "Aperçu du rapport",

  notOfficial:
    "Ceci est un rapport de prototype, pas un dépôt officiel à la police. Aucun envoi automatique.",

  selectReport:
    "Sélectionner un rapport",
  category:
    "Catégorie",
  risk:
    "Risque",
  reportId:
    "ID du rapport",
  reportType:
    "Type de rapport",

  typeDetection:
    "Détection",
  typeIncident:
    "Incident",

  prototypeReference:
    "Référence du prototype",
  interactiveFlow:
    "Flux interactif",
  actions:
    "Actions du flux",

  goDetection:
    "Ouvrir la détection",
  goChatbot:
    "Ouvrir le chatbot",
  goChecklist:
    "Ouvrir les actions sécurité",
  goUserInfo:
    "Créer un incident",
  goPolice:
    "Ouvrir le centre de rapports",
};

export const translations: Record<
  Lang,
  Record<TranslationKey, string>
> = {
  en,
  ta,
  hi,
  fr,
};