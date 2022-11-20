type CardProps = {
  children: any,
}

export default function Card({children, ...props}: CardProps) {
  return (
    <div className='bg-white w-full h-80 rounded-lg shadow-xl flex flex-col justify-between items-center lg:w-3/12 lg:h-3/12'>
      {children}
    </div>
  )
}
