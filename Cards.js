cerner = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/cerner-1.png",
  type: "SOAP",
  documentationLink: "https://fhir.cerner.com/",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: false,
  name: "Cerner Millennium R4",
  publisher: "",
  firstRelease: "",
  latestRelease: "",
  currentVersion: 1.2,
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Conformance",
      items: [
        "CapabilityStatement",
        "StructureDefinition",
        "OperationDefinition",
      ],
    },
    {
      title: "Security",
      items: ["Provence", "Consent"],
    },
    {
      title: "Documents",
      items: ["DocumentReference"],
    },
    {
      title: "Other",
      items: ["Binary", "HealthCards"],
    },
    {
      title: "Workflow",
      items: ["Appointment", "Schedule", "Slot"],
    },
    {
      title: "Support",
      items: ["Coverage"],
    },
    {
      title: "Public Health & Research",
      items: ["ResearchStudy", "ResearchSubject"],
    },
    {
      title: "Individuals",
      items: ["Patient", "Practitioner", "PractitionerRole", "RelatedPerson"],
    },
    {
      title: "Entities",
      items: ["Device", "Location", "Organization"],
    },
    {
      title: "Management",
      items: ["Encounter"],
    },
    {
      title: "Summary",
      items: [
        "AllergyIntolerance",
        "Condition",
        "FamilyMemberHistory",
        "Procedure",
      ],
    },
    {
      title: "Diagnostics",
      items: ["Observation", "QuestionnaireResponse"],
    },
    {
      title: "Medications",
      items: ["Immunization", "MedicationRequest", "Medication"],
    },
    {
      title: "Care Provision",
      items: [
        "CarePlan",
        "CareTeam",
        "Goal",
        "NutritionOrder",
        "ServiceRequest",
      ],
    },
    {
      title: "Request & Response",
      items: ["Communication"],
    },
    {
      title: "General",
      items: ["Account", "ChargeItem", "FinancialTransaction"],
    },
    {
      title: "Definitional Artifacts",
      items: ["Questionnaire"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "CLINICIANS", "HOSPITALS", "FHIR"],
  description: [
    "Cerner Ignite APIs are cloud-based allowing for rapid, agile deployment of future updates or enhancements. It also simplifies implementation of the APIs for healthcare providers because the ontology mapping process is centralized, which requires less effort than when performed on a per-deployment basis.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

nhs_app = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "NHS App",
  publisher: "NHS APP",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "-",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Request & Response",
      items: [
        "CommunicationRequest (in-app)",
        "CommunicationRequest (in-app-with-notification)",
        "CommunicationRequest (notification)",
        "Communication (report/events)",
        "Communication (report/patients)",
      ],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["APP", "MOBILE", "PATIENTS", "FHIR"],
  description: [
    "Use this API to engage with users of the NHS App - a simple and secure way for patients registered with a GP surgery in England to access a range of services on their smartphone or tablet. You can: 1) Send in-app messages to specific users of the NHS App. 2) Send native Apple or Android push notifications to mobile devices registered by specific users of the NHS App.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

nhs_eps = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "NHS EPS",
  publisher: "NHS APP",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "-",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Conformance",
      items: [
        "CapabilityStatement",
        "MessageDefinition",
        "OperationDefinition",
      ],
    },
    {
      title: "Workflow",
      items: ["Appointment"],
    },
    {
      title: "Other",
      items: ["Bundle"],
    },
    {
      title: "Care Provision",
      items: ["ServiceRequest"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: [
    "NATIONAL SYSTEM",
    "CLINICIAN",
    "PATIENTS",
    "COMMUNITY CARE",
    "FHIR",
  ],
  description: [
    "Electronic Prescription Service allows prescribers to send prescriptions electronically to a dispenser (such as a pharmacy) of the patient's choice. Current APIs enable prescribers to create, view, and cancel prescriptions for primary and secondary care settings. They enable dispensers to download, verify, and return a prescription. They can also create and withdraw dispense notifications and submit a claim against the prescription.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

nhs_pds = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "NHS PDS",
  publisher: "NHS APP",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "-",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Individuals",
      items: ["Patient"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: [
    "NATIONAL SYSTEM",
    "CLINICIAN",
    "PATIENTS",
    "COMMUNITY CARE",
    "FHIR",
  ],
  description: [
    "Personal Demographics Service helps healthcare professionals to identify patients and match them to their health records. It also allows them to contact and communicate with patients. Current APIs enable users to search, and view patient information as well as verifying their NHS number. Certain patient information can also be updated.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

nhs_ers = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "NHS ERS",
  publisher: "NHS",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "-",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Other",
      items: ["Bundle"],
    },
    {
      title: "Documents",
      items: ["DocumentReference"],
    },
    {
      title: "Security",
      items: ["Security"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: [
    "NATIONAL SYSTEM",
    "CLINICIAN",
    "PATIENTS",
    "COMMUNITY CARE",
    "FHIR",
  ],
  description: [
    "Electronic Referral Service system provides an easy way for patients to choose their first hospital or clinic appointment with a specialist. Bookings can be made online, using the telephone, or directly in the GP surgery at the time of referral. This API is used to create paperless referrals from primary to secondary care.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

scr_app = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "SCR App",
  publisher: "NHS",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "-",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Other",
      items: ["Bundle"],
    },
    {
      title: "Workflow",
      items: ["Appointment"],
    },
    {
      title: "Conformance",
      items: ["MessageDefinition", "CapabilityStatement"],
    },
    {
      title: "Care Provision",
      items: ["ServiceRequest"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: [
    "NATIONAL SYSTEM",
    "CLINICIAN",
    "HOSPITALS",
    "SECONDARY CARE",
    "FHIR",
  ],
  description: [
    "Summary Care Records are electronic records of important patient information, created from GP medical records. They can be seen and used by authorised staff in other areas of the health and care system involved in the patient's direct care. Current APIs enable users to get a patient’s SCR identifier and their SCR, upload an SCR, and view/ update/ override the patient’s consent to share their SCR.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

scr_app = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "SCR App",
  publisher: "NHS",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "-",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: false,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: [
    "NATIONAL SYSTEM",
    "CLINICIAN",
    "HOSPITALS",
    "SECONDARY CARE",
    "FHIR",
  ],
  description: [
    "Summary Care Records are electronic records of important patient information, created from GP medical records. They can be seen and used by authorised staff in other areas of the health and care system involved in the patient's direct care. Current APIs enable users to get a patient’s SCR identifier and their SCR, upload an SCR, and view/ update/ override the patient’s consent to share their SCR.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};







immunisation_history = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "https://digital.nhs.uk/developer/api-catalogue/immunisation-history-fhir",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: false,
  sandbox: true,
  name: "Immunisation History",
  publisher: "Immunisation History",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Medications",
      items: ["Immunization"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["NATIONAL SYSTEM", "FHIR"],
  description: [
    "Using this API, users can get a patient's coronavirus (COVID-19) immunisation history, based on their NHS number. You can also get details on other types of immunisation. All immunisation records are verified to ensure the NHS number is correct before making them available via the API. In most cases this is automatic, and the record is available within 48 hours of the immunisation event, sometimes sooner.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

onpatient = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink:
    "https://www.onpatient.com/api_fhir/api-docs/documentation/#main-api",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "OnPatient",
  publisher: "OnPatient",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Medications",
      items: ["Immunization", "Medication", "MedicationStatement"],
    },
    {
      title: "Individuals",
      items: ["Patient"],
    },
    {
      title: "Summary",
      items: ["Individuals", "Condition"],
    },
    {
      title: "Diagnostics",
      items: ["DiagnosticReport", "Observation"],
    },
    {
      title: "#N/A",
      items: ["MedicationOrder", "Procedure"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["APP", "PATIENT", "FHIR"],
  description: [
    "OnPatient is a separate application for patients, offering a range of tools for managing health day-to-day. It offers reminders of upcoming appointments, bill-paying capabilities, and allows for text messaging with health professionals.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};



openhealthhub = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/openhealthhub.svg",
    type: "SOAP",
    documentationLink: "https://developer.openhealthhub.com/?python#fhir-4-api-reference",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "OpenHealthHub",
    publisher: "OpenHealthHub",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
        {
            title: "Care Provision",
            items: ["CareTeam", "Careplan"]
        },
        {
            title: "Diagnostics",
            items: ["QuestionnaireResponse"]
        },
        {
            title: "Medication Definition",
            items: ["VitalSigns"]
        },
        {
            title: "Other",
            items: ["Subscription"]
        },
        {
            title: "Definitional Artifacts",
            items: ["PlanDefinition", "Questionnaire"]
        },
        {
            title: "Individuals",
            items: ["Practitioner"]
        },
        {
            title: "#N/A",
            items: ["DecryptingQuestionnaireResponse", "EncryptilgQuestionnaireResponse", "Tines", "Binay (Upload Key)"]
        },
        
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["APP", "CLINICIANS", "HOSPITAL", "PLATFORM", "FHIR"],
    description: ["The Open HealthHub is the way for medical professionals, researchers and healthcare software companies to easily, securely and efficiently collect patient data via a mobile app or medical devices.Their integration technology is based on APIs and international standards for medical data such as FHIR and SNOMED CT allows for easy integration of the Hub within the infrastructure of any hospital or medical clinic."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}




vitalware = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/vitalware.svg",
    type: "SOAP",
    documentationLink: "#https://developer.vitalware.com/docs/API/",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "VitalWare",
    publisher: "VitalWare",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "2",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [],
    fhirCompliant: true,
    nonFhirEndpoints: ["Authentication", "Sherpa Search", "Sherpa Search Suggestions", "List Favorites Folders", "List Favorites", "Primary Lookup", "ICD-10 CM Coding Guidelines", "Policy Manager", "Policy Detail"],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["HOSPITAL", "PLATFORM", "NON FHIR"],
    description: ["Vitalware provides healthcare mid-revenue cycle management solutions, data and consulting services, and expert consulting for health systems, hospitals, physicians, and healthcare revenue cycle-solutions providers. VitalCDM is a web-based, fully integrated solution that gives you access to a complete suite of hospital chargemaster management tools. You'll price appropriately, work more efficiently, and remain confidently compliant."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}




cigna = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/cigna.svg",
    type: "SOAP",
    documentationLink: "https://developer.cigna.com/",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Cigna",
    publisher: "Cigna",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
        {
            title: "Care Provision",
            items: ["CareTeam", "Careplan", "Goal"]
        },
        {
            title: "Security",
            items: ["Provenance"]
        },
        {
            title: "Management",
            items: ["Encounter", "List"]
        },
        {
            title: "Summary",
            items: ["AllergyIntolerance", "Condition", "Procedure"]
        },
        {
            title: "Entities #1",
            items: ["Endpoint", "HealthcareService", "Location", "Organization", "OrganizationAffiliation"]
        },
        {
            title: "Diagnostics",
            items: ["DiagnosticReport", "Observation"]
        },
        {
            title: "Medications",
            items: ["Immunization", "MedicationRequest", "Medication", "MedicationKnowledge"]
        },
        {
            title: "Documents",
            items: ["DocumentReference"]
        },
        {
            title: "Individuals",
            items: ["Practitioner", "Patient", "PractitionerRole"]
        },
        {
            title: "General",
            items: ["ExplanationOfBenefit", "InsurancePlan"]
        },
        {
            title: "Support",
            items: ["Coverage"]
        }
        
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["FHIR"],
    description: ["Cigna is an American multinational managed healthcare and insurance company based in Bloomfield, Connecticut. With the latest Cigna APIs, users can develop applications that empower users with secure access to their data. Cigna API documentation is now available to help developers get consistent and reliable data to use in development of their applications."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}






bluestream = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/bluestream.svg",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "BlueStream",
  publisher: "BlueStream",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Authentication",
    "Approved Access",
    "Call Links",
    "Customer",
    "Expertise",
    "Facility",
    "Metadata",
    "push API",
    "Remote Expert",
    "Reporting",
    "Single Sign on (SSO)",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["PLATFORM", "VIRTUAL CARE", "TELEHEALTH", "NON FHIR"],
  description: [
    "Bluestream Health is a white-labelled, hosted platform that easily scales from the most basic deployment to complex, integrated, enterprise-wide clinical workflows. Bluestream enables virtual care delivery workflows that include both patient-to-provider as well as provider-to-provider. Their platform can make your existing tools and infrastructure telehealth-capable with secure APIs and seamless access to an ecosystem of services such as interpreting in 200+ languages and American Sign Language. This flexible solution also integrates with your existing ADT, EMR, practice management and billing systems. Bluestream’s APIs enable integration of the Bluestream Health virtual care platform into your application.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

// capable_health = {
//   verified: false,
//   logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/capable.svg",
//   type: "SOAP",
//   documentationLink: "https://docs.capablehealth.com/docs",
//   docTooling: "GITHUB",
//   wrapper: "SWAGGER",
//   documentation: true,
//   sandbox: true,
//   name: "Capable Health",
//   publisher: "Capable Health",
//   firstRelease: "",
//   latestRelease: "",
//   currentVersion: "",
//   callsCount: 0,
//   tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
//   dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
//   resources: [],
//   fhirCompliant: true,
//   nonFhirEndpoints: [],
//   databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
//   openApi: true, // if false then ask for pricing
//   openPricing: true,
//   textTags: ["APP", "PATIENT", "FHIR"],
//   description: [
//     "OnPatient is a separate application for patients, offering a range of tools for managing health day-to-day. It offers reminders of upcoming appointments, bill-paying capabilities, and allows for text messaging with health professionals.",
//   ],
//   triggers: [],
//   actions: ["Get Absence Record", "Get Something"],
// };

clinicaltrialsgov = {
  verified: false,
  logoUrl:
    "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/clinicaltrial.svg",
  type: "SOAP",
  documentationLink: "https://clinicaltrials.gov/api/gui",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "ClinicalTrials.gov",
  publisher: "ClinicalTrials.gov",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Info",
      items: [
        "Data Version",
        "API Version",
        "API Definitions",
        "Study Structure",
        "Study Fields List",
        "Study Statistics",
        "Search Areas",
      ],
    },
    {
      title: "Query",
      items: ["Full Studies", "Study Fields", "Field Values"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["NATIONAL SYSTEM", "NON FHIR"],
  description: [
    "The ClinicalTrials.gov application programming interface (API) provides a toolbox for programmers and other technical users to use to access all posted information on ClinicalTrials.gov study records data. The API is designed for encoding simple and complex search expressions and parameters in URLs.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

doximity = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/doximity.svg",
  type: "SOAP",
  documentationLink: "https://www.doximity.com/developers/documentation",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "DOXIMITY",
  publisher: "DOXIMITY",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: ["non Fhir Identity", "Registration", "Share"],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["PLATFORM", "NON FHIR"],
  description: [
    "Doximity is an online professional networking platform that allows physicians, nurse practitioners and physician assistants to find each other and communicate without violating privacy laws.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

human_api = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/humanapi.svg",
  type: "SOAP",
  documentationLink:
    "https://reference.humanapi.co/reference/getting-started#getting-started",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "HUMAN API",
  publisher: "HUMAN API",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "2.3",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "MEDICAL API",
      items: [
        "Allergies",
        "Encounters",
        "Functional Statuses",
        "Instructions",
        "Medications",
        "Narratives",
        "Organizations",
        "Plans of Care",
        "Problems",
        "Procedures",
        "Profile",
        "Test Results",
        "Vitals",
        "CCD",
        "Demographics",
        "Social History",
      ],
    },
    {
      title: "WELLNESS API",
      items: [
        "Wearable API",
        "Introduction",
        "Activities",
        "Activity Summaries",
        "Blood Glucose",
        "Blood Oxygen",
        "Blood Pressure",
        "Body Fat",
        "Body Mass Index",
        "Heart Rate",
        "Heart Rate Summaries",
        "Height",
        "Human (Summary)",
        "Meals",
        "Profile",
        "Sleeps",
        "Sleep Summaries",
        "Weight",
      ],
    },
    {
      title: "REPORTS",
      items: [
        "Reports",
        "Covid Report",
        "Healthcheck Report",
        "Highlights Report",
        "Timeline Report",
        "API Data Report",
        "CCDA Report",
        "Unity Report",
        "APS Report",
      ],
    },
    {
      title: "UTILITY",
      items: ["Sources"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["NON FHIR"],
  description: [
    "Human API enables insurance, life sciences, and digital health companies to better serve their customers through access to our proprietary health data network, touching more than 260 million lives across the U.S.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

dexcare_health = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/dexcare.svg",
  type: "SOAP",
  documentationLink: "https://developers.dexcarehealth.com/api/",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "DEXCARE Health",
  publisher: "DEXCARE Health",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Booking",
    "Patient",
    "Provider Agnostic",
    "Time Slots",
    "Provider Specific",
    "Time Slots",
    "Virtual Visits",
    "Care Options",
    "Reporting",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["PLATFORM", "NON FHIR"],
  description: [
    "DexCare is an innovative digital solution from Providence that increases access to healthcare based on health needs, preferences, location and schedule. They are a data-driven intelligence company focused on making access to healthcare better for everyone. DexCare’s core offering is a software platform, provided exclusively to health systems, that orchestrates digital demand and health system capacity across all lines of care.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

health_research = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "Health Research Data Catalogue API",
  publisher: "NHS Digital",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: ["Get a list of data", "sets", "Get data set details"],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["NATIONAL SYSTEM", "METADATA", "RESEARCH", "NON FHIR"],
  description: [
    "This NHS API is used to retrieve metadata information suitable for publication in a health research data catalogue. It is limited to metadata information about national health-related data sets (such as description, size of the population contained within that data set and the legal basis for access) that can help researchers and innovators decide whether a data set could be useful to their research and help them to make further health discoveries..",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

truepill = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/truepill.svg",
  type: "SOAP",
  documentationLink: "https://truepill.com/api-docs",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "TRUEPILL",
  publisher: "TRUEPILL",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Fulfillment",
      items: [
        "Patient",
        "Prescription",
        "Fill request",
        "Refills",
        "Multi-dose packaging",
        "Custom packaging",
        "Over-the-Counter",
        "(OTC) products",
      ],
    },
    {
      title: "Insurance",
      items: [
        "Insurance request",
        "Copay request",
        "Insurance claim",
        "details",
      ],
    },
    {
      title: "Prior authorization",
      items: ["Prior authorization", "request"],
    },
    {
      title: "Consult",
      items: ["Create a consult", "request"],
    },
    {
      title: "Lab Orders",
      items: ["Creating a Patient", "Requesting a Lab Kit"],
    },
    {
      title: "Diagnostics",
      items: ["Observation", "DiagnosticReport"],
    },
    {
      title: "Kit Registration",
      items: ["Registering a Lab", "Kit"],
    },
    {
      title: "Results",
      items: ["Receiving Order", "Updates", "Lab Results"],
    },
    {
      title: "Benefits verification",
      items: ["Coverage Request"],
    },
    {
      title: "Patient safety",
      items: [
        "Patient survey",
        "Allergy, conditions",
        "and drug lookup",
        "Drug utilization",
        "Create a DUR request",
      ],
    },
    {
      title: "Patient record",
      items: ["Create a patient", "record", "Update a patient", "record"],
    },
    {
      title: "Health questionnaire",
      items: [
        "Question types",
        "Create a health",
        "questionnaire",
        "Updating a health",
        "Submit answers",
      ],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["PLATFORM", "PHARMACY", "TELEHEALTH", "NON FHIR"],
  description: [
    "Powering the future of direct-to-patient healthcare, Truepill focuses on unmatched access and convenience for patients. They have expanded their offering to include telehealth services and their own patient-facing brands. And have grown to seven locations - including UK.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

medplum_fhir = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/medplum.svg",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "MEDPLUM",
  publisher: "MEDPLUM",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Conformance",
      items: [
        "OperationDefinition",
        "CompartmentDefinition",
        "ExampleScenario",
        "GraphDefinition",
        "ImplementationGuide",
        "MessageDefinition",
        "OperationDefinition",
        "StructureMap",
      ],
    },
    {
      title: "Security",
      items: ["Consent", "Provenance", "AuditEvent"],
    },
    {
      title: "Public Health & Research",
      items: ["ResearchStudy", "ResearchSubject"],
    },
    {
      title: "Terminology",
      items: ["CodeSystem", "ValueSet", "ConceptMap", "NamingSystem"],
    },
    {
      title: "Care Provision",
      items: [
        "CarePlan",
        "CareTeam",
        "Goal",
        "NutritionOrder",
        "ServiceRequest",
        "Risk Assessment",
        "RequestGroup",
        "VisionPrescription",
      ],
    },
    {
      title: "Entities #1",
      items: [
        "HealthCareService",
        "Organization",
        "OrganizationAffiliation",
        "Location",
      ],
    },
    {
      title: "Entities #2",
      items: [
        "BiologicallyDerivedProduct",
        "Device",
        "DeviceMetric",
        "Substance",
      ],
    },
    {
      title: "Individuals",
      items: [
        "Patient",
        "Person",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
        "Group",
      ],
    },
    {
      title: "Summary",
      items: [
        "AllergyIntolerance",
        "FamilyMemberHistory",
        "Procedure",
        "Condition",
        "AdverseEvent",
        "ClinicalImpression",
        "Detected Issue",
      ],
    },
    {
      title: "Medication Definition",
      items: [
        "MedicinalProduct",
        "MedicinalProductAuthorization",
        "MedicinalProductContraIndication",
        "MedicinalProductIndication",
        "MedicinalProductIngredient",
        "MedicinalProductInteraction",
        "MedicinalProductManufactured",
        "MedicinalProductPackaged",
        "MedicinalProductPharmaceutical",
        "MedicinalProductUndesirableEffect",
        "SubstanceNucleicAcid",
        "SubstancePolymer",
        "SubstanceProtien",
        "SubstanceReferenceInformation",
        "SubstanceSpecification",
        "SubstanceSourceMaterial",
      ],
    },
    {
      title: "Other",
      items: [
        "Binary",
        "Basic",
        "Bundle",
        "Linkage",
        "MessageHeader",
        "Parameters",
      ],
    },
    {
      title: "Definitional Artifacts",
      items: [
        "ActivityDefinition",
        "DeviceDefinition",
        "EventDefinition",
        "ObservationDefinition",
        "PlanDefinition",
        "SpecimenDefinition",
      ],
    },
    {
      title: "Evidence-Based Medicines",
      items: [
        "Effect Evidence Synthesis",
        "Evidence",
        "EvidenceVariable",
        "Research Definition",
        "Research Element Definition",
        "Risk Evidence Synthesis",
      ],
    },
    {
      title: "Medications",
      items: [
        "Immunization",
        "Medication",
        "MedicationRequest",
        "Immunization Evaluation",
        "Immunization Recommendation",
        "Medication Administration",
        "Medication Dispense",
        "Medication Knowledge",
        "Medication Statement",
      ],
    },
    {
      title: "Diagnostic",
      items: [
        "Observation",
        "Media",
        "DiagnosticReport",
        "Specimen",
        "BodyStructure",
        "ImagingStudy",
        "QuestionnaireResponse",
        "Questionnaire",
        "MolecularSequence",
      ],
    },
    {
      title: "Quality Reporting & Testing",
      items: ["Measure", "MeasureReport"],
    },
    {
      title: "Workflow",
      items: [
        "Appointment",
        "Schedule",
        "Slot",
        "Appointment Response",
        "Verification Result",
        "Task",
      ],
    },
    {
      title: "Request & Response",
      items: [
        "Communication",
        "CommunicationRequest",
        "DeviceRequest",
        "DeviceUseStatement",
        "GuidanceResponse",
        "SupplyRequest",
        "SupplyDelivery",
      ],
    },
    {
      title: "General",
      items: [
        "Account",
        "ChargeItem",
        "ChargeItemDefinition",
        "Contract",
        "ExplanationOfBenefit",
        "InsurancePlan",
      ],
    },
    {
      title: "Payment",
      items: ["PaymentNotice", "PaymentReconciliation"],
    },
    {
      title: "Billing",
      items: ["Claim", "Claim Response", "Invoice"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "APP", "HOSPITAL", "CLINICIAN", "FHIR"],
  description: [
    "Medplum is a headless EHR that makes it easier to build healthcare apps quickly with less code. It is basically a developer platform that enables flexible and rapid development of healthcare apps by making it easy to build webapps that are compliant and interoperability ready.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

medplum_nonfhir = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/medplum.svg",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "MEDPLUM",
  publisher: "MEDPLUM",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Project",
    "ClientApplication",
    "User",
    "ProjectMembership",
    "Bot",
    "Login",
    "PasswordChangeRequest",
    "JsonWebKey",
    "AccessPolicy",
    "UserConfiguration",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "APP", "HOSPITAL", "CLINICIAN", "NON FHIR"],
  description: [
    "Medplum is a headless EHR that makes it easier to build healthcare apps quickly with less code. It is basically a developer platform that enables flexible and rapid development of healthcare apps by making it easy to build webapps that are compliant and interoperability ready.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

booking_live = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/bookinglive.svg",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "BookingLive",
  publisher: "BookingLive",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Start Order",
    "Get Order Details",
    "Add To Order",
    "Cancel Order",
    "Complete Order",
    "Get all orders by",
    "user",
    "Email",
    "Send Email to",
    "customer",
    "Update order parms",
    "Get Events By",
    "Product",
    "IDs",
    "Get message content",
    "Get product details",
    "by IDs",
    "Set order",
    "notification",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["APPOINTMENT", "APP", "CLINICIAN", "PATIENT", "NON FHIR"],
  description: [
    "It provides a way to create web, desktop & mobile applications that integrate your BookingLive account. BookingLive makes software to manage bookings, schedules & appointments for business.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

charmhealth = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/charmhealth.svg",
  type: "SOAP",
  documentationLink: "https://www.charmhealth.com/resources/fhirapi/",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "Charmhealth",
  publisher: "Charmhealth",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "1.2",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Patient Selection",
    "Demographics",
    "Smoking Status",
    "Procedures",
    "Problems",
    "Medications",
    "Allergies",
    "Lab Results",
    "Vitals",
    "Vaccines",
    "Implants",
    "Assessments",
    "Treatment Plan",
    "Goals",
    "Health Concerns",
    "Care Team",
    "CCDA",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "TELEHEALTH", "INTEGRATED HEALTH", "HOSPITAL", "NON FHIR"],
  description: [
    "CharmHealth product suite includes Integrated EHR, Practice Management, RCM Solution, Integrated TeleHealth for Remote Patient Care, Patient Portal for Patient Engagement, Connect Solution for Collaborative Communication, along with a slew of Mobile apps across platforms.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

nexhealth = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/nexhealth.svg",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "Nexhealth",
  publisher: "Nexhealth",
  firstRelease: "11/2022",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Institutions",
    "Locations",
    "Operatories",
    "Patients",
    "Procedures",
    "Providers",
    "Scheduling",
    "Appointment Types",
    "Appointments",
    "Appointment Slots",
    "Availabilities",
    "PRACTICE FINANCIALS",
    "Adjustments",
    "Charges",
    "Insurance Plans",
    "Payments",
    "PATIENT",
    "COMMUNICATION",
    "Conversations",
    "Forms",
    "Patient Documents",
    "Patient Recalls",
    "Recall Types",
    "NEXHEALTH API",
    "Authenticates",
    "Nex Staff",
    "Sync Status",
    "Webhook Endpoints",
    "Webhook",
    "Subscriptions",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "PLATFORM", "WORKFLOW MANAGEMENT", "NON FHIR"],
  description: [
    "NexHealth is a real-time patient booking platform for people, their doctors, and healthcare developers. Developers use NexHealth to connect with heath record systems using one RESTful interface. Instead of building dozens of integrations, NexHealth partners can reach millions of patients with one API.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

definitive_health = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/nexhealth.svg",
  type: "SOAP",
  documentationLink: "https://api.defhc.com/v4/Documentation",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "Definitive Health",
  publisher: "Definitive Health",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "4",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Authentication",
    "Executive",
    "Hospital",
    "NewsItem",
    "RFP",
    "Reports",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: [
    "CLINICIAN",
    "PLATFORM",
    "DATA & ANALYTICS",
    "HOSPITALS",
    "NON FHIR",
  ],
  description: [
    "Definitive Health provides industry-leading intelligence on the healthcare provider market. They aim to transform data, analytics and expertise into healthcare commercial intelligence. They help clients uncover the right markets, opportunities and people, so they can shape tomorrow's healthcare industry.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

athena_health_nonfhir = {
  verified: false,
  logoUrl:
    "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/athena_health.svg",
  type: "SOAP",
  documentationLink: "https://docs.athenahealth.com/api/",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "Athena Health",
  publisher: "Athena Health",
  firstRelease: "11.2022",
  latestRelease: "",
  currentVersion: "1",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [],
  fhirCompliant: true,
  nonFhirEndpoints: [
    "Appointments",
    "Chart",
    "Data Imports",
    "Documents and Forms",
    "Encounter",
    "Hospital",
    "Provider",
    "Insurance",
    "Financial",
    "Obstetrics(OB)",
    "Episode",
    "Patient",
    "Practice",
    "Configuration",
    "Quality Management",
    "Pop Health",
  ],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "TELEHEALTH", "INTEGRATED CARE", "NON FHIR"],
  description: [
    "Athenahealth offers medical groups, hospitals and health systems cloud-based EHR, practice management and patient engagement services that seamlessly connects care and drives results for every client.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

athena_health_fhir = {
  verified: false,
  logoUrl:
    "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/athena_health.svg",
  type: "SOAP",
  documentationLink: "https://docs.athenahealth.com/api/",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "Athena Health",
  publisher: "Athena Health",
  firstRelease: "11/2022",
  latestRelease: "",
  currentVersion: "1",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Summary",
      items: [
        "AllergyIntolerance",
        "ClinicalImpression",
        "Condition",
        "Procedure",
      ],
    },
    {
      title: "Medications",
      items: [
        "Immunization",
        "MedicationRequest",
        "Medication",
        "MedicationDispense",
        "MedicationStatement",
      ],
    },
    {
      title: "MedicalAdministration",
      items: ["MedicationOrder", "PracticeConfiguration", "Provider"],
    },
    {
      title: "Individuals",
      items: ["Patient", "Practitioner", "Group"],
    },
    {
      title: "Care Provision",
      items: ["CarePlan", "CareTeam", "Goal", "ServiceRequest"],
    },
    {
      title: "Security",
      items: ["Provenance"],
    },
    {
      title: "Other",
      items: ["Binary"],
    },
    {
      title: "Documents",
      items: ["DocumentReference"],
    },
    {
      title: "Workflow",
      items: ["Appointment"],
    },
    {
      title: "Management",
      items: ["Encounter"],
    },
    {
      title: "Diagnostics",
      items: ["Observation", "DiagnosticReport"],
    },
    {
      title: "Entities #2",
      items: ["Substance", "Device"],
    },
    {
      title: "Entities #1",
      items: ["Location", "Organization"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "TELEHEALTH", "INTEGRATED CARE", "FHIR"],
  description: [
    "Athenahealth offers medical groups, hospitals and health systems cloud-based EHR, practice management and patient engagement services that seamlessly connects care and drives results for every client.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

health_gorilla = {
  verified: false,
  logoUrl:
    "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/athena_health.svg",
  type: "SOAP",
  documentationLink:
    "https://developer.healthgorilla.com/reference/getting-started-with-apis",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "Health Gorilla",
  publisher: "Health Gorilla",
  firstRelease: "11/30/22",
  latestRelease: "",
  currentVersion: "1.1.0",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Summary",
      items: [
        "AllergyIntolerance",
        "FamilyMemberHistory",
        "Condition",
        "Procedure",
      ],
    },
    {
      title: "Medications",
      items: [
        "Immunization",
        "MedicationRequest",
        "MedicationDispense",
        "MedicationStatement",
      ],
    },
    {
      title: "Request & Response",
      items: ["DeviceUseStatement"],
    },
    {
      title: "Individuals",
      items: ["Patient", "Practitioner", "PractitionerRole"],
    },
    {
      title: "Care Provision",
      items: [
        "CarePlan",
        "NutritionOrder",
        "Goal",
        "ServiceRequest",
        "RequestGroup",
      ],
    },
    {
      title: "Security",
      items: ["Consent", "Provenance"],
    },
    {
      title: "Other",
      items: ["Bundle"],
    },
    {
      title: "Documents",
      items: ["DocumentReference", "Composition"],
    },
    {
      title: "Workflow",
      items: ["Appointment", "Schedule", "Slot"],
    },
    {
      title: "Management",
      items: ["Encounter"],
    },
    {
      title: "Diagnostics",
      items: ["Observation", "DiagnosticReport"],
    },
    {
      title: "Support",
      items: ["Coverage"],
    },
    {
      title: "Entities #1",
      items: ["Location", "Organization"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: [
    "EHR",
    "PLATFORM",
    "INTEGRATED CARE",
    "CLINICIAN",
    "HOSPITAL",
    "FHIR",
  ],
  description: [
    "Health Gorilla is an interoperability platform providing permitted access to actionable patient data. Customers use Health Gorilla to improve outcomes, streamline workflows, and create a more equitable healthcare ecosystem. Health Gorilla is your single source of truth for health data.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

nextgen_healthcare = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/NextGen.svg",
  type: "SOAP",
  documentationLink: "#",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: true,
  name: "NextGen Healthcare",
  publisher: "NextGen Healthcare",
  firstRelease: "",
  latestRelease: "",
  currentVersion: "",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Summary",
      items: ["AllergyIntolerance", "Condition", "Procedure"],
    },
    {
      title: "Medications",
      items: ["Immunization", "MedicationRequest", "MedicationStatement"],
    },
    {
      title: "Individuals",
      items: ["Patient", "Practitioner", "RelatedPerson"],
    },
    {
      title: "Care Provision",
      items: ["CarePlan", "CareTeam", "Goal"],
    },
    {
      title: "Security",
      items: ["Provenance"],
    },
    {
      title: "Documents",
      items: ["DocumentReference"],
    },
    {
      title: "Management",
      items: ["Encounter"],
    },
    {
      title: "Diagnostics",
      items: ["Observation", "DiagnosticReport"],
    },
    {
      title: "Entities #2",
      items: ["Device"],
    },
    {
      title: "Entities #1",
      items: ["Location", "Organization"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["EHR", "PLATFORM", "CLINICIANS", "HOSPITALS", "FHIR"],
  description: [
    "Since 1974, NextGen Healthcare has been on a mission to empower ambulatory practices with innovative health IT solutions. NextGen® Office is basically a cloud-based EHR designed to support your practice growth, save staff time, and increase patient volume. This fully integrated clinical and billing platform features specialty-specific EHR content, mobile accessibility, a revenue cycle management system, and a convenient patient portal.",
  ],
  triggers: [],
  actions: ["Get Absence Record", "Get Something"],
};

invoacer = {
  verified: false,
  logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/3.svg",
  type: "REST",
  documentationLink:
    "https://nucleus.innovaccer.com/devPortal/documentation/api-overview",
  docTooling: "GITHUB",
  wrapper: "SWAGGER",
  documentation: true,
  sandbox: false,
  name: "Innvoaccer",
  publisher: "Innvoaccer",
  firstRelease: "01/01/2022",
  latestRelease: "-",
  currentVersion: "2.0.0",
  callsCount: 0,
  tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
  dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
  resources: [
    {
      title: "Conformance",
      items: [
        "OperationDefinition",
        "CompartmentDefinition",
        "ExampleScenario",
        "GraphDefinition",
        "ImplementationGuide",
        "MessageDefinition",
        "OperationDefinition",
        "StructureMap",
      ],
    },
    {
      title: "Security",
      items: ["Consent", "Provenance", "AuditEvent"],
    },
    {
      title: "Public Health & Research",
      items: ["ResearchStudy", "ResearchSubject"],
    },
    {
      title: "Terminology",
      items: ["CodeSystem", "ValueSet", "ConceptMap", "NamingSystem"],
    },
    {
      title: "Care Provision",
      items: [
        "CarePlan",
        "CareTeam",
        "Goal",
        "NutritionOrder",
        "ServiceRequest",
        "Risk Assessment",
        "RequestGroup",
        "VisionPrescription",
      ],
    },
    {
      title: "Entities #1",
      items: [
        "HealthCareService",
        "Organization",
        "OrganizationAffiliation",
        "Location",
      ],
    },
    {
      title: "Entities #2",
      items: [
        "BiologicallyDerivedProduct",
        "Device",
        "DeviceMetric",
        "Substance",
      ],
    },
    {
      title: "Individuals",
      items: [
        "Patient",
        "Person",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
        "Group",
      ],
    },
    {
      title: "Summary",
      items: [
        "AllergyIntolerance",
        "FamilyMemberHistory",
        "Procedure",
        "Condition",
        "AdverseEvent",
        "ClinicalImpression",
        "Detected Issue",
      ],
    },
    {
      title: "Medication Definition",
      items: [
        "MedicinalProduct",
        "MedicinalProductAuthorization",
        "MedicinalProductContraIndication",
        "MedicinalProductIndication",
        "MedicinalProductIngredient",
        "MedicinalProductInteraction",
        "MedicinalProductManufactured",
        "MedicinalProductPackaged",
        "MedicinalProductPharmaceutical",
        "MedicinalProductUndesirableEffect",
        "SubstanceNucleicAcid",
        "SubstancePolymer",
        "SubstanceProtien",
        "SubstanceReferenceInformation",
        "SubstanceSpecification",
        "SubstanceSourceMaterial",
      ],
    },
    {
      title: "Other",
      items: [
        "Binary",
        "Basic",
        "Bundle",
        "Linkage",
        "MessageHeader",
        "Parameters",
      ],
    },
    {
      title: "Definitional Artifacts",
      items: [
        "ActivityDefinition",
        "DeviceDefinition",
        "EventDefinition",
        "ObservationDefinition",
        "PlanDefinition",
        "SpecimenDefinition",
      ],
    },
    {
      title: "Evidence-Based Medicines",
      items: [
        "Effect Evidence Synthesis",
        "Evidence",
        "EvidenceVariable",
        "Research Definition",
        "Research Element Definition",
        "Risk Evidence Synthesis",
      ],
    },
    {
      title: "Medications",
      items: [
        "Immunization",
        "Medication",
        "MedicationRequest",
        "Immunization Evaluation",
        "Immunization Recommendation",
        "Medication Administration",
        "Medication Dispense",
        "Medication Knowledge",
        "Medication Statement",
      ],
    },
    {
      title: "Diagnostic",
      items: [
        "Observation",
        "Media",
        "DiagnosticReport",
        "Specimen",
        "BodyStructure",
        "ImagingStudy",
        "QuestionnaireResponse",
        "Questionnaire",
        "MolecularSequence",
      ],
    },
    {
      title: "Quality Reporting & Testing",
      items: ["Measure", "MeasureReport"],
    },
    {
      title: "Workflow",
      items: [
        "Appointment",
        "Schedule",
        "Slot",
        "Appointment Response",
        "Verification Result",
        "Task",
      ],
    },
    {
      title: "Request & Response",
      items: [
        "Communication",
        "CommunicationRequest",
        "DeviceRequest",
        "DeviceUseStatement",
        "GuidanceResponse",
        "SupplyRequest",
        "SupplyDelivery",
      ],
    },
    {
      title: "General",
      items: [
        "Account",
        "ChargeItem",
        "ChargeItemDefinition",
        "Contract",
        "ExplanationOfBenefit",
        "InsurancePlan",
      ],
    },
    {
      title: "Payment",
      items: ["PaymentNotice", "PaymentReconciliation"],
    },
    {
      title: "Billing",
      items: ["Claim", "Claim Response", "Invoice"],
    },
  ],
  fhirCompliant: true,
  nonFhirEndpoints: [],
  databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
  openApi: true, // if false then ask for pricing
  openPricing: true,
  textTags: ["PLATFORM", "CLINICIANS", "HOSPITALS", "DATA & ANALYTICS", "FHIR"],
  description: [
    "Innovaccer Inc is a leading healthcare data activation platform company focused on delivering more efficient and effective healthcare through the use of pioneering analytics and transparent, clean, and accurate data..",
  ],
  triggers: [],
  actions: [],
};



upstream_outcomes = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/API%20Direct%20Logo/upstream-1.png",
    type: "SOAP",
    documentationLink: "#",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Upstream Outcomes",
    publisher: "Upstream Outcomes Limited",
    firstRelease: "01/09/2022",
    latestRelease: "",
    currentVersion: "22.09",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
        {
            title: "Care Provision",
            items: ["CarePlan 2", "CareTeam 2", "Goal 2", "ServiceRequest 2", "NutritionOrder 2", "VisionPrescription 2", "RiskAssesment 1", "RequestGroup 2"]
        },
        {
            title: "Security",
            items: ["Provenance 3", "AuditEvent 3", "Consent 2"]
        },
        {
            title: "Workflow",
            items: ["Appointment 3", "Task 2", "AppointmentResponse 3", "Schedule 3", "Slot 3", "VerificationResult 0"]
        },
        {
            title: "Conformance",
            items: ["OperationDefinition", "MessageDefinition 1", "CapabilityStatement", "StructureDefinition", "ImplementationGuide 1", "SearchParameter 3", "OperationDefinition", "CompartmentDefinition 1", "StrutuctureMap 2", "GraphDefinition 1", "ExampleScenario 0"]
        },
        {
            title: "Terminology",
            items: ["CodeSystem", "ValueSet", "ConceptMap 3", "NamingSystem 1", "TerminologyCapabilities 0"]
        },
        {
            title: "Documents",
            items: ["Composition 2", "DocumentManifest 2", "DocumentReference 3", "CatalogEntry 0"]
        },
        {
            title: "Diagnostics",
            items: ["Observation", "Media 1", "DiagnosticReport 3", "Specimen 2", "BoduStructure 1", "ImagingStudy 3", "QuestionnaireResponse 3", "MolecularSequence 1"]
        },
        {
            title: "Medication Definition",
            items: ["MedicinalProduct 0", "MedicinalProductAuthorization 0", "MedicinalProductContraIndication 0", "MedicinalProductIndication 0", "MedicinalProductIngredient 0", "MedicinalProductInteraction 0", "MedicinalProductManufactured 0", "MedicinalProductPackaged 0", "MedicinalProductPharmaceutical 0", "MedicinalProductUndesirableEffect 0", "SubstanceNucleicAcid 0", "SubstancePolymer 0", "SubstanceProtien 0", "SubstanceReferenceInformation 0", "SubstanceSpecification 0", "SubstanceSourceMaterial 0"]
        },
        {
            title: "Medications",
            items: ["MedicationRequest 3", "MedicationAdministration 2", "MedicationDispense 2", "MedicationStatement 3", "Medication 3", "MedicationKnowledge 0", "Immunization 3", "ImmunizationEvaluation 0", "ImmunizationRecommendation 1"]
        }
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["APP", "MOBILE", "PATIENT", "FHIR"],
    description: ["Upstream Health provides innovative technologies and new service approaches for health and social care teams. They believe in an approach to care that examines and addresses root causes rather than symptoms can improve long-term outcomes and decrease healthcare costs."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}


digital_child_health = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
    type: "SOAP",
    documentationLink: "https://digital.nhs.uk/developer/api-catalogue/digital-child-health-fhir",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Digital Child Health",
    publisher: "NHS",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
        {
            title: "Endpoints",
            items: ["Blood Spot Test Outcome", "Newborn Hearing", "NIPE Outcome", "Professional Contacts", "Vaccinations"]
        }
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["NATIONAL SYSTEM", "CHILD HEALTH", "FHIR"],
    description: ["Use this API for integrations to share information about a child's health between healthcare workers. This information is recorded throughout a child's clinical pathway or patient journey."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}






digital_medicine = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
    type: "SOAP",
    documentationLink: "https://digital.nhs.uk/developer/api-catalogue/digital-child-health-fhir",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Digital Medicine",
    publisher: "NHS",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
        {
            title: "Endpoints",
            items: ["Allergies and adverse reactions", "Contacts with professionals", "Legal information", "Distribution list", "Eligibility criteria", "GP practice", "History", "Information and advice given", "Patient demographics", "Referral details", "Vaccinations", "Medications and medical devices", "Plan and requested actions", "Appliances"]
        }
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["NATIONAL SYSTEM", "MEDICINE", "FHIR"],
    description: ["Use this API to notify a patient's registered GP practice about care services delivered at a pharmacy, such as an immunisation."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}






national_record_locator = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
    type: "SOAP",
    documentationLink: "https://digital.nhs.uk/developer/api-catalogue/national-record-locator-fhir",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "National Record Locator",
    publisher: "NHS",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
        {
            title: "Endpoints",
            items: ["Read", "Search", "Create", "Create(Supersede)", "Update", "Delete"]
        }
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["NATIONAL SYSTEM", "LOCATOR", "FHIR"],
    description: ["Locate and access patient information shared by other healthcare organisations using the National Record Locator (NRL) FHIR API."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}





summary_care = {
    verified: false,
    logoUrl: "https://www.alphalake.ai/hubfs/nhs-digital-logo-2.png",
    type: "SOAP",
    documentationLink: "https://digital.nhs.uk/developer/api-catalogue/summary-care-record-fhir",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Summary Care Record",
    publisher: "NHS",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
        {
            title: "Endpoints",
            items: ["Get patient's latest Summary Care Record identifier", "Get patient's Summary Care Record", "Upload patient's Summary Care Record", "Send a privacy alert message", "Update patient's consent to share SCR"]
        }
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["NATIONAL SYSTEM", "CARE RECORD", "FHIR"],
    description: ["Access a patient's Summary Care Record (SCR), an electronic record of important patient information, using our FHIR API. This specification is written from an OAS file."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}



onehealth = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/1health-logo.png",
    type: "SOAP",
    documentationLink: "https://app.swaggerhub.com/apis/1health/1h-platform/3#/info",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "1health",
    publisher: "1health",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: ["Auth", "Insurance", "Billing", "Test", "Test-order", "Kit", "Kits", "Prescription", "Order", "Order v2", "Bulk Order", "Patient", "Provider", "HCP", "Store", "Doctor", "Vaccination Event", "Manufacturer", "Vaccine Administration Site", "Vaccine Type", "VAERS Report", "Vaccine", "IIS Report", "Review", "JotForm", "QuestionnaireTest"],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["PLATFORM", "LABORATORY", "NON-FHIR"],
    description: ["1health’s powerful platform delivers end-to-end solutions to help labs streamline their processes, gain efficiencies, and enhance their accessibility while our flexible APIs enable lab customers to drive better patient engagement and compliance through uniquely accessible and impactful solutions."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}


juvonno = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/Juvonn.png",
    type: "SOAP",
    documentationLink: " https://app.swaggerhub.com/apis/globaloffice/juvonno/2.0.7",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Juvonno",
    publisher: "Juvonno",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: ["appointments", "branches", "options", "commissions", "customers", "customer_groups", "insurancecompanies", "invoices", "payables", "payments", "staff", "wcbform6s", "accmforms", "accmmanagerforms", "accmreports", "Waitinglist"],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["CLOUD BASED", "SCHEDULE", "CLINICIAN", "NON-FHIR"],
    description: ["Juvonno is a cloud-based chiropractic software designed to help clinics schedule appointments, communicate with patients, and manage billing."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}


alayacare = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/AlayaCare.png",
    type: "SOAP",
    documentationLink: "https://app.swaggerhub.com/apis/AlayaCare/api-medication-external/1.0#/info",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Alayacare",
    publisher: "Alayacare",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "1.0",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: ["Medication", "Medication settings"],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["CLOUD BASED", "PLATFORM", "NON-FHIR"],
    description: [" AlayaCare is a cloud-based home health care platform for midsize to enterprise-level home care agencies and providers. Features include clinical documentation, back-office functionality, remote patient monitoring, client and family portals, and mobile care worker functionality."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}



fusion_base = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/FusionBase.png",
    type: "SOAP",
    documentationLink: "https://dataset-api.fusionbase.com/data-api/world-health-organization-who/",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Fusion Base (WHO Data)",
    publisher: "Fusion Base (WHO Data)",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "1.0",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: ["List ", "data", "metadata"],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["METADATA", "DEVELOPER", "NON-FHIR"],
    description: ["Fusionbase offers a fast and easy to use API to get data live from sources like World Health Organization (WHO) and more."],
    triggers: [],
    actions: ["Get Absence Record", "Get Something"]
}

servicenow = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/ServiceNow.png",
    type: "SOAP",
    documentationLink: "#",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Service Now",
    publisher: "Service Now",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["CX", "NON-FHIR"],
    description: ["ServiceNow is an American software company based in Santa Clara, California that develops a cloud computing platform to help companies manage digital workflows for enterprise operations."],
    triggers: ["New record", "New/updated record", "Export new records", "Export new/updated records", "Scheduled record search"],
    actions: ["Custom action", "Create record", "Create record using a template", "Get attachments contents", "Get object schema", "Search records", "Search records using query", "Update record", "Update record using a template", "Upload attachment"]
}

hubspot = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/Hubspot.png",
    type: "SOAP",
    documentationLink: "#",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Hubspot",
    publisher: "Hubspot",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["CX", "NON-FHIR"],
    description: ["HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service."],
    triggers: ["New contact in contact list", "New record", "New records", "New/updated record", "New/updated records"],
    actions: ["Custom action", "Add contact to list", "Add contact to workflow", "Create engagement", "Create record", "Create records", "Delete contact", "Get contacts associated with a company", "Get contacts in contact list", "Get owner details by ID", "Get record", "Remove contact from contact list", "Search pipeline stages", "Search record", "Update record", "Update records"]
}

uipath = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/uipath.png",
    type: "SOAP",
    documentationLink: "#",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Ui Path",
    publisher: "Ui Path",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: [],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["Automation", "Integration", "NON-FHIR"],
    description: ["UiPath is a global software company that makes robotic process automation software."],
    triggers: [],
    actions: ["Add Queue Item", "Custom Action", "Get Environments", "Get Job", "Get Machine Sessions", "Get Processes", "Get Queue Item", "Get Queues", "Get Robots", "Start Job(s)"]
}

robocorp = {
    verified: false,
    logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/ROBOCORP.png",
    type: "SOAP",
    documentationLink: "#",
    docTooling: "GITHUB",
    wrapper: "SWAGGER",
    documentation: true,
    sandbox: false,
    name: "Robocorp",
    publisher: "Robocorp",
    firstRelease: "",
    latestRelease: "",
    currentVersion: "",
    callsCount: 0,
    tools: ["GITHUB", "SWAGGER"], // UPLOAD-IO, RAPID-API
    dataFormats: ["JSON", "URL-ENCODED", "XML", "FORM-DATA"],
    resources: [
    ],
    fhirCompliant: true,
    nonFhirEndpoints: ["List processes", "List process work items", "Create a new work item into the process input", "List process run work items", "Get work item", "Retry processing of work item", "Mark work item as completed", "Update work item data (JSON)", "Register work item file upload", "Get work item file download link", "List process runs in a process", "Start a process with an optional work item data payload", "Start a process with an optional work item data payload", "Start a process with multiple work item data payloads", "Start a process with the provided configuration", "List process runs in a workspace", "Monitor process run status", " List robot runs", "Get robot run", "List robot run events", "List robot run console messages", "List robot run artifacts", "Get a robot artifact"],
    databaseType: "", // PERIODIC-SCHEDULED, REAL-TIME, OTHER
    openApi: true, // if false then ask for pricing
    openPricing: true,
    textTags: ["Automation", "Integration", "NON-FHIR"],
    description: ["Robocorp cloud is a convenient way to manage, distribute, and monitor your robot workforce in real time across your organization from one central cloud command. Its Gen2 RPA platform brings powerful open-source dev tools and cloud native orchestration wrapped up in a consumption-based pricing model that enables teams to easily scale bots up and down on-demand."],
    triggers: [],
    actions: []
}
