import * as React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Dropzone, { IDropzoneProps, ILayoutProps,defaultClassNames } from 'react-dropzone-uploader';

// I failed on uploading image
const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

      {files.length > 0 && submitButton}
    </div>
  )
}

type Props = {}

export default function Create({}: Props) {
  const [name,setName] = React.useState<string>("");
  const [host,setHost] = React.useState<string>("");
  const [start,setStart] = React.useState<string>("");
  const [end,setEnd] = React.useState<string>("");
  const [location,setLocation] = React.useState<string>("")
  const [image,setImage] = React.useState({}as any)

  const navigation = useNavigate();
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'https://httpbin.org/post' })

const handleUpload: IDropzoneProps['onSubmit'] = (files, allFiles) => {
  console.log(files.map(f => f.meta))
  allFiles.forEach(f => f.remove())
  const form = new FormData();
  // form.append('image',files)
  // const blob = new Blob([files],'image/jgp')
  setImage({...files})
}

  const handleDrop = (e:any) =>{
    const formData = new FormData();
    formData.append('File', e.target.files[0]);

    setImage(formData);
  }

  const handleSubmit =()=>{
    if(image
    && Object.keys(image).length === 0
    && Object.getPrototypeOf(image) === Object.prototype) {
      alert("first click to upload submit Button");
      return;
    }

    if(!name || !host || !location || !end || !start) {
      alert("Please fill all fields") 
      return;
    };

    const data = {
      name:name,
      host:host,
      location:location,
      start:start,
      end:end,
      image:image,
    }
    localStorage.setItem('file',JSON.stringify(data));

    navigation('/event');
  }

  return (
    <>
      <nav className="fixed h-24">
        <Link to="/" className="text-primary-3 pl-9">cancel</Link>
      </nav>
      <form className="flex flex-row w-full gap-4 justify-center mt-10 relative top-20">
        <div className="w-1/3">
          <div className="mb-6">
            <label htmlFor="EventName" className="block mb-2 text-sm font-medium text-primary-1 dark:text-primary-4">Event Name</label>
            <input type="email" id="name" className="bg-primary-50 border border-primary-4 text-primary-1 text-sm rounded-lg focus:ring-primary-1 focus:border-primary-1 block w-full p-2.5 dark:bg-primary-1 dark:border-primary-2 dark:placeholder-primary-3 dark:text-white dark:focus:ring-primary-1 dark:focus:border-primary-1" placeholder="Event Name" required onChange={e => setName(e.target.value)} value={name} />
          </div>
          <div className="mb-6">
            <label htmlFor="EventHost" className="block mb-2 text-sm font-medium text-primary-1 dark:text-primary-4">Event Host</label>
            <input type="text" id="host" className="bg-primary-50 border border-primary-4 text-primary-1 text-sm rounded-lg focus:ring-primary-1 focus:border-primary-1 block w-full p-2.5 dark:bg-primary-1 dark:border-primary-2 dark:placeholder-primary-3 dark:text-white dark:focus:ring-primary-1 dark:focus:border-primary-1"  placeholder="Event Host" required onChange={e => setHost(e.target.value)} value={host} />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
                <input type="datetime-local" name="start" id="start" className="block py-2.5 px-0 w-full text-sm text-primary-1 bg-transparent border-0 border-b-2 border-primary-4 appearance-none dark:text-white dark:border-primary-2 dark:focus:border-primary-1 focus:outline-none focus:ring-0 focus:border-primary-4 peer" placeholder=" " required  onChange={e => setStart(e.target.value)} value={start}/>
                <label htmlFor="start" className="peer-focus:font-medium absolute text-sm text-primary-3 dark:text-primary-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-4 peer-focus:dark:text-primary-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start date</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="datetime-local" name="end" id="end" className="block py-2.5 px-0 w-full text-sm text-primary-1 bg-transparent border-0 border-b-2 border-primary-4 appearance-none dark:text-white dark:border-primary-2 dark:focus:border-primary-1 focus:outline-none focus:ring-0 focus:border-primary-4 peer" placeholder=" " required  onChange={e => setEnd(e.target.value)} value={end}/>
                <label htmlFor="end" className="peer-focus:font-medium absolute text-sm text-primary-3 dark:text-primary-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-4 peer-focus:dark:text-primary-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-primary-1 dark:text-primary-4">Event Location</label>
            <input type="text" id="location" className="bg-primary-50 border border-primary-4 text-primary-1 text-sm rounded-lg focus:ring-primary-1 focus:border-primary-1 block w-full p-2.5 dark:bg-primary-1 dark:border-primary-2 dark:placeholder-primary-3 dark:text-neutral-1 dark:focus:ring-primary-1 dark:focus:border-primary-1"  placeholder="Location" required onChange={e => setLocation(e.target.value)} value={location}/>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/3">
          {/* <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-primary-50 rounded-lg border-2 border-primary-4 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-primary-1 hover:bg-primary-100 dark:border-primary-2 dark:hover:border-primary-3 dark:hover:bg-primary-2">
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg aria-hidden="true" className="mb-3 w-10 h-10 text-primary-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-primary-3 dark:text-primary-3"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-primary-3 dark:text-primary-3">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" accept="image/*" className="hidden" onChange={handleDrop} />

          </label> */}
              <Dropzone
                getUploadParams={getUploadParams}
                LayoutComponent={Layout}
                onSubmit={handleUpload}
                classNames={{ inputLabelWithFiles: defaultClassNames.dropzoneActive }}
                inputContent="Drop Files (Custom Layout)"
              />
      </div> 
      </form>
      <button type="submit" className="relative top-48 left-3/4 text-white bg-primary-1 hover:bg-primary-2 focus:ring-4 focus:outline-none focus:ring-primary-3 font-medium rounded-lg text-sm w-20 mx-auto sm:w-auto px-5 py-2.5 text-center dark:bg-primary-4 dark:hover:bg-primary-1 dark:focus:ring-primary-2" onClick={handleSubmit}>Submit</button>
    </>
  )
}