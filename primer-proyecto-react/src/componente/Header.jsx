import React from 'react'
import '../componentecss/header.css'

export const Header = () => {
  return (
<header className='header'>
    <span className='header-span'>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACSElEQVR4nO1aS04CQRB9bPAAcgIS5hhE3LJUz6Bb3RhdkbhxATdQL2LYuYGFJ1AIR/CXsJikTZOGtARmqsbunmmol9Smeqh6/ezueeMMIBAIBAIyagDaAC5NtE1uL/g0AYwBqLUYm7HQCMqnAWC2odkyZuaaUAjOZ2AVnwN4MDG38n2XDavGZ2oVPrHyp1Z+4rJh1fikVuG6la9beX1NKATno6zgjPlCcD5KBICsALUvW6C25q46EW+BYwBXHJfY3OKuYhWA5RIbOe5qFwTIdIkDgruKTQCWS5wS3FVsArBcYkpwV7EJwHKJquAkqywAZwwiAGQFQLYANu+Pd5N/4+4rT/DCVWUMtoydbHGLeoIXrqrgROzfXQcKF1xXSIwxcFG0jCjKVW+VxSq5dVg0JgF03Ohkj1D0AsArgHOGAC8A7j1FFtfEPAInBK49qgA/Jv/NEGBR3BNc3AUyBbA99EFOw6oJQJ1HpgD6yWmJs4ICPJd0F6DOYyXApkNQPzs/Anhi/j+gCocgdR6rQzAx+8VFw6oJkBV6zn/MkouGvk59zl2g6DzgQoBQEAEgKwCyBSBnAEo5BOsMl+gLVD4sAVLiDzku0ReofLZFmvdiRGUExyX6ApXPtpjkvRpTBaMMAYpE/z8vR1XkAug5Hm4r3AQw2mEBRpSPKGtrH0gcRSxAx9VntCpSAeJtmAMRALICEHRFfhKafbhsWDU+Q0JDfU0oBOfTJTTU14RCKXzuMprpsdAohU/XLK0vE8PAf/mq8xEIBAIBYsIvA9mworpqujYAAAAASUVORK5CYII="/>
    </span>
    <nav className='header-nav'>
    <ul className='header-nav-ul'>
            <il><a href="#">calculadora</a></il>
            <il><a href="#">rutinas</a></il>
            <il><a href="#">resetas</a></il>
        </ul>
    </nav>
    <div className="header-div-redsocial">
        <a href="https://twitter.com/" target="_blank">                                 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,7v10	c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V7c0-2.209,1.791-4,4-4h10C19.209,3,21,4.791,21,7z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
            </svg>
        </a>
        <a href="https://instagram.com/" target="_blank">
            <svg alt="Facebook" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64">
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
            </svg>
        </a>         
        <a href="https://facebook.com/" target="_blank">
        <svg alt="Facebook" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
        </a>
    </div>      
</header>  
    )
}
