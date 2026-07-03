export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: string;
  description: string;
  eligibility: string[];
  requirements: string[];
  dates: {
    start: string;
    end: string;
  };
  restrictions: string[];
  benefits: string;
  benefitTable?: { label: string; value: string }[];
  priorityCourses?: string[];
  procedures?: string[];
  notes?: string[];
}
