type CardProps = {
  children: any,
}

export default function Card({children, ...props}: CardProps) {
  return (
    <div className='border'>
      <div className='h-80 w-96 flex flex-col justify-between items-center bg-white rounded-lg shadow-xl '>
        {children}
      </div>
    </div>
  )
}
