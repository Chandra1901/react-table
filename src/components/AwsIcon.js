const AwsIcon = (props) =>  {
    const { height, width } = props;
    return (<svg width={width} height={height} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1650_45192)">
    <path d="M19.2728 27.6874C19.2625 28.0872 19.3118 28.4862 19.4191 28.8715C19.5373 29.2009 19.6797 29.5211 19.845 29.8296C19.9042 29.9209 19.9364 30.0269 19.9381 30.1357C19.9381 30.2687 19.8583 30.4018 19.6853 30.5347L18.8472 31.0935C18.7461 31.1663 18.6259 31.208 18.5014 31.2132C18.3499 31.2028 18.2076 31.1364 18.1023 31.027C17.923 30.8344 17.7626 30.625 17.6232 30.4017C17.4902 30.1756 17.3571 29.9226 17.2108 29.6168C16.1731 30.8405 14.8694 31.4524 13.2995 31.4524C12.1816 31.4524 11.2907 31.133 10.6388 30.4942C9.98692 29.8554 9.6543 29.0045 9.6543 27.9402C9.6543 26.8094 10.0534 25.8915 10.8649 25.1997C11.6765 24.5079 12.754 24.162 14.1243 24.162C14.5962 24.1658 15.0673 24.2014 15.5345 24.2684C16.0267 24.335 16.5323 24.4413 17.0644 24.5611V23.5899C17.0644 22.5785 16.8514 21.8738 16.4391 21.4613C16.0132 21.049 15.295 20.8494 14.2706 20.8494C13.7865 20.8494 13.3041 20.9074 12.8338 21.0223C12.3447 21.1388 11.8646 21.29 11.397 21.4747C11.2457 21.5423 11.0901 21.6001 10.9313 21.6476C10.8624 21.6703 10.7908 21.6837 10.7184 21.6875C10.5322 21.6875 10.439 21.5545 10.439 21.2751V20.6232C10.439 20.4103 10.4656 20.2506 10.5322 20.1576C10.6326 20.0364 10.7603 19.9406 10.9048 19.8782C11.4384 19.6142 12.0009 19.4133 12.5811 19.2796C13.259 19.1057 13.9566 19.0207 14.6564 19.0268C16.2399 19.0268 17.397 19.386 18.142 20.1044C18.8737 20.8228 19.2462 21.9137 19.2462 23.3771V27.6874H19.2728ZM13.8716 29.7096C14.3383 29.7044 14.8011 29.6236 15.2418 29.4701C15.7301 29.3012 16.1658 29.0076 16.5056 28.6184C16.7201 28.3732 16.8749 28.0817 16.958 27.7667C17.0494 27.3877 17.094 26.999 17.091 26.6093V26.0511C16.6876 25.9529 16.2791 25.8774 15.8672 25.8249C15.4524 25.7724 15.0347 25.7458 14.6165 25.7455C13.7252 25.7455 13.0733 25.9184 12.6343 26.2778C12.1953 26.6372 11.9824 27.1425 11.9824 27.8077C11.9824 28.4329 12.1421 28.8985 12.4747 29.2179C12.7941 29.5505 13.2596 29.7101 13.8716 29.7101V29.7096ZM24.5543 31.1464C24.3149 31.1464 24.1552 31.1065 24.0488 31.0134C23.9423 30.9335 23.8492 30.7472 23.7694 30.4945L20.6429 20.2109C20.5823 20.0387 20.5421 19.86 20.5232 19.6785C20.5232 19.4656 20.6297 19.3459 20.8426 19.3459H22.1463C22.3991 19.3459 22.5722 19.3858 22.6652 19.4789C22.7717 19.5588 22.8514 19.7451 22.9314 19.9978L25.1663 28.8047L27.2416 19.998C27.3082 19.7318 27.3879 19.559 27.4944 19.4791C27.6009 19.3993 27.7871 19.3461 28.0267 19.3461H29.0914C29.3442 19.3461 29.5172 19.3861 29.6237 19.4791C29.7302 19.559 29.8232 19.7453 29.8765 19.998L31.9785 28.9114L34.2792 19.998C34.3591 19.7318 34.4521 19.559 34.5454 19.4791C34.6518 19.3993 34.8248 19.3461 35.0642 19.3461H36.3015C36.5144 19.3461 36.6341 19.4526 36.6341 19.6788C36.631 19.7503 36.6221 19.8215 36.6075 19.8917C36.5867 20.0052 36.5555 20.1165 36.5144 20.2243L33.3082 30.508C33.2284 30.774 33.1353 30.947 33.0288 31.0268C32.8784 31.1231 32.7015 31.1696 32.5232 31.1598H31.3791C31.1263 31.1598 30.9532 31.1199 30.8467 31.0268C30.7403 30.9337 30.6472 30.7607 30.594 30.4945L28.5321 21.9137L26.4832 30.4812C26.4167 30.7474 26.3369 30.9202 26.2305 31.0135C26.124 31.1068 25.9378 31.1465 25.6981 31.1465L24.5543 31.1464ZM41.6494 31.5055C40.9595 31.5063 40.2718 31.4259 39.6007 31.2661C38.9355 31.1064 38.4166 30.9334 38.0708 30.7338C37.8579 30.6141 37.7116 30.481 37.6584 30.3611C37.6066 30.2437 37.5794 30.1169 37.5785 29.9885V29.3105C37.5785 29.0311 37.685 28.8981 37.8846 28.8981C37.966 28.8984 38.0469 28.9118 38.124 28.938C38.2039 28.9646 38.3236 29.0179 38.4566 29.071C38.9266 29.2777 39.4171 29.4338 39.9201 29.5366C40.4411 29.6424 40.9715 29.6959 41.5032 29.6963C42.3413 29.6963 42.9932 29.55 43.4456 29.2573C43.6623 29.1266 43.8404 28.9407 43.962 28.7188C44.0836 28.4968 44.1441 28.2465 44.1376 27.9935C44.1423 27.8223 44.1129 27.6518 44.0513 27.4919C43.9896 27.3321 43.8969 27.186 43.7784 27.0623C43.5389 26.8095 43.0864 26.5832 42.4347 26.3702L40.5053 25.7717C39.5341 25.4658 38.8157 25.0134 38.3768 24.4147C37.9485 23.8625 37.7146 23.1844 37.7116 22.4856C37.7008 21.9705 37.8246 21.4615 38.0708 21.0089C38.3084 20.5809 38.6352 20.2089 39.029 19.918C39.4436 19.6041 39.9127 19.3695 40.4125 19.226C40.9571 19.0692 41.5218 18.9932 42.0884 19.0002C42.3864 18.998 42.6842 19.0158 42.9798 19.0534C43.2858 19.0934 43.5653 19.1466 43.8445 19.1997C44.1106 19.2663 44.3633 19.3328 44.6028 19.4127C44.7969 19.4727 44.9842 19.553 45.1616 19.6521C45.3183 19.7311 45.4548 19.8449 45.5607 19.9848C45.6472 20.1142 45.6892 20.2683 45.6804 20.4238V21.049C45.6804 21.3284 45.5739 21.4749 45.3744 21.4749C45.2679 21.4749 45.095 21.4217 44.8688 21.3152C44.1105 20.9693 43.2591 20.7963 42.3145 20.7963C41.5562 20.7963 40.9576 20.916 40.5452 21.169C40.1328 21.4219 39.9199 21.8077 39.9199 22.353C39.9163 22.5296 39.9499 22.7051 40.0187 22.8678C40.0875 23.0306 40.1898 23.177 40.319 23.2975C40.5852 23.5503 41.0773 23.8031 41.7824 24.0293L43.6716 24.6276C44.6297 24.9336 45.3212 25.3593 45.7336 25.9047C46.1397 26.4399 46.3551 27.0955 46.3456 27.7672C46.3524 28.3016 46.234 28.8301 45.9997 29.3104C45.7636 29.7657 45.4324 30.165 45.0285 30.4811C44.5893 30.823 44.0877 31.0761 43.5518 31.2264C42.9356 31.4159 42.294 31.5101 41.6493 31.5058L41.6494 31.5055Z" fill="#252F3E"/>
    <path d="M44.1637 37.9709C39.7869 41.2037 33.4278 42.9198 27.96 42.9198C20.2971 42.9201 13.3925 40.0864 8.17769 35.377C7.76529 35.0044 8.13777 34.499 8.63001 34.7914C14.2707 38.0641 21.2285 40.0462 28.4257 40.0462C33.2815 40.0462 38.6162 39.0348 43.5253 36.9597C44.257 36.6271 44.8822 37.4388 44.1641 37.9711L44.1637 37.9709Z" fill="#FF9900"/>
    <path d="M45.9864 35.8956C45.4276 35.1772 42.2879 35.5497 40.8645 35.7227C40.4386 35.7759 40.3722 35.4033 40.758 35.124C43.2591 33.368 47.3699 33.8734 47.8488 34.4588C48.3279 35.0575 47.7158 39.1683 45.3743 41.1373C45.0152 41.4433 44.6692 41.2836 44.8289 40.8845C45.3611 39.5674 46.5451 36.6007 45.9864 35.8956Z" fill="#FF9900"/>
    </g>
    <defs>
    <clipPath id="clip0_1650_45192">
    <rect width="40" height="23.9198" fill="white" transform="translate(8 19)"/>
    </clipPath>
    </defs>
    </svg>)
}

export default AwsIcon