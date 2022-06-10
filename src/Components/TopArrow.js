export default function TopArrow({isGreen}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="13" height="8" viewBox="0 0 13 8">
  <defs>
    <clipPath id="clip-Artboard_16">
      <rect width="13" height="8"/>
    </clipPath>
  </defs>
  <g id="Artboard_16" data-name="Artboard – 16" clipPath="url(#clip-Artboard_16)">
    <rect width="13" height="8" fill="#fff" fillOpacity='0'/>
   { isGreen ?
        <path id="Path_18" data-name="Path 18" d="M1524.306,1310.517l5.18-5.18,5.425,5.18Z" transform="translate(-1523.108 -1303.927)" fill="#0e8d5a"/>:
        <path id="Path_18" data-name="Path 18" d="M1524.306,1310.517l5.18-5.18,5.425,5.18Z" transform="translate(1536.108 1311.927) rotate(-180)" fill="#E35B5B"/>
    }
  </g>
</svg>



    )
}