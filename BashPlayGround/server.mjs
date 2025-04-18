import express from 'express';
import { exec } from 'child_process';
import cors from 'cors';
import bodyParser from 'body-parser';

// runner.kimbumjun.com

const app = express(); // Express 앱 생성
const port = 8293; // 포트 번호

app.use(cors()); // CORS 미들웨어 설정

// JSON 파싱 미들웨어 설정
app.use(bodyParser.json());

// 요청 횟수를 추적하기 위한 객체
const requestCounts = {}; // 클라이언트 IP 주소를 키로 사용
const MAX_REQUESTS = 120; // 최대 요청 횟수
const TIME_WINDOW = 60 * 60 * 1000; // 시간 창 (밀리초 단위, 여기서는 1시간)

// 요청 횟수를 제한하는 미들웨어
app.use((req, res, next) => {
    const clientIp = req.ip; // 클라이언트 IP 주소

    if (!requestCounts[clientIp]) { // 클라이언트 IP 주소가 없으면 초기화
        requestCounts[clientIp] = { count: 1, firstRequestTime: Date.now() }; // 요청 횟수 1로 초기화
    } else { // 클라이언트 IP 주소가 있으면 요청 횟수 증가
        const currentTime = Date.now(); // 현재 시간
        const timeElapsed = currentTime - requestCounts[clientIp].firstRequestTime; // 이전 요청 시간과의 차이

        if (timeElapsed < TIME_WINDOW) { // 시간 창 내에 있으면 요청 횟수 증가
            requestCounts[clientIp].count += 1; // 요청 횟수 증가
        } else { // 시간 창을 벗어나면 요청 횟수 초기화
            // 시간 창이 지나면 요청 횟수 초기화
            requestCounts[clientIp] = { count: 1, firstRequestTime: currentTime };
        }
    }

    if (requestCounts[clientIp].count > MAX_REQUESTS) { // 요청 횟수가 제한을 초과하면 429 Too Many Requests 응답
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    next(); // 다음 미들웨어로 이동
});

app.post('/api/run-script', (req, res) => { // POST /api/run-script 라우트

    const script = req.body.script; // 요청 본문에서 스크립트 추출
    if (!script) { // 스크립트가 없으면 400 Bad Request 응답
        return res.status(400).send('Script is required');
    }

    exec(script, (error, stdout, stderr) => { // 스크립트 실행
        if (error) { // 에러가 발생하면 500 Internal Server Error 응답
            console.error(`Error executing script: ${error.message}`); // 에러 메시지 출력
            return res.status(500).json({ error: 'Failed to execute script' }); // 500 Internal Server Error 응답
        }

        if (stderr) { // 표준 오류 출력이 있으면 500 Internal Server Error 응답
            console.error(`stderr: ${stderr}`); // 표준 오류 출력
            return res.status(500).json({ error: stderr }); // 500 Internal Server Error 응답
        }

        res.json({ output: stdout }); // 표준 출력을 JSON 형식으로 응답
    });
});

app.listen(port, '0.0.0.0', () => { // 서버 실행
    console.log(`Server running at http://0.0.0.0:${port}`);
});
