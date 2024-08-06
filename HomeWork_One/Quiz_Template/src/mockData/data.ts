export const categoryOptions = [
  {
    id: "AniId",
    value: "Animals",
    code: 27,
  },
  {
    id: "CarId",
    value: "Sports",
    code: 21,
  },
  {
    id: "GaID",
    value: "Games",
    code: 16,
  },
];
export const timeOptions = [
  {
    id: "OneId",
    value: "1m",
  },
  {
    id: "TwoId",
    value: "2m",
  },
  {
    id: "FiveId",
    value: "5m",
  },
];

export const difficultyOptions = [
  {
    id: "EsId",
    value: "easy",
  },
  {
    id: "MedID",
    value: "medium",
  },
  {
    id: "HardId",
    value: "hard",
  },
];

export const typeOptions = [
  {
    id: "MultID",
    value: "multiple",
  },
  {
    id: "SinID",
    value: "boolean",
  },
];

export const questionOption = {
  title: "What is the best name ever?",
  answers: ["Vlad", "vlaD", "vLaD"],
  id: "keyOne",
};

interface IStatistic {
  correct: number;
  common: number;
  time: string;
}

interface IConfiguration {
  category: string;
  difficult: string;
  type: string;
  time: string;
}

export const statisticOption: IStatistic = {
  correct: 5,
  common: 10,
  time: "15min",
};

export const configurationOption: IConfiguration = {
  category: "Animal",
  difficult: "Easy",
  type: "One variant",
  time: "5min",
};
