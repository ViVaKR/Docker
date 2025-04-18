import express from 'express';
import axios from 'axios';
import { publicIpv4 } from 'public-ip';
import cors from 'cors';

const app = express();
const port = 5130;

const ipinfoToken = 'b3d3b25b9d4ef7';

app.use(cors());

app.get('/api/ip/:ip?', async (req, res) => {
    try {
        const ip = req.params.ip || await publicIpv4();
        const response = await axios.get(`https://ipinfo.io/${ip}?token=${ipinfoToken}`);
        const data = response.data;
        res.json({
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country,
            location: data.loc,
            isp: data.org
        });

        // --> HTML 형식으로 응답
        // res.send(`
        //     <!DOCTYPE html>
        //     <html lang="en">
        //     <head>
        //         <meta charset="UTF-8">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         <title>Public IP Address</title>
        //         <style>
        //             body {
        //                 font-family: Arial, sans-serif;
        //                 display: flex;
        //                 justify-content: center;
        //                 align-items: center;
        //                 height: 100vh;
        //                 margin: 0;
        //                 background-color: #f0f0f0;
        //             }
        //             .container {
        //                 text-align: center;
        //                 background: white;
        //                 padding: 20px;
        //                 border-radius: 10px;
        //                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        //             }
        //             .ip {
        //                 font-size: 2em;
        //                 color: #333;
        //             }
        //             .info {
        //                 margin-top: 10px;
        //                 font-size: 1em;
        //                 color: #666;
        //             }
        //         </style>
        //     </head>
        //     <body>
        //         <div class="container">
        //             <h1>Your Public IP Address</h1>
        //             <p class="ip">${data.ip}</p>
        //             <div class="info">
        //                 <p>City: ${data.city}</p>
        //                 <p>Region: ${data.region}</p>
        //                 <p>Country: ${data.country}</p>
        //                 <p>Location: ${data.loc}</p>
        //                 <p>ISP: ${data.org}</p>
        //             </div>
        //         </div>
        //     </body>
        //     </html>
        // `);
    }

    catch (error) {
        res.status(500).json({ error: 'Failed to fetch IP information' });

        // --> HTML 형식으로 응답
        // res.send(`
        //     <!DOCTYPE html>
        //     <html lang="en">
        //     <head>
        //         <meta charset="UTF-8">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         <title>Public IP Address</title>
        //         <style>
        //             body {
        //                 font-family: Arial, sans-serif;
        //                 display: flex;
        //                 justify-content: center;
        //                 align-items: center;
        //                 height: 100vh;
        //                 margin: 0;
        //                 background-color: #f0f0f0;
        //             }
        //             .container {
        //                 text-align: center;
        //                 background: white;
        //                 padding: 20px;
        //                 border-radius: 10px;
        //                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        //             }
        //             .ip {
        //                 font-size: 2em;
        //                 color: #333;
        //             }
        //         </style>
        //     </head>
        //     <body>
        //         <div class="container">
        //             <h1>Your Public IP Address</h1>
        //             <p class="ip">0.0.0.0</p>
        //         </div>
        //     </body>
        //     </html>
        // `);
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});


/*
docker-compose up --build
네, 이제 `docker-compose up --build` 명령을 실행하여 Docker Compose를 사용하여 서비스를 시작할 수 있습니다. 이 명령은 Docker 이미지를 빌드하고 컨테이너를 시작합니다.

다음 명령을 실행하세요:

```sh
docker-compose up --build
```

이 명령은 다음 작업을 수행합니다:
1. Docker 이미지를 빌드합니다.
2. 컨테이너를 시작합니다.
3. 파일 변경 시 자동으로 재시작하도록 설정합니다.

이제 서버가 실행되면, Angular 애플리케이션에서
`http://localhost:5130/api/ip` 또는
`http://localhost:5130/api/ip/8.8.8.8`와 같은
엔드포인트를 호출하여 JSON 형식의 데이터를 받을 수 있습니다.

*/
