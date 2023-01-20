import dataScientist from '../assets/data_scientist.svg'


export const Home = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-around">
            <div className='flex w-5/6 md:w-1/2 '>
                <h2 className="text-3xl md:text-6xl md:mt-12">
                    I am Shivam,
                    <br />
                    <span className="font-semibold text-green-600">a Data Scientist and Researcher 👨🏻‍💻</span>
                </h2>
            </div>

            <div className="w-5/6 md:w-1/2">
                <img src={dataScientist} alt="" />
            </div>
        </div>
    )
}