export type NavLink = {
  label: string;
  href: string;
};

export type ServiceSummary = {
  slug: string;
  title: string;
  shortDescription: string;
  href: string;
  icon: "chiropractic" | "massage" | "acupuncture" | "orthotics";
};

export type DoctorHours = {
  day: string;
  hours: string;
};

export type Doctor = {
  id: string;
  name: string;
  credentials: string;
  image: string;
  imageAlt: string;
  bio: string;
  bioTodo?: boolean;
  useInitialsPlaceholder?: boolean;
  hours: DoctorHours[];
};

export type Testimonial = {
  quote: string;
  author: string;
  initials: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  clientConfirm?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  intro: string;
  body: string;
  helpsWith: string[];
  imageLeft?: boolean;
};
