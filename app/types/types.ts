export interface shortedUrlsProps {
  originalUrl: string;
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
