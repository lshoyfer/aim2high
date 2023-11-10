export function LogoSvg({ id, className }) {
    return (
        // ngl im a bit confused why the aria-label with a dash isn't getting flagged by Next/React?
        <svg id={id} className={className} aria-label="Aim2High Logo" width="366" height="105" viewBox="0 0 366 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.24 81.4C33.3333 81.4 30.08 79.6933 28.48 76.28C25.7067 79.7467 22.1333 81.48 17.76 81.48C13.44 81.48 9.78667 80.0133 6.8 77.08C3.86667 74.1467 2.4 70.28 2.4 65.48C2.4 58.4933 4.45333 52.92 8.56 48.76C12.6667 44.6 17.8667 42.52 24.16 42.52C24.32 42.52 24.48 42.52 24.64 42.52C27.3067 42.52 29.76 42.9733 32 43.88C33.44 42.9733 35.1733 42.52 37.2 42.52C39.28 42.52 40.7733 42.7867 41.68 43.32C41.2 47.2667 40.6933 51.16 40.16 55C39.6267 58.7867 39.2533 61.48 39.04 63.08C38.56 66.7067 38.32 69.32 38.32 70.92C38.32 73.0533 39.1733 74.12 40.88 74.12C42.2133 74.12 43.6267 73.24 45.12 71.48C46.6133 69.6667 47.92 66.84 49.04 63C50.5867 64.3867 51.6533 65.9333 52.24 67.64C50.6933 72.7067 48.6133 76.28 46 78.36C43.3867 80.3867 40.8 81.4 38.24 81.4ZM25.36 48.76C21.9467 48.76 19.2267 50.0667 17.2 52.68C15.2267 55.24 14.0533 59.08 13.68 64.2C13.6267 64.68 13.6 65.1333 13.6 65.56C13.6 68.1733 14.2133 70.2533 15.44 71.8C16.72 73.3467 18.3467 74.12 20.32 74.12C23.68 74.12 26.2133 71.7467 27.92 67L29.84 49.72C28.2933 49.08 26.8 48.76 25.36 48.76ZM52.5481 22.12C53.7748 20.84 55.2681 20.2 57.0281 20.2C58.7881 20.2 60.2815 20.84 61.5081 22.12C62.7881 23.3467 63.4281 24.84 63.4281 26.6C63.4281 28.36 62.7881 29.8533 61.5081 31.08C60.2815 32.3067 58.7881 32.92 57.0281 32.92C55.2681 32.92 53.7748 32.3067 52.5481 31.08C51.3215 29.8533 50.7081 28.36 50.7081 26.6C50.7081 24.84 51.3215 23.3467 52.5481 22.12ZM49.2681 45.56C49.8015 44.6 50.8148 43.88 52.3081 43.4C53.8015 42.8667 55.2681 42.6 56.7081 42.6C58.2015 42.6 59.5081 42.7867 60.6281 43.16C58.5481 59.2133 57.5081 67.32 57.5081 67.48C57.2415 68.5467 57.1081 69.4533 57.1081 70.2C57.1081 70.8933 57.1615 71.5067 57.2681 72.04C57.4815 73.4267 58.4415 74.12 60.1481 74.12C61.9081 74.12 63.5081 73 64.9481 70.76C66.4415 68.4667 67.5615 65.88 68.3081 63C68.6815 63.2133 69.2681 63.8533 70.0681 64.92C70.8681 65.9867 71.3481 66.7867 71.5081 67.32C70.4415 71.5867 68.6281 75.0267 66.0681 77.64C63.5081 80.2533 60.4415 81.56 56.8681 81.56C53.2948 81.56 50.6281 80.68 48.8681 78.92C47.1615 77.16 46.3081 74.8933 46.3081 72.12C46.3081 71.5333 46.3348 70.92 46.3881 70.28L49.2681 45.56ZM87.5438 81L90.5838 54.44C90.5838 52.9467 90.2104 51.72 89.4638 50.76C88.7704 49.7467 87.5171 49.24 85.7038 49.24C83.8904 49.24 82.3971 50.12 81.2238 51.88C80.0504 53.5867 79.3038 55.4 78.9838 57.32C77.1171 70.6 76.0771 78.4933 75.8638 81H65.1438L69.5438 43.4C71.7838 42.8133 73.4904 42.52 74.6638 42.52C78.0238 42.52 79.8638 43.64 80.1838 45.88C82.7971 43.64 85.6504 42.52 88.7438 42.52C94.9304 42.52 98.8771 44.36 100.584 48.04C103.197 44.3067 106.93 42.44 111.784 42.44C115.357 42.44 118.184 43.3733 120.264 45.24C122.344 47.0533 123.384 49.3467 123.384 52.12C123.384 52.92 123.224 54.3333 122.904 56.36C121.677 64.36 121.064 69.0533 121.064 70.44C121.064 72.9467 121.89 74.2 123.544 74.2C124.93 74.2 126.397 73.2933 127.944 71.48C129.544 69.6133 130.824 66.76 131.784 62.92C133.597 64.84 134.69 66.36 135.064 67.48C132.29 76.76 127.384 81.4 120.344 81.4C117.037 81.4 114.584 80.3867 112.984 78.36C111.384 76.3333 110.584 74.2 110.584 71.96L112.504 54.28C112.504 52.84 112.13 51.64 111.384 50.68C110.637 49.72 109.437 49.24 107.784 49.24C106.184 49.24 104.77 49.8533 103.544 51.08C102.317 52.3067 101.464 53.88 100.984 55.8C99.3838 69.3467 98.3438 77.7467 97.8638 81H87.5438ZM172.241 62.92C172.561 64.2533 172.721 65.32 172.721 66.12C172.721 71.8267 171.494 75.8 169.041 78.04C166.641 80.28 163.387 81.4 159.281 81.4C156.347 81.4 152.881 80.92 148.881 79.96C144.881 78.9467 142.081 78.44 140.481 78.44C140.374 78.44 140.294 78.44 140.241 78.44C136.987 78.44 134.134 79.2933 131.681 81L128.721 73.96H128.641C129.921 72.3067 132.481 69.7733 136.321 66.36C140.161 62.8933 142.481 60.7867 143.281 60.04C144.134 59.24 145.307 58.2267 146.801 57C148.294 55.72 149.467 54.68 150.321 53.88C151.227 53.08 152.321 51.9867 153.601 50.6C154.881 49.16 155.894 47.8267 156.641 46.6C158.881 42.9733 160.001 39.6667 160.001 36.68C160.001 33.6933 159.227 31.4533 157.681 29.96C156.134 28.4667 154.374 27.6933 152.401 27.64C149.787 27.7467 147.814 28.52 146.481 29.96C145.147 31.4 144.454 32.92 144.401 34.52C144.347 36.12 144.454 37.32 144.721 38.12H133.841C133.361 33.64 134.427 29.8533 137.041 26.76C140.667 22.3333 145.921 20.12 152.801 20.12C158.561 20.12 163.254 21.56 166.881 24.44C170.507 27.32 172.321 31.4267 172.321 36.76C172.321 41.8267 170.107 46.8667 165.681 51.88C164.187 53.5333 163.094 54.68 162.401 55.32C157.174 60.1733 151.654 64.7333 145.841 69C146.854 69.16 149.094 69.5867 152.561 70.28C156.294 70.9733 158.667 71.32 159.681 71.32C161.867 71.32 163.521 70.6 164.641 69.16C165.814 67.72 166.747 65.64 167.441 62.92H172.241ZM200.418 71.88L202.338 54.2C202.338 52.76 201.964 51.56 201.218 50.6C200.471 49.64 199.271 49.16 197.618 49.16C195.964 49.16 194.551 49.8267 193.378 51.16C192.258 52.44 191.431 54.1467 190.898 56.28C190.524 59.32 189.964 63.7733 189.218 69.64C188.471 75.4533 187.991 79.24 187.778 81H177.138C180.978 48.3067 183.298 28.2267 184.098 20.76C185.218 20.3333 186.738 20.12 188.658 20.12C192.818 20.12 194.898 21.3467 194.898 23.8V24.28C193.991 32.6533 193.031 40.0133 192.018 46.36C194.844 43.8 198.044 42.52 201.618 42.52C205.191 42.52 208.018 43.4267 210.098 45.24C212.178 47.0533 213.218 49.3467 213.218 52.12C213.218 52.8667 213.058 54.2533 212.738 56.28C211.511 64.28 210.898 68.9733 210.898 70.36C210.898 72.8667 211.724 74.12 213.378 74.12C214.764 74.12 216.231 73.2133 217.778 71.4C219.378 69.5333 220.658 66.68 221.618 62.84C223.431 64.76 224.524 66.28 224.898 67.4C222.124 76.68 217.218 81.32 210.178 81.32C206.871 81.32 204.418 80.3067 202.818 78.28C201.218 76.2533 200.418 74.12 200.418 71.88ZM224.423 22.12C225.65 20.84 227.143 20.2 228.903 20.2C230.663 20.2 232.156 20.84 233.383 22.12C234.663 23.3467 235.303 24.84 235.303 26.6C235.303 28.36 234.663 29.8533 233.383 31.08C232.156 32.3067 230.663 32.92 228.903 32.92C227.143 32.92 225.65 32.3067 224.423 31.08C223.196 29.8533 222.583 28.36 222.583 26.6C222.583 24.84 223.196 23.3467 224.423 22.12ZM221.143 45.56C221.676 44.6 222.69 43.88 224.183 43.4C225.676 42.8667 227.143 42.6 228.583 42.6C230.076 42.6 231.383 42.7867 232.503 43.16C230.423 59.2133 229.383 67.32 229.383 67.48C229.116 68.5467 228.983 69.4533 228.983 70.2C228.983 70.8933 229.036 71.5067 229.143 72.04C229.356 73.4267 230.316 74.12 232.023 74.12C233.783 74.12 235.383 73 236.823 70.76C238.316 68.4667 239.436 65.88 240.183 63C240.556 63.2133 241.143 63.8533 241.943 64.92C242.743 65.9867 243.223 66.7867 243.383 67.32C242.316 71.5867 240.503 75.0267 237.943 77.64C235.383 80.2533 232.316 81.56 228.743 81.56C225.17 81.56 222.503 80.68 220.743 78.92C219.036 77.16 218.183 74.8933 218.183 72.12C218.183 71.5333 218.21 70.92 218.263 70.28L221.143 45.56ZM258.379 42.52C261.312 42.52 264.005 43 266.459 43.96C268.112 42.9467 269.845 42.44 271.659 42.44C273.472 42.44 274.912 42.68 275.979 43.16L273.099 65.72C277.045 62.68 280.032 59.9067 282.059 57.4L284.379 62.28C281.339 65.48 277.285 68.8933 272.219 72.52L270.059 89.24C269.472 94.2533 267.819 98.0933 265.099 100.76C262.432 103.48 258.965 104.84 254.699 104.84C252.245 104.84 249.845 104.04 247.499 102.44C245.045 100.733 243.819 97.9867 243.819 94.2C243.819 89.56 246.032 85.32 250.459 81.48C246.672 81.2133 243.419 79.64 240.699 76.76C237.979 73.88 236.619 70.12 236.619 65.48C236.619 58.4933 238.672 52.92 242.779 48.76C246.885 44.6 252.085 42.52 258.379 42.52ZM259.579 48.76C256.165 48.76 253.445 50.0667 251.419 52.68C249.445 55.24 248.272 59.08 247.899 64.2C247.845 64.68 247.819 65.1333 247.819 65.56C247.819 68.1733 248.432 70.2533 249.659 71.8C250.939 73.3467 252.565 74.12 254.539 74.12C257.899 74.12 260.432 71.7733 262.139 67.08L264.139 49.72C262.485 49.08 260.965 48.76 259.579 48.76ZM249.979 93C249.979 94.44 250.379 95.56 251.179 96.36C252.032 97.2133 252.992 97.64 254.059 97.64C257.045 97.64 258.779 95.7467 259.259 91.96L260.619 79.96C253.525 84.1733 249.979 88.52 249.979 93ZM301.277 71.88L303.197 54.2C303.197 52.76 302.824 51.56 302.077 50.6C301.33 49.64 300.13 49.16 298.477 49.16C296.824 49.16 295.41 49.8267 294.237 51.16C293.117 52.44 292.29 54.1467 291.757 56.28C291.384 59.32 290.824 63.7733 290.077 69.64C289.33 75.4533 288.85 79.24 288.637 81H277.997C281.837 48.3067 284.157 28.2267 284.957 20.76C286.077 20.3333 287.597 20.12 289.517 20.12C293.677 20.12 295.757 21.3467 295.757 23.8V24.28C294.85 32.6533 293.89 40.0133 292.877 46.36C295.704 43.8 298.904 42.52 302.477 42.52C306.05 42.52 308.877 43.4267 310.957 45.24C313.037 47.0533 314.077 49.3467 314.077 52.12C314.077 52.8667 313.917 54.2533 313.597 56.28C312.37 64.28 311.757 68.9733 311.757 70.36C311.757 72.8667 312.584 74.12 314.237 74.12C315.624 74.12 317.09 73.2133 318.637 71.4C320.237 69.5333 321.517 66.68 322.477 62.84C324.29 64.76 325.384 66.28 325.757 67.4C322.984 76.68 318.077 81.32 311.037 81.32C307.73 81.32 305.277 80.3067 303.677 78.28C302.077 76.2533 301.277 74.12 301.277 71.88Z" fill="#6CABEB" />
            <path d="M329.776 78C329.776 62.5 334.276 60.5 346.276 60.5C358.276 60.5 362.75 41.5 362.75 19.5" stroke="#5486B8" strokeWidth="5" strokeLinecap="round" />
            <path d="M316 70C317 59 319.5 45.5 333 45.5C346.5 45.5 346 42 346.5 25" stroke="#B5D1EE" strokeWidth="5" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M357 22C357 20.6193 355.881 19.5 354.5 19.5C353.119 19.5 352 20.6193 352 22C352 29.4989 351.622 35.0695 350.944 39.2067C350.262 43.3658 349.303 45.901 348.263 47.4658C347.286 48.9368 346.188 49.6319 344.896 50.0156C343.469 50.4395 341.766 50.5 339.5 50.5C334.766 50.5 329.888 51.4212 326.301 55.385C322.791 59.2628 321 65.5342 321 75C321 75.5129 321.154 75.9897 321.419 76.3865L321.387 76.3317C323.126 74.3609 325.767 69.3667 326.869 65.5787C326.97 65.128 327.077 64.6985 327.192 64.2892C327.196 64.2698 327.2 64.2504 327.204 64.2311C327.273 63.8876 327.338 63.6821 327.401 63.5927C328.095 61.4094 329 59.8531 330.008 58.74C332.19 56.3288 335.312 55.5 339.5 55.5C341.695 55.5 344.098 55.4685 346.32 54.8086C348.677 54.1086 350.771 52.7281 352.428 50.2321C354.024 47.8298 355.142 44.5065 355.878 40.0159C356.618 35.5034 357 29.633 357 22Z" fill="#6CABEB" />
        </svg>
    );
}