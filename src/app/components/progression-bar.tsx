export default function ProgressionBar(props:any) {
    const {progress, goalName} = props

  return (
    <div className="hover:cursor-pointer py-1">
      {goalName && <p className="text-primary-dark text-xs py-1"> {goalName}</p>}
        <div className='progress_bar bg-secondary  flex h-[0.5rem] rounded-full overflow-hidden'> 
            <div className={`progress_bar__progression bg-primary-dark flex rounded-full `} style={{width: `${progress}%`}} />
        </div>
    </div>
  )
}
