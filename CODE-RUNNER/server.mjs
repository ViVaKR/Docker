import express from 'express';
import { exec } from 'child_process';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8293;

app.use(cors());
app.use(bodyParser.json());

const requestCounts = {};
const MAX_REQUESTS = 120;
const TIME_WINDOW = 60 * 60 * 1000;

app.use((req, res, next) => {
    const clientIp = req.ip;
    if (!requestCounts[clientIp]) {
        requestCounts[clientIp] = { count: 1, firstRequestTime: Date.now() };
    } else {
        const currentTime = Date.now();
        const timeElapsed = currentTime - requestCounts[clientIp].firstRequestTime;
        if (timeElapsed < TIME_WINDOW) {
            requestCounts[clientIp].count += 1;
        } else {
            requestCounts[clientIp] = { count: 1, firstRequestTime: currentTime };
        }
    }

    if (requestCounts[clientIp].count > MAX_REQUESTS) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
    next();
});

app.post('/api/run-script', (req, res) => {
    const script = req.body.script;
    if (!script) {
        return res.status(400).send('Script is required');
    }

    exec(script, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
            return res.status(500).json({ error: 'Failed to execute script' });
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).json({ error: stderr });
        }
        res.json({ output: stdout });
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});
