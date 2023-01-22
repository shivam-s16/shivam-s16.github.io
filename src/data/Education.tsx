export interface Education {
    time: string,
    degree: string,
    institution: string,
    description: string,
    url: string
}

export function isEducation(object: any): object is Education {
    return 'fooProperty' in object;
}

export const educationList: Education[] = [
    {
        time: "Dec 2020 - present",
        degree: "Bachelors in Sata Science and Artificial Engineering",
        institution:"International Institute of Information Technology, Naya Raipur",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an unknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
        url:"http://127.0.0.1:5173/"
    },
    {
        time: "Dec 2020 - present",
        degree: "Bachelors in data science and artificial engineering",
        institution:"International institute of information technology, naya raipur",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an unknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
        url:"http://127.0.0.1:5173/"
    }

]