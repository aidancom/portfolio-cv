
const Presentation = () => {
  return (
    <div 
      className='px-10 pt-20 w-full h-[700px] bg-gradient-to-bl bg-[#51A0AB] xl:h-[600px] xl:bg-[linear-gradient(50deg,rgba(81,160,171,1)_50%,white_50%)] sm:h-[500px]' 
    >
      <div className='max-w-5xl flex flex-col mx-auto justify-center h-full sm:flex-row sm:justify-between sm:items-center'>
        <div className='space-y-2'>
          <h1 className='font-bold text-5xl text-white'>Hola,</h1>
          <h2 className='text-3xl text-white'>Soy Aidan Verdejo</h2>
          <h3 className='text-2xl text-white'>Desarrollado web</h3>
          <div className='mt-6'>
            <a 
              href='/pdf/Curriculum-AidanVerdejo.pdf'
              target='__blank'
              className='mt-6 bg-[#6DC7D1] text-white px-7 py-2 rounded-lg cursor-pointer font-bold border-white border-2 transition-all hover:text-black hover:border-[#6DC7D1] hover:bg-white'
            >Ver CV</a>
          </div>
        </div>
        <div>
          <img 
            className='w-[500px] pt-10' 
            src='./img/pc.svg' 
            alt='Desarrollo web' 
          />
        </div>
      </div>
    </div>
  )
}

export default Presentation
