import * as React from 'react';
import { Link } from 'react-router-dom'
// import * as Card from './image/image.jpg';

type Props = {}
// there are some properties is not correct :(
function Home({}: Props) { 
  return (          
    <div className="relative m-auto p-auto h-full bg-secondary-3">
      <div className="relative top-16 w-[321px] m-auto text-center md:w-[880px] lg:w-full">
        <p className="relative w-[280px] text-primary-1 mx-19 text-4xl font-bold md:w-[573.91px] md:h-[192px] md:text-6xl md:mx-auto lg:absolute lg:left-[778px] lg:top-[306px] ">
          Imagine if <br />
          <strong className="Gradient m-auto"> SnapChat </strong> <br/>
          had events.
        </p>
        <p className="relative top-4 text-neutral-1 font-light text-base md:w-[521px] mx-auto md:text-2xl lg:absolute lg:left-[831px] lg:top-[514px]">
          Easily host and share events with your friends across any social media.
        </p>
        <img
          className="relative mt-11 mx-auto md:mt-23 h-[292px] md:h-[548.27px] lg:w-[440px] lg:h-[776px] lg:absolute lg:left-[170px] lg:top-[100px]"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T053415Z&X-Amz-Expires=86400&X-Amz-Signature=015bad9eeb5b6f75af81ce2f51427b0f806735696bc88bd1065769383a13c2c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt="" 
          />
        <Link to="create" className="text-center text-white text-lg lg:w-80 btn-gradient py-4 px-21 top-12 mt-34 rounded-lg md:px-[70px] lg:absolute lg:left-[950px] lg:top-[636px]">
          🎉 Create my event
        </Link>
      </div>
    </div>
  )
}
export default Home;