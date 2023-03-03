export type Project = {
  title: string;
  time: string;
  desc: string;
  image: string;
  projectUrl: string;
};

export const myProjects: Project[] = [
  {
    title: 'Algopylib',
    time: 'May-June, 2021',
    desc: 'A basic Python library that has modules for math functions, algorithms, and puzzles.',
    image: 'algopylib.png',
    projectUrl: 'https://pypi.org/project/Algopylib/',
  },

  {
    title: 'Multi-class Toxicity Text Classification',
    time: 'Oct-Dec, 2021',
    desc: 'Model is classify a comment on various labels and going to make a model which gives the classification for each label, and for all types of toxicity, and also provides toxicity percent for each comment.',
    image:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*RkohsOF8jIQSj023b3O9oQ.png',
    projectUrl:
      'https://medium.com/@saxenashivam451/implementation-of-bidirectional-gru-with-embedding-for-calculating-toxicity-percentage-of-comment-f9e4a28643bc',
  },
  {
    title: 'Covid Third Wave Forecasting',
    time: 'Oct-Dec, 2021',
    desc: 'This project help in forecasting COVID-19 cases with country wise analysis using five different model has been trained in a given data to do a comparative analysis.',
    image:
      'https://raw.githubusercontent.com/shivam-s16/Covid_Third_Wave_Forecasting/main/results/linear1.png',
    projectUrl: 'https://github.com/shivam-s16/Covid_Third_Wave_Forecasting',
  },
  {
    title: 'Question Similarity Score',
    time: 'Oct-Dec, 2021',
    desc: 'Siamese LSTM and Bert Transformers for evaluating similarity between sentences of the Quora Question Pairs Dataset.',
    image:
      'https://raw.githubusercontent.com/shivam-s16/Question-Similarity-Score/main/images/Bert.png',
    projectUrl: 'https://github.com/shivam-s16/Question-Similarity-Score',
  },
];
