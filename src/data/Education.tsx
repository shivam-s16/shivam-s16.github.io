export interface Education {
  time: string;
  degree: string;
  institution: string;
  description: string;
  url: string;
}

export function isEducation(object: any): object is Education {
  return 'fooProperty' in object;
}

export const educationList: Education[] = [
  {
    time: 'Dec 2020 - present',
    degree: 'Bachelors in Data Science and Artificial Engineering',
    institution:
      'International Institute of Information Technology, Naya Raipur',
    description:
      'CGPA 8.65 \n Relevant Courses: Linear Algebra, Statistics, Graph Theory, Data Structures and Algorithms,Data Preprocessing, Design & Analysis of Algorithms, Machine Learning Algorithms, Deep Learning, Statistical Data Analysis, Reinforcement Learning.',
    url: 'https://www.iiitnr.ac.in/',
  },
];
