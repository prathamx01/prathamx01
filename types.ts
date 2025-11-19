import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}