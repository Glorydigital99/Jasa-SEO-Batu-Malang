
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  icon: string;
}

export interface AuditResult {
  analysis: string;
  recommendations: string[];
  score: number;
}
