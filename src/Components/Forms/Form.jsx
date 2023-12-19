import React from 'react'

const Form = () => {
    return (
        <div className='bg-teal-600 p-5 py-14 flex flex-col justify-center'>
            <div className='flex justify-center'>
                <div>
                    <h2 className="mb-5 text-4xl font-bold text-white">Оставить заявку</h2>
                    <form action="" className='flex flex-col gap-6'>
                        <input required placeholder='Имя' type="text" className="bg-white p-3 outline-none text-xl rounded-md transition-all border delay-150 focus:bg-transparent focus:shadow-2xl placeholder:text-slate-600" />
                        <input required placeholder='Телефон' type="number" className="bg-white p-3 outline-none text-xl rounded-md transition-all border delay-150 focus:bg-transparent focus:shadow-2xl placeholder:text-slate-600" />
                        <button className="bg-slate-900 px-5 py-3 text-xl rounded-md text-white font-semibold border border-slate-900 transition-all delay-150 hover:bg-transparent hover:text-slate-900">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form