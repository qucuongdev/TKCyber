export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Offensive' | 'SOC' | 'GRC' | 'Products' | 'AI Security';
  date: string;
  readTime: string;
  tags: string[];
}

export interface Topic {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}


