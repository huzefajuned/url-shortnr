export interface shortedUrlsProps {
  shortUrl: string;
}

export interface SingleUrlProps {
  shortedUrls: shortedUrlsProps[]; 
}

export interface CustomButtonProps {
  btnTitle: string; 
  customStyle?: string; 
  onClick: () => void; 
}


export interface CustomLoaderProps {
  // auto will take parents div dimentions
  // full  is always 100vh and 100vw
  type: "auto" | "full";
}


export interface UrlDetails {
  shortUrl: string;
}


export interface ShareModelProps {
  title: string;
  closeMe: () => void;
}