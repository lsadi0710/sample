// 실행할 때마다 그럴듯한 가상 서버 상태 정보 10줄을 출력합니다.

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pad = (s, n) => String(s).padEnd(n);

const hosts = ['api-11', 'api-02', 'web-01', 'web-02', 'db-master', 'db-replica', 'cache-01', 'worker-01', 'worker-02', 'gateway'];
const regions = ['ap-northeast-2', 'us-east-1', 'eu-west-1', 'ap-southeast-1'];
const statuses = ['RUNNING', 'RUNNING', 'RUNNING', 'DEGRADED', 'RESTARTING'];
const versions = ['v2.14.3', 'v2.14.4', 'v2.15.0', 'v2.15.1-rc1'];

const lines = hosts.map((host, i) => {
  const cpu = rand(3, 97);
  const mem = rand(20, 95);
  const uptimeDays = rand(0, 180);
  const uptimeHours = rand(0, 23);
  const latency = (Math.random() * 120 + 5).toFixed(1);
  return [
    pad(String(i + 1).padStart(2, '0'), 3),
    pad(host, 11),
    pad(pick(regions), 15),
    pad(pick(statuses), 11),
    pad(pick(versions), 12),
    pad(`CPU ${String(cpu).padStart(2)}%`, 9),
    pad(`MEM ${String(mem).padStart(2)}%`, 9),
    pad(`${latency}ms`, 8),
    `up ${uptimeDays}d ${uptimeHours}h`,
  ].join(' ');
});

console.log(lines.join('\n'));
