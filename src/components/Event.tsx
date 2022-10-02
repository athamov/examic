import * as React from 'react'

type Props = {}

function Event({}: Props) {
  const [data,setData] = React.useState<any>();
  const [image,setImage] = React.useState('https://picsum.photos/200')
  React.useEffect(() => {
    const data = localStorage.getItem('file');
    if(data) setData(JSON.parse(data));
  },[])

  React.useEffect(()=>{
    if(data) {
      setImage(data.image);
      console.log(data)
    }
  })

  return (
    <div className="flex flex-col md:mt-20 md:mx-auto lg:flex-row-reverse lg:mt-[184px]">
      <div>
        <img src='https://picsum.photos/200' alt="data" className="w-full h-[375px] md:ml-[184px] md:w-[590px] lg:w-[500px] lg:h-[500px]" />
      </div>
      <div className="mt-2">
        <div>
          <p className="text-primary-1 ml-5 mr-auto text-bold text-3xl">Birthday {data && data.name}</p>
          <p className="text-neutral-2 ml-5 mr-auto text-lg">Hosted by <strong className=""> {data && data.host} </strong></p>
        </div>
      <div>
        <div>
          <div>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_14_914" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.579102H19.5V20.5H0V0.579102Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_14_914)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.521 2.0791C2.928 2.0791 1.5 3.4621 1.5 5.9731V15.0221C1.5 17.5881 2.928 19.0001 5.521 19.0001H13.979C16.572 19.0001 18 17.6141 18 15.0981V5.9731C18.004 4.7381 17.672 3.7781 17.013 3.1181C16.335 2.4381 15.29 2.0791 13.988 2.0791H5.521ZM13.979 20.5001H5.521C2.116 20.5001 0 18.4011 0 15.0221V5.9731C0 2.6451 2.116 0.579102 5.521 0.579102H13.988C15.697 0.579102 17.11 1.0911 18.075 2.0581C19.012 2.9991 19.505 4.3521 19.5 5.9751V15.0981C19.5 18.4301 17.384 20.5001 13.979 20.5001V20.5001Z" fill="#8456EC"/>
            </g>
          </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Event;