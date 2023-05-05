const div = document.querySelector('.card__div');
const  link = document.querySelector('.card__link')
const svgOne = `
<svg id="one" width="688" height="272" viewBox="0 0 688 272" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_101_8)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M684 24C684 12.9543 675.046 4 664 4H155.5C144.73 4 136 12.7304 136 23.5C136 34.2696 127.27 43 116.5 43H24C12.9543 43 4 51.9543 4 63V248C4 259.046 12.9543 268 24 268H664C675.046 268 684 259.046 684 248V24Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_101_8" x="0" y="0" width="688" height="272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_8"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_8" result="shape"/>
</filter>
</defs>
</svg>`;
const svgTwo = `
<svg  id="two" width="680" height="264" viewBox="0 0 680 264" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_101_11)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M132 20C132 8.95431 140.954 0 152 0H660C671.046 0 680 8.9543 680 20V244C680 255.046 671.046 264 660 264H20C8.95431 264 0 255.046 0 244V60C0 48.9543 8.9543 40 20 40H112C123.046 40 132 31.0457 132 20Z" fill="white"/>
</g>
<defs>
<filter id="filter0_i_101_11" x="0" y="0" width="685" height="269" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="5" dy="5"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_101_11"/>
</filter>
</defs>
</svg>`;
div.innerHTML = svgOne;

link.addEventListener('click', () => {
  const currentSvg = div.querySelector('svg');
  
  if (currentSvg.getAttribute('id') === 'one') {
    div.innerHTML = svgTwo;
  } else {
    div.innerHTML = svgOne;
  }
});











