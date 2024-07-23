

export const categoryOptions = [
    {
        id: 'AniId',
        value: 'Animals'
    },
    {
        id:'CarId',
        value: 'Cars'
    },
    {
        id: "GaID",
        value: 'Games'
    }
]
export const timeOptions = [
    {
        id: "OneId",
        value: '1m'
    },
    {
        id: 'TwoId',
        value: '2m'
    },
    {
        id: 'FiveId',
        value: '5m'
    }
]

export const difficultyOptions = [
    {
        id: 'EsId',
        value: 'Easy'
    },
    {
        id: 'MedID',
        value: 'Medium'
    },
    {
        id: 'HardId',
        value: 'Hard'
    }
]

export const typeOptions = [
    {
        id: 'MultID',
        value: 'Multiple'
    },
    {
        id: "SinID",
        value: 'One answer'
    },
]

export const questionOption = {
    title: 'What is the best name ever?',
    answers: ['Vlad', 'vlaD' ,'vLaD'],
    id: 'keyOne'
}
interface IStatistic {
    correct: number
    common: number
    time: string
}

interface IConfiguration {
    category: string
    difficult: string
    type: string
    time: string
}

export const statisticOption: IStatistic = {
    correct:5,
    common: 10,
    time: '15min'
}

export const configurationOption: IConfiguration = {
    category: 'Animal',
    difficult: 'Easy',
    type: 'One variant',
    time: '5min',
}





