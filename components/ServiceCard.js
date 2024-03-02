import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="w-full px-4 py-2 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/3 dark:bg-white h-100">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-400 rounded-md">
        {icon}
      </div>
    </div>
    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-black">
      {title}
    </h3>
    <p className="py-4 text-black text-md">
      {description}
    </p>
  </div>
);

const ServiceSection = () => (
  <div className="flex items-stretch justify-center gap-8 text-center flex-wrap sm:flex  mt-[-8rem]">
    <ServiceCard
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="32" viewBox="0 0 512 512" width="32"><g><path d="m256 512c-1.629 0-3.258-.199-4.851-.597-.917-.229-1.814-.523-2.687-.877-62.949-25.203-116.312-68.211-154.329-124.382-38.03-56.193-58.133-121.761-58.133-189.615v-136.529c0-8.127 4.918-15.447 12.443-18.517 4.151-1.694 102.857-41.483 207.557-41.483s203.406 39.789 207.557 41.483c7.525 3.07 12.443 10.39 12.443 18.517v136.529c0 67.83-20.108 133.393-58.151 189.603-38.03 56.191-91.398 99.208-154.33 124.401-.866.352-1.758.643-2.668.87-1.593.398-3.222.597-4.851.597zm-180-438.114v122.643c0 119.981 70.382 226.589 180 273.817 109.618-47.227 180-153.836 180-273.817v-122.644c-28.901-10.239-103.895-33.885-180-33.885s-151.094 23.644-180 33.886z"></path><path d="m236 312c-5.118 0-10.237-1.953-14.143-5.858l-60-60c-7.811-7.811-7.811-20.474 0-28.284s20.475-7.811 28.285 0l45.858 45.858 105.857-105.858c7.811-7.811 20.475-7.811 28.285 0s7.811 20.474 0 28.284l-120 120c-3.905 3.905-9.024 5.858-14.142 5.858z"></path></g></svg>
      }
      title="Prevent illegal downloads"
      description="Google & Apple DRM Encryption , Dynamic Watermark & User Analytics"
    />
    <ServiceCard
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" fill="#5f50e4"><path d="m467 1h-422c-24.813 0-45 20.187-45 45v420c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-420c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v75h-452v-75c0-8.271 6.729-15 15-15zm422 450h-422c-8.271 0-15-6.729-15-15v-315h452v315c0 8.271-6.729 15-15 15z"></path><path d="m306.909 197.213c-7.614-3.263-16.433.264-19.696 7.878l-90 210c-3.264 7.614.264 16.433 7.878 19.696 7.617 3.264 16.434-.266 19.696-7.878l90-210c3.264-7.615-.264-16.433-7.878-19.696z"></path><path d="m177.713 246.629c-5.176-6.469-14.617-7.517-21.083-2.342l-75 60c-7.499 5.997-7.504 17.424 0 23.426l75 60c6.469 5.176 15.91 4.126 21.083-2.342 5.175-6.469 4.127-15.909-2.343-21.083l-60.358-48.288 60.358-48.287c6.47-5.175 7.518-14.614 2.343-21.084z " ></path><path d="m430.37 304.287-75-60c-6.469-5.176-15.909-4.127-21.083 2.342-5.175 6.469-4.127 15.909 2.343 21.083l60.358 48.288-60.358 48.287c-6.47 5.175-7.518 14.614-2.343 21.083 5.182 6.476 14.623 7.512 21.083 2.342l75-60c7.499-5.997 7.504-17.423 0-23.425z" ></path><circle cx="76" cy="76" r="15"></circle><circle cx="136" cy="76" r="15"></circle><circle cx="196" cy="76" r="15"></circle><path d="m346 91h90c8.284 0 15-6.716 15-15s-6.716-15-15-15h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15z"></path></svg>
      }
      title="APIs, SDKs"
      description="Plugins for Web, Native, Flutter, React, Wordpress & Moodle. Highly scalable solution used by platforms with 10 Million Subscribers."
    />
    <ServiceCard
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none"><path d="M14.6324 0C8.53554 0 3.65809 4.87745 3.65809 10.9743V15.8517C1.58517 15.8517 0 17.4369 0 19.5098V35.3615C0 37.4344 1.58517 39.0196 3.65809 39.0196H25.6066C27.6795 39.0196 29.2647 37.4344 29.2647 35.3615V19.5098C29.2647 17.4369 27.6795 15.8517 25.6066 15.8517V10.9743C25.6066 4.87745 20.7292 0 14.6324 0ZM26.826 19.5098V35.3615C26.826 36.0931 26.3382 36.5809 25.6066 36.5809H3.65809C2.92647 36.5809 2.43873 36.0931 2.43873 35.3615V19.5098C2.43873 18.7782 2.92647 18.2904 3.65809 18.2904H4.87745H24.3873H25.6066C26.3382 18.2904 26.826 18.7782 26.826 19.5098ZM6.09681 15.8517V10.9743C6.09681 6.21875 9.87684 2.43873 14.6324 2.43873C19.3879 2.43873 23.1679 6.21875 23.1679 10.9743V15.8517H6.09681Z" fill="#6962DD"></path><path d="M14.6268 21.9492C12.5539 21.9492 10.9688 23.5344 10.9688 25.6073C10.9688 27.1925 11.9442 28.5338 13.4075 29.0215V31.7041C13.4075 32.4357 13.8952 32.9235 14.6268 32.9235C15.3585 32.9235 15.8462 32.4357 15.8462 31.7041V29.0215C17.3094 28.5338 18.2849 27.1925 18.2849 25.6073C18.2849 23.5344 16.6998 21.9492 14.6268 21.9492ZM14.6268 26.8267C13.8952 26.8267 13.4075 26.3389 13.4075 25.6073C13.4075 24.8757 13.8952 24.3879 14.6268 24.3879C15.3585 24.3879 15.8462 24.8757 15.8462 25.6073C15.8462 26.3389 15.3585 26.8267 14.6268 26.8267Z" fill="#6962DD"></path></svg>
      }
      title="100% Download Prevention on all devices/browsers"
      description="100% Screen Capture Block in Mobile Apps & iOS Browser. 70% Screen Capture Block in Chrome/Firefox; Rest 30% cases, no one else in the world can block."
    />
    {/* Add another block below */}
    <ServiceCard
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="#5f50e4"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.35714 0C2.4 0 0 2.58462 0 5.76923V44.2308C0 47.4154 2.4 50 5.35714 50H44.6429C47.6 50 50 47.4154 50 44.2308V5.76923C50 2.58462 47.6 0 44.6429 0H5.35714ZM5.35714 3.84615H44.6429C45.6286 3.84615 46.4286 4.70769 46.4286 5.76923V44.2308C46.4286 45.2923 45.6286 46.1538 44.6429 46.1538H5.35714C4.37143 46.1538 3.57143 45.2923 3.57143 44.2308V5.76923C3.57143 4.70769 4.37143 3.84615 5.35714 3.84615ZM17.7768 9.61538C17.4786 9.63077 17.1821 9.725 16.9196 9.9C16.3929 10.2519 16.0714 10.8712 16.0714 11.5385V26.9231C16.0714 27.5904 16.3929 28.2096 16.9196 28.5615C17.4446 28.9115 18.1036 28.9404 18.6554 28.6442L32.9411 20.9519C33.5464 20.625 33.9286 19.9596 33.9286 19.2308C33.9286 18.5019 33.5464 17.8365 32.9411 17.5096L18.6554 9.81731C18.3804 9.66923 18.0768 9.6 17.7768 9.61538ZM19.6429 14.6519L28.15 19.2308L19.6429 23.8096V14.6519ZM12.5 30.7692C11.5143 30.7692 10.7143 31.6308 10.7143 32.6923V34.6154H8.92857C7.94286 34.6154 7.14286 35.4769 7.14286 36.5385C7.14286 37.6 7.94286 38.4615 8.92857 38.4615H10.7143V40.3846C10.7143 41.4462 11.5143 42.3077 12.5 42.3077C13.4857 42.3077 14.2857 41.4462 14.2857 40.3846V38.4615H41.0714C42.0571 38.4615 42.8571 37.6 42.8571 36.5385C42.8571 35.4769 42.0571 34.6154 41.0714 34.6154H14.2857V32.6923C14.2857 31.6308 13.4857 30.7692 12.5 30.7692Z"></path></svg>
      }
      title="Easiest & quickest"
      description="Fast DRM + Video Security integrations in industry, we live by that"
    />
  </div>
);

export default ServiceSection;
