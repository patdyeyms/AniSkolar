import { Scholarship } from './types';

export const AVAILABLE_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 's1',
    name: 'Student Financial Aid (SFA) Grant',
    provider: 'Scholarship Unit',
    type: 'Internal',
    description: 'This scholarship supports College students. While priority courses are listed, applicants from other programs are welcome. Interested students may apply through the Office of the Vice President for Global Engagement and External Relations.',
    eligibility: [
      'Filipino citizen, preferably Catholic, with good moral character',
      'General average of 85% and above for incoming freshmen',
      '2.50 GPA for upperclassmen with no failing grades',
      'Enrolled in minimum 18 units subject load or as prescribed'
    ],
    requirements: [
      'Application Letter from parent/guardian addressed to Scholarship Coordinator',
      'One (1) Recommendation letter from counselor, adviser, or principal',
      'Personal Essay with one (1) 2x2 photo taken within 3 months',
      'Certificate of Indigency',
      'Certificate of Income Tax Return (ITR), Affidavit, or Employment Contract',
      'Recent utility bills (electric and water) in JPEG format',
      'Picture of Residence (Indoor and Outdoor view) in JPEG format',
      'Hand drawn Vicinity sketch map with contact information'
    ],
    priorityCourses: [
      'Education: BSEd, BS Special Needs, Bachelor of Early Childhood',
      'Criminal Justice: BS in Criminology',
      'CBAA: BSBA major in Economics',
      'CSCS: BS Applied Math',
      'CEAT: BS Sanitary Engineering'
    ],
    procedures: [
      'Accomplish the online scholarship application on the specified date',
      'Attach/upload all required documents in JPEG format',
      'Notification of status via Student Portal, email, or Schoolbook'
    ],
    notes: [
      'Online application comes after slot confirmation',
      'Application period starts six weeks before opening of classes',
      'No new applicants accommodated during the second semester',
      'Application shall only be accepted after online enrollment',
      'Scholarship Unit reserves the right to reject/decline applications'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [
      'Allowed another internally funded scholarship if assistance does not exceed Php 10,000'
    ],
    benefits: 'Tuition Discounts: 100%, 75%, 50%, and 25%'
  },
  {
    id: 's2',
    name: 'Entrance Scholarship',
    provider: 'DLSU-D Admission Office',
    type: 'Internal',
    description: 'Awarded to students who ranked first and second in a batch of at least 100 graduates from any DepEd recognized schools.',
    eligibility: [
      'Batch of at least 100 graduates',
      'Rank 1 or 2 among graduates'
    ],
    requirements: [
      'Certificate of Graduation with Rank',
      'Admission Results'
    ],
    notes: [
      'Tuition discounts exclude miscellaneous, laboratory, and other fees',
      'The entrance scholarship is valid for one (1) semester only'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [],
    benefits: '100% (Rank 1) or 50% (Rank 2) Tuition Discount'
  },
  {
    id: 's3',
    name: 'Academic Scholarship',
    provider: 'Office of the Registrar',
    type: 'Internal',
    description: 'Given to upperclassmen whose GPA ranks in the top 30% of a particular semester. Percentage discount varies by rank.',
    eligibility: [
      'GPA in the top 30% of the course',
      'Minimum load of 18 units',
      'No grade lower than 3.25'
    ],
    requirements: [
      'Official Copy of Grades',
      'Enrollment Form'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [],
    benefits: 'Variable Tuition Discount based on Ranking'
  },
  {
    id: 's4',
    name: 'Enhanced Brother President Scholarship Program (EBPSP)',
    provider: 'University Administration',
    type: 'Internal',
    description: 'Scholarships for legal dependents of employees of DLSU-D and DLSMHSI. Covers up to four children.',
    eligibility: [
      'Legal dependent of a qualified employee',
      'Full-time student status'
    ],
    requirements: [
      'Proof of Relationship',
      'Employment Certificate'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [],
    benefits: 'Tiered Tuition Discounts (100%, 75%, 50%, 25%)'
  },
  {
    id: 's5',
    name: 'Athletic Scholarship',
    provider: 'Sports Development Office',
    type: 'Internal',
    description: 'Recognizes and supports students committed to their athletic pursuits while maintaining strong academic records.',
    eligibility: [
      'Recruited varsity player',
      'Positive coach evaluation',
      'Satisfactory academic performance'
    ],
    requirements: [
      'Coach Recommendation',
      'Athletic Profile'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [],
    benefits: 'Tuition Discount + Accommodation Benefits'
  },
  {
    id: 's6',
    name: 'Vicissitude Scholarship Program',
    provider: 'Vicissitude Office',
    type: 'Other',
    description: 'For students involved in yearbook production, promoting responsibility, creativity, and service through the Editorial Board.',
    eligibility: [
      'Active member of the Editorial Board/Staff',
      'Satisfactory academic records'
    ],
    requirements: [
      'Portfolio of Works',
      'Vicissitude Endorsement'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [],
    benefits: 'Tuition Fee Assistance & Privilege Grants'
  },
  {
    id: 's7',
    name: 'Performing Arts Group (PAG)',
    provider: 'Cultural Arts Office (CAO)',
    type: 'Internal',
    description: 'The Performing Arts Group (PAG) aims to nurture the Filipino culture by conducting socially relevant productions for the Lasallian community. PAG offers scholarship opportunities for students with exceptional skills and a passion for singing, dancing, acting, and playing musical instruments.',
    eligibility: [
      'New members active for at least one year',
      'Old members active during previous semester',
      'No record of major offense during previous semester',
      'No failing grade in any subject',
      'GPA not lower than 1.50'
    ],
    requirements: [
      'Academic Performance Evaluation (20%)',
      'Organizational Performance Evaluation (30%)',
      'Attendance (meetings, rehearsals, productions) (30%)',
      'Attitude Appraisal (AAF) (20%)'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [
      'Failure to follow guidelines will mean forfeiture of scholarship benefits'
    ],
    benefits: 'Level 1 (Php 15k), Level 2 (Php 10k), Level 3 (Php 5k)',
    benefitTable: [
      { label: 'Level 1 (96-100% Overall Rating)', value: 'Php 15,000.00' },
      { label: 'Level 2 (91-95% Overall Rating)', value: 'Php 10,000.00' },
      { label: 'Level 3 (80-90% Overall Rating)', value: 'Php 5,000.00' }
    ]
  },
  {
    id: 's8',
    name: '267th Naval Reserve Officer Training Corps Unit (ROTC)',
    provider: '267th N.R.O.T.C.U.',
    type: 'Internal',
    description: 'Granted under Student Handbook section 17.1.4. Deserving ROTC officers may receive up to 100% scholarship grant based on rank and availability of ROTC fund.',
    eligibility: [
      'General grade average of 2.0 or its equivalent',
      'No failing grade in academic and non-academic subjects',
      'Good moral character',
      'Earned rank based on entitlement',
      'Active and functional in duty accordingly',
      'Observe 20 hours of duty a week in the 267th N.R.O.T.C.U.',
      'Recommended by Commandant and or ROTC Coordinator'
    ],
    requirements: [
      'Recommendation Letter from Commandant',
      'Certification of Rank',
      'Grade Report for previous semester'
    ],
    dates: {
      start: 'May 01, 2026',
      end: 'May 30, 2026'
    },
    restrictions: [
      'Failure to follow guidelines will mean forfeiture of scholarship benefits'
    ],
    benefits: 'Corps Cmdr (30k), Vice Corps (20k), 2nd/3rd Class (10k), 4th Class (5k)',
    benefitTable: [
      { label: 'Corps Commander', value: 'Php 30,000.00' },
      { label: 'Vice Corps Commander', value: 'Php 20,000.00' },
      { label: '2nd and 3rd Class Officer', value: 'Php 10,000.00' },
      { label: '4th Class Officer', value: 'Php 5,000.00' }
    ]
  }
];
