export const DEFAULT_CURRENCY = "$"
export const AMD_RATE_WITH_USD = 480
export const EURO_RATE_WITH_USD = 0.86
export const RUBLE_RATE_WITH_USD = 70
export const CURRENT_BUDGET = 4000000
export const DELETE_BUTTON = "delete"
const CURRENT_BUDGET_WITH_USD = CURRENT_BUDGET / AMD_RATE_WITH_USD
export const FIXED_CURRENT_BUDGET_WITH_USD = CURRENT_BUDGET_WITH_USD.toFixed(2)
export const CURRENCY_LIST = {
    Currency: {
        id: 1,
        title: "Choose any",
        value: "$"
    },
    Dollar: {
        id: 2,
        title: "USD",
        value: "$"
    },
    Euro: {
        id: 3,
        title: "EURO",
        value: "\u20ac"
    },
    Ruble: {
        id: 4,
        title: "RUBLE",
        value: "\u20BD"
    },
    AMD: {
        id: 5,
        title: "AMD",
        value: "\u058f"
    }
}

export const COMPANY_LIST = {
    EPAM: {
        id: 1,
        value: "EPAM"
    },
    EPAM_SYSTEMS: {
        id: 2,
        value: "EPAM SYSTEMS"
    },
    EPAM_ANYWHERE: {
        id: 3,
        value: "EPAM ANYWHERE"
    },
    GOOGLE: {
        id: 4,
        value: "GOOGLE"
    }
}
export const CLIENT_STATUS = {
    done: {
        id: 1,
        value: 'done',
    },
    in_progress: {
        id: 2,
        value: 'in progress'
    },
    booked: {
        id: 3,
        value: 'booked'
    }
}
export const userMock = {
    key: '',
    name: '',
    lastName: '',
    address: '',
    company: '',
    dateOfBoarding: '',
    salary: "",
    currency: '',
    actions: ['delete', 'update'],

}
export const EMPLOYEES_LIST = [
    {
        key: 1,
        name: 'Mike',
        lastName: 'Ticon',
        address: '10 Downing Street',
        company: 'EPAM SYSTEMS',
        dateOfBoarding: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        salary: 300,
        currency: CURRENCY_LIST.Dollar.value,
        actions: ['delete', 'update']

    },
    {
        key: 2,
        name: 'John',
        lastName: 'Lenon',
        address: '10 Downing Street',
        company: 'EPAM',
        dateOfBoarding: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        salary: 430,
        currency: CURRENCY_LIST.Euro.value,
        actions: ['delete', 'update']
    },
]
export const clientMock = {
    key: '',
    client: '',
    product: '',
    date: '',
    price: '',
    quantity: '',
    summary: 0,
    status: '',
    actions: ['delete', 'update']

}

export const CLIENT_LIST = [
    {
        key: '1',
        product: 'notebook',
        client: 'Mike',
        date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        price: 800,
        quantity: 4,
        summary: 800 * 4,
        status: 'done',
        actions: ['delete', 'update']
    },
    {
        key: '2',
        client: 'John',
        date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        product: 'mouse',
        price: 8,
        quantity: 150,
        summary: 7 * 150,
        status: 'done',
        actions: ['delete', 'update']
    },
]

export const dealsColumns = [
    {
        title: 'Client',
        dataIndex: 'client',
        key: 'client',
    },
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Date Of Order',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Summary',
        dataIndex: 'summary',
        key: 'summary',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
    },
];

export const employeesColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'lastName',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'company',
        dataIndex: 'company',
        key: 'company',
        editable: true
    },
    {
        title: 'date Of Boarding',
        dataIndex: 'dateOfBoarding',
        key: 'dateOfBoarding',
    },
    {
        title: 'salary',
        dataIndex: 'salary',
        key: 'salary',
    },
    {
        title: 'currency',
        dataIndex: 'currency',
        key: 'currency',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
    },
]