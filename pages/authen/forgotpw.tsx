import React, { useState } from 'react';
import Link from 'next/link';
import '../../app/globals.css';
import router from 'next/router';


const ForgotPW = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [showPasswordFields, setShowPasswordFields] = useState(false);

    const handleEmailSubmit = async () => {
        try {
            const response = await fetch('/api/resetpassword/checkemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            setMessage(data.message);
            setEmailSubmitted(true); 
            setShowPasswordFields(true); 
        } catch (error: any) { 
            setMessage('Error checking email: ' + error.message);
        }
    };

    const handlePasswordSubmit = async () => {
        try {
            const response = await fetch('/api/resetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, newPassword, confirmPassword })
            });
            const data = await response.json();
            setMessage(data.message);
            router.push('/authen/login');
        } catch (error: any) { 
            setMessage('Error resetting password: ' + error.message);
        }
    };


    return (
        <div>
            <div className='mx-auto w-1/6'>
                <div className='mt-20'>
                    <div>
                        <div className='m-auto w-1/2'>
                        <Link href={`${process.env.NEXT_PUBLIC_BASEPATH}/home/`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="64" viewBox="0 0 128 64" fill="none">
                        <g>
                        <path d="M37.5518 4.89169C37.5337 4.85566 37.4068 4.65746 37.1713 4.2971C36.9357 3.93674 36.537 3.54935 35.9752 3.13494C35.4134 2.72052 34.6614 2.35115 33.719 2.02683C32.7766 1.68449 31.5987 1.51332 30.1852 1.51332C27.938 1.51332 25.718 1.95476 23.5253 2.83764C21.3506 3.7025 19.2757 4.89169 17.3004 6.40521C15.325 7.91872 13.4947 9.69347 11.8094 11.7295C10.1421 13.7475 8.69231 15.9097 7.46 18.216C6.2277 20.5043 5.26723 22.8737 4.57858 25.3241C3.88994 27.7566 3.54562 30.144 3.54562 32.4863C3.54562 34.1259 3.79933 35.6394 4.30675 37.0268C4.8323 38.4142 5.5753 39.6034 6.53577 40.5944C7.51437 41.6034 8.70137 42.3872 10.0968 42.9457C11.4922 43.5223 13.0779 43.8106 14.8539 43.8106C16.4123 43.8106 17.9618 43.5854 19.5022 43.1349C21.0607 42.6845 22.5739 42.0539 24.0418 41.243C25.5097 40.4322 26.9141 39.4683 28.2552 38.3512C29.6143 37.216 30.8828 35.9908 32.0608 34.6755C33.2388 33.3422 34.3079 31.9368 35.2684 30.4593C36.2289 28.9638 37.0535 27.4413 37.7422 25.8917C38.4307 24.3421 38.9563 22.7836 39.3188 21.216C39.6993 19.6485 39.8896 18.1259 39.8896 16.6485C39.8896 15.0989 39.6812 13.7295 39.2644 12.5403C38.8476 11.3512 38.2676 10.3602 37.5247 9.56737C36.7817 8.75656 35.8937 8.15295 34.8607 7.75656C33.8459 7.34214 32.7313 7.13494 31.5172 7.13494C30.3392 7.13494 29.1613 7.35115 27.9833 7.78359C26.8054 8.198 25.6728 8.79262 24.5855 9.56737C23.5162 10.3241 22.5104 11.2251 21.5681 12.2701C20.6439 13.3151 19.8374 14.4593 19.1488 15.7025C18.4602 16.9277 17.9165 18.2431 17.5178 19.6485C17.1373 21.0358 16.9469 22.4502 16.9469 23.8917C16.9469 24.9908 17.0829 26.0088 17.3547 26.9457C17.6266 27.8647 17.989 28.6845 18.4421 29.4052C18.8951 30.1259 19.4115 30.7295 19.9915 31.2161C20.5895 31.6845 21.2056 32.0088 21.8399 32.189L21.5953 33.3241C20.6892 33.198 19.765 32.9007 18.8226 32.4322C17.8984 31.9637 17.0557 31.3242 16.2945 30.5133C15.5515 29.6845 14.9354 28.6754 14.4461 27.4862C13.9749 26.2791 13.7393 24.8917 13.7393 23.3242C13.7393 21.8466 13.9568 20.3872 14.3917 18.9457C14.8267 17.4863 15.4337 16.1079 16.213 14.8106C17.0104 13.4953 17.9528 12.2881 19.0401 11.189C20.1274 10.0718 21.3235 9.11695 22.6283 8.32413C23.9512 7.51332 25.3556 6.88268 26.8416 6.43223C28.3458 5.96376 29.8862 5.72953 31.4628 5.72953C32.967 5.72953 34.3261 5.99079 35.5403 6.51332C36.7544 7.01782 37.7874 7.74755 38.6392 8.70251C39.4909 9.63941 40.1433 10.7836 40.5963 12.1349C41.0676 13.4863 41.3031 14.9998 41.3031 16.6754C41.3031 18.2611 41.1037 19.8917 40.7051 21.5674C40.3245 23.2251 39.7718 24.8737 39.0469 26.5133C38.3402 28.1349 37.4794 29.7295 36.4645 31.2971C35.4496 32.8467 34.3261 34.3151 33.0938 35.7025C31.8614 37.0899 30.5295 38.3602 29.0979 39.5133C27.6844 40.6845 26.1983 41.6935 24.6398 42.5403C23.0813 43.3872 21.4775 44.0449 19.8284 44.5134C18.1793 44.9818 16.5211 45.216 14.8539 45.216C12.9148 45.216 11.0844 44.8917 9.36287 44.243C7.64122 43.6124 6.13709 42.6755 4.85041 41.4322C3.58187 40.189 2.57609 38.6664 1.83308 36.8647C1.09007 35.0448 0.718567 32.9638 0.718567 30.6214C0.718567 28.0088 1.05383 25.4413 1.72435 22.9187C2.41299 20.3962 3.37346 18.0088 4.60577 15.7566C5.85619 13.4863 7.35127 11.3962 9.091 9.48633C10.8308 7.57638 12.7607 5.92773 14.881 4.54034C17.0013 3.15295 19.2847 2.07187 21.7312 1.2971C24.1777 0.504306 26.7239 0.10791 29.3697 0.10791C30.602 0.10791 31.6893 0.207009 32.6317 0.405207C33.574 0.603406 34.3895 0.855658 35.0782 1.16196C35.785 1.45025 36.3739 1.77457 36.8451 2.13494C37.3163 2.47728 37.6968 2.81061 37.9868 3.13494C38.2767 3.44125 38.4851 3.7025 38.612 3.91872C38.7388 4.13494 38.8113 4.26106 38.8295 4.2971L37.5518 4.89169ZM64.2446 37.7025C64.589 38.0808 64.9786 38.6034 65.4135 39.27C65.8485 39.9547 66.1837 40.8377 66.4193 41.9188C68.304 40.9277 70.0981 39.9728 71.8016 39.0538C73.5232 38.135 75.1451 37.171 76.6674 36.162C78.2077 35.1529 79.6485 34.0629 80.9895 32.8917C82.3487 31.7025 83.6082 30.3512 84.768 28.8377L85.7737 29.5944C84.6864 31.0538 83.5085 32.3692 82.24 33.5403C80.9895 34.6935 79.5941 35.8016 78.0537 36.8647C76.5133 37.9278 74.8099 38.9818 72.9432 40.0268C71.0767 41.0719 68.9746 42.207 66.6367 43.4323C66.6367 43.5764 66.6367 43.7115 66.6367 43.8376C66.6549 43.9818 66.664 44.1259 66.664 44.2701C66.664 45.5674 66.4284 46.9457 65.9572 48.4053C65.486 49.8827 64.8427 51.3332 64.0271 52.7566C63.2298 54.198 62.3056 55.5764 61.2546 56.8916C60.2034 58.207 59.098 59.3601 57.9381 60.3511C56.7783 61.3601 55.6004 62.162 54.4044 62.7566C53.2083 63.3512 52.0757 63.6485 51.0064 63.6485C50.4447 63.6485 49.9282 63.5494 49.4569 63.3512C48.9858 63.1529 48.578 62.8737 48.2337 62.5133C47.8895 62.171 47.6176 61.7656 47.4182 61.2971C47.2371 60.8467 47.1464 60.3511 47.1464 59.8106C47.1464 58.8917 47.3639 57.9458 47.7988 56.9728C48.2518 55.9998 48.8771 55.0088 49.6744 53.9998C50.4718 53.0088 51.4051 52.0178 52.4743 51.0268C53.5617 50.0359 54.7396 49.0719 56.0081 48.1349C57.2767 47.2161 58.6087 46.3241 60.004 45.4593C61.4176 44.5944 62.8493 43.7926 64.2991 43.0538C64.2991 42.0808 64.1631 41.18 63.8913 40.3511C63.6375 39.5223 63.3205 38.8647 62.9398 38.3782C61.1639 39.207 59.3698 39.6214 57.5576 39.6214C56.3616 39.6214 55.392 39.4142 54.649 38.9998C53.9059 38.5854 53.5345 38.0088 53.5345 37.2701C53.5345 36.4592 53.9059 35.8197 54.649 35.3512C55.4101 34.8827 56.3887 34.6485 57.5848 34.6485C58.4365 34.6485 59.3154 34.8016 60.2215 35.108C61.1458 35.3962 61.9885 35.8106 62.7496 36.3511C64.1812 35.5404 65.486 34.4412 66.664 33.0539C67.86 31.6485 69.047 30.0539 70.2249 28.2701C71.4029 26.4683 72.6262 24.5403 73.8947 22.4863C75.1814 20.4142 76.6221 18.3151 78.2169 16.189C79.8297 14.0449 81.6691 11.9278 83.735 9.83764C85.8009 7.72953 88.2022 5.74755 90.9388 3.89169C89.5253 4.198 88.1387 4.42322 86.7795 4.56737C85.4204 4.69349 84.0793 4.75656 82.7564 4.75656C80.7449 4.75656 78.7696 4.63044 76.8305 4.37818C74.9096 4.12593 73.0339 3.85566 71.2035 3.56737C69.3732 3.26106 67.6063 2.98179 65.9028 2.72953C64.2175 2.47728 62.6046 2.35115 61.0642 2.35115C59.0346 2.35115 57.2314 2.68449 55.6547 3.35115C54.0782 4.01782 52.7462 4.88268 51.6588 5.94575C50.5715 6.99079 49.7379 8.17098 49.158 9.48633C48.5962 10.8016 48.3153 12.1079 48.3153 13.4052C48.3153 14.8106 48.5509 16.0718 49.022 17.189C49.5114 18.2881 50.1728 19.2251 51.0064 19.9998C51.8582 20.7566 52.8639 21.3422 54.0237 21.7565C55.2017 22.153 56.4793 22.3512 57.8566 22.3512C59.252 22.3512 60.5206 22.216 61.6623 21.9457C62.8039 21.6575 63.7916 21.3512 64.6253 21.0268C65.4589 20.6845 66.1113 20.3692 66.5825 20.0809C67.0717 19.7746 67.3436 19.5944 67.3979 19.5404L68.2135 20.7025C67.5429 21.1529 66.7999 21.5854 65.9843 21.9998C65.1689 22.3962 64.2899 22.7566 63.3476 23.0809C62.4053 23.3872 61.3995 23.6304 60.3302 23.8106C59.2792 23.9908 58.1738 24.0809 57.014 24.0809C55.1111 24.0809 53.4166 23.8106 51.9307 23.27C50.4628 22.7295 49.2214 21.9998 48.2066 21.0809C47.2098 20.144 46.4487 19.0629 45.9232 17.8376C45.4157 16.5944 45.1621 15.27 45.1621 13.8646C45.1621 11.9007 45.5517 10.1169 46.3309 8.51332C47.1283 6.90971 48.2428 5.54034 49.6744 4.40521C51.1061 3.27007 52.8186 2.3962 54.8121 1.78359C56.8055 1.17098 58.9983 0.864667 61.3904 0.864667C62.8764 0.864667 64.453 0.99079 66.1203 1.24305C67.8057 1.4953 69.5544 1.78359 71.3667 2.10791C73.1789 2.41422 75.0454 2.69349 76.9664 2.94575C78.9055 3.198 80.8626 3.32413 82.8379 3.32413C84.7227 3.32413 86.6255 3.17998 88.5467 2.89169C90.4856 2.60341 92.515 2.0899 94.6357 1.35115L95.2611 2.5944C92.9412 4.21602 90.9118 5.85566 89.1721 7.51332C87.45 9.171 85.8734 10.8737 84.4418 12.6215C83.0283 14.3692 81.7054 16.189 80.473 18.0808C79.2407 19.9547 77.9722 21.9368 76.6674 24.0268C74.5108 27.5043 72.3996 30.3692 70.3337 32.6215C68.2859 34.8557 66.2563 36.5493 64.2446 37.7025ZM64.1359 44.7296C61.9612 45.8646 59.9225 47.0899 58.0197 48.4053C56.135 49.7385 54.4859 51.0719 53.0724 52.4053C51.6769 53.7385 50.5715 55.0358 49.756 56.2971C48.9586 57.5764 48.5599 58.7386 48.5599 59.7836C48.5599 59.9998 48.5871 60.225 48.6415 60.4592C48.714 60.6935 48.8137 60.9007 48.9405 61.0809C49.0855 61.2791 49.2577 61.4413 49.4569 61.5674C49.6563 61.6935 49.8919 61.7565 50.1638 61.7565C50.7075 61.7565 51.396 61.5043 52.2297 60.9998C53.0633 60.5134 53.9603 59.8466 54.9208 58.9999C55.8813 58.171 56.8599 57.189 57.8566 56.0539C58.8533 54.9367 59.7775 53.7475 60.6293 52.4863C61.4811 51.2251 62.215 49.9278 62.8311 48.5944C63.4654 47.2791 63.9003 45.9908 64.1359 44.7296ZM61.5535 37.162C61.028 36.8557 60.4299 36.5854 59.7594 36.3511C59.107 36.1169 58.3549 35.9998 57.5032 35.9998C56.8327 35.9998 56.2437 36.1169 55.7363 36.3511C55.2289 36.5673 54.9752 36.8557 54.9752 37.216C54.9752 37.5223 55.1564 37.7836 55.5188 37.9998C55.8994 38.216 56.4974 38.3241 57.3129 38.3241C58.1284 38.3241 58.8805 38.216 59.5691 37.9998C60.276 37.7836 60.9374 37.5043 61.5535 37.162ZM112.33 13.7025C112.385 13.7205 112.457 13.7295 112.548 13.7295H113.2C114.614 13.7295 116.037 13.5403 117.468 13.162C118.9 12.7835 120.196 12.2611 121.355 11.5944C122.516 10.9097 123.458 10.0989 124.182 9.16201C124.908 8.20701 125.27 7.16196 125.27 6.02683C125.27 5.41422 125.134 4.87368 124.862 4.40521C124.59 3.91872 124.209 3.51332 123.72 3.18899C123.249 2.86467 122.67 2.62142 121.981 2.45926C121.31 2.27908 120.567 2.18899 119.751 2.18899C118.32 2.18899 116.924 2.36917 115.565 2.72953C114.206 3.0899 112.929 3.58538 111.733 4.21602C110.537 4.82863 109.44 5.55836 108.443 6.40521C107.447 7.23403 106.586 8.14395 105.861 9.13494C105.136 10.1079 104.575 11.1259 104.175 12.189C103.777 13.252 103.578 14.3151 103.578 15.3781C103.578 16.4412 103.777 17.4503 104.175 18.4052C105.426 18.4412 106.595 18.5313 107.682 18.6755C108.769 18.8196 109.712 19.0448 110.509 19.3512C111.307 19.6394 111.932 20.0178 112.385 20.4863C112.838 20.9548 113.065 21.5223 113.065 22.1889C113.065 22.9097 112.792 23.4593 112.249 23.8376C111.705 24.216 111.026 24.4053 110.211 24.4053C109.558 24.4053 108.888 24.2971 108.199 24.0809C107.511 23.8647 106.84 23.5674 106.187 23.189C105.553 22.7926 104.937 22.3241 104.339 21.7836C103.759 21.2251 103.233 20.6124 102.762 19.9457C100.751 20.1079 98.8841 20.5764 97.1627 21.3512C95.4586 22.1079 93.9816 23.0989 92.7316 24.3241C91.499 25.5313 90.53 26.9277 89.8228 28.5134C89.1164 30.0808 88.7624 31.7385 88.7624 33.4863C88.7624 34.9097 88.9981 36.198 89.4696 37.3512C89.9585 38.4863 90.6744 39.4593 91.6173 40.2701C92.5776 41.0809 93.7641 41.7025 95.1776 42.135C96.6094 42.5674 98.2587 42.7836 100.125 42.7836C102.191 42.7836 104.149 42.4683 105.997 41.8376C107.864 41.2251 109.585 40.4412 111.161 39.4862C112.738 38.5313 114.17 37.4863 115.457 36.3511C116.743 35.198 117.858 34.1079 118.8 33.0809C119.761 32.0539 120.531 31.1529 121.111 30.3782C121.691 29.5854 122.071 29.0719 122.252 28.8377L123.231 29.5944C122.814 30.1889 122.252 30.9728 121.546 31.9457C120.839 32.9007 119.978 33.9188 118.963 34.9998C117.966 36.0809 116.807 37.171 115.484 38.2701C114.179 39.3512 112.711 40.3331 111.08 41.216C109.468 42.0989 107.7 42.8106 105.78 43.3512C103.859 43.9097 101.783 44.189 99.5548 44.189C97.1079 44.189 94.9967 43.8827 93.2205 43.27C91.4451 42.6574 89.968 41.8286 88.7902 40.7835C87.6298 39.7566 86.7694 38.5674 86.2076 37.216C85.6459 35.8466 85.3649 34.4052 85.3649 32.8917C85.3649 31.8286 85.5008 30.7476 85.7727 29.6484C86.0445 28.5493 86.4613 27.4773 87.0231 26.4322C87.5846 25.3872 88.3101 24.3962 89.1973 23.4593C90.0855 22.5224 91.1371 21.6935 92.3506 20.9728C93.5649 20.2521 94.9602 19.6665 96.5372 19.2161C98.1134 18.7656 99.881 18.4953 101.838 18.4052C101.512 17.7565 101.258 17.0809 101.077 16.3782C100.895 15.6575 100.805 14.9187 100.805 14.162C100.805 12.7745 101.041 11.4683 101.512 10.2431C101.983 8.99976 102.626 7.86467 103.441 6.83764C104.276 5.7926 105.245 4.86467 106.35 4.05386C107.474 3.24305 108.67 2.55836 109.938 1.9998C111.207 1.42322 112.521 0.99079 113.88 0.702505C115.258 0.396198 116.616 0.243045 117.958 0.243045C119.335 0.243045 120.558 0.38719 121.628 0.675478C122.715 0.945748 123.63 1.33314 124.373 1.83764C125.116 2.34214 125.686 2.95476 126.086 3.67548C126.484 4.37818 126.683 5.15295 126.683 5.9998C126.683 6.93674 126.484 7.81962 126.086 8.64845C125.705 9.47725 125.179 10.234 124.509 10.9187C123.856 11.5854 123.086 12.189 122.198 12.7296C121.328 13.252 120.395 13.6935 119.398 14.0539C118.42 14.4142 117.405 14.6935 116.354 14.8917C115.303 15.0719 114.288 15.1619 113.309 15.1619C112.983 15.1619 112.72 15.1529 112.521 15.1349C112.322 15.1169 112.203 15.108 112.168 15.108L112.33 13.7025ZM111.624 22.135C111.624 21.7025 111.425 21.3512 111.026 21.0809C110.646 20.7926 110.138 20.5673 109.503 20.4053C108.888 20.243 108.18 20.1259 107.384 20.0539C106.604 19.9637 105.806 19.9097 104.991 19.8917C105.336 20.3962 105.716 20.8467 106.133 21.243C106.568 21.6214 107.012 21.9457 107.464 22.216C107.918 22.4863 108.371 22.6935 108.824 22.8376C109.296 22.9818 109.739 23.0538 110.156 23.0538C110.646 23.0538 111.007 22.9638 111.243 22.7836C111.497 22.6034 111.624 22.3872 111.624 22.135Z" fill="#3B3B3B"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_510_527">
                        <rect width="127" height="64" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                        </defs>
                        </svg></Link>
                        </div>
                    </div>

                    {emailSubmitted ? null : (
                    <div>
                        <h1 className='text-center font-semibold text-xl mt-2 text-[#3B3B3B]'>ENTER YOUR EMAIL</h1>
                        
                        <div className='mt-8'>
                            <label className='text-[#3B3B3B]'>YOUR EMAIL</label><br />
                            <input className='mt-1 border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' 
                            type='email' 
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        
                        <div className='mt-10'>
                            <button className=" border-y-2 border-r-2 border-2 border-[#3B3B3B] rounded-lg p-2  w-full h-10  bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]"
                            onClick={handleEmailSubmit} >NEXT STEP</button>
                        </div>
                    </div>
                    )}

                    {showPasswordFields && (
                    <div>
                        <h1 className='text-center font-semibold text-xl mt-2 text-[#3B3B3B]'>ENTER YOUR NEW PASSWORD</h1>
                        
                        <div className='mt-8'>
                            <label className='text-[#3B3B3B]'>NEW PASSWORD</label><br />
                            <input className='mt-1 border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' 
                            type='password' 
                            placeholder='Enter your new password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}/>
                        </div>
                        <div className='mt-5'>
                            <label className='text-[#3B3B3B]'>CONFIRM NEW PASSWORD</label><br />
                            <input className='mt-1 border border-[#B9B9B9] w-full rounded h-8 placeholder:pl-3 bg-[#F2EEE3]' 
                            type='password' 
                            placeholder='Confirm your new password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        
                        <div className='mt-10'>
                            <button className=" border-y-2 border-r-2 border-2 border-[#3B3B3B] rounded-lg p-2  w-full h-10  bg-[#3B3B3B] hover:bg-black text-[#FAF9F6]"
                            onClick={handlePasswordSubmit}>SAVE NEW PASSWORD</button>
                        </div>
                    </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ForgotPW;