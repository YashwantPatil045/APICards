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
