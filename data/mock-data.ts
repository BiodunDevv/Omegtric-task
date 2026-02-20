export type ModuleStatus = "active" | "inactive";

export type AdminStatus = "active" | "invite-sent" | "expired" | "inactive";

export interface Admin {
  name: string;
  email: string;
}

export interface Module {
  id: string;
  code: string;
  name: string;
  status: ModuleStatus;
  admin: Admin | null;
  adminStatus: AdminStatus;
  topicsCount: number;
  studentsCount: number;
  duration: string;
  avgCompletion: number;
}

export interface CourseProject {
  title: string;
  description: string;
  status: string;
  submissions: number;
  pendingReviews: number;
}

export interface CourseStats {
  totalModules: number;
  totalFacilitators: number;
  totalStudents: number;
  completionRate: number;
}

export interface Course {
  id: string;
  institution: string;
  name: string;
  shortName: string;
  stats: CourseStats;
  project: CourseProject;
  modules: Module[];
}

export const courses: Course[] = [
  {
    id: "emba",
    institution: "Lagos Business School",
    name: "Executive MBA",
    shortName: "EMBA",
    stats: {
      totalModules: 8,
      totalFacilitators: 485,
      totalStudents: 8540,
      completionRate: 85,
    },
    project: {
      title: "Executive Leadership Capstone",
      description:
        "A comprehensive capstone project integrating leadership principles, strategic thinking, and organizational transformation.",
      status: "Published",
      submissions: 38,
      pendingReviews: 5,
    },
    modules: [
      {
        id: "emba-701",
        code: "EMBA 701",
        name: "Leadership & Organizational Behavior",
        status: "active",
        admin: {
          name: "Prof. Kunle Adebayo",
          email: "kunle.adebayo@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 12,
        studentsCount: 35,
        duration: "2 hours",
        avgCompletion: 92,
      },
      {
        id: "emba-702",
        code: "EMBA 702",
        name: "Strategic Management",
        status: "active",
        admin: {
          name: "Dr. Ifeoma Nwachukwu",
          email: "ifeoma.nwachukwu@lbs.edu.ng",
        },
        adminStatus: "invite-sent",
        topicsCount: 10,
        studentsCount: 32,
        duration: "2 hours",
        avgCompletion: 85,
      },
      {
        id: "emba-703",
        code: "EMBA 703",
        name: "Corporate Finance",
        status: "active",
        admin: {
          name: "Prof. Kunle Adebayo",
          email: "adebayo.kunle@lbs.edu.ng",
        },
        adminStatus: "expired",
        topicsCount: 10,
        studentsCount: 32,
        duration: "2 hours",
        avgCompletion: 65,
      },
      {
        id: "emba-704",
        code: "EMBA 704",
        name: "Business Ethics & Sustainability",
        status: "inactive",
        admin: null,
        adminStatus: "inactive",
        topicsCount: 10,
        studentsCount: 32,
        duration: "2 hours",
        avgCompletion: 65,
      },
      {
        id: "emba-705",
        code: "EMBA 705",
        name: "Marketing Strategy",
        status: "active",
        admin: {
          name: "Dr. Amara Obi",
          email: "amara.obi@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 8,
        studentsCount: 30,
        duration: "2 hours",
        avgCompletion: 78,
      },
      {
        id: "emba-706",
        code: "EMBA 706",
        name: "Operations Management",
        status: "active",
        admin: {
          name: "Prof. Chidi Eze",
          email: "chidi.eze@lbs.edu.ng",
        },
        adminStatus: "invite-sent",
        topicsCount: 9,
        studentsCount: 28,
        duration: "2 hours",
        avgCompletion: 72,
      },
      {
        id: "emba-707",
        code: "EMBA 707",
        name: "Data Analytics for Business",
        status: "active",
        admin: {
          name: "Dr. Ngozi Okoro",
          email: "ngozi.okoro@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 11,
        studentsCount: 34,
        duration: "2 hours",
        avgCompletion: 88,
      },
      {
        id: "emba-708",
        code: "EMBA 708",
        name: "Entrepreneurship & Innovation",
        status: "inactive",
        admin: null,
        adminStatus: "inactive",
        topicsCount: 7,
        studentsCount: 25,
        duration: "2 hours",
        avgCompletion: 55,
      },
    ],
  },
  {
    id: "mba",
    institution: "Lagos Business School",
    name: "Full-Time MBA",
    shortName: "MBA",
    stats: {
      totalModules: 6,
      totalFacilitators: 320,
      totalStudents: 4200,
      completionRate: 78,
    },
    project: {
      title: "Business Strategy Capstone",
      description:
        "An integrated capstone requiring students to develop a comprehensive business strategy for a real-world organization.",
      status: "Published",
      submissions: 24,
      pendingReviews: 8,
    },
    modules: [
      {
        id: "mba-501",
        code: "MBA 501",
        name: "Financial Accounting",
        status: "active",
        admin: {
          name: "Prof. Adeola Balogun",
          email: "adeola.balogun@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 14,
        studentsCount: 42,
        duration: "3 hours",
        avgCompletion: 81,
      },
      {
        id: "mba-502",
        code: "MBA 502",
        name: "Managerial Economics",
        status: "active",
        admin: {
          name: "Dr. Emeka Okafor",
          email: "emeka.okafor@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 10,
        studentsCount: 40,
        duration: "2 hours",
        avgCompletion: 74,
      },
      {
        id: "mba-503",
        code: "MBA 503",
        name: "Organizational Behavior",
        status: "active",
        admin: {
          name: "Dr. Funke Adeyemi",
          email: "funke.adeyemi@lbs.edu.ng",
        },
        adminStatus: "invite-sent",
        topicsCount: 9,
        studentsCount: 38,
        duration: "2 hours",
        avgCompletion: 69,
      },
      {
        id: "mba-504",
        code: "MBA 504",
        name: "Marketing Management",
        status: "active",
        admin: {
          name: "Prof. Yemi Osagie",
          email: "yemi.osagie@lbs.edu.ng",
        },
        adminStatus: "expired",
        topicsCount: 11,
        studentsCount: 36,
        duration: "2 hours",
        avgCompletion: 82,
      },
      {
        id: "mba-505",
        code: "MBA 505",
        name: "Business Law & Ethics",
        status: "inactive",
        admin: null,
        adminStatus: "inactive",
        topicsCount: 8,
        studentsCount: 30,
        duration: "1.5 hours",
        avgCompletion: 45,
      },
      {
        id: "mba-506",
        code: "MBA 506",
        name: "Supply Chain Management",
        status: "active",
        admin: {
          name: "Dr. Bola Tinubu-Ade",
          email: "bola.tinubu-ade@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 7,
        studentsCount: 28,
        duration: "2 hours",
        avgCompletion: 76,
      },
    ],
  },
  {
    id: "pgd",
    institution: "Lagos Business School",
    name: "Postgraduate Diploma in Management",
    shortName: "PGD",
    stats: {
      totalModules: 5,
      totalFacilitators: 180,
      totalStudents: 2100,
      completionRate: 72,
    },
    project: {
      title: "Management Consulting Project",
      description:
        "Students work in teams to solve a real management challenge for a partner organization, applying learned frameworks.",
      status: "Draft",
      submissions: 12,
      pendingReviews: 3,
    },
    modules: [
      {
        id: "pgd-301",
        code: "PGD 301",
        name: "Principles of Management",
        status: "active",
        admin: {
          name: "Dr. Chioma Ibe",
          email: "chioma.ibe@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 10,
        studentsCount: 45,
        duration: "2 hours",
        avgCompletion: 80,
      },
      {
        id: "pgd-302",
        code: "PGD 302",
        name: "Business Communication",
        status: "active",
        admin: {
          name: "Prof. Tunde Bakare",
          email: "tunde.bakare@lbs.edu.ng",
        },
        adminStatus: "invite-sent",
        topicsCount: 8,
        studentsCount: 42,
        duration: "1.5 hours",
        avgCompletion: 68,
      },
      {
        id: "pgd-303",
        code: "PGD 303",
        name: "Introduction to Finance",
        status: "active",
        admin: {
          name: "Dr. Nkechi Anya",
          email: "nkechi.anya@lbs.edu.ng",
        },
        adminStatus: "active",
        topicsCount: 12,
        studentsCount: 40,
        duration: "2 hours",
        avgCompletion: 75,
      },
      {
        id: "pgd-304",
        code: "PGD 304",
        name: "Human Resource Management",
        status: "inactive",
        admin: null,
        adminStatus: "inactive",
        topicsCount: 6,
        studentsCount: 35,
        duration: "1.5 hours",
        avgCompletion: 50,
      },
      {
        id: "pgd-305",
        code: "PGD 305",
        name: "Project Management",
        status: "active",
        admin: {
          name: "Prof. Segun Ajayi",
          email: "segun.ajayi@lbs.edu.ng",
        },
        adminStatus: "expired",
        topicsCount: 9,
        studentsCount: 38,
        duration: "2 hours",
        avgCompletion: 62,
      },
    ],
  },
];
