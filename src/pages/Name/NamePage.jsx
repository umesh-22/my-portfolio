import './name.css'
export const NamePage = () => {
  return (
    <div className="text-5xl flex justify-center items-center h-screen "> 
      <svg viewBox="0 0 1310 600" width="100%" height="100%">
        <text className='italianno-regular '
          x="50%"
          y="50%"
          fill="transparent"  
          textAnchor="middle"
          dominantBaseline="middle" 
          fontSize="100"
        >
          Umesh Omprakash
        </text>
      </svg>
    </div>
  );
};
