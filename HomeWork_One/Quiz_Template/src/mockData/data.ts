import { v4 as uuidv4 } from 'uuid'
interface IData  {
    id: string
    name: string
}

export const categoryOptions = [
    {
        id: uuidv4(),
        value: 'Animals'
    },
    {
        id: uuidv4(),
        value: 'Cars'
    },
    {
        id: uuidv4(),
        value: 'Games'
    }
]
export const timeOptions = [
    {
        id: uuidv4(),
        value: '1m'
    },
    {
        id: uuidv4(),
        value: '2m'
    },
    {
        id: uuidv4(),
        value: '5m'
    }
]

export const difficultyOptions = [
    {
        id: uuidv4(),
        value: 'Easy'
    },
    {
        id: uuidv4(),
        value: 'Medium'
    },
    {
        id: uuidv4(),
        value: 'Hard'
    }
]

export const typeOptions = [
    {
        id: uuidv4(),
        value: 'Multiple'
    },
    {
        id: uuidv4(),
        value: 'One answer'
    },
]





